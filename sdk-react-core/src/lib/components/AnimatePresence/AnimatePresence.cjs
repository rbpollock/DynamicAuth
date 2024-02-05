'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
require('@dynamic-labs/utils');
require('../../context/DynamicContext/DynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../../context/CaptchaContext/CaptchaContext.cjs');
require('../../context/ErrorContext/ErrorContext.cjs');
require('../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('react/jsx-runtime');
require('@dynamic-labs/wallet-book');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
require('../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../config/ApiEndpoint.cjs');
require('../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
require('../../context/ThemeContext/ThemeContext.cjs');
var useForceUpdate = require('../../utils/hooks/useForceUpdate/useForceUpdate.cjs');
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
require('../ShadowDOM/ShadowDOM.cjs');
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

const AnimatePresence = ({ children, animationComponent, }) => {
    const [isShown, setIsShown] = React.useState(true);
    const forceRerender = useForceUpdate.useForceUpdate();
    const childrenRef = React.useRef(null);
    const isChildrenPresent = React.useMemo(() => Boolean(children), [children]);
    const prevIsChildrenPresent = usePrevious.usePrevious(isChildrenPresent);
    const onUnmount = React.useCallback(() => {
        childrenRef.current = null;
        forceRerender();
    }, [forceRerender]);
    React.useEffect(() => {
        if (React.isValidElement(children)) {
            childrenRef.current = React.Children.map(children, (child) => React.cloneElement(child));
        }
    }, [children]);
    React.useEffect(() => {
        if (isChildrenPresent && !prevIsChildrenPresent) {
            setIsShown(true);
        }
        if (prevIsChildrenPresent && !isChildrenPresent) {
            setIsShown(false);
        }
    }, [isChildrenPresent, prevIsChildrenPresent]);
    return React.cloneElement(animationComponent, {
        children: children || childrenRef.current,
        isShown,
        onUnmount,
    });
};

exports.AnimatePresence = AnimatePresence;
