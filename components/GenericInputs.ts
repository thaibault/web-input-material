// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module GenericInputs */
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
import ReactInputs from 'react-input-material/components/Inputs'
import wrapAsWebComponent from 'web-component-wrapper'
import {WebComponentAPI} from 'web-component-wrapper/type'
// endregion
export const GenericInputs:WebComponentAPI<typeof ReactInputs> =
    wrapAsWebComponent<typeof ReactInputs>(
        ReactInputs,
        'GenericInputs',
        {
            eventToPropertyMapping: {onChange: true},
            internalProperties: {enforceUncontrolled: true},
            propertiesToReflectAsAttributes: {
                dirty: boolean,
                focused: boolean,
                invalid: boolean,
                /*
                invalidMaximumLength: boolean,
                invalidMinimumLength: boolean,
                */
                name: string,
                pristine: boolean,
                touched: boolean,
                untouched: boolean,
                valid: boolean,
                visited: boolean
            }
        }
    )

export default GenericInputs
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
