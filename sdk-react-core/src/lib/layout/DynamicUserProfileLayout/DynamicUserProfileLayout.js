import { jsx, jsxs } from 'react/jsx-runtime';
import 'react';
import 'react-dom';
import '@dynamic-labs/utils';
import '../../context/DynamicContext/DynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../../context/CaptchaContext/CaptchaContext.js';
import '../../context/ErrorContext/ErrorContext.js';
import '../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-book';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import '../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../context/AccountExistsContext/AccountExistsContext.js';
import '../../config/ApiEndpoint.js';
import '../../context/EmailVerificationContext/EmailVerificationContext.js';
import '../../context/ThemeContext/ThemeContext.js';
import '@dynamic-labs/types';
import 'yup';
import 'react-i18next';
import '../../context/MockContext/MockContext.js';
import '../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../../context/UserWalletsContext/UserWalletsContext.js';
import { classNames } from '../../utils/functions/classNames/classNames.js';
import '../../components/Alert/Alert.js';
import '../../components/ShadowDOM/ShadowDOM.js';
import '../../components/IconButton/IconButton.js';
import '../../components/InlineWidget/InlineWidget.js';
import '../../components/MenuList/Dropdown/Dropdown.js';
import '../../components/Transition/ZoomTransition/ZoomTransition.js';
import '../../components/Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../../components/Transition/OpacityTransition/OpacityTransition.js';
import '../../components/Popper/Popper/Popper.js';
import '../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';
import 'formik';
import 'i18next';
import '../../context/FooterAnimationContext/index.js';
import '../../context/QrCodeContext/QrCodeContext.js';
import '../../context/WalletGroupContext/WalletGroupContext.js';
import { MemoizedDynamicWidgetHeader } from '../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import { DynamicWidgetPrompts } from '../../widgets/DynamicWidget/components/DynamicWidgetPrompts/DynamicWidgetPrompts.js';
import { DynamicWidgetViews } from '../../widgets/DynamicWidget/components/DynamicWidgetViews/DynamicWidgetViews.js';
import { useWidgetContext } from '../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import { DynamicPasskeyWidgetViews, DynamicTransactionsWidgetViews } from '../../widgets/DynamicWidget/context/DynamicWidgetContext.types.js';
import '@dynamic-labs/viem-utils';
import '../../components/OverlayCard/OverlayCard.context.js';
import { OverlayCardTarget } from '../../components/OverlayCard/OverlayCardTarget.js';

const shouldNotRenderHeaderViews = [
    ...DynamicPasskeyWidgetViews,
    ...DynamicTransactionsWidgetViews,
];
const DynamicUserProfileLayout = ({ variant, className, style, }) => {
    const { dynamicWidgetView } = useWidgetContext();
    // It should render header only if the view is not send-balance or one of passkey widgets view
    const shouldRenderHeader = !shouldNotRenderHeaderViews.includes(dynamicWidgetView);
    return (jsx(OverlayCardTarget, { children: jsxs("div", { className: classNames(className, 'dynamic-user-profile-layout'), style: style, children: [shouldRenderHeader && jsx(MemoizedDynamicWidgetHeader, { variant: variant }), jsx(DynamicWidgetViews, {}), jsx(DynamicWidgetPrompts, {})] }) }));
};

export { DynamicUserProfileLayout };
