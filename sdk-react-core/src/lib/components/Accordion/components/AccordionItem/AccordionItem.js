import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef, useMemo, useEffect } from 'react';
import { classNames } from '../../../../utils/functions/classNames/classNames.js';
import '@dynamic-labs/utils';
import '../../../../context/DynamicContext/DynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../../../../context/CaptchaContext/CaptchaContext.js';
import '../../../../context/ErrorContext/ErrorContext.js';
import '../../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../../../shared/logger.js';
import '@dynamic-labs/iconic';
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
import { useResizeObserver } from '../../../../utils/hooks/useResizeObserver/useResizeObserver.js';
import '@dynamic-labs/types';
import 'yup';
import 'react-i18next';
import '../../../../context/MockContext/MockContext.js';
import '../../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../../../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../../../../context/UserWalletsContext/UserWalletsContext.js';
import '../../../Alert/Alert.js';
import '../../../ShadowDOM/ShadowDOM.js';
import '../../../IconButton/IconButton.js';
import '../../../InlineWidget/InlineWidget.js';
import '../../../MenuList/Dropdown/Dropdown.js';
import '../../../Transition/ZoomTransition/ZoomTransition.js';
import '../../../Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../../../Transition/OpacityTransition/OpacityTransition.js';
import '../../../Popper/Popper/Popper.js';
import '../../../Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';
import 'formik';
import 'i18next';
import '../../../OverlayCard/OverlayCard.context.js';
import '../../../../context/FooterAnimationContext/index.js';
import '../../../../context/QrCodeContext/QrCodeContext.js';
import '../../../../context/WalletGroupContext/WalletGroupContext.js';
import '../../../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../../../context/LoadingContext/LoadingContext.js';
import '../../../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import '../../../UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import '@dynamic-labs/viem-utils';
import '../../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';

const AccordionItem = ({ children, className = '', isOpen, dataTestId, dimOnHide = false, }) => {
    const childRef = useRef(null);
    const lastValidChildHeight = useRef();
    const [childEntry] = useResizeObserver(childRef);
    const maxHeight = useMemo(() => {
        if (!isOpen)
            return 0;
        if (!childEntry)
            return lastValidChildHeight.current;
        return childEntry.height;
    }, [isOpen, childEntry]);
    useEffect(() => {
        const childHeight = childEntry === null || childEntry === void 0 ? void 0 : childEntry.height;
        if (childHeight) {
            lastValidChildHeight.current = childHeight;
        }
    }, [childEntry]);
    return (jsxs("div", { "data-testid": dataTestId, style: { maxHeight }, className: classNames(className, 'accordion-item', {
            'accordion-item--full-height': Boolean(maxHeight),
        }), children: [dimOnHide && (jsx("div", { "data-testid": 'accordion-item-curtain', className: classNames('accordion-item__curtain', {
                    'accordion-item__curtain--dimmed': !isOpen,
                }) })), jsx("div", { ref: childRef, children: children })] }));
};

export { AccordionItem };
