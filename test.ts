// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
'use strict'
/* !
    region header
    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stand under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/
// region imports
import {describe, expect, test} from '@jest/globals'

import GenericInput from './components/GenericInput'
import components from './index'
// endregion
describe('web-input-material', ():void => {
    test('components', ():void => {
        expect(Object.keys(components).length).toBeGreaterThan(1)
    })

    test('GenericInput', ():void => {
        expect(components.GenericInput).toBeDefined()
        expect(components.GenericInput.component).toBeDefined()
        expect(components.GenericInput.register).toBeDefined()

        components.GenericInput.register()
        /*
         * TODO
        const genericInput:GenericInput =
            document.createElement('generic-input') as GenericInput

        expect(genericInput).toBeDefined()
        */
    })
})
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
