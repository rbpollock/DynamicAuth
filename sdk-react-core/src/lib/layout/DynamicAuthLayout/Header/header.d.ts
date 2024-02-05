import { FC } from 'react';
import { ProjectSettings } from '@dynamic-labs/sdk-api';
import { WalletConnector } from '@dynamic-labs/wallet-connector-core';
import { CopyKey, ModalProps } from '../../../shared';
export type WalletHeaderProps = Partial<ModalProps> & CopyKey & {
    heading: string | JSX.Element;
    projectSettings?: ProjectSettings;
    walletConnector?: WalletConnector | null;
};
export declare const Header: FC<WalletHeaderProps>;
