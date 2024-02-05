'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var classNames = require('../../../../utils/functions/classNames/classNames.cjs');
require('@dynamic-labs/utils');
require('../../../../context/DynamicContext/DynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../../context/ErrorContext/ErrorContext.cjs');
require('../../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
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
var useResizeObserver = require('../../../../utils/hooks/useResizeObserver/useResizeObserver.cjs');
require('@dynamic-labs/types');
require('yup');
require('react-i18next');
require('../../../../context/MockContext/MockContext.cjs');
require('../../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../../../context/UserWalletsContext/UserWalletsContext.cjs');
require('../../../Alert/Alert.cjs');
require('../../../ShadowDOM/ShadowDOM.cjs');
require('../../../IconButton/IconButton.cjs');
require('../../../InlineWidget/InlineWidget.cjs');
require('../../../MenuList/Dropdown/Dropdown.cjs');
require('../../../Transition/ZoomTransition/ZoomTransition.cjs');
require('../../../Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../../Transition/OpacityTransition/OpacityTransition.cjs');
require('../../../Popper/Popper/Popper.cjs');
require('../../../Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');
require('formik');
require('i18next');
require('../../../OverlayCard/OverlayCard.context.cjs');
require('../../../../context/FooterAnimationContext/index.cjs');
require('../../../../context/QrCodeContext/QrCodeContext.cjs');
require('../../../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../../../context/LoadingContext/LoadingContext.cjs');
require('../../../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('../../../UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('@dynamic-labs/viem-utils');
require('../../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');

const AccordionItem = ({ children, className = '', isOpen, dataTestId, dimOnHide = false, }) => {
    const childRef = React.useRef(null);
    const lastValidChildHeight = React.useRef();
    const [childEntry] = useResizeObserver.useResizeObserver(childRef);
    const maxHeight = React.useMemo(() => {
        if (!isOpen)
            return 0;
        if (!childEntry)
            return lastValidChildHeight.current;
        return childEntry.height;
    }, [isOpen, childEntry]);
    React.useEffect(() => {
        const childHeight = childEntry === null || childEntry === void 0 ? void 0 : childEntry.height;
        if (childHeight) {
            lastValidChildHeight.current = childHeight;
        }
    }, [childEntry]);
    return (jsxRuntime.jsxs("div", { "data-testid": dataTestId, style: { maxHeight }, className: classNames.classNames(className, 'accordion-item', {
            'accordion-item--full-height': Boolean(maxHeight),
        }), children: [dimOnHide && (jsxRuntime.jsx("div", { "data-testid": 'accordion-item-curtain', className: classNames.classNames('accordion-item__curtain', {
                    'accordion-item__curtain--dimmed': !isOpen,
                }) })), jsxRuntime.jsx("div", { ref: childRef, children: children })] }));
};

exports.AccordionItem = AccordionItem;
