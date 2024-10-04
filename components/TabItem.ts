// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module TabItem */
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
import {boolean, object, string} from 'clientnode/dist/property-types'
import {
    createWrapConfigurationsComponent
} from 'react-input-material/dist/components/WrapConfigurations'
import wrapAsWebComponent from 'web-component-wrapper'
import {WebComponentAPI} from 'web-component-wrapper/type'
import {Tab} from '@rmwc/tabs'
// endregion
export const TabItem: WebComponentAPI<typeof Tab> =
    wrapAsWebComponent<typeof Tab>(
        createWrapConfigurationsComponent<typeof Tab>(Tab) as typeof Tab,
        'TabItem',
        {propTypes: {
            stacked: boolean, theme: string, themeConfiguration: object
        }}
    )

export default TabItem
