'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var DynamicContext = require('./DynamicContext.cjs');

// This is internal context hook only for SDK do not expose it to customers
const useInternalDynamicContext = () => {
    const context = React.useContext(DynamicContext.DynamicContext);
    if (context === undefined) {
        throw new Error('useInternalDynamicContext must be used within a DynamicContextProvider');
    }
    return context;
};

exports.useInternalDynamicContext = useInternalDynamicContext;
