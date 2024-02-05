import { jsxs, jsx } from 'react/jsx-runtime';
import { PhantomLedgerWalletName } from '@dynamic-labs/wallet-connector-core';
import 'react';
import '@dynamic-labs/utils';
import '../../../../context/DynamicContext/DynamicContext.js';
import '../../../../context/CaptchaContext/CaptchaContext.js';
import '../../../../context/ErrorContext/ErrorContext.js';
import '../../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../../../shared/logger.js';
import '@dynamic-labs/iconic';
import { ReactComponent as SvgFooterEyeIcon } from '../../../../shared/assets/footer-eye-icon.js';
import { ReactComponent as SvgFooterGasIcon } from '../../../../shared/assets/footer-gas-icon.js';
import { ReactComponent as SvgFooterKeyIcon } from '../../../../shared/assets/footer-key-icon.js';
import '@dynamic-labs/wallet-book';
import '../../../../utils/constants/colors.js';
import '../../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
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
import '../../../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../../../context/LoadingContext/LoadingContext.js';
import 'i18next';
import '../../../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import '../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import '../../../../components/IconButton/IconButton.js';
import '../../../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import { EnterTileAnimation } from '../../../../components/EnterTileAnimation/EnterTileAnimation.js';
import { InfoItem } from '../../../../components/InfoItem/InfoItem.js';
import '../../../../components/InlineWidget/InlineWidget.js';
import '../../../../components/MenuList/Dropdown/Dropdown.js';
import '../../../../components/Popper/Popper/Popper.js';
import '../../../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';

const WalletMoreInfoContent = ({ variant, walletName, }) => {
    const defaultSignContent = {
        info: [
            {
                content: 'Signing proves you have access to your wallet. It’s a bit like verifying your email by clicking an email confirmation link in your inbox during signup. This does not approve a transaction.',
                icon: SvgFooterKeyIcon,
                title: 'Confirms you own your wallet',
            },
            {
                icon: SvgFooterGasIcon,
                title: 'There are no associated gas costs',
            },
        ],
    };
    const signInfoMessage = walletName === PhantomLedgerWalletName
        ? {
            info: [
                {
                    content: 'By connecting a wallet to a website, you are allowing the site to read the contents of your wallet. This does not approve a transaction.',
                    icon: SvgFooterEyeIcon,
                    title: 'Allows read access',
                },
                {
                    content: (jsxs("div", { className: 'footer-more-info-content__item--phantom-ledger', children: [jsx(Typography, { as: 'p', variant: 'body_small', weight: 'regular', children: "Ledger does not support message signing functionality, commonly used to log in to sites. Instead, we sign a transaction as a proxy to prove ownership of the wallet." }), jsxs(Typography, { as: 'p', variant: 'body_small', weight: 'regular', children: [jsx("strong", { children: "Important" }), ": we do not", ' ', jsx("strong", { children: "broadcast" }), " this transaction, meaning Ledger based login will still be gasless."] }), jsx(Typography, { as: 'p', variant: 'body_small', weight: 'regular', children: "Phantom in turn shows that a fee may apply as part of the \u201Ctransaction\u201D." }), jsx(Typography, { as: 'p', variant: 'body_small', weight: 'regular', children: "As always, please be cautious of the extensions and websites you use to prevent unwanted transactions from being broadcasted to the network." })] })),
                    icon: SvgFooterGasIcon,
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
                    icon: SvgFooterEyeIcon,
                    title: 'Allows read access',
                },
                {
                    icon: SvgFooterGasIcon,
                    title: 'There are no associated gas costs',
                },
            ],
        },
        sign: signInfoMessage,
    };
    return (jsx("div", { className: 'footer-more-info-content__wrapper', children: copys[variant].info.map((item, index) => (jsx("div", { className: 'footer-more-info-content__item', children: jsx(EnterTileAnimation, { delay: `${0.3 + index * 0.2}s`, children: jsx(InfoItem, { Icon: item.icon, title: item.title, content: item.content }) }) }, index))) }));
};

export { WalletMoreInfoContent };
