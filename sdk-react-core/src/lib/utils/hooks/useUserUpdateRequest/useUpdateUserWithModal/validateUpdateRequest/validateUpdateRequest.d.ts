import { ProjectSettings, UserFields } from '@dynamic-labs/sdk-api';
import { UserProfile } from '../../../../../shared';
/** This function is used to verify that an update request with modal is valid
 * @returns empty string if request is valid, a string with the error message otherwise
 */
export declare const validateUpdateRequest: (fields: (keyof UserFields)[], user: UserProfile | undefined, projectSettings: ProjectSettings | undefined) => string;
