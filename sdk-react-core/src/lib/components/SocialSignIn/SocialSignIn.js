import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
import { SocialIcon } from '@dynamic-labs/iconic';
import '@dynamic-labs/sdk-api';
import { logger } from '../../shared/logger.js';
import '@dynamic-labs/wallet-connector-core';
import '../../context/ViewContext/ViewContext.js';
import { ReactComponent as SvgClose } from '../../shared/assets/close.js';
import { ReactComponent as SvgDotsHorizontal } from '../../shared/assets/dots-horizontal.js';
import '@dynamic-labs/wallet-book';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../shared/consts/index.js';
import { capitalize } from '../../shared/utils/functions/capitalize/capitalize.js';
import { classNames } from '../../utils/functions/classNames/classNames.js';
import '../../context/DynamicContext/DynamicContext.js';
import '../../context/CaptchaContext/CaptchaContext.js';
import '../../context/ErrorContext/ErrorContext.js';
import '@dynamic-labs/multi-wallet';
import '../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../context/AccountExistsContext/AccountExistsContext.js';
import '../../config/ApiEndpoint.js';
import '../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import { useIconThemeVariant } from '../../utils/hooks/useIconThemeVariant/useIconThemeVariant.js';
import '@dynamic-labs/types';
import 'yup';
import 'react-i18next';
import '../../context/MockContext/MockContext.js';
import '../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../../context/UserWalletsContext/UserWalletsContext.js';
import '../Alert/Alert.js';
import { Typography } from '../Typography/Typography.js';
import '../ShadowDOM/ShadowDOM.js';
import { Icon } from '../Icon/Icon.js';
import { IconButton } from '../IconButton/IconButton.js';
import { IconListTile } from '../IconListTile/IconListTile.js';
import { IconWithSpinner } from '../IconWithSpinner/IconWithSpinner.js';
import '../InlineWidget/InlineWidget.js';
import '../MenuList/Dropdown/Dropdown.js';
import '../Transition/ZoomTransition/ZoomTransition.js';
import '../Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../Transition/OpacityTransition/OpacityTransition.js';
import { ModalHeader } from '../ModalHeader/ModalHeader.js';
import '../Popper/Popper/Popper.js';
import '../Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';
import 'formik';
import 'i18next';
import { OverlayCard } from '../OverlayCard/OverlayCard.js';
import '../OverlayCard/OverlayCard.context.js';
import '../../context/ThemeContext/ThemeContext.js';
import '../../context/FooterAnimationContext/index.js';
import '../../context/QrCodeContext/QrCodeContext.js';
import '../../context/WalletGroupContext/WalletGroupContext.js';
import '../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../context/LoadingContext/LoadingContext.js';
import '../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import '../UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import '@dynamic-labs/viem-utils';
import '../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';

const INTERNAL_MAX_INLINE_ITEMS = 5;
const SocialSignIn = ({ providers, onSelectProvider, isLoading, selectedProvider, testId, defaultProvider, numOfItemsToDisplay: externalMaxInlineItems = 5, collapsedLayout, }) => {
    const iconThemeVariant = useIconThemeVariant();
    // ====================================
    // INLINE VS DEFAULT PROVIDERS
    // ====================================
    // Set default provider as the first available provider if default provider isn't within the providers
    if (defaultProvider && !providers.includes(defaultProvider)) {
        [defaultProvider] = providers;
    }
    /** All enabled providers except the default one */
    const inlineProviders = providers.filter((provider) => provider !== defaultProvider);
    // ====================================
    // ALL PROVIDERS VIEW
    // ====================================
    /** Number of items set in prop, with a max limit of INTERNAL_MAX_INLINE_ITEMS */
    const maxInlineItems = Math.min(externalMaxInlineItems, INTERNAL_MAX_INLINE_ITEMS);
    // Show card button if there are more inline providers than the max
    const showAllProvidersButton = inlineProviders.length > maxInlineItems;
    /** The inline providers that we will show */
    const cappedInlineProviders = showAllProvidersButton
        ? inlineProviders.slice(0, maxInlineItems - 1)
        : inlineProviders.slice(0, maxInlineItems);
    const [showAllProvidersCard, setShowAllProvidersCard] = useState(false);
    const closeAllProvidersCard = () => !isLoading && setShowAllProvidersCard(false);
    // ====================================
    // REACT DISPLAY
    // ====================================
    // Display all with full width if there's only one, or
    // there's no wallet list and 3 social items or less
    const showAllFullWidth = providers.length === 1 || (!collapsedLayout && providers.length < 4);
    const getProviderAsString = (provider) => provider;
    const closeButton = (jsx(IconButton, { onClick: closeAllProvidersCard, type: 'button', id: 'close-button', disabled: isLoading, "data-testid": 'close-button', children: jsx(SvgClose, {}) }));
    const renderProviderItem = (provider, fullWidth = false, insideCard = false) => (jsxs(IconListTile, { dataTestId: insideCard ? `card-${provider}` : `inline-${provider}`, onClick: () => onSelectProvider(provider), disabled: Boolean(selectedProvider), className: classNames({
            'social-sign-in--card--tile': insideCard,
            'social-sign-in--tile': !insideCard,
            'social-sign-in--tile__full-width': fullWidth,
        }), children: [jsx(IconWithSpinner, { Icon: 
                // eslint-disable-next-line react/jsx-wrap-multilines
                jsx(SocialIcon, { name: getProviderAsString(provider), variant: iconThemeVariant }), isSpinning: selectedProvider === provider, iconSize: 32 }), !insideCard && fullWidth && (jsxs(Typography, { variant: 'button_primary', children: ["Continue with ", capitalize(getProviderAsString(provider))] }))] }, getProviderAsString(provider)));
    if (!providers.length) {
        logger.error('Failed to render SocialSignInSection - no social providers enabled');
        return null;
    }
    return (jsxs(Fragment, { children: [jsxs("div", { className: 'social-sign-in', "data-testid": testId, children: [defaultProvider && renderProviderItem(defaultProvider, true), cappedInlineProviders.map((provider) => renderProviderItem(provider, showAllFullWidth)), showAllProvidersButton && (jsx(IconListTile, { dataTestId: 'show-more-options', onClick: () => setShowAllProvidersCard(true), className: 'social-sign-in--tile', children: jsx(Icon, { color: 'text-primary', children: jsx(SvgDotsHorizontal, {}) }) }, 'show-more-options'))] }), jsx(OverlayCard, { isOpen: showAllProvidersCard, onClickOverlay: closeAllProvidersCard, children: jsxs("div", { className: 'social-sign-in--card', children: [jsx(ModalHeader, { trailing: closeButton, children: jsx(Typography, { weight: 'medium', variant: 'body_normal', color: 'primary', as: 'span', children: "Choose a social account" }) }), jsx("div", { className: 'social-sign-in--card--body', children: providers.map((provider) => renderProviderItem(provider, false, true)) })] }) })] }));
};

export { SocialSignIn };
