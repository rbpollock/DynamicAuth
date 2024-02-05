import { __awaiter } from '../../../../../../_virtual/_tslib.js';
import { useCallback } from 'react';
import { object, string, boolean } from 'yup';
import { useInternalDynamicContext } from '../../../../context/DynamicContext/useInternalDynamicContext.js';
import { useEmailVerificationContext } from '../../../../context/EmailVerificationContext/EmailVerificationContext.js';
import { updateUserProfileFields } from '../../../../data/api.js';
import { decodeJwt } from '../../../../shared/utils/functions/decodeJwt/decodeJwt.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import 'react/jsx-runtime';
import '../../../../context/ViewContext/ViewContext.js';
import '../../../../shared/logger.js';
import '@dynamic-labs/wallet-book';
import '../../../constants/colors.js';
import '../../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../../../shared/consts/index.js';
import { isEmailVerificationRequired } from '../../../functions/authenication/isEmailVerificationRequired/isEmailVerificationRequired.js';
import '../../../../context/CaptchaContext/CaptchaContext.js';
import '../../../../context/ErrorContext/ErrorContext.js';
import '@dynamic-labs/multi-wallet';
import '@dynamic-labs/sdk-api';
import '../../../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../../../context/AccountExistsContext/AccountExistsContext.js';
import { useEmailVerificationRequest } from '../../authenticationHooks/useEmailVerificationRequest/useEmailVerificationRequest.js';
import { useUpdateUserProfileByJWTCallback } from '../../useUpdateUserProfileByJWTCallback/useUpdateUserProfileByJWTCallback.js';

// User Fields Schema without captchaToken and policiesConsent properties
const userFieldsSchema = object().shape({
    alias: string(),
    btcWallet: string(),
    ckbWallet: string(),
    country: string(),
    discordNotification: boolean(),
    dogeWallet: string(),
    email: string(),
    emailNotification: boolean(),
    firstName: string(),
    jobTitle: string(),
    kasWallet: string(),
    kdaWallet: string(),
    lastName: string(),
    ltcWallet: string(),
    metadata: object(),
    newsletterNotification: boolean(),
    phoneNumber: string(),
    tShirtSize: string(),
    team: string(),
    username: string(),
});
const useUpdateUser = (validationSchemaStripUnknown) => {
    const { authToken, onboardingOnlyJwt, environmentId } = useInternalDynamicContext();
    const jwtToken = onboardingOnlyJwt || authToken;
    const { setVerificationUUID, setEmail } = useEmailVerificationContext();
    const { verifyEmail } = useEmailVerificationRequest();
    const { updateUserProfileByJWT } = useUpdateUserProfileByJWTCallback();
    return useCallback((userFields, userEnvironmentId) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c;
        // `stripUnknown: true` will automatically strip out any values in the metadata object
        // so we need to pull out the metadata object here and then re-add it after stripping unknown fields
        const { metadata } = userFields;
        const validatedUserFields = yield userFieldsSchema.validate(userFields, {
            stripUnknown: validationSchemaStripUnknown,
        });
        const updateUserProfileResponse = yield updateUserProfileFields(jwtToken, userEnvironmentId || environmentId, Object.assign(Object.assign({}, validatedUserFields), { metadata }));
        // check if decoded JWT still somehow has missing fields, we can't proceed if it does
        const decodedJwt = decodeJwt(updateUserProfileResponse.jwt);
        const missingFields = (_a = decodedJwt === null || decodedJwt === void 0 ? void 0 : decodedJwt.missingFields) !== null && _a !== void 0 ? _a : [];
        const _isEmailVerificationRequired = isEmailVerificationRequired(updateUserProfileResponse);
        if (!_isEmailVerificationRequired) {
            // If email verification is not needed then we can update the user profile immediately.
            yield updateUserProfileByJWT(updateUserProfileResponse.jwt);
            return {
                isEmailVerificationRequired: false,
                missingFields,
                updateUserProfileResponse,
            };
        }
        // We update EmailContext to use this information in the Email Verification view
        setEmail((_b = updateUserProfileResponse.emailVerification) === null || _b === void 0 ? void 0 : _b.email);
        setVerificationUUID((_c = updateUserProfileResponse.emailVerification) === null || _c === void 0 ? void 0 : _c.verificationUUID);
        // DYN-2046 - Customers have the opportunity to programmatically use our email verification and profile editing.
        // VerifyEmailFN was scoped to bypass the problem with memoization of the state at the beginning of Promise.
        // setEmail and setVerificationUUID in the above lines will are not visible in this promise.
        const scopedVerifyEmailFn = (verificationToken) => {
            var _a;
            return verifyEmail(verificationToken, (_a = updateUserProfileResponse.emailVerification) === null || _a === void 0 ? void 0 : _a.verificationUUID);
        };
        return {
            isEmailVerificationRequired: true,
            missingFields,
            updateUserProfileResponse,
            verifyEmailFn: scopedVerifyEmailFn,
        };
    }), [
        environmentId,
        jwtToken,
        setEmail,
        setVerificationUUID,
        validationSchemaStripUnknown,
        updateUserProfileByJWT,
        verifyEmail,
    ]);
};

export { useUpdateUser };
