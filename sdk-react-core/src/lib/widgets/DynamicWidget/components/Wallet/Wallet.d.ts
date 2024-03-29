/// <reference types="react" />
import { NameServiceData } from '@dynamic-labs/sdk-api';
import { Wallet as WalletType } from '../../../../shared/types';
type Props = {
    ens?: NameServiceData;
    expanded?: boolean;
    expandedWallet?: string;
    setExpandedWallet?: (str?: string) => void;
    wallet: WalletType;
};
export declare const Wallet: ({ wallet, ens }: Props) => JSX.Element;
export {};
