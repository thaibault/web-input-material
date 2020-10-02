// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module Checkbox */
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
import {boolean, func, string} from 'clientnode/property-types'
import {Checkbox as ReactCheckbox} from '@rmwc/checkbox'
import '@rmwc/checkbox/styles'
import wrapAsWebComponent from 'web-component-wrapper'
import {WebComponentAPI} from 'web-component-wrapper/type'
// endregion
export const Checkbox:WebComponentAPI = wrapAsWebComponent(
    ReactCheckbox,
    'MaterialCheckbox',
    {
        aliases: {
            checked: 'value'
        },
        propTypes: {
            checked: boolean,
            disabled: boolean,
            id: string,
            indeterminate: boolean,
            label: string,
            name: string,
            onChange: func
        }
    }
)
export default Checkbox
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
