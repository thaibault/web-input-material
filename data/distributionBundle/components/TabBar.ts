// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module TabBar */
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
import {func, number, object, string} from 'clientnode/property-types'
import {
    createWrapConfigurationsComponent
} from 'react-input-material/components/WrapConfigurations'
import wrapAsWebComponent from 'web-component-wrapper'
import {WebComponentAPI} from 'web-component-wrapper/type'
import {TabBar as ReactTabBar} from '@rmwc/tabs'
// endregion
export const TabBar:WebComponentAPI = wrapAsWebComponent<typeof ReactTabBar>(
    createWrapConfigurationsComponent<typeof ReactTabBar>(ReactTabBar) as
        typeof ReactTabBar,
    'TabBar',
    {propTypes: {
        activeTabIndex: number,
        onActivate: func,
        theme: string,
        themeConfiguration: object
    }}
)
export default TabBar
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
