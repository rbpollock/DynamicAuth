import { AUTH_TOKEN, AUTH_USER } from '../../../../utils/constants/localStorage.js';
import '../../../../utils/constants/colors.js';
import { logger } from '../../../logger.js';

const connectedKeys = {
    [AUTH_TOKEN]: [AUTH_USER],
    [AUTH_USER]: [AUTH_TOKEN],
};
class LocalStorage {
    static getDynamicLSKey(key) {
        return `${key}${LocalStorage.getSuffix()}`;
    }
    static validateRequest(key, fromAuxiliarAuthFunctions) {
        if (key === AUTH_TOKEN && !fromAuxiliarAuthFunctions) {
            throw new Error('You cannot access AUTH_TOKEN through localStorage. Use getAuthToken/ storeAuthToken helper functions instead');
        }
    }
    static setSuffix(localStorageSuffix) {
        if (!LocalStorage.__suffix__) {
            const suffix = (localStorageSuffix && `_${localStorageSuffix}`) || '';
            LocalStorage.__suffix__ = suffix;
        }
    }
    /**
     *
     * @param key
     * @param getAuth - verifies if the request to get AUTH_TOKEN is comming from getAuthToken and not directly
     * @returns
     */
    static getFromLS(key, getAuth = false) {
        if (typeof window === 'undefined') {
            return undefined;
        }
        LocalStorage.validateRequest(key, getAuth);
        const value = window.localStorage.getItem(LocalStorage.getDynamicLSKey(key));
        if (!value) {
            return undefined;
        }
        try {
            return JSON.parse(value);
        }
        catch (error) {
            logger.debug(`Error while parsing ${key} from local storage`, { value });
            // keep it in case handleLogOut is not yet loaded when calling this method
            [key]
                .concat(connectedKeys[key] || [])
                .forEach((_key) => LocalStorage.removeFromLS(_key));
            window.dispatchEvent(new Event('logOut'));
        }
        return undefined;
    }
    static removeFromLS(key) {
        if (typeof window === 'undefined') {
            return undefined;
        }
        return window.localStorage.removeItem(LocalStorage.getDynamicLSKey(key));
    }
    /**
     *
     * @param key
     * @param value
     * @param storeAuth - verifies if the request to get AUTH_TOKEN is comming from getAuthToken and not directly
     * @returns
     */
    static setToLS(key, value, storeAuth = false) {
        if (typeof window === 'undefined') {
            return;
        }
        LocalStorage.validateRequest(key, storeAuth);
        window.localStorage.setItem(LocalStorage.getDynamicLSKey(key), JSON.stringify(value));
    }
    static getKeys() {
        if (typeof window === 'undefined') {
            return [];
        }
        return Object.keys(window.localStorage);
    }
}
LocalStorage.getSuffix = () => LocalStorage.__suffix__ || '';

export { LocalStorage, LocalStorage as default };
