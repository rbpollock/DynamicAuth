import { useContext } from 'react';
import { DynamicContext } from './DynamicContext.js';

// This is internal context hook only for SDK do not expose it to customers
const useInternalDynamicContext = () => {
    const context = useContext(DynamicContext);
    if (context === undefined) {
        throw new Error('useInternalDynamicContext must be used within a DynamicContextProvider');
    }
    return context;
};

export { useInternalDynamicContext };
