const getAppOrigin = () => {
    if (typeof window !== 'undefined') {
        return window.location.origin;
    }
    return undefined;
};

export { getAppOrigin };
