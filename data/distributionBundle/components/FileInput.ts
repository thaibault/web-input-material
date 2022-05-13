// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module FileInput */
'use strict'
/* !
    region header
    [Project page ](https://torben.website/react-material-input)

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
import ReactFileInput from 'react-input-material/components/FileInput'
import wrapAsWebComponent from 'web-component-wrapper'
import {ComponentType, WebComponentAPI} from 'web-component-wrapper/type'
// endregion
export const FileInput:WebComponentAPI = wrapAsWebComponent(
    ReactFileInput as ComponentType,
    'FileInput',
    {
        eventToPropertyMapping: {onChange: true},
        internalProperties: {enforceUncontrolled: true},
        propertiesToReflectAsAttributes: {
            dirty: boolean,
            focused: boolean,
            invalid: boolean,
            invalidMaximumSize: boolean,
            invalidMinimumSize: boolean,
            invalidMimeTypePattern: boolean,
            invalidNamePattern: boolean,
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
export default FileInput
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
