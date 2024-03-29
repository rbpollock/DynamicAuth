'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var useUpdateUser = require('./useUpdateUser/useUpdateUser.cjs');
var useUpdateUserWithModal = require('./useUpdateUserWithModal/useUpdateUserWithModal.cjs');

/* eslint-disable sort-keys */
// Hook only available internally
const useUserUpdateRequestInternal = ({ validationSchemaStripUnknown, }) => {
    const updateUser = useUpdateUser.useUpdateUser(validationSchemaStripUnknown);
    const updateUserWithModal = useUpdateUserWithModal.useUpdateUserWithModal(updateUser);
    return { updateUser, updateUserWithModal };
};
// Hook exposed to the clients
// We do not want customers to be able to edit properties such as policiesConsent or captchaToken
const useUserUpdateRequest = () => 
// eslint-disable-next-line react-hooks/rules-of-hooks
useUserUpdateRequestInternal({ validationSchemaStripUnknown: true });

exports.useUserUpdateRequest = useUserUpdateRequest;
exports.useUserUpdateRequestInternal = useUserUpdateRequestInternal;
