import { WalletProviderEnum } from '@dynamic-labs/sdk-api';
import { getEnabledKYC } from '../getEnabledKYC/index.js';

/**
 * The fields that are attached to the user and/or KYC but are not editable/showable.
 * @const {string[]}
 */
const filterFields = ['social'];
/**
 * Maps user profile fields to KYC settings based on project settings.
 *
 * @param {UserFields} user - The user profile object containing fields to map.
 * @param {ProjectSettingsKyc[]} projectSettingsKyc - The project settings KYC object array to map against.
 * @returns {ProjectSettingsKyc[]} - The mapped KYC settings object array.
 */
const mapUserFieldsToKycSettings = (user, projectSettingsKyc) => {
    // We do not want to use predefined KYC fields, but rather map all existing fields in the project.
    // This supports custom fields that may be added in the future.
    const fields = Object.entries(user).reduce((previousValue, [fieldName, fieldValue]) => {
        if (fieldValue) {
            const kycSetting = projectSettingsKyc.find((field) => field.name === fieldName);
            if (kycSetting && !kycSetting.enabled) {
                previousValue.push(Object.assign({}, kycSetting));
            }
        }
        return previousValue;
    }, []);
    return fields;
};
/**
 * Get editable user profile fields based on the project settings.
 * @param {ProjectSettingsKyc[]} projectSettings - The project settings KYC object array.
 * @returns {ProjectSettingsKyc[]} - The list of editable user profile fields based on project settings.
 */
const getEditableUserProfileFields = (projectSettings) => getEnabledKYC(projectSettings).filter(({ name }) => !filterFields.includes(name));
/**
 * Get non-editable user profile fields that exist in the user profile and are disabled in the project
 * @param {Object} options - The function options object.
 * @param {ProjectSettingsKyc[]} options.projectSettingsKyc - The project settings KYC object array.
 * @param {UserFields} options.user - The user profile object.
 * @returns {ProjectSettingsKyc[]} - The list of non-editable user profile fields based on project settings.
 */
const getNonEditableUserProfileFields = ({ projectSettingsKyc = [], user, }) => {
    if (!user)
        return [];
    const userProfileFields = mapUserFieldsToKycSettings(user, projectSettingsKyc);
    return userProfileFields.filter(({ name }) => !filterFields.includes(name));
};
/**
 * Get all user profile fields that exist in the user profile and are defined in the project
 * @param {Object} options - The function options object.
 * @param {ProjectSettingsKyc[]} options.projectSettingsKyc - The project settings KYC object array.
 * @param {UserProfile} options.user - The user profile object.
 * @returns {ProjectSettingsKyc[]} - The list of all user profile fields based on project settings.
 */
const getUserProfileFields = ({ projectSettingsKyc = [], user, }) => {
    var _a;
    const editableUserProfileFields = getEditableUserProfileFields(projectSettingsKyc);
    const nonEditableUserProfileFields = getNonEditableUserProfileFields({
        projectSettingsKyc,
        user,
    });
    let concatedList = [
        ...editableUserProfileFields,
        ...nonEditableUserProfileFields,
    ];
    const hasEmbeddedWallet = (_a = user === null || user === void 0 ? void 0 : user.verifiedCredentials) === null || _a === void 0 ? void 0 : _a.find(({ walletProvider }) => walletProvider === WalletProviderEnum.EmbeddedWallet);
    if (hasEmbeddedWallet) {
        concatedList = concatedList.map((field) => {
            if (field.name !== 'email') {
                return field;
            }
            return Object.assign(Object.assign({}, field), { enabled: false });
        });
    }
    return concatedList.sort((a, b) => {
        const indexA = projectSettingsKyc.findIndex((field) => field.name === a.name);
        const indexB = projectSettingsKyc.findIndex((field) => field.name === b.name);
        return indexA - indexB;
    });
};

export { getEditableUserProfileFields, getNonEditableUserProfileFields, getUserProfileFields };
