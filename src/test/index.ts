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
import {expect, jest, test} from '@jest/globals'
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter'

import components, {
    CheckboxInput,
    CircularSpinner,
    FileInput,
    GenericAnimate,
    GenericInputs,
    IntervalInput,
    register,
    SliderInput,
    TabBar,
    TabItem,
    TextInput
} from '../index'
// endregion
test('components', () => {
    expect(Object.keys(components).length).toBeGreaterThan(1)

    for (const component of [
        CheckboxInput,
        CircularSpinner,
        FileInput,
        GenericAnimate,
        GenericInputs,
        IntervalInput,
        SliderInput,
        TabBar,
        TabItem,
        TextInput
    ])
        expect(components[component.component._name]).toBe(component)
})
test('register', () => {
    /*
        NOTE: Custom elements can not be undefined again, so avoid collisions
        with registrations done by other tests.
    */
    const define = jest.spyOn(customElements, 'define')
        .mockImplementation(() => undefined)

    try {
        register()

        expect(define).toHaveBeenCalledTimes(Object.keys(components).length)
        expect(define).toHaveBeenCalledWith(
            'text-input', TextInput.component
        )
    } finally {
        define.mockRestore()
    }
})
