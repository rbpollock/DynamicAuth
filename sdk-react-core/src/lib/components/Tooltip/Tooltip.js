import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useState, useRef, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import '../../context/ViewContext/ViewContext.js';
import { ReactComponent as SvgTooltipArrow } from '../../shared/assets/tooltip-arrow.js';
import '@dynamic-labs/wallet-book';
import { debounce } from '../../shared/utils/functions/debounce/debounce.js';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import { tooltipZIndex } from '../../shared/consts/index.js';
import { classNames } from '../../utils/functions/classNames/classNames.js';
import '../../context/DynamicContext/DynamicContext.js';
import '../../context/CaptchaContext/CaptchaContext.js';
import '../../context/ErrorContext/ErrorContext.js';
import '@dynamic-labs/multi-wallet';
import '../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../context/AccountExistsContext/AccountExistsContext.js';
import '../../config/ApiEndpoint.js';
import '../../context/EmailVerificationContext/EmailVerificationContext.js';
import { useElementById } from '../../utils/hooks/useElementById/useElementById.js';
import '../../context/ThemeContext/ThemeContext.js';
import { usePrevious } from '../../utils/hooks/usePrevious/usePrevious.js';
import '@dynamic-labs/types';
import 'yup';
import 'react-i18next';
import '../../context/MockContext/MockContext.js';
import '../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../../context/UserWalletsContext/UserWalletsContext.js';
import '../Alert/Alert.js';
import { useHover } from '../../utils/hooks/useHover/useHover.js';
import { ShadowDOM } from '../ShadowDOM/ShadowDOM.js';
import '../IconButton/IconButton.js';
import '../InlineWidget/InlineWidget.js';
import '../MenuList/Dropdown/Dropdown.js';
import '../Transition/ZoomTransition/ZoomTransition.js';
import '../Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../Transition/OpacityTransition/OpacityTransition.js';
import '../Popper/Popper/Popper.js';
import '../Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';
import 'formik';
import 'i18next';
import '../OverlayCard/OverlayCard.context.js';
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

const Tooltip = ({ children, content, className, as: Tag = 'span', copykey, }) => {
    const portalRoot = useElementById('dynamic-tooltips');
    const [childrenHover, childrenHoverHandlers] = useHover(false, true);
    const [hoversTooltip, setHoversTooltip] = useState(false);
    const previousHovers = usePrevious(childrenHover);
    const [vector, setVector] = useState([0, 0]);
    const childrenRef = useRef(null);
    const tooltipRef = useRef(null);
    const [visible, setVisible] = useState(false);
    const calcPosition = useCallback(() => {
        if (childrenRef.current) {
            const childrenBounding = childrenRef.current.getBoundingClientRect();
            setVector([
                childrenBounding.left + childrenBounding.width / 2,
                childrenBounding.top - 6, //add 6px margin over the children
            ]);
        }
    }, []);
    // Calculates position, and set visibles to true when client hovers children
    useEffect(() => {
        if (childrenHover || (hoversTooltip && previousHovers)) {
            calcPosition();
            setVisible(true);
        }
        else {
            setVisible(false);
        }
    }, [calcPosition, childrenHover, hoversTooltip, previousHovers]);
    // Updates top/left on initial render, and when window resizes
    useEffect(() => {
        calcPosition();
        const resizeListener = debounce(() => {
            calcPosition();
        }, 3);
        window.addEventListener('resize', resizeListener);
        return () => {
            window.removeEventListener('resize', resizeListener);
        };
    }, [calcPosition]);
    useEffect(() => {
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
    return (jsxs(Fragment, { children: [createPortal(jsx(ShadowDOM, { zIndex: tooltipZIndex, children: jsxs("div", { "data-testid": 'dynamicTooltip', className: classNames('dynamic-tooltip', {
                        'dynamic-tooltip--visible': visible,
                    }, className), style: { left: vector[0], top: vector[1] }, ref: tooltipRef, copykey: copykey, children: [content, jsx(SvgTooltipArrow, { className: 'dynamic-tooltip__arrow' })] }) }), portalRoot.current), jsx(Tag, Object.assign({ ref: childrenRef }, childrenHoverHandlers, { children: children }))] }));
};

export { Tooltip };
