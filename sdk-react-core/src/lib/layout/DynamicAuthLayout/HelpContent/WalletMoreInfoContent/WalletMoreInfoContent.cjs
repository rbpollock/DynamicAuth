'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
require('react');
require('@dynamic-labs/utils');
require('../../../../context/DynamicContext/DynamicContext.cjs');
require('../../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../../context/ErrorContext/ErrorContext.cjs');
require('../../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
var footerEyeIcon = require('../../../../shared/assets/footer-eye-icon.cjs');
var footerGasIcon = require('../../../../shared/assets/footer-gas-icon.cjs');
var footerKeyIcon = require('../../../../shared/assets/footer-key-icon.cjs');
require('@dynamic-labs/wallet-book');
require('../../../../utils/constants/colors.cjs');
require('../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
require('../../../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../../../config/ApiEndpoint.cjs');
require('../../../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
require('../../../../context/ThemeContext/ThemeContext.cjs');
require('@dynamic-labs/types');
require('yup');
require('react-i18next');
require('../../../../context/MockContext/MockContext.cjs');
require('../../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../../../context/UserWalletsContext/UserWalletsContext.cjs');
require('../../../../components/Transition/ZoomTransition/ZoomTransition.cjs');
require('../../../../components/Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../../../components/Transition/OpacityTransition/OpacityTransition.cjs');
require('../../../../components/ShadowDOM/ShadowDOM.cjs');
require('../../../../components/OverlayCard/OverlayCard.context.cjs');
require('../../../../context/FooterAnimationContext/index.cjs');
require('../../../../context/QrCodeContext/QrCodeContext.cjs');
var Typography = require('../../../../components/Typography/Typography.cjs');
require('../../../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../../../context/LoadingContext/LoadingContext.cjs');
require('i18next');
require('../../../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('formik');
require('../../../../components/IconButton/IconButton.cjs');
require('../../../../components/Alert/Alert.cjs');
require('@dynamic-labs/viem-utils');
require('../../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');
var EnterTileAnimation = require('../../../../components/EnterTileAnimation/EnterTileAnimation.cjs');
var InfoItem = require('../../../../components/InfoItem/InfoItem.cjs');
require('../../../../components/InlineWidget/InlineWidget.cjs');
require('../../../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../../../components/Popper/Popper/Popper.cjs');
require('../../../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');

const WalletMoreInfoContent = ({ variant, walletName, }) => {
    const defaultSignContent = {
        info: [
            {
                content: 'Signing proves you have access to your wallet. It’s a bit like verifying your email by clicking an email confirmation link in your inbox during signup. This does not approve a transaction.',
                icon: footerKeyIcon.ReactComponent,
                title: 'Confirms you own your wallet',
            },
            {
                icon: footerGasIcon.ReactComponent,
                title: 'There are no associated gas costs',
            },
        ],
    };
    const signInfoMessage = walletName === walletConnectorCore.PhantomLedgerWalletName
        ? {
            info: [
                {
                    content: 'By connecting a wallet to a website, you are allowing the site to read the contents of your wallet. This does not approve a transaction.',
                    icon: footerEyeIcon.ReactComponent,
                    title: 'Allows read access',
                },
                {
                    content: (jsxRuntime.jsxs("div", { className: 'footer-more-info-content__item--phantom-ledger', children: [jsxRuntime.jsx(Typography.Typography, { as: 'p', variant: 'body_small', weight: 'regular', children: "Ledger does not support message signing functionality, commonly used to log in to sites. Instead, we sign a transaction as a proxy to prove ownership of the wallet." }), jsxRuntime.jsxs(Typography.Typography, { as: 'p', variant: 'body_small', weight: 'regular', children: [jsxRuntime.jsx("strong", { children: "Important" }), ": we do not", ' ', jsxRuntime.jsx("strong", { children: "broadcast" }), " this transaction, meaning Ledger based login will still be gasless."] }), jsxRuntime.jsx(Typography.Typography, { as: 'p', variant: 'body_small', weight: 'regular', children: "Phantom in turn shows that a fee may apply as part of the \u201Ctransaction\u201D." }), jsxRuntime.jsx(Typography.Typography, { as: 'p', variant: 'body_small', weight: 'regular', children: "As always, please be cautious of the extensions and websites you use to prevent unwanted transactions from being broadcasted to the network." })] })),
                    icon: footerGasIcon.ReactComponent,
                    title: 'Why do I see a fee when using ledger',
                },
            ],
        }
        : defaultSignContent;
    const copys = {
        connect: {
            info: [
                {
                    content: 'By connecting a wallet to a website, you are allowing the site to read the contents of your wallet. This does not approve a transaction.',
                    icon: footerEyeIcon.ReactComponent,
                    title: 'Allows read access',
                },
                {
                    icon: footerGasIcon.ReactComponent,
                    title: 'There are no associated gas costs',
                },
            ],
        },
        sign: signInfoMessage,
    };
    return (jsxRuntime.jsx("div", { className: 'footer-more-info-content__wrapper', children: copys[variant].info.map((item, index) => (jsxRuntime.jsx("div", { className: 'footer-more-info-content__item', children: jsxRuntime.jsx(EnterTileAnimation.EnterTileAnimation, { delay: `${0.3 + index * 0.2}s`, children: jsxRuntime.jsx(InfoItem.InfoItem, { Icon: item.icon, title: item.title, content: item.content }) }) }, index))) }));
};

exports.WalletMoreInfoContent = WalletMoreInfoContent;
