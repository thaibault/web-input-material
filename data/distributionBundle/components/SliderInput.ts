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
import {Mapping} from 'clientnode/type'
import {
    createWrapConfigurationsComponent
} from 'react-input-material/dist/components/WrapConfigurations'
import {GenericEvent} from 'react-generic-tools/type'
import wrapAsWebComponent from 'web-component-wrapper'
import ReactWeb from 'web-component-wrapper/ReactWeb'
import {WebComponentAPI} from 'web-component-wrapper/type'
import {Slider} from '@rmwc/slider'
// endregion
export interface Properties extends Mapping<unknown> {
    disabled:boolean
    discrete:boolean
    displayMarkers:boolean
    max:number
    min:number
    step:number
    value:number
}
/*
    NOTE: Resulting component type is dynamically created from derived wrapped
    react component.
*/
export const SliderInput:WebComponentAPI<
    typeof Slider, Properties, Properties
> = wrapAsWebComponent<
    typeof Slider,
    Properties,
    Properties,
    [GenericEvent, ReactWeb]
>(
    createWrapConfigurationsComponent<typeof Slider>(Slider) as typeof Slider,
    'SliderInput',
    {
        eventToPropertyMapping: {
            onChange: (event:GenericEvent, self:ReactWeb):Properties => ({
                ...self.externalProperties as Properties,
                value: (event.detail as {value:number}).value
            }),
            onInput: (event:GenericEvent):[{value:number}, {value:number}] =>
                [
                    {value: (event.detail as {value:number}).value},
                    {value: (event.detail as {value:number}).value}
                ]
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
