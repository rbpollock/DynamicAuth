import { useState, useEffect, useMemo, version } from 'react';
import { DynamicError } from '@dynamic-labs/utils';
import { sendDynamicProps, fetchProjectSettings } from '../../../data/api.js';
import '@dynamic-labs/sdk-api';
import { logger } from '../../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import 'react/jsx-runtime';
import '../../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/wallet-book';
import { PROJECT_SETTINGS_STORAGE_KEY, CONNECTED_WALLETS_INFO } from '../../constants/localStorage.js';
import '../../constants/colors.js';
import { LocalStorage } from '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import { useEffectOnce } from '../../../shared/utils/hooks/useEffectOnce/useEffectOnce.js';
import { useLocalStorage } from '../../../shared/utils/hooks/useLocalStorage/useLocalStorage.js';
import '../../../shared/consts/index.js';
import { validateLocalStorageExpiry } from '../../../context/DynamicContext/validators.js';

const useFetchProjectSettings = ({ authToken, environmentId, maxRetries = 2, dynamicContextProps, }) => {
    const [lsSettings, setLsSettings, removeLsSettings] = useLocalStorage(PROJECT_SETTINGS_STORAGE_KEY, undefined, validateLocalStorageExpiry);
    const [isLoading, setLoading] = useState(false);
    const [retries, setRetries] = useState(0);
    const lsSettingsExists = (lsSettings === null || lsSettings === void 0 ? void 0 : lsSettings.settings) !== undefined ? true : false;
    if (lsSettings &&
        lsSettings.environmentId &&
        lsSettings.environmentId !== environmentId) {
        removeLsSettings();
    }
    const overrideSettings = (projectSettings, overrides) => {
        if (!projectSettings) {
            return undefined;
        }
        let overrideSettings = projectSettings;
        if (overrides) {
            if (overrides.views) {
                overrideSettings = Object.assign(Object.assign({}, overrideSettings), { sdk: Object.assign(Object.assign({}, projectSettings.sdk), { views: overrides.views }) });
            }
        }
        return overrideSettings;
    };
    useEffect(() => {
        if (!lsSettingsExists &&
            !isLoading &&
            environmentId &&
            retries < maxRetries) {
            setLoading(true);
            // we ReactNode components are not being serialized properly
            // remove them for now and deal with them later
            // context: https://linear.app/dynamic-labs/issue/GVTY-328/[starknet]-sdk-api-is-not-serializing-react-components
            // future work: https://linear.app/dynamic-labs/issue/GVTY-330/bug-figure-out-why-react-components-are-not
            const updatedDynamicProps = {
                settings: Object.assign(Object.assign({}, dynamicContextProps.settings), { customPrivacyPolicy: Boolean(dynamicContextProps.settings.customPrivacyPolicy), customTermsOfServices: Boolean(dynamicContextProps.settings.customTermsOfServices), policiesConsentInnerComponent: Boolean(dynamicContextProps.settings.policiesConsentInnerComponent) }),
            };
            const serializedEventsCallbacks = serializeEventsCallbacks(updatedDynamicProps.settings.eventsCallbacks);
            const serializedWalletConnectors = serializeWalletConnectors(updatedDynamicProps.settings.walletConnectors);
            const serializedDynamicContextProps = Object.assign(Object.assign({}, updatedDynamicProps), { settings: Object.assign(Object.assign({}, updatedDynamicProps.settings), { eventsCallbacks: serializedEventsCallbacks, walletConnectors: serializedWalletConnectors }) });
            sendDynamicProps(environmentId, {
                dynamicContextProps: serializedDynamicContextProps,
                frameworkSettings: getFrameworkSettings(),
            });
            fetchProjectSettings(environmentId)
                .then((response) => {
                if (!response)
                    throw new DynamicError('Settings are not defined');
                const expiry = new Date().getTime() + 60000 * 5;
                setLsSettings({
                    environmentId,
                    expiry: expiry,
                    settings: response,
                });
            })
                .catch(() => {
                setRetries((currentRetries) => currentRetries + 1);
            })
                .finally(() => {
                setLoading(false);
            });
        }
    }, [environmentId, isLoading, lsSettingsExists, maxRetries, retries]);
    const settingsWithOverride = useMemo(() => overrideSettings(lsSettings === null || lsSettings === void 0 ? void 0 : lsSettings.settings, dynamicContextProps.settings.overrides), [lsSettings === null || lsSettings === void 0 ? void 0 : lsSettings.settings, dynamicContextProps.settings.overrides]);
    useEffectOnce(() => {
        const [connectedWalletData] = LocalStorage.getFromLS(CONNECTED_WALLETS_INFO) || [];
        if (!authToken && !connectedWalletData) {
            removeLsSettings();
        }
    });
    return {
        isLoading,
        projectSettings: settingsWithOverride,
        removeLsSettings,
    };
};
const serializeEventsCallbacks = (eventsCallbacks) => {
    try {
        if (!eventsCallbacks)
            return undefined;
        const eventsCallbackValues = Object.values(eventsCallbacks);
        const eventsCallbacksKeys = Object.keys(eventsCallbacks);
        return eventsCallbacksKeys.filter((key, index) => {
            if (eventsCallbackValues[index] === undefined) {
                return false;
            }
            return key;
        });
    }
    catch (error) {
        logger.error('error serializing eventsCallbacks', error);
        return undefined;
    }
};
const serializeWalletConnectors = (walletConnectors) => {
    try {
        if (!walletConnectors)
            return undefined;
        return walletConnectors.map((connector) => connector.name);
    }
    catch (error) {
        logger.error('error serializing walletConnectors', error);
        return undefined;
    }
};
const getFrameworkSettings = () => {
    var _a;
    return ({
        nextJs: {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            version: (_a = window.next) === null || _a === void 0 ? void 0 : _a.version,
        },
        react: {
            version,
        },
    });
};

export { serializeEventsCallbacks, serializeWalletConnectors, useFetchProjectSettings };
