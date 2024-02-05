import { WalletConnector } from '@dynamic-labs/wallet-connector-core';
type Props = {
    address: string | undefined;
    chain: string | undefined;
    connector: WalletConnector;
    network: number | string | undefined;
};
export declare const useFetchBalance: ({ connector, chain, address, network, }: Props) => (string | undefined)[];
export {};
