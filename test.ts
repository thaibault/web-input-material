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
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter'

import components from './index'
// endregion
describe('web-input-material', ():void => {
    test('components', () => {
        expect(Object.keys(components).length).toBeGreaterThan(1)
    })

    test('TextInput', () => {
        const {TextInput} = components

        expect(TextInput).toBeDefined()
        expect(TextInput.component).toBeDefined()
        expect(TextInput.register).toBeDefined()

        TextInput.register()
        const textInput:HTMLElement = document.createElement('text-input')

        expect(textInput).toBeDefined()
    })
})
