import { jsxs, Fragment, jsx } from 'react/jsx-runtime';
import { Checkbox } from '../../Checkbox/Checkbox.js';
import { Typography } from '../../Typography/Typography.js';

const AuthModeSwitch = ({ authMode, setAuthMode, }) => (jsxs(Fragment, { children: [jsxs("div", { className: 'auth-mode-switch__container', children: [jsx(Checkbox, { checked: authMode === 'connect-and-sign', onChange: () => setAuthMode('connect-and-sign'), id: 'connect-and-sign' }), jsx("label", { htmlFor: 'connect-and-sign', children: jsx(Typography, { color: 'primary', weight: 'regular', children: "Connect and sign" }) })] }), jsxs("div", { className: 'auth-mode-switch__container', children: [jsx(Checkbox, { checked: authMode === 'connect-only', onChange: () => setAuthMode('connect-only'), id: 'connect-only' }), jsx("label", { htmlFor: 'connect-only', children: jsx(Typography, { color: 'primary', weight: 'regular', children: "Connect only" }) })] })] }));

export { AuthModeSwitch };
