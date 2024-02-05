'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
var api = require('../../data/api.cjs');
var useInternalDynamicContext = require('../DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('../ViewContext/ViewContext.cjs');
require('@dynamic-labs/wallet-book');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
var isOnrampProvider = require('../../utils/functions/isOnrampProvider/isOnrampProvider.cjs');

const FundingContext = React.createContext(undefined);
const FundingContextProvider = ({ children, }) => {
    var _a, _b;
    const fundingRef = React.useRef(null);
    const [showFunding, setShowFunding] = React.useState(false);
    const [supportsFunding, setSupportsFunding] = React.useState(false);
    const [fundingUrl, setFundingUrl] = React.useState('');
    const { environmentId, network, primaryWallet, projectSettings } = useInternalDynamicContext.useInternalDynamicContext();
    const fundingEnabled = (_b = (_a = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.providers) === null || _a === void 0 ? void 0 : _a.some((p) => isOnrampProvider.isOnrampProvider(p) && Boolean(p.enabledAt))) !== null && _b !== void 0 ? _b : false;
    const updateSupportsFunding = React.useCallback(({ address, token } = {}) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        var _c;
        if (!fundingEnabled)
            return;
        if (!primaryWallet)
            return;
        const chainName = (_c = walletConnectorCore.getChainInfo(primaryWallet.chain)) === null || _c === void 0 ? void 0 : _c.name;
        if (!chainName)
            return;
        try {
            const [{ url }] = yield api.getOnrampProviders({
                chain: chainName,
                environmentId,
                networkId: network ? network.toString() : undefined,
                token,
                walletAddress: address ? address : primaryWallet.address,
            });
            if (!url)
                throw new Error('No onramp url found');
            setFundingUrl(url);
            setSupportsFunding(true);
        }
        catch (error) {
            setSupportsFunding(false);
        }
    }), [environmentId, fundingEnabled, network, primaryWallet]);
    const value = React.useMemo(() => ({
        fundingEnabled,
        fundingRef,
        fundingUrl,
        setShowFunding,
        showFunding,
        supportsFunding,
        updateSupportsFunding,
    }), [
        fundingEnabled,
        fundingUrl,
        showFunding,
        supportsFunding,
        updateSupportsFunding,
    ]);
    React.useEffect(() => {
        updateSupportsFunding();
    }, [environmentId, fundingEnabled, network, primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.address]);
    return (jsxRuntime.jsx(FundingContext.Provider, { value: value, children: children }));
};
const useFundingContext = () => {
    const context = React.useContext(FundingContext);
    if (context === undefined) {
        throw new Error('usage of useFundingContext not wrapped in `FundingContextProvider`.');
    }
    return context;
};

exports.FundingContext = FundingContext;
exports.FundingContextProvider = FundingContextProvider;
exports.useFundingContext = useFundingContext;
