import { jsx } from 'react/jsx-runtime';
import { Button } from '../../Button/Button.js';
import { classNames } from '../../../utils/functions/classNames/classNames.js';

const ConnectButton = ({ buttonClassName, buttonContainerClassName, onClick, isActive, isLoading, children, copykey, }) => (jsx("div", { className: buttonContainerClassName, children: jsx(Button, { dataTestId: 'ConnectButton', onClick: onClick, buttonClassName: classNames('connect-button', buttonClassName), loading: isLoading && isActive, disabled: isLoading && isActive, buttonVariant: 'primary', buttonPadding: 'large', copykey: copykey, children: children }) }));

export { ConnectButton };
