import { Dispatch, SetStateAction } from 'react';
import { EvmNetwork } from '@dynamic-labs/types';
import { WalletConnector } from '../../..';
type Props = {
    activeClassName?: string;
    buttonClassName?: string;
    checkboxClassName?: string;
    connector: WalletConnector | undefined;
    customCallbackOnSuccess?: () => void;
    evmNetworks: EvmNetwork[];
    isNetworkPickerOpen: boolean;
    listClassName?: string;
    mainClassName?: string;
    setIsNetworkPickerOpen: Dispatch<SetStateAction<boolean>>;
    showNetworkName?: boolean;
    currentNetwork: string | number | undefined;
};
export declare const NetworkPicker: ({ activeClassName, buttonClassName, checkboxClassName, connector, evmNetworks, isNetworkPickerOpen, listClassName, mainClassName, setIsNetworkPickerOpen, showNetworkName, customCallbackOnSuccess, currentNetwork, }: Props) => JSX.Element;
export {};
