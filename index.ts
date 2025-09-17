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
import {Mapping} from 'clientnode'
import ReactWeb from 'web-component-wrapper/ReactWeb'
import {WebComponentAPI} from 'web-component-wrapper/type'
// endregion
export {CircularSpinner} from './components/CircularSpinner'
export {FileInput} from './components/FileInput'
export {GenericAnimate} from './components/GenericAnimate'
export {TextInput} from './components/TextInput'
export {GenericInputs} from './components/GenericInputs'
export {IntervalInput} from './components/IntervalInput'
export {RequireableCheckbox} from './components/RequireableCheckbox'
export {SliderInput} from './components/SliderInput'
export {TabBar} from './components/TabBar'
export {TabItem} from './components/TabItem'

export const components: Mapping<WebComponentAPI<typeof ReactWeb>> = {}
/*
    Import all react components and extract a dynamically created web-component
    class wrapper with corresponding web component register method. A derived
    default web component name is provided.
*/
const componentRetriever = require.context('./components', true, /^.+\.ts$/)
componentRetriever.keys().map((name: string) => {
    if (!name.endsWith('.d.ts')) {
        const componentAPI: WebComponentAPI<typeof ReactWeb> = (
            componentRetriever(name) as
                {default: WebComponentAPI<typeof ReactWeb>}
        ).default

        components[componentAPI.component._name] = componentAPI
    }
})

export const register = () =>
    Object.values(components).map(
        (component: WebComponentAPI<typeof ReactWeb>) => {
            component.register()
        }
    )

export default components
