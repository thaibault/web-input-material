// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
'use strict'
/* !
    region header
    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/
// region imports
import {expect, test} from '@jest/globals'
import type {EventMapper} from 'web-component-wrapper/type'

import {TabBar} from '../components/TabBar'
// endregion
test('TabBar', async () => {
    expect(TabBar).toBeDefined()
    expect(TabBar.component).toBeDefined()
    expect(TabBar.register).toBeDefined()

    const onActivate =
        TabBar.component.eventToPropertyMapping?.onActivate as EventMapper
    expect(onActivate).toBeDefined()

    await expect(onActivate()).resolves.toBeNull()
})
