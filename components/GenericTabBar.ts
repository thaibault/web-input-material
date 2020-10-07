// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module GenericTabBar */
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
import {func, number} from 'clientnode/property-types'
import {TabBar} from '@rmwc/tabs'
import '@rmwc/tabs/styles'
import wrapAsWebComponent from 'web-component-wrapper'
import {WebComponentAPI} from 'web-component-wrapper/type'
// endregion
export const GenericTabBar:WebComponentAPI = wrapAsWebComponent(
    TabBar,
    'GenericTabBar',
    {propTypes: {activeTabIndex: number, onActivate: func}}
)
export default GenericTabBar
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
