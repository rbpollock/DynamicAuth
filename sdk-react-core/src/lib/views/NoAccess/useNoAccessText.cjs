'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var reactI18next = require('react-i18next');
var useInternalDynamicContext = require('../../context/DynamicContext/useInternalDynamicContext.cjs');
var ViewContext = require('../../context/ViewContext/ViewContext.cjs');

const useNoAccessText = () => {
    const { socialMediaLinkText, socialMediaUrl, accessDeniedMessagePrimary, accessDeniedMessageSecondary, } = useInternalDynamicContext.useInternalDynamicContext();
    const { view } = ViewContext.useViewContext();
    const { t } = reactI18next.useTranslation();
    const isChainalysisView = view === 'chainalysis-blocked-wallet';
    const isGateBlockedView = view === 'gate-blocked-wallet';
    const isAccessListView = view === 'no-access';
    const getSocialMediaLinkText = () => {
        if (isChainalysisView) {
            return t(textData.chainalysis._socialMediaLinkText);
        }
        if (isGateBlockedView) {
            return undefined;
        }
        return socialMediaLinkText;
    };
    const getSocialMediaUrl = () => {
        if (isChainalysisView) {
            return t(textData.chainalysis._socialMediaUrl);
        }
        if (isGateBlockedView) {
            return undefined;
        }
        return socialMediaUrl;
    };
    const getTitle = () => {
        if (isChainalysisView) {
            return t(textData.chainalysis.title);
        }
        if (isGateBlockedView) {
            return t(textData.gate.title);
        }
        return accessDeniedMessagePrimary || t(textData.default.title);
    };
    const getSubtitle = () => {
        if (isChainalysisView) {
            return t(textData.chainalysis.subtitle);
        }
        if (isGateBlockedView) {
            return t(textData.gate.subtitle);
        }
        return accessDeniedMessageSecondary || t(textData.default.subtitle);
    };
    const getButtonTitle = () => {
        if (isChainalysisView) {
            return t(textData.chainalysis.buttonTitle);
        }
        if (isGateBlockedView) {
            return t(textData.gate.buttonTitle);
        }
        return t(textData.default.buttonTitle);
    };
    return {
        _socialMediaLinkText: getSocialMediaLinkText(),
        _socialMediaUrl: getSocialMediaUrl(),
        buttonTitle: getButtonTitle(),
        isAccessListView,
        isChainalysisView,
        isGateBlockedView,
        subtitle: getSubtitle(),
        title: getTitle(),
    };
};
const textData = {
    chainalysis: {
        _socialMediaLinkText: 'dyn_no_access.chainalysis.social_media_link_text',
        _socialMediaUrl: 'dyn_no_access.chainalysis.social_media_link_url',
        buttonTitle: 'dyn_no_access.chainalysis.button_text',
        subtitle: 'dyn_no_access.chainalysis.description',
        title: 'dyn_no_access.chainalysis.title',
    },
    default: {
        buttonTitle: 'dyn_no_access.default.button_text',
        subtitle: 'dyn_no_access.default.description',
        title: 'dyn_no_access.default.title',
    },
    gate: {
        _socialMediaLinkText: undefined,
        _socialMediaUrl: undefined,
        buttonTitle: 'dyn_no_access.gate.button_text',
        subtitle: 'dyn_no_access.gate.description',
        title: 'dyn_no_access.gate.title',
    },
};

exports.textData = textData;
exports.useNoAccessText = useNoAccessText;
