import { KeplrWalletConnectors } from '@dynamic-labs/keplr';

const CosmosWalletConnectors = (props) => [
    ...KeplrWalletConnectors(props),
];

export { CosmosWalletConnectors };
