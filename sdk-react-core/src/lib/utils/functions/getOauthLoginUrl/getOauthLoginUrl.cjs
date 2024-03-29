'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utils = require('@dynamic-labs/utils');
var stringifyURIQuery = require('../stringifyURIQuery/stringifyURIQuery.cjs');
var getProviderByType = require('../getProviderByType/getProviderByType.cjs');

const OAUTH_LOGIN_DATA = {
    apple: {
        customMobileUrl: true,
        response_mode: 'form_post',
        response_type: ['code', 'id_token'],
        scope: ['name', 'email'],
        url: 'https://appleid.apple.com/auth/authorize',
    },
    discord: {
        scope: ['identify', 'email'],
        url: 'https://discord.com/api/oauth2/authorize',
    },
    facebook: {
        scope: ['email', 'public_profile'],
        url: 'https://www.facebook.com/v3.2/dialog/oauth',
    },
    github: {
        scope: ['user:email', 'read:user'],
        url: 'https://github.com/login/oauth/authorize',
    },
    google: {
        prompt: ['select_account', 'consent'],
        scope: ['profile', 'email'],
        url: 'https://accounts.google.com/o/oauth2/v2/auth',
    },
    instagram: {
        scope: ['user_profile', 'user_media'],
        url: 'https://api.instagram.com/oauth/authorize',
    },
    twitch: {
        scope: ['user_read'],
        url: 'https://id.twitch.tv/oauth2/authorize',
    },
    twitter: {
        scope: ['users.read', 'tweet.read'],
        url: 'https://twitter.com/i/oauth2/authorize',
    },
};
const getProviderData = (provider) => {
    const entries = Object.entries(OAUTH_LOGIN_DATA);
    for (const [key, value] of entries) {
        if (key === provider) {
            return value;
        }
    }
    return null;
};
const getMobileOauthUrl = (provider, loginData) => {
    if (!loginData.customMobileUrl || !utils.isMobile() || !provider.redirectUrl) {
        return;
    }
    return provider.redirectUrl.replace('redirect', 'authorizeHtml');
};
const getOauthLoginUrl = (providers, providerType) => {
    var _a;
    const provider = getProviderByType.getProviderByType(providers, providerType);
    if (!(provider === null || provider === void 0 ? void 0 : provider.clientId)) {
        return '';
    }
    const loginData = getProviderData(providerType);
    if (!loginData) {
        return '';
    }
    const mobileUrl = getMobileOauthUrl(provider, loginData);
    const baseProps = {
        client_id: provider.clientId,
        redirect_uri: (_a = provider.redirectUrl) !== null && _a !== void 0 ? _a : '',
        response_type: 'code',
    };
    if (loginData.scope) {
        baseProps.scope = loginData.scope.join(' ');
    }
    if (loginData.prompt) {
        baseProps.prompt = loginData.prompt.join(' ');
    }
    if (loginData.response_mode) {
        baseProps.response_mode = loginData.response_mode;
    }
    if (loginData.response_type) {
        baseProps.response_type = loginData.response_type.join(' ');
    }
    const params = stringifyURIQuery.stringifyURIQuery(baseProps);
    return `${mobileUrl !== null && mobileUrl !== void 0 ? mobileUrl : loginData.url}?${params}`;
};

exports.getOauthLoginUrl = getOauthLoginUrl;
