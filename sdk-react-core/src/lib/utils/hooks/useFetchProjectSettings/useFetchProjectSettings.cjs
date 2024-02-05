'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var utils = require('@dynamic-labs/utils');
var api = require('../../../data/api.cjs');
require('@dynamic-labs/sdk-api');
var logger = require('../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('react/jsx-runtime');
require('../../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/wallet-book');
var localStorage = require('../../constants/localStorage.cjs');
require('../../constants/colors.cjs');
var localStorage$1 = require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
var useEffectOnce = require('../../../shared/utils/hooks/useEffectOnce/useEffectOnce.cjs');
var useLocalStorage = require('../../../shared/utils/hooks/useLocalStorage/useLocalStorage.cjs');
require('../../../shared/consts/index.cjs');
var validators = require('../../../context/DynamicContext/validators.cjs');

const useFetchProjectSettings = ({ authToken, environmentId, maxRetries = 2, dynamicContextProps, }) => {
    const [lsSettings, setLsSettings, removeLsSettings] = useLocalStorage.useLocalStorage(localStorage.PROJECT_SETTINGS_STORAGE_KEY, undefined, validators.validateLocalStorageExpiry);
    const [isLoading, setLoading] = React.useState(false);
    const [retries, setRetries] = React.useState(0);
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
    React.useEffect(() => {
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
            api.sendDynamicProps(environmentId, {
                dynamicContextProps: serializedDynamicContextProps,
                frameworkSettings: getFrameworkSettings(),
            });
            api.fetchProjectSettings(environmentId)
                .then((response) => {
                if (!response)
                    throw new utils.DynamicError('Settings are not defined');
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
    const settingsWithOverride = React.useMemo(() => overrideSettings(lsSettings === null || lsSettings === void 0 ? void 0 : lsSettings.settings, dynamicContextProps.settings.overrides), [lsSettings === null || lsSettings === void 0 ? void 0 : lsSettings.settings, dynamicContextProps.settings.overrides]);
    useEffectOnce.useEffectOnce(() => {
        const [connectedWalletData] = localStorage$1.LocalStorage.getFromLS(localStorage.CONNECTED_WALLETS_INFO) || [];
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
        logger.logger.error('error serializing eventsCallbacks', error);
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
        logger.logger.error('error serializing walletConnectors', error);
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
            version: React.version,
        },
    });
};

exports.serializeEventsCallbacks = serializeEventsCallbacks;
exports.serializeWalletConnectors = serializeWalletConnectors;
exports.useFetchProjectSettings = useFetchProjectSettings;
