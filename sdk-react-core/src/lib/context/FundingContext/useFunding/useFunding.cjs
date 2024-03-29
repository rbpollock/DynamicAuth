'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var React = require('react');
var utils = require('@dynamic-labs/utils');
var FundingContext = require('../FundingContext.cjs');

const useFunding = () => {
    const promiseRef = React.useRef(null);
    const { fundingEnabled, setShowFunding, showFunding, updateSupportsFunding } = FundingContext.useFundingContext();
    const openFunding = ({ address, token } = {}) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        if (!fundingEnabled) {
            throw new Error('Funding is not enabled');
        }
        if (promiseRef.current) {
            return promiseRef.current.promise;
        }
        if (address || token) {
            yield updateSupportsFunding({ address, token });
        }
        promiseRef.current = new utils.DeferredPromise();
        setShowFunding(true);
        return promiseRef.current.promise;
    });
    React.useEffect(() => {
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

exports.useFunding = useFunding;
