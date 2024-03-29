import { jsx } from 'react/jsx-runtime';
import { WalletListItem } from '../../../../../views/WalletList/WalletListItem/WalletListItem.js';

const NewToWeb3WalletItem = ({ children, style, wallet, }) => (jsx(WalletListItem, { wallet: wallet, usingMultiWallet: false, tile: children
        ? ({ onClick }) => (jsx("button", { className: 'new-to-web3--button', style: style, onClick: onClick, children: children }))
        : undefined }));

export { NewToWeb3WalletItem };
