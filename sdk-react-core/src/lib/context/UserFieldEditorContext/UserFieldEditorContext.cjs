'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var UserFieldEditorModal = require('../../modals/UserFieldEditorModal/UserFieldEditorModal.cjs');
require('@dynamic-labs/utils');
require('../DynamicContext/DynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
require('../CaptchaContext/CaptchaContext.cjs');
require('../ErrorContext/ErrorContext.cjs');
require('../ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-book');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
require('../AccessDeniedContext/AccessDeniedContext.cjs');
require('../AccountExistsContext/AccountExistsContext.cjs');
require('../../config/ApiEndpoint.cjs');
require('../EmailVerificationContext/EmailVerificationContext.cjs');
var useConfirmationModal = require('../../utils/hooks/useConfirmationModal/useConfirmationModal.cjs');
require('../ThemeContext/ThemeContext.cjs');
require('@dynamic-labs/types');
require('yup');
require('react-i18next');
require('../MockContext/MockContext.cjs');
require('../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('@dynamic-labs/rpc-providers');
require('../UserWalletsContext/UserWalletsContext.cjs');
require('../../components/Alert/Alert.cjs');
require('react-dom');
require('../../components/ShadowDOM/ShadowDOM.cjs');
require('../../components/IconButton/IconButton.cjs');
require('../../components/InlineWidget/InlineWidget.cjs');
require('../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../components/Transition/ZoomTransition/ZoomTransition.cjs');
require('../../components/Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../components/Transition/OpacityTransition/OpacityTransition.cjs');
require('../../components/Popper/Popper/Popper.cjs');
require('../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');
require('formik');
require('i18next');
require('../../components/OverlayCard/OverlayCard.context.cjs');
require('../FooterAnimationContext/index.cjs');
require('../QrCodeContext/QrCodeContext.cjs');
require('../WalletGroupContext/WalletGroupContext.cjs');
require('../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('qrcode');
require('../LoadingContext/LoadingContext.cjs');
require('../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('@dynamic-labs/viem-utils');
require('../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');

const UserFieldEditorContext = React.createContext(undefined);
const UserFieldEditorContextProvider = ({ children, }) => {
    const { modal, open } = useConfirmationModal.useConfirmationModal({
        elementId: 'dynamic-edit-user-field',
    });
    /** Links the modal's actions to "open"'s resolve and reject */
    const openUserFieldEditor = React.useCallback((modalProps, applyChanges) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        return open((resolve, reject) => {
            const onSubmit = (fields) => applyChanges(fields).then((result) => resolve({ fields, updateUserResult: result }));
            return (jsxRuntime.jsx(UserFieldEditorModal.UserFieldEditorModal, { fields: modalProps.fields, submitText: modalProps.submitText, title: modalProps.title, subtitle: modalProps.subtitle, onCancel: reject, onSubmit: onSubmit }));
        });
    }), [open]);
    return (jsxRuntime.jsxs(UserFieldEditorContext.Provider, { value: { open: openUserFieldEditor }, children: [modal, children] }));
};

exports.UserFieldEditorContext = UserFieldEditorContext;
exports.UserFieldEditorContextProvider = UserFieldEditorContextProvider;
