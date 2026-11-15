import type { Mapping } from 'clientnode';
import type { WebComponentAPI } from 'web-component-wrapper/type';
import ReactWeb from 'web-component-wrapper/ReactWeb';
export declare const mountedNodes: Array<HTMLElement>;
/**
 * Registers given component unless its tag name is already taken. Custom
 * elements can not be undefined again so all tests sharing one registry have
 * to tolerate previous registrations.
 * @param api - Web component api to register.
 * @returns Registered tag name.
 */
export declare const ensureRegistered: <Type extends typeof ReactWeb>(api: WebComponentAPI<Type>) => string;
/**
 * Polls given condition until it holds or given number of ticks elapsed.
 * @param condition - Condition to check.
 * @param maximumNumberOfTicks - Number of event loop ticks to wait at most.
 * @returns A promise resolving to the last condition's result.
 */
export declare const waitFor: (condition: () => boolean, maximumNumberOfTicks?: number) => Promise<boolean>;
/**
 * Creates, attributes and connects an element of given component and waits
 * until it has rendered its content.
 * @param api - Web component api of component to mount.
 * @param attributes - Attributes to set before connecting.
 * @returns A promise resolving to the connected element.
 */
export declare const mount: <Type extends typeof ReactWeb>(api: WebComponentAPI<Type>, attributes?: Mapping) => Promise<HTMLElement>;
export declare const unmountAll: () => void;
/**
 * Simulates a user typing given value into given input. React tracks values
 * set via the instance setter so the prototype one has to be used.
 * @param input - Input to type into.
 * @param value - Value to type.
 */
export declare const type: (input: HTMLInputElement, value: string) => void;
