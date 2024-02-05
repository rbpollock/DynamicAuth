import { WalletConnector, WalletConnectorEventTypes } from '@dynamic-labs/wallet-connector-core';
/**
 * This type is a copy of the ArgumentMap type from eventemitter3 package.
 * Is used extract the arguments from a event type.
 * Then we can use the arguments to reconstruct the callback we want
 */
type ArgumentMap<T extends object> = {
    [K in keyof T]: T[K] extends (...args: any[]) => void ? Parameters<T[K]> : T[K] extends any[] ? T[K] : any[];
};
type EventArg<Event extends keyof WalletConnectorEventTypes> = ArgumentMap<WalletConnectorEventTypes>[Extract<Event, keyof WalletConnectorEventTypes>];
/**
 * Hook for handling events from a WalletConnector or an array of WalletConnectors.
 * This hook allows you to specify an event to listen to and a handler function that will be called
 * whenever the event is emitted. The handler will receive the event arguments followed by the instance
 * of the WalletConnector that emitted the event.
 *
 * @template Event - The type of the event to listen for, which should be a key of WalletConnectorEventTypes.
 *
 * @param eventEmitters - The WalletConnector instance(s) to attach the event listener to.
 * If an array is provided, the event listener is attached to all provided connectors.
 * @param eventName - The name of the event to listen for.
 * @param handler - The callback function to execute when the event is emitted.
 * The arguments to the callback are the arguments emitted with the event, followed by the WalletConnector instance
 * that emitted the event.
 *
 * @returns {void} This hook does not return anything.
 *
 * @example
 * // Example usage of useWalletConnectorEvent
 * const { primaryWallet } = useDynamicContext();
 *
 * useWalletConnectorEvent(
 *   primaryWallet?.connector,
 *   'accountChange',
 *   ({ accounts }, connector) => {
 *     console.group('accountChange');
 *     console.log('accounts', accounts);
 *     console.log('connector that emitted', connector);
 *     console.groupEnd();
 *   },
 * );
 */
export declare const useWalletConnectorEvent: <Event_1 extends keyof WalletConnectorEventTypes = keyof WalletConnectorEventTypes>(eventEmitters: WalletConnector | WalletConnector[] | undefined, eventName: Event_1, handler: (...args: [...EventArg<Event_1>, import("@dynamic-labs/wallet-connector-core").WalletConnectorCore.WalletConnector]) => void) => void;
export {};
