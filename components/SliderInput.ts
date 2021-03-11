// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module Slider */
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
import {boolean, func, number, object, string} from 'clientnode/property-types'
import {
    createWrapConfigurationsComponent
} from 'react-input-material/components/WrapConfigurations'
import wrapAsWebComponent from 'web-component-wrapper'
import ReactWrapper from 'web-component-wrapper/React'
import {WebComponentAPI} from 'web-component-wrapper/type'
import {Slider} from '@rmwc/slider'
// endregion
export const SliderInput:WebComponentAPI = wrapAsWebComponent(
    createWrapConfigurationsComponent(Slider),
    'SliderInput',
    {
        eventToPropertyMapping: {
            onChange: (event:Event, self:ReactWrapper):{
                disabled:boolean
                discrete:boolean
                displayMarkers:boolean
                max:number
                min:number
                step:number
                value:number
            } => ({...self.externalProperties, value: event.detail.value}),
            onInput: (event:Event):[{value:number}, {value:number}] =>
                [{value: event.detail.value}, {value: event.detail.value}]
        },
        propTypes: {
            disabled: boolean,
            discrete: boolean,
            displayMarkers: boolean,
            max: number,
            min: number,
            step: number,
            theme: string,
            themeConfiguration: object,
            onChange: func,
            onInput: func,
            value: number
        }
    }
)
export default SliderInput
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
