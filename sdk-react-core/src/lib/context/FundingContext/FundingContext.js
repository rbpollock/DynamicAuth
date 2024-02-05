import { __awaiter } from '../../../../_virtual/_tslib.js';
import { jsx } from 'react/jsx-runtime';
import { createContext, useContext, useRef, useState, useCallback, useMemo, useEffect } from 'react';
import { getChainInfo } from '@dynamic-labs/wallet-connector-core';
import { getOnrampProviders } from '../../data/api.js';
import { useInternalDynamicContext } from '../DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import '@dynamic-labs/iconic';
import '../ViewContext/ViewContext.js';
import '@dynamic-labs/wallet-book';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import { isOnrampProvider } from '../../utils/functions/isOnrampProvider/isOnrampProvider.js';

const FundingContext = createContext(undefined);
const FundingContextProvider = ({ children, }) => {
    var _a, _b;
    const fundingRef = useRef(null);
    const [showFunding, setShowFunding] = useState(false);
    const [supportsFunding, setSupportsFunding] = useState(false);
    const [fundingUrl, setFundingUrl] = useState('');
    const { environmentId, network, primaryWallet, projectSettings } = useInternalDynamicContext();
    const fundingEnabled = (_b = (_a = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.providers) === null || _a === void 0 ? void 0 : _a.some((p) => isOnrampProvider(p) && Boolean(p.enabledAt))) !== null && _b !== void 0 ? _b : false;
    const updateSupportsFunding = useCallback(({ address, token } = {}) => __awaiter(void 0, void 0, void 0, function* () {
        var _c;
        if (!fundingEnabled)
            return;
        if (!primaryWallet)
            return;
        const chainName = (_c = getChainInfo(primaryWallet.chain)) === null || _c === void 0 ? void 0 : _c.name;
        if (!chainName)
            return;
        try {
            const [{ url }] = yield getOnrampProviders({
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
    const value = useMemo(() => ({
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
    useEffect(() => {
        updateSupportsFunding();
    }, [environmentId, fundingEnabled, network, primaryWallet === null || primaryWallet === void 0 ? void 0 : primaryWallet.address]);
    return (jsx(FundingContext.Provider, { value: value, children: children }));
};
const useFundingContext = () => {
    const context = useContext(FundingContext);
    if (context === undefined) {
        throw new Error('usage of useFundingContext not wrapped in `FundingContextProvider`.');
    }
    return context;
};

export { FundingContext, FundingContextProvider, useFundingContext };
