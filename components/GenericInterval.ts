// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module GenericInterval */
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
import {boolean, string} from 'clientnode/property-types'
import Interval from 'react-input-material/components/Interval'
import wrapAsWebComponent from 'web-component-wrapper'
import {WebComponentAPI} from 'web-component-wrapper/type'
// endregion
export const GenericInterval:WebComponentAPI = wrapAsWebComponent(
    Interval,
    'GenericInterval',
    {
        eventToPropertyMapping: {onChange: true},
        internalProperties: {enforceUncontrolled: true},
        propertiesToReflectAsAttributes: {
            dirty: boolean,
            focused: boolean,
            invalid: boolean,
            invalidRequired: boolean,
            name: string,
            pristine: boolean,
            touched: boolean,
            untouched: boolean,
            valid: boolean,
            visited: boolean
        }
    }
)
export default GenericInterval
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
