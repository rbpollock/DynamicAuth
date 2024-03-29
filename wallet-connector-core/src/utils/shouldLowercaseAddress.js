const shouldLowercaseAddress = (chain) => 
// these are standard from CAIP-2: https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-2.md
// see also: https://github.com/ChainAgnostic/namespaces
// note: no standard namespace currently exists for flow
['eip155', 'flow', 'evm', 'eth', 'avax', 'matic'].includes(chain.toLowerCase());

export { shouldLowercaseAddress };
