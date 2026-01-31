// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module CheckboxInput */
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
import Checkbox from 'react-input-material/dist/components/Checkbox'
import wrapAsWebComponent from 'web-component-wrapper'
import {WebComponentAPI} from 'web-component-wrapper/type'
// endregion
export const CheckboxInput: WebComponentAPI<typeof Checkbox> =
    wrapAsWebComponent<typeof Checkbox>(
        Checkbox,
        'CheckboxInput',
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
            },
            /*
                NOTE: When this configuration is enabled the following error
                occurs:
                installHook.js:1 Warning: Attempted to synchronously unmount a
                root while React was already rendering. React cannot finish
                unmounting the root until the current render has completed,
                which may lead to a race condition.
            */
            unmountOnDisconnect: false
        }
    )

export default CheckboxInput
