// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module CircularSpinner */
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
import {
    number, object, oneOfType, oneOf, string
} from 'clientnode/property-types'
import {
    createWrapConfigurationsComponent
} from 'react-input-material/components/WrapConfigurations'
import wrapAsWebComponent from 'web-component-wrapper'
import {WebComponentAPI} from 'web-component-wrapper/type'
import {CircularProgress} from '@rmwc/circular-progress'
// endregion
export const CircularSpinner:WebComponentAPI = wrapAsWebComponent<
    typeof CircularProgress
>(
    createWrapConfigurationsComponent<typeof CircularProgress>(
        CircularProgress, {withReference: false}
    ) as typeof CircularProgress,
    'CircularSpinner',
    {propTypes: {
        size: oneOfType(
            [oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge']), number]
        ),
        theme: string,
        themeConfiguration: object
    }}
)
export default CircularSpinner
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
