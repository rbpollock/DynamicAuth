'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var walletBook = require('@dynamic-labs/wallet-book');
require('@dynamic-labs/iconic');
require('../../../context/ViewContext/ViewContext.cjs');
require('react');
var stroke = require('../../../shared/assets/stroke.cjs');
var classNames = require('../../../utils/functions/classNames/classNames.cjs');
require('@dynamic-labs/utils');
require('../../../context/DynamicContext/DynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../context/ErrorContext/ErrorContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../../shared/logger.cjs');
var getWalletListItemLabel = require('../../../shared/utils/functions/getWalletListItemLabel/getWalletListItemLabel.cjs');
require('viem');
require('../../../shared/utils/classes/storage/localStorage.cjs');
require('../../../shared/consts/index.cjs');
require('../../../utils/constants/colors.cjs');
require('@dynamic-labs/multi-wallet');
var pixelToRem = require('../../../utils/functions/pixelToRem/pixelToRem.cjs');
require('../../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../../config/ApiEndpoint.cjs');
require('../../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
require('../../../context/ThemeContext/ThemeContext.cjs');
require('@dynamic-labs/types');
require('yup');
require('react-i18next');
require('../../../context/MockContext/MockContext.cjs');
require('../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../../context/UserWalletsContext/UserWalletsContext.cjs');
var useWalletItemActions = require('../../../utils/hooks/useWalletItemActions/useWalletItemActions.cjs');
require('../../../components/Transition/ZoomTransition/ZoomTransition.cjs');
require('../../../components/Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../../components/Transition/OpacityTransition/OpacityTransition.cjs');
require('../../../components/ShadowDOM/ShadowDOM.cjs');
require('../../../components/OverlayCard/OverlayCard.context.cjs');
require('../../../context/FooterAnimationContext/index.cjs');
require('../../../context/QrCodeContext/QrCodeContext.cjs');
var Badge = require('../../../components/Badge/Badge.cjs');
var isWalletGroup = require('../../../utils/functions/walletListBuilder/utils/isWalletGroup/isWalletGroup.cjs');
var WalletGroupContext = require('../../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../../context/LoadingContext/LoadingContext.cjs');
var Icon = require('../../../components/Icon/Icon.cjs');
require('i18next');
require('../../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
require('../../../components/IconButton/IconButton.cjs');
require('../../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
var ListTile = require('../../../components/ListTile/ListTile.cjs');
require('../../../components/InlineWidget/InlineWidget.cjs');
require('../../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../../components/Popper/Popper/Popper.cjs');
require('../../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');

const WalletListItem = ({ disabled = false, usingMultiWallet, wallet, onResetSearchValue, tile = ({ leading, name, onClick, trailing }) => (jsxRuntime.jsx(ListTile.ListTile, { leading: leading, trailing: trailing, onClick: onClick, className: 'wallet-list-item__tile', dataTestId: 'ListTile', children: name })), }) => {
    const { navigateToWalletGroup } = WalletGroupContext.useWalletGroupContext();
    const _isWalletGroup = isWalletGroup.isWalletGroup(wallet);
    const { walletBook: walletBook$1 } = walletBook.useWalletBookContext();
    const { handleWalletItemClick } = useWalletItemActions.useWalletItemActions();
    const label = getWalletListItemLabel.getWalletListItemLabel({
        usingMultiWallet,
        wallet,
    });
    const Tile = tile;
    const handleClick = () => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        if (disabled) {
            return;
        }
        onResetSearchValue === null || onResetSearchValue === void 0 ? void 0 : onResetSearchValue('');
        if (_isWalletGroup) {
            return navigateToWalletGroup(wallet);
        }
        yield handleWalletItemClick(wallet);
    });
    const name = _isWalletGroup
        ? walletBook.getWalletGroup(walletBook$1, wallet.key).name
        : walletBook.getWalletBookWallet(walletBook$1, wallet.key).name;
    const leading = (jsxRuntime.jsx(walletBook.WalletIcon, { className: 'wallet-list-item__leading', walletKey: wallet.key, style: { height: pixelToRem.pixelToRem(28), width: pixelToRem.pixelToRem(28) } }));
    const trailing = (jsxRuntime.jsxs("div", { className: 'wallet-list-item__trailing', children: [label && (jsxRuntime.jsx("div", { className: classNames.classNames('trailing__child', {
                    trailing__label: true,
                }), children: jsxRuntime.jsx(Badge.Badge, { dot: true, text: label, className: 'trailing__badge' }) })), jsxRuntime.jsx("div", { className: 'trailing__child trailing__arrow', children: jsxRuntime.jsx(Icon.Icon, { color: 'text-tertiary', size: 'small', children: jsxRuntime.jsx(stroke.ReactComponent, {}) }) })] }));
    return (jsxRuntime.jsx(Tile, { leading: leading, trailing: trailing, name: name, onClick: handleClick }));
};

exports.WalletListItem = WalletListItem;
