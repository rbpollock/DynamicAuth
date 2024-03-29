import { __awaiter } from '../../../../../_virtual/_tslib.js';
import { useRef, useEffect } from 'react';
import { DeferredPromise } from '@dynamic-labs/utils';
import { useFundingContext } from '../FundingContext.js';

const useFunding = () => {
    const promiseRef = useRef(null);
    const { fundingEnabled, setShowFunding, showFunding, updateSupportsFunding } = useFundingContext();
    const openFunding = ({ address, token } = {}) => __awaiter(void 0, void 0, void 0, function* () {
        if (!fundingEnabled) {
            throw new Error('Funding is not enabled');
        }
        if (promiseRef.current) {
            return promiseRef.current.promise;
        }
        if (address || token) {
            yield updateSupportsFunding({ address, token });
        }
        promiseRef.current = new DeferredPromise();
        setShowFunding(true);
        return promiseRef.current.promise;
    });
    useEffect(() => {
        if (!showFunding && promiseRef.current) {
            promiseRef.current.resolve();
            promiseRef.current = null;
        }
    }, [showFunding]);
    return {
        enabled: fundingEnabled,
        openFunding,
    };
};

export { useFunding };
