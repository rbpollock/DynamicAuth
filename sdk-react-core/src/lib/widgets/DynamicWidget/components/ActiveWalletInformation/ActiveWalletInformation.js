import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { normalizeWalletName } from '@dynamic-labs/wallet-connector-core';
import { classNames } from '../../../../utils/functions/classNames/classNames.js';
import '@dynamic-labs/utils';
import { useInternalDynamicContext } from '../../../../context/DynamicContext/useInternalDynamicContext.js';
import '../../../../context/CaptchaContext/CaptchaContext.js';
import '../../../../context/ErrorContext/ErrorContext.js';
import '../../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import { logger } from '../../../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-book';
import { shortenWalletAddress } from '../../../../shared/utils/functions/shortenWalletAddress/shortenWalletAddress.js';
import '../../../../utils/constants/colors.js';
import '../../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../../../shared/consts/index.js';
import { createOwnerWallet } from '../../../../utils/functions/createOwnerWallet/createOwnerWallet.js';
import '@dynamic-labs/multi-wallet';
import { isAccountAbstractionWallet } from '../../../../utils/functions/isAccountAbstractionWallet/isAccountAbstractionWallet.js';
import { isTestnet } from '../../../../utils/functions/isTestnet/isTestnet.js';
import '../../../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../../../context/AccountExistsContext/AccountExistsContext.js';
import '../../../../config/ApiEndpoint.js';
import '../../../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import '../../../../context/ThemeContext/ThemeContext.js';
import { usePromise } from '../../../../utils/hooks/usePromise/usePromise.js';
import '@dynamic-labs/types';
import 'yup';
import '../../../../context/MockContext/MockContext.js';
import '../../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../../../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../../../../context/UserWalletsContext/UserWalletsContext.js';
import '../../../../components/Transition/ZoomTransition/ZoomTransition.js';
import '../../../../components/Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../../../../components/Transition/OpacityTransition/OpacityTransition.js';
import '../../../../components/ShadowDOM/ShadowDOM.js';
import '../../../../components/OverlayCard/OverlayCard.context.js';
import '../../../../context/FooterAnimationContext/index.js';
import '../../../../context/QrCodeContext/QrCodeContext.js';
import { useIsTurnkeyWallet } from '../../../../utils/hooks/useIsTurnkeyWallet/useIsTurnkeyWallet.js';
import { Typography } from '../../../../components/Typography/Typography.js';
import '../../../../context/WalletGroupContext/WalletGroupContext.js';
import '../DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../../../context/LoadingContext/LoadingContext.js';
import { AuthProviderIcon } from '../../../../components/AuthProviderIcon/AuthProviderIcon.js';
import { getExportKeysOption } from '../../helpers/helpers.js';
import { useWidgetContext } from '../../context/DynamicWidgetContext.js';
import { DotsMenu } from '../DotsMenu/DotsMenu.js';
import '../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import '../../../../components/IconButton/IconButton.js';
import { Alert } from '../../../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import '../../../../components/InlineWidget/InlineWidget.js';
import '../../../../components/MenuList/Dropdown/Dropdown.js';
import '../../../../components/Popper/Popper/Popper.js';
import '../../../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';
import { NetworkPicker } from '../../../../components/NetworkPicker/NetworkPicker.js';
import { useFetchNameService } from '../../hooks/useFetchNameService/useFetchNameService.js';
import { Balance } from '../Balance/Balance.js';

const ICON_SIZE = 28;
const ActiveWalletInformation = () => {
    const { t } = useTranslation();
    const [isNetworkPickerOpen, setIsNetworkPickerOpen] = useState(false);
    const { primaryWallet, authToken, network, projectSettings, handleLogOut, user, } = useInternalDynamicContext();
    const { setDynamicWidgetView } = useWidgetContext();
    const { isTurnkeyWalletWithoutAuthenticator } = useIsTurnkeyWallet();
    const address = primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.address;
    const nameService = useFetchNameService(address);
    const { data: testnet } = usePromise(() => isTestnet(primaryWallet), { deps: [network] });
    const exportKeysOption = getExportKeysOption(primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.connector, projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.providers);
    const wallet = isAccountAbstractionWallet(primaryWallet)
        ? createOwnerWallet(primaryWallet, (user === null || user === void 0 ? void 0 : user.verifiedCredentials) || [])
        : primaryWallet;
    const options = [
        {
            Icon: null,
            callback: () => (nameService === null || nameService === void 0 ? void 0 : nameService.name) && navigator.clipboard.writeText(nameService === null || nameService === void 0 ? void 0 : nameService.name),
            hide: !(nameService === null || nameService === void 0 ? void 0 : nameService.name),
            text: 'Copy ENS',
        },
        {
            Icon: null,
            callback: () => address && navigator.clipboard.writeText(address),
            hide: !address,
            text: 'Copy wallet address',
        },
        {
            Icon: null,
            callback: () => setDynamicWidgetView('manage-passkeys'),
            hide: !(wallet &&
                normalizeWalletName(wallet.connector.name).startsWith('turnkey')),
            text: 'My passkeys',
        },
        {
            Icon: null,
            callback: exportKeysOption ||
                (() => logger.info('No option to export private keys')),
            hide: !exportKeysOption,
            text: 'Export private keys',
        },
        {
            Icon: null,
            callback: handleLogOut,
            text: 'Disconnect',
        },
    ];
    const evmNetworks = ((primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.connector) &&
        (primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.connector).evmNetworks) ||
        [];
    const showTestnetAlert = testnet && !isTurnkeyWalletWithoutAuthenticator;
    return (jsxs("div", { className: 'active-wallet-information-container', "data-testid": 'active-wallet-information', children: [jsxs("div", { className: 'active-wallet-information', children: [jsxs("div", { className: 'active-wallet-information__header', children: [jsx("div", { className: 'active-wallet-information__avatar--centered', children: (nameService === null || nameService === void 0 ? void 0 : nameService.avatar) ? (jsx("div", { className: 'active-wallet-information__avatar', children: jsx("img", { src: nameService === null || nameService === void 0 ? void 0 : nameService.avatar, alt: '' }) })) : (jsx("div", { className: 'active-wallet-information__wallet-img', children: jsx(AuthProviderIcon, { jwt: authToken, iconSize: ICON_SIZE, showStatus: true }) })) }), jsxs("div", { className: 'active-wallet-information__details', children: [jsxs("div", { className: classNames('active-wallet-information__actions-container', {
                                            'active-wallet-information__actions-container--centered': !(nameService === null || nameService === void 0 ? void 0 : nameService.name),
                                        }), children: [jsxs("div", { children: [jsx(Typography, { className: 'active-wallet-information__handle', color: 'primary', variant: 'body_normal', children: nameService === null || nameService === void 0 ? void 0 : nameService.name }), jsx(Typography, { className: 'active-wallet-information__address', weight: (nameService === null || nameService === void 0 ? void 0 : nameService.name) ? 'regular' : 'medium', variant: (nameService === null || nameService === void 0 ? void 0 : nameService.name) ? 'body_small' : 'body_normal', color: (nameService === null || nameService === void 0 ? void 0 : nameService.name) ? 'secondary' : 'primary', children: shortenWalletAddress(address, 4, 4) })] }), jsx(DotsMenu, { "data-testid": 'dots-menu', options: options, buttonClassName: 'active-wallet-information__dots-menu', buttonClassNameWithOpenMenu: 'active-wallet-information__dots-menu' })] }), jsx(NetworkPicker, { currentNetwork: network, connector: primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.connector, isNetworkPickerOpen: isNetworkPickerOpen, setIsNetworkPickerOpen: setIsNetworkPickerOpen, mainClassName: 'active-wallet-information__network-picker', buttonClassName: 'active-wallet-information__network-picker-button', evmNetworks: evmNetworks, showNetworkName: true })] })] }), showTestnetAlert && (jsx(Alert, { variant: 'warning', copykey: 'dyn_active_wallet_info.testnet_warning', children: t('dyn_active_wallet_info.testnet_warning') }))] }), jsxs("div", { className: 'balance-container', children: [jsx(Typography, { color: 'secondary', variant: 'body_small', children: "Balance" }), primaryWallet && (jsx(Balance, { className: 'balance-container__balance', connector: primaryWallet.connector, address: primaryWallet.address, network: network }))] })] }));
};

export { ActiveWalletInformation };
