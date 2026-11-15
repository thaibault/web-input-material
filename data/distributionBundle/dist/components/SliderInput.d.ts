import type { Mapping } from 'clientnode';
import type { WebComponentAPI } from 'web-component-wrapper/type';
import { Slider } from '@rmwc/slider';
export interface Properties extends Mapping<unknown> {
    disabled: boolean;
    discrete: boolean;
    displayMarkers: boolean;
    max: number;
    min: number;
    step: number;
    value: number;
}
export declare const SliderInput: WebComponentAPI<typeof Slider, Properties, Properties>;
export default SliderInput;
