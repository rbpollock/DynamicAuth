'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
require('@dynamic-labs/utils');
require('../../../context/DynamicContext/DynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../context/ErrorContext/ErrorContext.cjs');
require('../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-book');
require('../../../utils/constants/colors.cjs');
require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
require('../../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../../config/ApiEndpoint.cjs');
require('../../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
require('../../../context/ThemeContext/ThemeContext.cjs');
var useResizeObserver = require('../../../utils/hooks/useResizeObserver/useResizeObserver.cjs');
require('@dynamic-labs/types');
var useTransition = require('../../../utils/hooks/useTransition/useTransition.cjs');
require('yup');
require('react-i18next');
require('../../../context/MockContext/MockContext.cjs');
require('../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../../context/UserWalletsContext/UserWalletsContext.cjs');
var classNames = require('../../../utils/functions/classNames/classNames.cjs');
require('../../Alert/Alert.cjs');
require('../../ShadowDOM/ShadowDOM.cjs');
require('../../IconButton/IconButton.cjs');
require('../../InlineWidget/InlineWidget.cjs');
require('../../MenuList/Dropdown/Dropdown.cjs');
require('../ZoomTransition/ZoomTransition.cjs');
require('../SlideInUpTransition/SlideInUpTransition.cjs');
require('../OpacityTransition/OpacityTransition.cjs');
require('../../Popper/Popper/Popper.cjs');
require('../../Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');
require('formik');
require('i18next');
require('../../OverlayCard/OverlayCard.context.cjs');
require('../../../context/FooterAnimationContext/index.cjs');
require('../../../context/QrCodeContext/QrCodeContext.cjs');
require('../../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../../../context/LoadingContext/LoadingContext.cjs');
require('../../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('../../UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('@dynamic-labs/viem-utils');
require('../../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');

const VerticalDrawerTransition = (_a) => {
    var { style, children, className } = _a, props = _tslib.__rest(_a, ["style", "children", "className"]);
    const containerRef = React.useRef(null);
    const childRef = React.useRef(null);
    const [childEntry] = useResizeObserver.useResizeObserver(childRef);
    const containerChildHeight = React.useMemo(() => childEntry === null || childEntry === void 0 ? void 0 : childEntry.height, [childEntry]);
    const { mount, stage, currentDuration } = useTransition.useTransition(Object.assign({ animateOnMount: false }, props));
    const maxHeight = React.useMemo(() => {
        if (!mount || stage === 'EXITING' || stage === 'UNMOUNT') {
            return 0;
        }
        return containerChildHeight;
    }, [stage, containerChildHeight, mount]);
    return (jsxRuntime.jsx("div", { ref: containerRef, className: classNames.classNames(className, 'vertical-drawer-animation'), style: Object.assign(Object.assign({}, style), { maxHeight, transitionDuration: `${currentDuration}ms` }), children: jsxRuntime.jsx("div", { ref: childRef, children: mount && children }) }));
};

exports.VerticalDrawerTransition = VerticalDrawerTransition;
