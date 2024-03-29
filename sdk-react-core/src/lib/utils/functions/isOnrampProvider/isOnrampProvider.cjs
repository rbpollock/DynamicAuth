'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var onrampProviders = require('../../constants/onrampProviders.cjs');

const isOnrampProvider = (provider) => onrampProviders.ONRAMP_PROVIDERS.includes(provider.provider);

exports.isOnrampProvider = isOnrampProvider;
