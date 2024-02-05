import { jsx } from 'react/jsx-runtime';
import { ProviderEnum, SignInProviderEnum } from '@dynamic-labs/sdk-api';
import { useInternalDynamicContext } from '../../../../context/DynamicContext/useInternalDynamicContext.js';
import '@dynamic-labs/wallet-connector-core';
import { logger } from '../../../../shared/logger.js';
import '@dynamic-labs/iconic';
import '../../../../context/ViewContext/ViewContext.js';
import 'react';
import '@dynamic-labs/wallet-book';
import '../../../../utils/constants/colors.js';
import '../../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import { getSocialSignInProviderFromString } from '../../../../utils/functions/getSocialSignInProviderFromString/getSocialSignInProviderFromString.js';
import { isProviderEnabled } from '../../../../utils/functions/isProviderEnabled/isProviderEnabled.js';
import { MagicSocialSignIn } from './MagicSocialSignIn/MagicSocialSignIn.js';
import { DynamicSocialSignIn } from './DynamicSocialSignIn/DynamicSocialSignIn.js';

const SocialSignInSection = ({ sectionData, collapsedLayout, }) => {
    var _a, _b, _c;
    const { projectSettings } = useInternalDynamicContext();
    const providers = (_a = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.providers) !== null && _a !== void 0 ? _a : [];
    const componentProps = {
        collapsedLayout,
        defaultProvider: getSocialSignInProviderFromString(sectionData.defaultItem),
        numOfItemsToDisplay: sectionData.numOfItemsToDisplay,
    };
    const isMagicEnabled = isProviderEnabled(providers, ProviderEnum.MagicLink);
    if (isMagicEnabled &&
        ((_b = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.sdk.socialSignIn) === null || _b === void 0 ? void 0 : _b.signInProvider) ===
            SignInProviderEnum.MagicLink) {
        return jsx(MagicSocialSignIn, Object.assign({}, componentProps));
    }
    if (((_c = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.sdk.socialSignIn) === null || _c === void 0 ? void 0 : _c.signInProvider) ===
        SignInProviderEnum.Dynamic) {
        return jsx(DynamicSocialSignIn, Object.assign({}, componentProps));
    }
    logger.error('Failed to render SocialSignInSection - no sign in provider enabled');
    return null;
};

export { SocialSignInSection };
