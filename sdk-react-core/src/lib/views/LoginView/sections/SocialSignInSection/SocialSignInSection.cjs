'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var sdkApi = require('@dynamic-labs/sdk-api');
var useInternalDynamicContext = require('../../../../context/DynamicContext/useInternalDynamicContext.cjs');
require('@dynamic-labs/wallet-connector-core');
var logger = require('../../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('../../../../context/ViewContext/ViewContext.cjs');
require('react');
require('@dynamic-labs/wallet-book');
require('../../../../utils/constants/colors.cjs');
require('../../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
var getSocialSignInProviderFromString = require('../../../../utils/functions/getSocialSignInProviderFromString/getSocialSignInProviderFromString.cjs');
var isProviderEnabled = require('../../../../utils/functions/isProviderEnabled/isProviderEnabled.cjs');
var MagicSocialSignIn = require('./MagicSocialSignIn/MagicSocialSignIn.cjs');
var DynamicSocialSignIn = require('./DynamicSocialSignIn/DynamicSocialSignIn.cjs');

const SocialSignInSection = ({ sectionData, collapsedLayout, }) => {
    var _a, _b, _c;
    const { projectSettings } = useInternalDynamicContext.useInternalDynamicContext();
    const providers = (_a = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.providers) !== null && _a !== void 0 ? _a : [];
    const componentProps = {
        collapsedLayout,
        defaultProvider: getSocialSignInProviderFromString.getSocialSignInProviderFromString(sectionData.defaultItem),
        numOfItemsToDisplay: sectionData.numOfItemsToDisplay,
    };
    const isMagicEnabled = isProviderEnabled.isProviderEnabled(providers, sdkApi.ProviderEnum.MagicLink);
    if (isMagicEnabled &&
        ((_b = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.sdk.socialSignIn) === null || _b === void 0 ? void 0 : _b.signInProvider) ===
            sdkApi.SignInProviderEnum.MagicLink) {
        return jsxRuntime.jsx(MagicSocialSignIn.MagicSocialSignIn, Object.assign({}, componentProps));
    }
    if (((_c = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.sdk.socialSignIn) === null || _c === void 0 ? void 0 : _c.signInProvider) ===
        sdkApi.SignInProviderEnum.Dynamic) {
        return jsxRuntime.jsx(DynamicSocialSignIn.DynamicSocialSignIn, Object.assign({}, componentProps));
    }
    logger.logger.error('Failed to render SocialSignInSection - no sign in provider enabled');
    return null;
};

exports.SocialSignInSection = SocialSignInSection;
