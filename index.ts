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
import {Component} from 'react'

import ReactWeb from './web/ReactWeb'
import {PropertyTypes, WebComponentAPI} from './types'
// endregion
export const components:Mapping<WebComponentAPI> = {}
/*
    Import all react components and extract a dynamically created web-component
    class wrapper with corresponding web component register method. A derived
    default web component name is provided.
*/
const modules:Function =
    require.context('./components/', true, /[a-zA-Z0-9]\.tsx$/)
for (const key of modules.keys()) {
    const component:typeof Component = modules(key).default
    // Determine class / function name.
    const name:string =
        component._name ||
        // NOTE: Not minifyable save: "component.name ||"
        /*
            NOTE: There exists babel plugins which reflects component name and
            member variables under this property. Try to respect these.
        */
        component.___types?.name?.name ||
        key.replace(/^(.*\/+)?([^\/]+)\.tsx$/, '$2')
    const propertyTypes:PropertyTypes = component.propTypes || {}
    const allPropertyNames:Array<string> = Object.keys(propertyTypes)
    components[name] = {
        component: class extends ReactWeb {
            static readonly observedAttributes:Array<string> =
                allPropertyNames.map((name:string):string =>
                    Tools.stringCamelCaseToDelimited(name)
                )

            readonly output:Output = component.output || {}
            readonly self:typeof ReactWeb = components[name].component

            _content:typeof Component = component
            _propertiesToReflectAsAttributes:Mapping<boolean> =
                component.propertiesToReflectAsAttributes || {}
            _propertyTypes:PropertyTypes = propertyTypes
        },
        register: (
            tagName:string = Tools.stringCamelCaseToDelimited(name)
        ):void => customElements.define(tagName, components[name].component)
    }
    for (const propertyName of allPropertyNames)
        Object.defineProperty(
            components[name].component.prototype,
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
}
export default components
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
