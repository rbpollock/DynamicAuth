'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Sourced from http://detectmobilebrowsers.com/
 */
/* eslint-disable max-len, no-useless-escape */
const userAgentRegex1 = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i;
const userAgentRegex2 = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
// This is a regex that covers both iphone, android and any other mobile device.
const isMobile = (maxTouchPointsOverride) => {
    if (typeof window === 'undefined' || typeof navigator === 'undefined') {
        return false;
    }
    return (userAgentRegex1.test(navigator.userAgent) ||
        userAgentRegex2.test(navigator.userAgent.substring(0, 4)) ||
        isIPad(maxTouchPointsOverride) ||
        isIPhone());
};
const isIPhone = () => typeof window === 'undefined' || typeof navigator === 'undefined'
    ? false
    : /iPhone/.test(navigator.userAgent);
const isIPhone8OrEarlier = () => typeof window === 'undefined' || typeof navigator === 'undefined'
    ? false
    : iPhoneLegacyRegex.some(({ regex }) => regex.test(navigator.userAgent));
/**
 * @param [optional] maxTouchPointsOverride - this is used for testing since
 * it seems that JSDOM doesn't support maxTouchPoints, so it was impossible
 * to mock it
 */
const isIPad = (maxTouchPointsOverride) => {
    if (typeof window === 'undefined' || typeof navigator === 'undefined') {
        return false;
    }
    const maxTouchPoints = maxTouchPointsOverride || navigator.maxTouchPoints;
    return (/iPad/.test(navigator.userAgent) ||
        (/Mac/.test(navigator.userAgent) && maxTouchPoints === 5));
};
const isIOS = (maxTouchPointsOverride) => {
    if (typeof window === 'undefined' || typeof navigator === 'undefined') {
        return false;
    }
    return isIPhone() || isIPad(maxTouchPointsOverride);
};
const isAndroid = () => isMobile() && !isIOS();
const isLegacySafari = () => {
    // We need to check if window.CSS exists and if it has supports function.
    // We can use it only in browsers. This prevents customer tests from failing because of that.
    if (typeof window === 'undefined' ||
        !window.CSS ||
        typeof window.CSS.supports !== 'function') {
        return false;
    }
    // Older versions of Safari <15 are not supporting aspect-ratio css property.
    // We can use that to check if user is on older browser.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio
    const cssValue = 'aspect-ratio: 1 / 1';
    return !CSS.supports(cssValue);
};
const isSamsungBrowser = () => {
    if (typeof window === 'undefined' || typeof navigator === 'undefined') {
        return false;
    }
    return navigator.userAgent.includes('SamsungBrowser');
};
const isWindows = () => {
    if (typeof window === 'undefined' || typeof navigator === 'undefined') {
        return false;
    }
    return navigator.userAgent.indexOf('Windows') !== -1;
};
// regex from: https://github.com/matomo-org/device-detector/blob/master/regexes/device/mobiles.yml
const iPhoneLegacyRegex = [
    {
        model: 'iPhone 5',
        regex: /(?:MDCR_|ICRU_|Apple-)?(?:iPh(?:one)?5[C,_]12|5)$/,
    },
    {
        model: 'iPhone 5C',
        regex: /(?:MDCR_|ICRU_|Apple-)?(?:iPh(?:one)?5[C,_]34)$/,
    },
    {
        model: 'iPhone 5S',
        regex: /(?:MDCR_|ICRU_|Apple-)?(?:iPh(?:one)?6[C,_]12|5S)$/,
    },
    {
        model: 'iPhone 6 Plus',
        regex: /(?:MDCR_|ICRU_|Apple-)?(?:iPh(?:one)?7[C,_]1|1C2%257enohPi|6PLUS)$/,
    },
    {
        model: 'iPhone 6',
        regex: /(?:MDCR_|ICRU_|Apple-)?(?:iPh(?:one)?7[C,_]2|6)$/,
    },
    {
        model: 'iPhone 6s Plus',
        regex: /(?:MDCR_|ICRU_|Apple-)?(?:iPh(?:one)?8[C,_]2|6SPLUS)$/,
    },
    {
        model: 'iPhone 6s',
        regex: /(?:MDCR_|ICRU_|Apple-)?(?:iPh(?:one)?8[C,_]1|iPhone[ /]6s|6S)$/,
    },
    {
        model: 'iPhone SE',
        regex: /(?:MDCR_|ICRU_|Apple-)?(?:iPh(?:one)?8[C,_]4|SE)$/,
    },
    {
        model: 'iPhone 7',
        regex: /(?:MDCR_|ICRU_|Apple-)?(?:iPh(?:one)?9[C,_]13|iphone7|7)$/,
    },
    {
        model: 'iPhone 7 Plus',
        regex: /(?:MDCR_|ICRU_|Apple-)?(?:iPh(?:one)?9[C,_]24|7PLUS)$/,
    },
    {
        model: 'iPhone 8',
        regex: /(?:MDCR_|ICRU_|Apple-)?(?:iPh(?:one)?10[C,_]14|8)$/,
    },
    {
        model: 'iPhone 8 Plus',
        regex: /(?:MDCR_|ICRU_|Apple-)?(?:iPh(?:one)?10[C,_]25|8PLUS)$/,
    },
];
const getAndroidVersion = () => {
    if (typeof navigator === 'undefined') {
        return;
    }
    const androidVersionMatch = navigator.userAgent.match(/Android (\d+(\.\d+)?)/);
    if (!androidVersionMatch) {
        return;
    }
    const androidVersion = parseFloat(androidVersionMatch[1]);
    return androidVersion;
};

exports.getAndroidVersion = getAndroidVersion;
exports.isAndroid = isAndroid;
exports.isIOS = isIOS;
exports.isIPad = isIPad;
exports.isIPhone = isIPhone;
exports.isIPhone8OrEarlier = isIPhone8OrEarlier;
exports.isLegacySafari = isLegacySafari;
exports.isMobile = isMobile;
exports.isSamsungBrowser = isSamsungBrowser;
exports.isWindows = isWindows;
