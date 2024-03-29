import './polyfills.js';
export { VERSION } from './version.js';
export { getWallets } from './lib/views/WalletList/data.js';
export { getAuthToken } from './lib/utils/functions/getAuthToken/getAuthToken.js';
export { DynamicContext, DynamicContextProvider } from './lib/context/DynamicContext/DynamicContext.js';
export { useDynamicContext } from './lib/context/DynamicContext/useDynamicContext.js';
export { useDynamicScopes } from './lib/utils/hooks/useDynamicScopes/useDynamicScopes.js';
export { useUserWallets } from './lib/context/UserWalletsContext/UserWalletsContext.js';
export { DynamicBridgeWidget } from './lib/widgets/DynamicBridgeWidget/DynamicBridgeWidget.js';
export { DynamicEmbeddedAuthFlow } from './lib/widgets/DynamicEmbeddedWidget/DynamicEmbeddedAuthFlow/DynamicEmbeddedAuthFlow.js';
export { DynamicEmbeddedUserProfile } from './lib/widgets/DynamicEmbeddedWidget/DynamicEmbeddedUserProfile/DynamicEmbeddedUserProfile.js';
export { DynamicEmbeddedWidget } from './lib/widgets/DynamicEmbeddedWidget/DynamicEmbeddedWidget.js';
export { DynamicWidget } from './lib/widgets/DynamicWidget/DynamicWidget.js';
export { ShadowedDynamicNav as DynamicNav } from './lib/widgets/DynamicWidget/components/DynamicNav/DynamicNav.js';
export { ShadowedDynamicUserProfile as DynamicUserProfile } from './lib/widgets/DynamicWidget/components/DynamicUserProfile/DynamicUserProfile.js';
export { FundingWidget } from './lib/widgets/FundingWidget/FundingWidget.js';
import 'react/jsx-runtime';
export { classNames } from './lib/utils/functions/classNames/classNames.js';
import 'react';
export { useAuthenticateConnectedUser } from './lib/utils/hooks/useAuthenticateConnectedUser/useAuthenticateConnectedUser.js';
export { decodeJwt } from './lib/shared/utils/functions/decodeJwt/decodeJwt.js';
export { validateType } from './lib/shared/utils/functions/validateType/validateType.js';
export { getChainIcon } from './lib/shared/utils/functions/chain/getChainIcon.js';
export { getChainDisplayName } from './lib/shared/utils/functions/chain/getChainDisplayName.js';
export { createWallet } from './lib/shared/utils/functions/wallet/createWallet.js';
export { getValueByKey } from './lib/shared/utils/functions/getValueByKey/index.js';
export { detectBrowserName } from './lib/shared/utils/functions/detectBrowser/detectBrowser.js';
export { shortenWalletAddress } from './lib/shared/utils/functions/shortenWalletAddress/shortenWalletAddress.js';
export { debounce } from './lib/shared/utils/functions/debounce/debounce.js';
export { isSSR } from './lib/shared/utils/functions/isSSR/isSSR.js';
export { isDisplayOrderPriorityForWeb3 } from './lib/shared/utils/functions/isDisplayOrderPriorityForWeb3/isDisplayOrderPriorityForWeb3.js';
export { isDisplayOrderPriorityForWeb2 } from './lib/shared/utils/functions/isDisplayOrderPriorityForWeb2/isDisplayOrderPriorityForWeb2.js';
export { getWalletListItemLabel } from './lib/shared/utils/functions/getWalletListItemLabel/getWalletListItemLabel.js';
export { formatBigNumber } from './lib/shared/utils/functions/formatBigNumber/formatBigNumber.js';
export { trimEnd } from './lib/shared/utils/functions/trimEnd/trimEnd.js';
export { ceil } from './lib/shared/utils/functions/ceil/ceil.js';
export { useEffectOnce } from './lib/shared/utils/hooks/useEffectOnce/useEffectOnce.js';
export { useForwardedRef } from './lib/shared/utils/hooks/useForwardedRef/useForwardedRef.js';
export { useGlobalLoading } from './lib/shared/utils/hooks/useGlobalLoading/useGlobalLoading.js';
export { useLocalStorage } from './lib/shared/utils/hooks/useLocalStorage/useLocalStorage.js';
export { useMediaQuery } from './lib/shared/utils/hooks/useMediaQuery/useMediaQuery.js';
export { useOnClickOutside } from './lib/shared/utils/hooks/useOnClickOutside/index.js';
export { usePreventPageScroll } from './lib/shared/utils/hooks/usePreventPageScroll/usePreventPageScroll.js';
export { useThrottle } from './lib/shared/utils/hooks/useThrottle/useThrottle.js';
export { LocalStorage } from './lib/shared/utils/classes/storage/localStorage.js';
export { PhantomLedgerIcon } from './lib/shared/assets/wallets/PhantomLedgerIcon/PhantomLedgerIcon.js';
export { ReactComponent as AddWalletIcon } from './lib/shared/assets/add-wallet.js';
export { ReactComponent as AddIcon } from './lib/shared/assets/add.js';
export { ReactComponent as AndroidFaceId } from './lib/shared/assets/android-face-id.js';
export { ReactComponent as AndroidTouchId } from './lib/shared/assets/android-touch-id.js';
export { ReactComponent as ArrowDownIcon } from './lib/shared/assets/arrow-down.js';
export { ReactComponent as ArrowLeftIcon } from './lib/shared/assets/arrow-left.js';
export { ReactComponent as ArrowRightBackgroundIcon } from './lib/shared/assets/arrow-right-background.js';
export { ReactComponent as ArrowRightIcon } from './lib/shared/assets/arrow-right.js';
export { ReactComponent as AtIcon } from './lib/shared/assets/at.js';
export { ReactComponent as CheckCircleIcon } from './lib/shared/assets/check-circle.js';
export { ReactComponent as CheckConnectionIcon } from './lib/shared/assets/check-connection.js';
export { ReactComponent as CheckIcon } from './lib/shared/assets/check.js';
export { ReactComponent as ChevronLeftIcon } from './lib/shared/assets/chevron-left.js';
export { ReactComponent as CloseIcon } from './lib/shared/assets/close.js';
export { ReactComponent as CopyIcon } from './lib/shared/assets/copy.js';
export { ReactComponent as DotsHorizontalIcon } from './lib/shared/assets/dots-horizontal.js';
export { ReactComponent as DoubleArrowRightIcon } from './lib/shared/assets/double-arrow-right.js';
export { ReactComponent as DynamicLogoIcon } from './lib/shared/assets/dynamic-logo.js';
export { ReactComponent as EmbeddedWalletIcon } from './lib/shared/assets/embedded-wallet-icon.js';
export { ReactComponent as ErrorIcon } from './lib/shared/assets/error.js';
export { ReactComponent as ExternalLinkIcon } from './lib/shared/assets/externalLink.js';
export { ReactComponent as EyeIcon } from './lib/shared/assets/footer-eye-icon.js';
export { ReactComponent as GasIcon } from './lib/shared/assets/footer-gas-icon.js';
export { ReactComponent as InfoIcon } from './lib/shared/assets/footer-info-icon.js';
export { ReactComponent as KeyIcon } from './lib/shared/assets/footer-key-icon.js';
export { ReactComponent as IPhoneFaceId } from './lib/shared/assets/iphone-face-id.js';
export { ReactComponent as IPhoneTouchId } from './lib/shared/assets/iphone-touch-id.js';
export { ReactComponent as JustifiedTextIcon } from './lib/shared/assets/justified-text.js';
export { ReactComponent as KeyOutlineIcon } from './lib/shared/assets/key.js';
export { ReactComponent as LinkIcon } from './lib/shared/assets/link.js';
export { ReactComponent as LocationIcon } from './lib/shared/assets/location.js';
export { ReactComponent as LogoutIcon } from './lib/shared/assets/logout.js';
export { ReactComponent as MailIcon } from './lib/shared/assets/mail.js';
export { ReactComponent as PasskeyIntroIcon } from './lib/shared/assets/passkey-intro-icon.js';
export { ReactComponent as PasskeySuccessIcon } from './lib/shared/assets/passkey-success-icon.js';
export { ReactComponent as PencilAltIcon } from './lib/shared/assets/pencil-alt-icon.js';
export { ReactComponent as PencilIcon } from './lib/shared/assets/pencil.js';
export { ReactComponent as PhoneIcon } from './lib/shared/assets/phone.js';
export { ReactComponent as PromptAccountSwitch } from './lib/shared/assets/prompt-account-switch.js';
export { ReactComponent as PuzzleIcon } from './lib/shared/assets/puzzle.js';
export { ReactComponent as QuestionMarkIcon } from './lib/shared/assets/question-mark.js';
export { ReactComponent as SendIcon } from './lib/shared/assets/send.js';
export { ReactComponent as SignCircleIcon } from './lib/shared/assets/sign-circle.js';
export { ReactComponent as SignInWithEmailIcon } from './lib/shared/assets/sign-in-with-email.js';
export { ReactComponent as SizeLabelsIcon } from './lib/shared/assets/size-labels.js';
export { ReactComponent as SparklesIcon } from './lib/shared/assets/sparkles.js';
export { ReactComponent as SpinnerIcon } from './lib/shared/assets/spinner.js';
export { ReactComponent as ArrowIcon } from './lib/shared/assets/stroke.js';
export { ReactComponent as SwitchHorizontalIcon } from './lib/shared/assets/switch-horizontal.js';
export { ReactComponent as ThreeDots } from './lib/shared/assets/three-dots.js';
export { ReactComponent as TooltipArrow } from './lib/shared/assets/tooltip-arrow.js';
export { ReactComponent as UnlinkIcon } from './lib/shared/assets/unlink.js';
export { ReactComponent as UserCleanIcon } from './lib/shared/assets/user-account-2.js';
export { ReactComponent as UserCardIcon } from './lib/shared/assets/user-card.js';
export { ReactComponent as UserIcon } from './lib/shared/assets/user.js';
export { ReactComponent as WalletConnectLogo } from './lib/shared/assets/wallet-connect-logo.js';
export { ReactComponent as WalletOutlineIcon } from './lib/shared/assets/wallet-outline.js';
export { ReactComponent as WorkSuitcaseIcon } from './lib/shared/assets/work-suitcase.js';
export { ReactComponent as CircleLockerIcon } from './lib/shared/assets/circle-locker.js';
export { ReactComponent as TurnkeyIcon } from './lib/shared/assets/turnkey.js';
export { authModalZIndex, countryCodes, defaultWalletsForChains, tShirtSizes, teamNames, toolkitZIndex, tooltipZIndex, widgetModalZIndex } from './lib/shared/consts/index.js';
export { logger } from './lib/shared/logger.js';
import 'react-dom';
import '@dynamic-labs/utils';
export { DynamicJwtFromJSON } from '@dynamic-labs/sdk-api';
import './lib/config/ApiEndpoint.js';
export { normalizeWalletName } from '@dynamic-labs/wallet-connector-core';
import '@dynamic-labs/multi-wallet';
import './lib/utils/constants/colors.js';
export { isSameWalletName } from './lib/utils/functions/isSameWalletName/isSameWalletName.js';
import './lib/context/ViewContext/ViewContext.js';
export { useEmbeddedWallet } from './lib/utils/hooks/useEmbeddedWallet/useEmbeddedWallet.js';
import '@dynamic-labs/iconic';
import './lib/context/ThemeContext/ThemeContext.js';
export { useIsLoggedIn } from './lib/utils/hooks/useIsLoggedIn/useIsLoggedIn.js';
export { usePasskeyRecovery } from './lib/utils/hooks/usePasskeyRecovery/usePasskeyRecovery.js';
export { useSocialAccounts } from './lib/utils/hooks/useSocialAccounts/useSocialAccounts.js';
import 'yup';
import 'react-i18next';
export { MockContext, MockContextProvider, MockContextWrapper, useMockContext } from './lib/context/MockContext/MockContext.js';
export { useUserUpdateRequest } from './lib/utils/hooks/useUserUpdateRequest/useUserUpdateRequest.js';
import './lib/context/UserFieldEditorContext/UserFieldEditorContext.js';
import './lib/utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import './lib/context/AccessDeniedContext/AccessDeniedContext.js';
import './lib/context/AccountExistsContext/AccountExistsContext.js';
import './lib/context/ErrorContext/ErrorContext.js';
export { useWalletConnectorEvent } from './lib/utils/hooks/useWalletConnectorEvent/useWalletConnectorEvent.js';
export { useWalletItemActions } from './lib/utils/hooks/useWalletItemActions/useWalletItemActions.js';
import './lib/components/Transition/ZoomTransition/ZoomTransition.js';
import './lib/components/Transition/SlideInUpTransition/SlideInUpTransition.js';
import './lib/components/Transition/OpacityTransition/OpacityTransition.js';
export { ShadowDOM } from './lib/components/ShadowDOM/ShadowDOM.js';
import './lib/components/OverlayCard/OverlayCard.context.js';
import './lib/context/FooterAnimationContext/index.js';
import './lib/context/QrCodeContext/QrCodeContext.js';
import '@dynamic-labs/wallet-book';
import './lib/context/WalletGroupContext/WalletGroupContext.js';
import './lib/widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import './lib/context/CaptchaContext/CaptchaContext.js';
export { useEmailVerificationRequest } from './lib/utils/hooks/authenticationHooks/useEmailVerificationRequest/useEmailVerificationRequest.js';
import 'qrcode';
import './lib/context/LoadingContext/LoadingContext.js';
import 'i18next';
export { DynamicWidgetContextProvider } from './lib/widgets/DynamicWidget/context/DynamicWidgetContext.js';
import './lib/components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import 'formik';
import 'viem';
import './lib/components/IconButton/IconButton.js';
import './lib/components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import './lib/widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
export { DynamicConnectButton } from './lib/components/DynamicConnectButton/DynamicConnectButton.js';
import './lib/components/InlineWidget/InlineWidget.js';
export { IsBrowser } from './lib/components/IsBrowser/IsBrowser.js';
import './lib/components/MenuList/Dropdown/Dropdown.js';
import './lib/components/Popper/Popper/Popper.js';
import './lib/components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';
export { WalletList } from './lib/views/WalletList/WalletList.js';
export { PendingSignatureView } from './lib/views/PendingSignatureView/PendingSignatureView.js';
export { CollectUserDataView } from './lib/views/CollectUserDataView/CollectUserDataView.js';
export { NoQrNotInstalledView } from './lib/views/NoQrNotInstalledView/NoQrNotInstalledView.js';
export { QrCodeView } from './lib/views/QrCodeView/QrCodeView.js';
export { NoAccess } from './lib/views/NoAccess/NoAccess.js';
export { EmailConfirmationWaitingView } from './lib/views/EmailConfirmationWaitingView/EmailConfirmationWaitingView.js';
export { viewToComponentMap } from './lib/views/viewToComponentMap.js';
export { NetworkNotSupportedSwitchManual } from './lib/views/NetworkNotSupportedSwitchManual/NetworkNotSupportedSwitchManual.js';
export { getDefaultColor, getThemeConfig, themesData } from './lib/context/ThemeContext/themesData.js';
export { getNetwork } from './lib/utils/functions/getNetwork/getNetwork.js';
export { FilterAndSortWallets, FilterBridgeChainsName, FilterWallets, RemoveWallets, SortWallets, UniswapFilter } from './lib/utils/functions/walletFilters/index.js';
export { useSendBalance } from './lib/context/SendBalanceContext/SendBalanceContext.js';
import './lib/context/FundingContext/FundingContext.js';
export { useFunding } from './lib/context/FundingContext/useFunding/useFunding.js';
