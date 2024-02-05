import { __awaiter } from '../../../../../_virtual/_tslib.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useWalletBookContext, getWalletGroup, getWalletBookWallet, WalletIcon } from '@dynamic-labs/wallet-book';
import '@dynamic-labs/iconic';
import '../../../context/ViewContext/ViewContext.js';
import 'react';
import { ReactComponent as SvgStroke } from '../../../shared/assets/stroke.js';
import { classNames } from '../../../utils/functions/classNames/classNames.js';
import '@dynamic-labs/utils';
import '../../../context/DynamicContext/DynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../../../context/CaptchaContext/CaptchaContext.js';
import '../../../context/ErrorContext/ErrorContext.js';
import '@dynamic-labs/sdk-api';
import '../../../shared/logger.js';
import { getWalletListItemLabel } from '../../../shared/utils/functions/getWalletListItemLabel/getWalletListItemLabel.js';
import 'viem';
import '../../../shared/utils/classes/storage/localStorage.js';
import '../../../shared/consts/index.js';
import '../../../utils/constants/colors.js';
import '@dynamic-labs/multi-wallet';
import { pixelToRem } from '../../../utils/functions/pixelToRem/pixelToRem.js';
import '../../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../../context/AccountExistsContext/AccountExistsContext.js';
import '../../../config/ApiEndpoint.js';
import '../../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import '../../../context/ThemeContext/ThemeContext.js';
import '@dynamic-labs/types';
import 'yup';
import 'react-i18next';
import '../../../context/MockContext/MockContext.js';
import '../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../../../context/UserWalletsContext/UserWalletsContext.js';
import { useWalletItemActions } from '../../../utils/hooks/useWalletItemActions/useWalletItemActions.js';
import '../../../components/Transition/ZoomTransition/ZoomTransition.js';
import '../../../components/Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../../../components/Transition/OpacityTransition/OpacityTransition.js';
import '../../../components/ShadowDOM/ShadowDOM.js';
import '../../../components/OverlayCard/OverlayCard.context.js';
import '../../../context/FooterAnimationContext/index.js';
import '../../../context/QrCodeContext/QrCodeContext.js';
import { Badge } from '../../../components/Badge/Badge.js';
import { isWalletGroup } from '../../../utils/functions/walletListBuilder/utils/isWalletGroup/isWalletGroup.js';
import { useWalletGroupContext } from '../../../context/WalletGroupContext/WalletGroupContext.js';
import '../../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../../context/LoadingContext/LoadingContext.js';
import { Icon } from '../../../components/Icon/Icon.js';
import 'i18next';
import '../../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import '../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import '../../../components/IconButton/IconButton.js';
import '../../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import { ListTile } from '../../../components/ListTile/ListTile.js';
import '../../../components/InlineWidget/InlineWidget.js';
import '../../../components/MenuList/Dropdown/Dropdown.js';
import '../../../components/Popper/Popper/Popper.js';
import '../../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';

const WalletListItem = ({ disabled = false, usingMultiWallet, wallet, onResetSearchValue, tile = ({ leading, name, onClick, trailing }) => (jsx(ListTile, { leading: leading, trailing: trailing, onClick: onClick, className: 'wallet-list-item__tile', dataTestId: 'ListTile', children: name })), }) => {
    const { navigateToWalletGroup } = useWalletGroupContext();
    const _isWalletGroup = isWalletGroup(wallet);
    const { walletBook } = useWalletBookContext();
    const { handleWalletItemClick } = useWalletItemActions();
    const label = getWalletListItemLabel({
        usingMultiWallet,
        wallet,
    });
    const Tile = tile;
    const handleClick = () => __awaiter(void 0, void 0, void 0, function* () {
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
        ? getWalletGroup(walletBook, wallet.key).name
        : getWalletBookWallet(walletBook, wallet.key).name;
    const leading = (jsx(WalletIcon, { className: 'wallet-list-item__leading', walletKey: wallet.key, style: { height: pixelToRem(28), width: pixelToRem(28) } }));
    const trailing = (jsxs("div", { className: 'wallet-list-item__trailing', children: [label && (jsx("div", { className: classNames('trailing__child', {
                    trailing__label: true,
                }), children: jsx(Badge, { dot: true, text: label, className: 'trailing__badge' }) })), jsx("div", { className: 'trailing__child trailing__arrow', children: jsx(Icon, { color: 'text-tertiary', size: 'small', children: jsx(SvgStroke, {}) }) })] }));
    return (jsx(Tile, { leading: leading, trailing: trailing, name: name, onClick: handleClick }));
};

export { WalletListItem };
