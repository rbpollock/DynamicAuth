import { __awaiter } from '../../../../../../_virtual/_tslib.js';
import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { useCallback } from 'react';
import '@dynamic-labs/utils';
import { useInternalDynamicContext } from '../../../../context/DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import '../../../../context/CaptchaContext/CaptchaContext.js';
import '../../../../context/ErrorContext/ErrorContext.js';
import { useViewContext } from '../../../../context/ViewContext/ViewContext.js';
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
import { useKYCFlag } from '../../../../utils/hooks/useKYCFlag/useKYCFlag.js';
import '@dynamic-labs/types';
import 'yup';
import 'react-i18next';
import '../../../../context/MockContext/MockContext.js';
import { useUserUpdateRequestInternal } from '../../../../utils/hooks/useUserUpdateRequest/useUserUpdateRequest.js';
import '../../../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '../../../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '@dynamic-labs/rpc-providers';
import '../../../../context/UserWalletsContext/UserWalletsContext.js';
import '../../../../components/Transition/ZoomTransition/ZoomTransition.js';
import '../../../../components/Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../../../../components/Transition/OpacityTransition/OpacityTransition.js';
import '../../../../components/ShadowDOM/ShadowDOM.js';
import '../../../../components/OverlayCard/OverlayCard.context.js';
import '../../../../context/FooterAnimationContext/index.js';
import '../../../../context/QrCodeContext/QrCodeContext.js';
import { Typography } from '../../../../components/Typography/Typography.js';
import '../../../../context/WalletGroupContext/WalletGroupContext.js';
import '../../components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import 'qrcode';
import '../../../../context/LoadingContext/LoadingContext.js';
import 'i18next';
import { useWidgetContext } from '../../context/DynamicWidgetContext.js';
import '../../../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import { UserProfileForm } from '../../../../components/UserProfileForm/UserProfileForm.js';
import '../../../../components/IconButton/IconButton.js';
import '../../../../components/Alert/Alert.js';
import '@dynamic-labs/viem-utils';
import '../ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';
import '../../../../components/InlineWidget/InlineWidget.js';
import '../../../../components/MenuList/Dropdown/Dropdown.js';
import '../../../../components/Popper/Popper/Popper.js';
import '../../../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';
import 'formik';

const EditProfileView = ({ rootClassName, }) => {
    const { setView } = useViewContext();
    const { internalSetShowAuthFlow, multiWallet } = useInternalDynamicContext();
    const { goToProfileView } = useWidgetContext();
    const { updateUser } = useUserUpdateRequestInternal({
        validationSchemaStripUnknown: true,
    });
    const onEditProfileFormSubmit = useCallback((formValues) => __awaiter(void 0, void 0, void 0, function* () {
        const { isEmailVerificationRequired } = yield updateUser(formValues);
        goToProfileView();
        if (isEmailVerificationRequired) {
            internalSetShowAuthFlow(true);
            setView('verify-email');
        }
    }), [goToProfileView, internalSetShowAuthFlow, setView, updateUser]);
    const isKYCEnabled = useKYCFlag();
    return (jsxs(Fragment, { children: [!multiWallet && isKYCEnabled && (jsx(Typography, { weight: 'regular', color: 'secondary', variant: 'body_normal', className: 'dynamic-widget-edit-profile-view__profile-title', children: "My information" })), jsx(UserProfileForm, { formClassName: rootClassName, onEditProfileSubmit: onEditProfileFormSubmit, onEditProfileCancel: goToProfileView })] }));
};

export { EditProfileView };
