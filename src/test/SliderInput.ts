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
import {expect, test} from '@jest/globals'
import type {EventMapper} from 'web-component-wrapper/type'

import {SliderInput} from '../components/SliderInput'
// endregion
test('SliderInput', () => {
    expect(SliderInput).toBeDefined()
    expect(SliderInput.component).toBeDefined()
    expect(SliderInput.register).toBeDefined()

    const mapping = SliderInput.component.eventToPropertyMapping
    expect(mapping).toBeDefined()

    const onChange = mapping?.onChange as EventMapper
    expect(onChange(
        {detail: {value: 3}},
        {externalProperties: {max: 10, min: 0, value: 2}}
    )).toStrictEqual({max: 10, min: 0, value: 3})

    const onInput = mapping?.onInput as EventMapper
    expect(onInput({detail: {value: 5}}))
        .toStrictEqual([{value: 5}, {value: 5}])
})
