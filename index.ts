// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module react-input-material */
'use strict'
/* !
    region header
    [Project page](https://torben.website/react-material-input)

    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stand under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/
// region imports
import Tools from 'clientnode'
import PropertyTypes from 'clientnode/property-types'
import {Mapping, ValueOf} from 'clientnode/type'
import ReactWeb from 'web-component-wrapper/React'
import {Output, WebComponentAPI} from 'web-component-wrapper/type'

import {ComponentType} from './type'
// endregion
export const wrapAsWebComponent = (
    component:ComponentType, nameHint:string = 'NoName'
):WebComponentAPI => {
    // Determine class / function name.
    const name:string =
        component._name ||
        // NOTE: Not minifyable save: "component.name ||"
        /*
            NOTE: There exists babel plugins which reflects component name and
            member variables under this property. Try to respect these.
        */
        component.___types?.name?.name ||
        nameHint.replace(/^(.*\/+)?([^\/]+)\.tsx$/, '$2')
    const propertyTypes:Mapping<ValueOf<typeof PropertyTypes>> =
        component.propTypes || {}
    const allPropertyNames:Array<string> = Object.keys(propertyTypes)
    const webComponentAPI:WebComponentAPI = {
        component: class extends ReactWeb {
            static content:ComponentType = component
            static _name:string = name
            static readonly observedAttributes:Array<string> =
                allPropertyNames.map((name:string):string =>
                    Tools.stringCamelCaseToDelimited(name)
                )

            readonly output:Output = component.output || {}
            readonly self:typeof ReactWeb = webComponentAPI.component

            _propertiesToReflectAsAttributes:Map<string, boolean> =
                component.propertiesToReflectAsAttributes ||
                new Map<string, boolean>()
            _propertyTypes:Mapping<ValueOf<typeof PropertyTypes>> =
                propertyTypes
        },
        register: (
            tagName:string = Tools.stringCamelCaseToDelimited(name)
        ):void => customElements.define(tagName, webComponentAPI.component)
    }
    for (const propertyName of allPropertyNames)
        Object.defineProperty(
            webComponentAPI.component.prototype,
            propertyName,
            {
                get: function():any {
                    return this.getPropertyValue(propertyName)
                },
                set: function(value:any):void {
                    this.setPropertyValue(propertyName, value)
                }
            }
        )
    return webComponentAPI
}
export const components:Mapping<WebComponentAPI> = {}
/*
    Import all react components and extract a dynamically created web-component
    class wrapper with corresponding web component register method. A derived
    default web component name is provided.
*/
const componentRetriever:Mapping<(name:string) => Mapping<ComponentType>> =
    require.context('./components', true, /^.+\.ts$/)
componentRetriever.keys().map((name:string):void => {
    const componentAPI:WebComponentAPI = componentRetriever(name).default
    components[componentAPI.component._name] = componentAPI
})
export default components
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
