import { useState } from 'react';

const useShowPasskeyCreateSuccess = () => {
    const [showPasskeyCreatedSuccess, _setShowPasskeyCreatedSuccess] = useState(false);
    // Show the success message for 2 seconds then hide it
    // The logic is here to not have to duplicate it in multiple views
    const setShowPasskeyCreatedSuccess = () => {
        _setShowPasskeyCreatedSuccess(true);
        setTimeout(() => {
            _setShowPasskeyCreatedSuccess(false);
        }, 2000);
    };
    return {
        setShowPasskeyCreatedSuccess,
        showPasskeyCreatedSuccess,
    };
};

export { useShowPasskeyCreateSuccess };
