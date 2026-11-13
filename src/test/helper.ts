// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
'use strict'
/* !
    region header
    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 4.0 international license.
    See https://creativecommons.org/licenses/by/4.0/deed.de
    endregion
*/
// region imports
import type {Mapping} from 'clientnode'
import type {WebComponentAPI} from 'web-component-wrapper/type'

import {camelCaseToDelimited, timeout} from 'clientnode'
import ReactWeb from 'web-component-wrapper/ReactWeb'
// endregion
export const mountedNodes: Array<HTMLElement> = []
/**
 * Registers given component unless its tag name is already taken. Custom
 * elements can not be undefined again so all tests sharing one registry have
 * to tolerate previous registrations.
 * @param api - Web component api to register.
 * @returns Registered tag name.
 */
export const ensureRegistered = <Type extends typeof ReactWeb>(
    api: WebComponentAPI<Type>
): string => {
    const tagName = camelCaseToDelimited(api.component._name)

    if (!customElements.get(tagName))
        api.register(tagName)

    return tagName
}
/**
 * Polls given condition until it holds or given number of ticks elapsed.
 * @param condition - Condition to check.
 * @param maximumNumberOfTicks - Number of event loop ticks to wait at most.
 * @returns A promise resolving to the last condition's result.
 */
export const waitFor = async (
    condition: () => boolean, maximumNumberOfTicks = 100
): Promise<boolean> => {
    for (let tick = 0; tick < maximumNumberOfTicks; tick++) {
        if (condition())
            return true

        await timeout()
    }

    return condition()
}
/**
 * Creates, attributes and connects an element of given component and waits
 * until it has rendered its content.
 * @param api - Web component api of component to mount.
 * @param attributes - Attributes to set before connecting.
 * @returns A promise resolving to the connected element.
 */
export const mount = async <Type extends typeof ReactWeb>(
    api: WebComponentAPI<Type>, attributes: Mapping = {}
): Promise<HTMLElement> => {
    const domNode = document.createElement(ensureRegistered(api))

    for (const [name, value] of Object.entries(attributes))
        domNode.setAttribute(name, value)

    document.body.appendChild(domNode)
    mountedNodes.push(domNode)

    await waitFor(() => domNode.childElementCount > 0)

    return domNode
}
/// Removes all elements connected via "mount".
export const unmountAll = (): void => {
    for (const domNode of mountedNodes.splice(0))
        domNode.remove()
}
/**
 * Simulates a user typing given value into given input. React tracks values
 * set via the instance setter so the prototype one has to be used.
 * @param input - Input to type into.
 * @param value - Value to type.
 */
export const type = (input: HTMLInputElement, value: string): void => {
    Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')
        ?.set?.call(input, value)
    input.dispatchEvent(new Event('input', {bubbles: true}))
}
