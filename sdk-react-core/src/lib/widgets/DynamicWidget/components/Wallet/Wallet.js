import { __awaiter } from '../../../../../../_virtual/_tslib.js';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { isEmbeddedConnector, isEmailWalletConnector } from '@dynamic-labs/wallet-connector-core';
import '@dynamic-labs/iconic';
import '../../../../context/ViewContext/ViewContext.js';
import 'react';
import { ReactComponent as SvgCopy } from '../../../../shared/assets/copy.js';
import { ReactComponent as SvgKey } from '../../../../shared/assets/key.js';
import { ReactComponent as SvgSwitchHorizontal } from '../../../../shared/assets/switch-horizontal.js';
import { ReactComponent as SvgUnlink } from '../../../../shared/assets/unlink.js';
import '@dynamic-labs/sdk-api';
import '../../../../shared/logger.js';
import '@dynamic-labs/wallet-book';
import { shortenWalletAddress } from '../../../../shared/utils/functions/shortenWalletAddress/shortenWalletAddress.js';
import '../../../../utils/constants/colors.js';
import '../../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import { useInternalDynamicContext } from '../../../../context/DynamicContext/useInternalDynamicContext.js';
import '../../../../context/CaptchaContext/CaptchaContext.js';
import '../../../../context/ErrorContext/ErrorContext.js';
import '../../../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import '../../../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../../../context/AccountExistsContext/AccountExistsContext.js';
import '../../../../config/ApiEndpoint.js';
import '../../../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import '../../../../context/ThemeContext/ThemeContext.js';
import '@dynamic-labs/types';
import 'yup';
import 'react-i18next';
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
import { Typography } from '../../../../components/Typography/Typography.js';
import '../../../../context/WalletGroupContext/WalletGroupContext.js';
import '../DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../../../context/LoadingContext/LoadingContext.js';
import { AuthProviderIcon } from '../../../../components/AuthProviderIcon/AuthProviderIcon.js';
import { copyToClipboard, getExportKeysOption } from '../../helpers/helpers.js';
import '../../context/DynamicWidgetContext.js';
import { DotsMenu } from '../DotsMenu/DotsMenu.js';
import '../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import '../../../../components/IconButton/IconButton.js';
import '../../../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import '../../../../components/InlineWidget/InlineWidget.js';
import '../../../../components/MenuList/Dropdown/Dropdown.js';
import '../../../../components/Popper/Popper/Popper.js';
import '../../../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';

const Wallet = ({ wallet, ens }) => {
    var _a;
    const { id: walletId, connector, address } = wallet;
    const { setPrimaryWallet, setSelectedWalletConnectorKey, setShowWidgetStatePopup, setSelectedWalletWithAction, authToken, primaryWallet, user, projectSettings, authMode, } = useInternalDynamicContext();
    const email = (_a = user === null || user === void 0 ? void 0 : user.verifiedCredentials.find((verifiedCredential) => verifiedCredential.format === 'email')) === null || _a === void 0 ? void 0 : _a.email;
    const iconSize = 20;
    const options = [
        {
            Icon: jsx(SvgSwitchHorizontal, {}),
            callback: () => onSelectWalletClick(),
            text: 'Select wallet',
        },
    ];
    if (ens === null || ens === void 0 ? void 0 : ens.name) {
        options.push({
            Icon: jsx(SvgCopy, {}),
            callback: () => copyToClipboard(ens.name),
            text: 'Copy ENS',
        });
    }
    options.push({
        Icon: jsx(SvgCopy, {}),
        callback: () => copyToClipboard(address || ''),
        text: 'Copy address',
    });
    if (!isEmbeddedConnector(connector) &&
        !(projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.sdk.multiWalletUnlinkDisabled)) {
        options.push({
            Icon: jsx(SvgUnlink, {}),
            callback: () => setSelectedWalletWithAction({ action: 'unlink', wallet }),
            text: `${authMode === 'connect-only' ? 'Disconnect' : 'Unlink'} from my account`,
        });
    }
    const exportKeysOption = getExportKeysOption(connector, projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.providers);
    if (exportKeysOption) {
        options.push({
            Icon: jsx(SvgKey, {}),
            callback: exportKeysOption,
            text: 'Export private keys',
        });
    }
    const onSelectWalletClick = () => __awaiter(void 0, void 0, void 0, function* () {
        if ((primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.chain) === 'flow' &&
            connector.connectedChain === 'FLOW') {
            yield connector.endSession();
        }
        if (isEmailWalletConnector(connector) && email) {
            connector.setEmail(email);
        }
        setShowWidgetStatePopup(true);
        setSelectedWalletWithAction({ action: 'select', wallet });
        setPrimaryWallet(walletId);
        setSelectedWalletConnectorKey(connector.key);
    });
    return (jsxs("div", { className: 'wallet__container', "data-testid": 'wallet', children: [jsxs("div", { className: 'wallet__row', children: [jsx("div", { className: 'wallet__icon-container', children: jsx(AuthProviderIcon, { iconSize: iconSize, jwt: authToken, wallet: wallet, showStatus: true }) }), (ens === null || ens === void 0 ? void 0 : ens.name) ? (jsxs(Fragment, { children: [jsx(Typography, { className: 'wallet__ens-name', variant: 'body_small', color: 'primary', truncate: true, children: ens === null || ens === void 0 ? void 0 : ens.name }), jsx("div", { className: 'wallet__row__seperator' }), jsx(Typography, { variant: 'body_mini', color: 'secondary', children: shortenWalletAddress(address, 3, 3) })] })) : (jsx(Typography, { variant: 'body_small', color: 'primary', children: shortenWalletAddress(address, 4, 4) }))] }), jsx(DotsMenu, { "data-testid": 'dots-menu', options: options, buttonClassName: 'wallet__menu', direction: 'left' })] }));
};

export { Wallet };
