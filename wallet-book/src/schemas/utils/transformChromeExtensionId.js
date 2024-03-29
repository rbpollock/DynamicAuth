const transformChromeExtensionId = (url) => {
    if (url === null || url === void 0 ? void 0 : url.match(/^[a-z]{32}$/))
        return url;
    if (url === null || url === void 0 ? void 0 : url.includes('chrome.google.com/webstore/detail/')) {
        try {
            const urlObject = new URL(url);
            return urlObject.pathname.split('/').at(-1);
        }
        catch (_a) {
            // ignore
        }
    }
    return;
};

export { transformChromeExtensionId };
