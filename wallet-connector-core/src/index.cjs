'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var WalletConnector = require('./lib/WalletConnector.cjs');
var logger = require('./utils/logger.cjs');
var ProviderLookup = require('./utils/ProviderLookup/ProviderLookup.cjs');
var getChainInfo = require('./utils/getChainInfo/getChainInfo.cjs');
var isEmailOTPWalletConnector = require('./utils/isEmailOTPWalletConnector/isEmailOTPWalletConnector.cjs');
var isEmailWalletConnector = require('./utils/isEmailWalletConnector/isEmailWalletConnector.cjs');
var isSameAddress = require('./utils/isSameAddress/isSameAddress.cjs');
var isSocialWalletConnector = require('./utils/isSocialWalletConnector/isSocialWalletConnector.cjs');
var encoding = require('./utils/encoding.cjs');
var getWalletConnectorByKey = require('./utils/getWalletConnectorByKey.cjs');
var shouldLowercaseAddress = require('./utils/shouldLowercaseAddress.cjs');
var normalizeWalletName = require('./utils/normalizeWalletName/normalizeWalletName.cjs');
var PhantomLedgerWalletName = require('./utils/PhantomLedgerWalletName.cjs');
var walletConnectDeepLinks = require('./utils/walletConnectDeepLinks/walletConnectDeepLinks.cjs');
var performPlatformSpecificConnectionMethod = require('./utils/walletConnectDeepLinks/performPlatformSpecificConnectionMethod.cjs');
var isEmbeddedConnector = require('./utils/isEmbeddedConnector/isEmbeddedConnector.cjs');
var isMagicConnector = require('./utils/isMagicConnector/isMagicConnector.cjs');
var isBloctoConnector = require('./utils/isBloctoConnector/isBloctoConnector.cjs');
var isPasskeyWalletConnector = require('./utils/isPasskeyWalletConnector/isPasskeyWalletConnector.cjs');
var isSmartWalletConnector = require('./utils/isSmartWalletConnector/isSmartWalletConnector.cjs');
var isAccountAbstractionConnector = require('./utils/isAccountAbstractionConnector/isAccountAbstractionConnector.cjs');



exports.Chains = WalletConnector.Chains;
exports.WalletConnectorBase = WalletConnector.WalletConnectorBase;
exports.socialProviders = WalletConnector.socialProviders;
exports.logger = logger.logger;
exports.ProviderLookup = ProviderLookup.ProviderLookup;
exports.getChainInfo = getChainInfo.getChainInfo;
exports.isEmailOTPWalletConnector = isEmailOTPWalletConnector.isEmailOTPWalletConnector;
exports.isEmailWalletConnector = isEmailWalletConnector.isEmailWalletConnector;
exports.isSameAddress = isSameAddress.isSameAddress;
exports.isSocialWalletConnector = isSocialWalletConnector.isSocialWalletConnector;
exports.addHexPrefix = encoding.addHexPrefix;
exports.bufferToHex = encoding.bufferToHex;
exports.utf8ToHex = encoding.utf8ToHex;
exports.getWalletConnectorByKey = getWalletConnectorByKey.getWalletConnectorByKey;
exports.shouldLowercaseAddress = shouldLowercaseAddress.shouldLowercaseAddress;
exports.normalizeWalletName = normalizeWalletName.normalizeWalletName;
exports.PhantomLedgerWalletName = PhantomLedgerWalletName.PhantomLedgerWalletName;
exports.getDeepLink = walletConnectDeepLinks.getDeepLink;
exports.performPlatformSpecificConnectionMethod = performPlatformSpecificConnectionMethod.performPlatformSpecificConnectionMethod;
exports.isEmbeddedConnector = isEmbeddedConnector.isEmbeddedConnector;
exports.isMagicConnector = isMagicConnector.isMagicConnector;
exports.isBloctoConnector = isBloctoConnector.isBloctoConnector;
exports.isPasskeyWalletConnector = isPasskeyWalletConnector.isPasskeyWalletConnector;
exports.isSmartWalletConnector = isSmartWalletConnector.isSmartWalletConnector;
exports.isAccountAbstractionConnector = isAccountAbstractionConnector.isAccountAbstractionConnector;
