// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module TextInput */
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
import {boolean, string} from 'clientnode/dist/property-types'
import ReactTextInput from 'react-input-material/dist/components/TextInput'
import wrapAsWebComponent from 'web-component-wrapper'
import {WebComponentAPI} from 'web-component-wrapper/type'
// endregion
export const TextInput:WebComponentAPI<typeof ReactTextInput> =
    wrapAsWebComponent<typeof ReactTextInput>(
        ReactTextInput,
        'TextInput',
        {
            eventToPropertyMapping: {onChange: true},
            internalProperties: {enforceUncontrolled: true},
            propertiesToReflectAsAttributes: {
                dirty: boolean,
                focused: boolean,
                invalid: boolean,
                invalidMaximum: boolean,
                invalidMaximumLength: boolean,
                invalidMinimum: boolean,
                invalidMinimumLength: boolean,
                invalidPattern: boolean,
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

export default TextInput
