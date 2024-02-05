'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var iconic = require('@dynamic-labs/iconic');
require('@dynamic-labs/sdk-api');
var logger = require('../../shared/logger.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../context/ViewContext/ViewContext.cjs');
var close = require('../../shared/assets/close.cjs');
var dotsHorizontal = require('../../shared/assets/dots-horizontal.cjs');
require('@dynamic-labs/wallet-book');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../shared/consts/index.cjs');
var capitalize = require('../../shared/utils/functions/capitalize/capitalize.cjs');
var classNames = require('../../utils/functions/classNames/classNames.cjs');
require('../../context/DynamicContext/DynamicContext.cjs');
require('../../context/CaptchaContext/CaptchaContext.cjs');
require('../../context/ErrorContext/ErrorContext.cjs');
require('@dynamic-labs/multi-wallet');
require('../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../config/ApiEndpoint.cjs');
require('../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
var useIconThemeVariant = require('../../utils/hooks/useIconThemeVariant/useIconThemeVariant.cjs');
require('@dynamic-labs/types');
require('yup');
require('react-i18next');
require('../../context/MockContext/MockContext.cjs');
require('../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../context/UserWalletsContext/UserWalletsContext.cjs');
require('../Alert/Alert.cjs');
var Typography = require('../Typography/Typography.cjs');
require('../ShadowDOM/ShadowDOM.cjs');
var Icon = require('../Icon/Icon.cjs');
var IconButton = require('../IconButton/IconButton.cjs');
var IconListTile = require('../IconListTile/IconListTile.cjs');
var IconWithSpinner = require('../IconWithSpinner/IconWithSpinner.cjs');
require('../InlineWidget/InlineWidget.cjs');
require('../MenuList/Dropdown/Dropdown.cjs');
require('../Transition/ZoomTransition/ZoomTransition.cjs');
require('../Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../Transition/OpacityTransition/OpacityTransition.cjs');
var ModalHeader = require('../ModalHeader/ModalHeader.cjs');
require('../Popper/Popper/Popper.cjs');
require('../Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');
require('formik');
require('i18next');
var OverlayCard = require('../OverlayCard/OverlayCard.cjs');
require('../OverlayCard/OverlayCard.context.cjs');
require('../../context/ThemeContext/ThemeContext.cjs');
require('../../context/FooterAnimationContext/index.cjs');
require('../../context/QrCodeContext/QrCodeContext.cjs');
require('../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../context/LoadingContext/LoadingContext.cjs');
require('../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('../UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('@dynamic-labs/viem-utils');
require('../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');

const INTERNAL_MAX_INLINE_ITEMS = 5;
const SocialSignIn = ({ providers, onSelectProvider, isLoading, selectedProvider, testId, defaultProvider, numOfItemsToDisplay: externalMaxInlineItems = 5, collapsedLayout, }) => {
    const iconThemeVariant = useIconThemeVariant.useIconThemeVariant();
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
    const [showAllProvidersCard, setShowAllProvidersCard] = React.useState(false);
    const closeAllProvidersCard = () => !isLoading && setShowAllProvidersCard(false);
    // ====================================
    // REACT DISPLAY
    // ====================================
    // Display all with full width if there's only one, or
    // there's no wallet list and 3 social items or less
    const showAllFullWidth = providers.length === 1 || (!collapsedLayout && providers.length < 4);
    const getProviderAsString = (provider) => provider;
    const closeButton = (jsxRuntime.jsx(IconButton.IconButton, { onClick: closeAllProvidersCard, type: 'button', id: 'close-button', disabled: isLoading, "data-testid": 'close-button', children: jsxRuntime.jsx(close.ReactComponent, {}) }));
    const renderProviderItem = (provider, fullWidth = false, insideCard = false) => (jsxRuntime.jsxs(IconListTile.IconListTile, { dataTestId: insideCard ? `card-${provider}` : `inline-${provider}`, onClick: () => onSelectProvider(provider), disabled: Boolean(selectedProvider), className: classNames.classNames({
            'social-sign-in--card--tile': insideCard,
            'social-sign-in--tile': !insideCard,
            'social-sign-in--tile__full-width': fullWidth,
        }), children: [jsxRuntime.jsx(IconWithSpinner.IconWithSpinner, { Icon: 
                // eslint-disable-next-line react/jsx-wrap-multilines
                jsxRuntime.jsx(iconic.SocialIcon, { name: getProviderAsString(provider), variant: iconThemeVariant }), isSpinning: selectedProvider === provider, iconSize: 32 }), !insideCard && fullWidth && (jsxRuntime.jsxs(Typography.Typography, { variant: 'button_primary', children: ["Continue with ", capitalize.capitalize(getProviderAsString(provider))] }))] }, getProviderAsString(provider)));
    if (!providers.length) {
        logger.logger.error('Failed to render SocialSignInSection - no social providers enabled');
        return null;
    }
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs("div", { className: 'social-sign-in', "data-testid": testId, children: [defaultProvider && renderProviderItem(defaultProvider, true), cappedInlineProviders.map((provider) => renderProviderItem(provider, showAllFullWidth)), showAllProvidersButton && (jsxRuntime.jsx(IconListTile.IconListTile, { dataTestId: 'show-more-options', onClick: () => setShowAllProvidersCard(true), className: 'social-sign-in--tile', children: jsxRuntime.jsx(Icon.Icon, { color: 'text-primary', children: jsxRuntime.jsx(dotsHorizontal.ReactComponent, {}) }) }, 'show-more-options'))] }), jsxRuntime.jsx(OverlayCard.OverlayCard, { isOpen: showAllProvidersCard, onClickOverlay: closeAllProvidersCard, children: jsxRuntime.jsxs("div", { className: 'social-sign-in--card', children: [jsxRuntime.jsx(ModalHeader.ModalHeader, { trailing: closeButton, children: jsxRuntime.jsx(Typography.Typography, { weight: 'medium', variant: 'body_normal', color: 'primary', as: 'span', children: "Choose a social account" }) }), jsxRuntime.jsx("div", { className: 'social-sign-in--card--body', children: providers.map((provider) => renderProviderItem(provider, false, true)) })] }) })] }));
};

exports.SocialSignIn = SocialSignIn;
