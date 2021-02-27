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
import {boolean, func, number} from 'clientnode/property-types'
import {Slider} from '@rmwc/slider'
import wrapAsWebComponent from 'web-component-wrapper'
import {WebComponentAPI} from 'web-component-wrapper/type'
// endregion
export const SliderInput:WebComponentAPI = wrapAsWebComponent(
    Slider,
    'SliderInput',
    {
        attachWebComponentAdapterIfNotExists: false,
        propTypes: {
            disabled: boolean,
            discrete: boolean,
            displayMarkers: boolean,
            max: number,
            min: number,
            step: number,
            onChange: func,
            value: number
        }
    }
)
export default SliderInput
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
