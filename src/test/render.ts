// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
'use strict'
/* !
    region header
    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 4.0 international license.
    See https://creativecommons.org/licenses/by/4.0/deed.de
    endregion
*/
// region imports
import {afterEach, describe, expect, test} from '@jest/globals'

import components from '../index'
import {mount, unmountAll} from './helper'
// endregion
describe('render', () => {
    afterEach(unmountAll)

    test.each(Object.keys(components))('%s', async (name: string) => {
        const domNode = await mount(components[name], {name: 'test'})

        expect(domNode.isConnected).toBe(true)
        expect(domNode.childElementCount).toBeGreaterThan(0)
    })
})
