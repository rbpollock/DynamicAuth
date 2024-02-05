import { __awaiter } from '../../../../_virtual/_tslib.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import { createContext, useCallback } from 'react';
import { UserFieldEditorModal } from '../../modals/UserFieldEditorModal/UserFieldEditorModal.js';
import '@dynamic-labs/utils';
import '../DynamicContext/DynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../CaptchaContext/CaptchaContext.js';
import '../ErrorContext/ErrorContext.js';
import '../ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-book';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import '../AccessDeniedContext/AccessDeniedContext.js';
import '../AccountExistsContext/AccountExistsContext.js';
import '../../config/ApiEndpoint.js';
import '../EmailVerificationContext/EmailVerificationContext.js';
import { useConfirmationModal } from '../../utils/hooks/useConfirmationModal/useConfirmationModal.js';
import '../ThemeContext/ThemeContext.js';
import '@dynamic-labs/types';
import 'yup';
import 'react-i18next';
import '../MockContext/MockContext.js';
import '../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '@dynamic-labs/rpc-providers';
import '../UserWalletsContext/UserWalletsContext.js';
import '../../components/Alert/Alert.js';
import 'react-dom';
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
import '../../components/OverlayCard/OverlayCard.context.js';
import '../FooterAnimationContext/index.js';
import '../QrCodeContext/QrCodeContext.js';
import '../WalletGroupContext/WalletGroupContext.js';
import '../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../LoadingContext/LoadingContext.js';
import '../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import '../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import '@dynamic-labs/viem-utils';
import '../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';

const UserFieldEditorContext = createContext(undefined);
const UserFieldEditorContextProvider = ({ children, }) => {
    const { modal, open } = useConfirmationModal({
        elementId: 'dynamic-edit-user-field',
    });
    /** Links the modal's actions to "open"'s resolve and reject */
    const openUserFieldEditor = useCallback((modalProps, applyChanges) => __awaiter(void 0, void 0, void 0, function* () {
        return open((resolve, reject) => {
            const onSubmit = (fields) => applyChanges(fields).then((result) => resolve({ fields, updateUserResult: result }));
            return (jsx(UserFieldEditorModal, { fields: modalProps.fields, submitText: modalProps.submitText, title: modalProps.title, subtitle: modalProps.subtitle, onCancel: reject, onSubmit: onSubmit }));
        });
    }), [open]);
    return (jsxs(UserFieldEditorContext.Provider, { value: { open: openUserFieldEditor }, children: [modal, children] }));
};

export { UserFieldEditorContext, UserFieldEditorContextProvider };
