'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactDom = require('react-dom');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('../../context/ViewContext/ViewContext.cjs');
var tooltipArrow = require('../../shared/assets/tooltip-arrow.cjs');
require('@dynamic-labs/wallet-book');
var debounce = require('../../shared/utils/functions/debounce/debounce.cjs');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
var index = require('../../shared/consts/index.cjs');
var classNames = require('../../utils/functions/classNames/classNames.cjs');
require('../../context/DynamicContext/DynamicContext.cjs');
require('../../context/CaptchaContext/CaptchaContext.cjs');
require('../../context/ErrorContext/ErrorContext.cjs');
require('@dynamic-labs/multi-wallet');
require('../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../config/ApiEndpoint.cjs');
require('../../context/EmailVerificationContext/EmailVerificationContext.cjs');
var useElementById = require('../../utils/hooks/useElementById/useElementById.cjs');
require('../../context/ThemeContext/ThemeContext.cjs');
var usePrevious = require('../../utils/hooks/usePrevious/usePrevious.cjs');
require('@dynamic-labs/types');
require('yup');
require('react-i18next');
require('../../context/MockContext/MockContext.cjs');
require('../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../context/UserWalletsContext/UserWalletsContext.cjs');
require('../Alert/Alert.cjs');
var useHover = require('../../utils/hooks/useHover/useHover.cjs');
var ShadowDOM = require('../ShadowDOM/ShadowDOM.cjs');
require('../IconButton/IconButton.cjs');
require('../InlineWidget/InlineWidget.cjs');
require('../MenuList/Dropdown/Dropdown.cjs');
require('../Transition/ZoomTransition/ZoomTransition.cjs');
require('../Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../Transition/OpacityTransition/OpacityTransition.cjs');
require('../Popper/Popper/Popper.cjs');
require('../Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');
require('formik');
require('i18next');
require('../OverlayCard/OverlayCard.context.cjs');
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

const Tooltip = ({ children, content, className, as: Tag = 'span', copykey, }) => {
    const portalRoot = useElementById.useElementById('dynamic-tooltips');
    const [childrenHover, childrenHoverHandlers] = useHover.useHover(false, true);
    const [hoversTooltip, setHoversTooltip] = React.useState(false);
    const previousHovers = usePrevious.usePrevious(childrenHover);
    const [vector, setVector] = React.useState([0, 0]);
    const childrenRef = React.useRef(null);
    const tooltipRef = React.useRef(null);
    const [visible, setVisible] = React.useState(false);
    const calcPosition = React.useCallback(() => {
        if (childrenRef.current) {
            const childrenBounding = childrenRef.current.getBoundingClientRect();
            setVector([
                childrenBounding.left + childrenBounding.width / 2,
                childrenBounding.top - 6, //add 6px margin over the children
            ]);
        }
    }, []);
    // Calculates position, and set visibles to true when client hovers children
    React.useEffect(() => {
        if (childrenHover || (hoversTooltip && previousHovers)) {
            calcPosition();
            setVisible(true);
        }
        else {
            setVisible(false);
        }
    }, [calcPosition, childrenHover, hoversTooltip, previousHovers]);
    // Updates top/left on initial render, and when window resizes
    React.useEffect(() => {
        calcPosition();
        const resizeListener = debounce.debounce(() => {
            calcPosition();
        }, 3);
        window.addEventListener('resize', resizeListener);
        return () => {
            window.removeEventListener('resize', resizeListener);
        };
    }, [calcPosition]);
    React.useEffect(() => {
        const tooltip = tooltipRef.current;
        const onMouseEnter = () => {
            setHoversTooltip(true);
        };
        const onMouseLeave = () => {
            setHoversTooltip(false);
        };
        tooltip === null || tooltip === void 0 ? void 0 : tooltip.addEventListener('mouseenter', onMouseEnter);
        tooltip === null || tooltip === void 0 ? void 0 : tooltip.addEventListener('mouseleave', onMouseLeave);
        return () => {
            tooltip === null || tooltip === void 0 ? void 0 : tooltip.removeEventListener('mouseover', onMouseEnter);
            tooltip === null || tooltip === void 0 ? void 0 : tooltip.removeEventListener('mouseleave', onMouseLeave);
        };
    });
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [reactDom.createPortal(jsxRuntime.jsx(ShadowDOM.ShadowDOM, { zIndex: index.tooltipZIndex, children: jsxRuntime.jsxs("div", { "data-testid": 'dynamicTooltip', className: classNames.classNames('dynamic-tooltip', {
                        'dynamic-tooltip--visible': visible,
                    }, className), style: { left: vector[0], top: vector[1] }, ref: tooltipRef, copykey: copykey, children: [content, jsxRuntime.jsx(tooltipArrow.ReactComponent, { className: 'dynamic-tooltip__arrow' })] }) }), portalRoot.current), jsxRuntime.jsx(Tag, Object.assign({ ref: childrenRef }, childrenHoverHandlers, { children: children }))] }));
};

exports.Tooltip = Tooltip;
