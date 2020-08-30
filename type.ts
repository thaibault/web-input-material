// -*- coding: utf-8 -*-
/** @module type */
'use strict'
/* !
    region header
    [Project page](https://torben.website/storelocator)

    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stand under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/
// region imports
import {Mapping, ValueOf} from 'clientnode/type'
import {
    Component, FocusEvent, KeyUpEvent, MouseEvent, SyntheticEvent
} from 'react'

import PropertyTypes from './property-types'
import {ReactWeb} from './web/ReactWeb'
// endregion
// region exports
export type ModelState = {
    dirty:boolean;
    focused:boolean;
    invalid:boolean;
    invalidMaximum:boolean;
    invalidMaximumLength:boolean;
    invalidMinimum:boolean;
    invalidMinimumLength:boolean;
    invalidPattern:boolean;
    invalidRequired:boolean;
    pristine:boolean;
    touched:boolean;
    untouched:boolean;
    valid:boolean;
    visited:boolean;
}
export type BaseModel<Type = any> = {
    declaration:string;
    default:Type;
    description:string;
    editor:'code'|'code(css)'|'code(script)'|'plain'|'text'|'richtext(raw)'|'richtext(simple)'|'richtext(normal)'|'richtext(advanced)';
    emtyEqualsNull:boolean;
    maximum:number;
    maximumLength:number;
    minimum:number;
    minimumLength:number;
    name:string;
    regularExpressionPattern:string;
    selection:Array<number|string>|Mapping<number|string>;
    trim:boolean;
    type:'date'|'datetime-local'|'month'|'number'|'range'|'string'|'time'|'week';
    value?:null|Type;
}
export type Model<Type = any> = BaseModel<Type> & {
    mutable:boolean;
    nullable:boolean;
    state:ModelState;
    writable:boolean;
}
export type Output = Mapping<true|((...parameter:Array<any>) => Mapping<any>)>
export type Properties<Type = any> = BaseModel<Type> & ModelState & {
    align:'end'|'start';
    cursor:{
        end:number;
        start:number;
    };
    disabled?:boolean;
    editorIsActive:boolean;
    fullWidth:boolean;
    icon:string|(IconOptions & {tooltip?:string|TooltipProps});
    hidden:boolean;
    maximumLengthText:string;
    maximumText:string;
    minimumLengthText:string;
    minimumText:string;
    model:Model<Type>;
    onBlur:(event:SyntheticEvent) => void;
    onChange:(properties:Properties<Type>, event?:SyntheticEvent) => void;
    onChangeEditorIsActive:(isActive:boolean, event?:MouseEvent) => void;
    onChangeValue:(value:null|Type, event:SyntheticEvent) => void;
    onChangeShowDeclaration:(show:boolean, event:SyntheticEvent) => void;
    onChangeState:(state:ModelState, event:SyntheticEvent) => void;
    onClick:(event:MouseEvent) => void;
    onConfigure:(properties:Properties<Type>) => void;
    onFocus:(event:FocusEvent) => void;
    onKeyUp:(event:KeyUpEvent) => void;
    onTouch:(event:Event) => void;
    outlined:boolean;
    pattern:string;
    patternText:string;
    placeholder:string;
    required?:boolean;
    requiredText:string;
    ripple:boolean;
    rows:number;
    selectableEditor:boolean;
    showDeclaration:boolean;
    showInitialValidationState:boolean;
    tooltip:string|TooltipProps;
    trailingIcon:string|(IconOptions & {tooltip?:string|TooltipProps});
}
export type Props<Type = any> = Partial<Properties<Type>>
export type State<Type = any> = {
    cursor:{
        end:number;
        start:number;
    };
    editorIsActive:boolean;
    hidden:boolean;
    model:ModelState;
    showDeclaration:boolean;
    value:null|Type;
}
export type WebComponentAPI = {
    component:ReactWeb;
    register:(tagName:string) => void;
}
export interface ReactWebComponent extends Component {
    static readonly output?:Output;
    static readonly propertiesToReflectAsAttributes?:Mapping<boolean>;
    static readonly propertyTypes?:Mapping<ValueOf<PropertyTypes>>;
    static readonly propTypes?:Mapping<ValueOf<PropertyTypes>>;
}
// endregion
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
