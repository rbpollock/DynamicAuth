import './polyfills';
export { VERSION } from './version';
export { getWallets } from './lib/views/WalletList/data';
export { getAuthToken } from './lib/utils/functions/getAuthToken';
export { DynamicContextProvider, DynamicContext, } from './lib/context/DynamicContext';
export type { DynamicContextProps } from './lib/context/DynamicContext';
export { useDynamicContext } from './lib/context/DynamicContext/useDynamicContext';
export { useDynamicScopes } from './lib/utils/hooks/useDynamicScopes';
export { useUserWallets } from './lib/context/UserWalletsContext';
export * from './lib/widgets';
export { DynamicConnectButton, ShadowDOM, IsBrowser } from './lib/components';
export type { ThemeData } from './lib/context/ThemeContext/types';
export * from './lib/shared';
export * from './lib/views';
export * from './lib/context/MockContext';
export * from './lib/context/ThemeContext/themesData';
export type { ViewType } from './lib/context/ViewContext';
export type { NotSupportedError, NoAccessError, ChainalysisError, EmailAlreadyExistsError, UsernameAlreadyExistsError, SocialAccountAlreadyExistsError, WalletNotDeployedError, WalletUsedError, EmailVerificationError, AccountExistsError, } from '@dynamic-labs/utils';
export type { WalletConnector, Chain, } from '@dynamic-labs/wallet-connector-core';
export type { EvmNetwork } from '@dynamic-labs/types';
export { normalizeWalletName } from '@dynamic-labs/wallet-connector-core';
export { isSameWalletName } from './lib/utils/functions/isSameWalletName';
export { classNames } from './lib/utils/functions/classNames';
export { getNetwork } from './lib/utils/functions/getNetwork';
export * from './lib/utils/functions/walletFilters';
export { DynamicWidgetContextProvider } from './lib/widgets/DynamicWidget/context';
export { useWalletItemActions, useAuthenticateConnectedUser, useSocialAccounts, useEmbeddedWallet, usePasskeyRecovery, useIsLoggedIn, } from './lib/utils/hooks';
export { useUserUpdateRequest, useWalletConnectorEvent, } from './lib/utils/hooks';
export { type VerifyEmailCallback, useEmailVerificationRequest, } from './lib/utils/hooks/authenticationHooks/';
export type { UpdateUserFieldsArg } from './lib/utils/hooks/';
export { type DynamicJwt, DynamicJwtFromJSON } from '@dynamic-labs/sdk-api';
export { useSendBalance } from './lib/context/SendBalanceContext';
export type { LocaleResource } from './lib/locale';
export { useFunding } from './lib/context/FundingContext';