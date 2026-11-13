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
import {afterEach, describe, expect, test} from '@jest/globals'

import TextInput from '../components/TextInput'
import {ensureRegistered, mount, type, unmountAll, waitFor} from './helper'
// endregion
describe('TextInput', () => {
    afterEach(unmountAll)

    test('register', () => {
        expect(TextInput).toBeDefined()
        expect(TextInput.component).toBeDefined()
        expect(TextInput.register).toBeDefined()

        const tagName = ensureRegistered(TextInput)

        expect(tagName).toBe('text-input')
        expect(customElements.get(tagName)).toBe(TextInput.component)
        expect(document.createElement(tagName))
            .toBeInstanceOf(TextInput.component)
    })
    test('reflects state as attributes', async () => {
        const domNode = await mount(TextInput, {name: 'test'})

        expect(domNode.querySelector('input')).not.toBeNull()
        for (const name of ['pristine', 'untouched', 'valid'])
            expect(domNode.hasAttribute(name)).toBe(true)
        expect(domNode.hasAttribute('invalid')).toBe(false)

        const requiredDomNode =
            await mount(TextInput, {name: 'test', required: ''})

        expect(await waitFor(() =>
            requiredDomNode.hasAttribute('invalid-required')
        )).toBe(true)
        expect(requiredDomNode.hasAttribute('invalid')).toBe(true)
        expect(requiredDomNode.hasAttribute('valid')).toBe(false)
    })
    test('updates value and dispatches change on user input', async () => {
        const domNode = await mount(TextInput, {name: 'test'})
        const values: Array<unknown> = []
        domNode.addEventListener('change', (event: Event) => {
            const {parameters} = (event as CustomEvent<{
                parameters: [{value: unknown}]
            }>).detail
            values.push(parameters[0].value)
        })

        type(domNode.querySelector('input') as HTMLInputElement, 'typed')

        expect(await waitFor(() => values.length > 0)).toBe(true)
        expect(values).toContain('typed')
        expect((domNode as unknown as {value: unknown}).value).toBe('typed')
        expect(await waitFor(() => domNode.hasAttribute('dirty')))
            .toBe(true)
        expect(domNode.hasAttribute('pristine')).toBe(false)
    })
    test('evaluates root event bindings', async () => {
        /*
            NOTE: Regression test: Root bindings got lost since re-rendering
            removes all event listeners registered on the host (fixed in
            "web-component-wrapper" 0.0.623).
        */
        const domNode = await mount(
            TextInput,
            {
                'bind-on-change':
                    'self.dataset.changes = ' +
                    'Number(self.dataset.changes || 0) + 1',
                name: 'test'
            }
        )

        type(domNode.querySelector('input') as HTMLInputElement, 'typed')

        expect(await waitFor(() => Boolean(domNode.dataset.changes)))
            .toBe(true)
        expect(Number(domNode.dataset.changes)).toBeGreaterThan(0)
    })
})
