import { SocialSignInProviderEnum } from '@dynamic-labs/sdk-api';

const getSocialSignInProviderFromString = (provider) => {
    if (!provider)
        return;
    const values = Object.values(SocialSignInProviderEnum);
    for (const value of values) {
        if (value === provider) {
            return value;
        }
    }
    return undefined;
};

export { getSocialSignInProviderFromString };
