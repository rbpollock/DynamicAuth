'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../../_virtual/_tslib.cjs');
var React = require('react');
var yup = require('yup');
var useInternalDynamicContext = require('../../../../context/DynamicContext/useInternalDynamicContext.cjs');
var EmailVerificationContext = require('../../../../context/EmailVerificationContext/EmailVerificationContext.cjs');
var api = require('../../../../data/api.cjs');
var decodeJwt = require('../../../../shared/utils/functions/decodeJwt/decodeJwt.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('react/jsx-runtime');
require('../../../../context/ViewContext/ViewContext.cjs');
require('../../../../shared/logger.cjs');
require('@dynamic-labs/wallet-book');
require('../../../constants/colors.cjs');
require('../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../../../shared/consts/index.cjs');
var isEmailVerificationRequired = require('../../../functions/authenication/isEmailVerificationRequired/isEmailVerificationRequired.cjs');
require('../../../../context/CaptchaContext/CaptchaContext.cjs');
require('../../../../context/ErrorContext/ErrorContext.cjs');
require('@dynamic-labs/multi-wallet');
require('@dynamic-labs/sdk-api');
require('../../../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../../../context/AccountExistsContext/AccountExistsContext.cjs');
var useEmailVerificationRequest = require('../../authenticationHooks/useEmailVerificationRequest/useEmailVerificationRequest.cjs');
var useUpdateUserProfileByJWTCallback = require('../../useUpdateUserProfileByJWTCallback/useUpdateUserProfileByJWTCallback.cjs');

// User Fields Schema without captchaToken and policiesConsent properties
const userFieldsSchema = yup.object().shape({
    alias: yup.string(),
    btcWallet: yup.string(),
    ckbWallet: yup.string(),
    country: yup.string(),
    discordNotification: yup.boolean(),
    dogeWallet: yup.string(),
    email: yup.string(),
    emailNotification: yup.boolean(),
    firstName: yup.string(),
    jobTitle: yup.string(),
    kasWallet: yup.string(),
    kdaWallet: yup.string(),
    lastName: yup.string(),
    ltcWallet: yup.string(),
    metadata: yup.object(),
    newsletterNotification: yup.boolean(),
    phoneNumber: yup.string(),
    tShirtSize: yup.string(),
    team: yup.string(),
    username: yup.string(),
});
const useUpdateUser = (validationSchemaStripUnknown) => {
    const { authToken, onboardingOnlyJwt, environmentId } = useInternalDynamicContext.useInternalDynamicContext();
    const jwtToken = onboardingOnlyJwt || authToken;
    const { setVerificationUUID, setEmail } = EmailVerificationContext.useEmailVerificationContext();
    const { verifyEmail } = useEmailVerificationRequest.useEmailVerificationRequest();
    const { updateUserProfileByJWT } = useUpdateUserProfileByJWTCallback.useUpdateUserProfileByJWTCallback();
    return React.useCallback((userFields, userEnvironmentId) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c;
        // `stripUnknown: true` will automatically strip out any values in the metadata object
        // so we need to pull out the metadata object here and then re-add it after stripping unknown fields
        const { metadata } = userFields;
        const validatedUserFields = yield userFieldsSchema.validate(userFields, {
            stripUnknown: validationSchemaStripUnknown,
        });
        const updateUserProfileResponse = yield api.updateUserProfileFields(jwtToken, userEnvironmentId || environmentId, Object.assign(Object.assign({}, validatedUserFields), { metadata }));
        // check if decoded JWT still somehow has missing fields, we can't proceed if it does
        const decodedJwt = decodeJwt.decodeJwt(updateUserProfileResponse.jwt);
        const missingFields = (_a = decodedJwt === null || decodedJwt === void 0 ? void 0 : decodedJwt.missingFields) !== null && _a !== void 0 ? _a : [];
        const _isEmailVerificationRequired = isEmailVerificationRequired.isEmailVerificationRequired(updateUserProfileResponse);
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

exports.useUpdateUser = useUpdateUser;
