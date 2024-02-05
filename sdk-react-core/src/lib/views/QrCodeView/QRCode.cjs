'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var QRCodeUtil = require('qrcode');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
var IconWithSpinner = require('../../components/IconWithSpinner/IconWithSpinner.cjs');
var QrCodeContext = require('../../context/QrCodeContext/QrCodeContext.cjs');
require('@dynamic-labs/utils');
require('../../context/DynamicContext/DynamicContext.cjs');
require('../../context/CaptchaContext/CaptchaContext.cjs');
require('../../context/ErrorContext/ErrorContext.cjs');
require('../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-book');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
require('../../context/AccessDeniedContext/AccessDeniedContext.cjs');
require('../../context/AccountExistsContext/AccountExistsContext.cjs');
require('../../config/ApiEndpoint.cjs');
require('../../context/EmailVerificationContext/EmailVerificationContext.cjs');
require('react-dom');
require('../../context/ThemeContext/ThemeContext.cjs');
var usePromise = require('../../utils/hooks/usePromise/usePromise.cjs');
require('@dynamic-labs/types');
require('yup');
require('react-i18next');
require('../../context/MockContext/MockContext.cjs');
require('../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.cjs');
require('../../context/UserFieldEditorContext/UserFieldEditorContext.cjs');
require('@dynamic-labs/rpc-providers');
require('../../context/UserWalletsContext/UserWalletsContext.cjs');
require('../../components/Alert/Alert.cjs');
require('../../components/ShadowDOM/ShadowDOM.cjs');
require('../../components/IconButton/IconButton.cjs');
require('../../components/InlineWidget/InlineWidget.cjs');
require('../../components/MenuList/Dropdown/Dropdown.cjs');
require('../../components/Transition/ZoomTransition/ZoomTransition.cjs');
require('../../components/Transition/SlideInUpTransition/SlideInUpTransition.cjs');
require('../../components/Transition/OpacityTransition/OpacityTransition.cjs');
require('../../components/Popper/Popper/Popper.cjs');
require('../../components/Popper/PopperContext/PopperContext.cjs');
require('react-focus-lock');
require('formik');
require('i18next');
require('../../components/OverlayCard/OverlayCard.context.cjs');
require('../../context/FooterAnimationContext/index.cjs');
require('../../context/WalletGroupContext/WalletGroupContext.cjs');
require('../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.cjs');
require('../../context/LoadingContext/LoadingContext.cjs');
require('../../widgets/DynamicWidget/context/DynamicWidgetContext.cjs');
require('../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.cjs');
require('@dynamic-labs/viem-utils');
require('../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.cjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var QRCodeUtil__default = /*#__PURE__*/_interopDefaultLegacy(QRCodeUtil);

const generateMatrix = (value, errorCorrectionLevel) => {
    const arr = Array.prototype.slice.call(QRCodeUtil__default["default"].create(value, { errorCorrectionLevel }).modules.data, 0);
    const sqrt = Math.sqrt(arr.length);
    return arr.reduce((rows, key, index) => (index % sqrt === 0
        ? rows.push([key])
        : rows[rows.length - 1].push(key)) && rows, []);
};
const QRCode = ({ ecl = 'M', Icon, logoMargin = 0, logoSize = 40, size = 250, value, accentColor, walletKey = undefined, }) => {
    const { showQrCodeImage } = QrCodeContext.useQrCodeContext();
    const { data } = usePromise.usePromise(() => QRCodeUtil__default["default"].toDataURL(value));
    const dots = React.useMemo(() => {
        const dots = [];
        const matrix = generateMatrix(value || 'QR Code value', ecl);
        const cellSize = size / matrix.length;
        const qrList = [
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 0, y: 1 },
        ];
        qrList.forEach(({ x, y }) => {
            const x1 = (matrix.length - 7) * cellSize * x;
            const y1 = (matrix.length - 7) * cellSize * y;
            for (let i = 0; i < 3; i++) {
                dots.push(jsxRuntime.jsx("rect", { fill: i % 2 !== 0 ? 'currentColor' : accentColor, height: cellSize * (7 - i * 2), rx: i === 0 ? 10 : i === 1 ? 7 : 20, ry: i === 0 ? 10 : i === 1 ? 7 : 20, width: cellSize * (7 - i * 2), x: x1 + cellSize * i, y: y1 + cellSize * i }, `corner-square-${x}-${y}-${i}`));
            }
        });
        const clearArenaSize = Math.floor((logoSize * 1.5) / cellSize);
        const matrixMiddleStart = matrix.length / 2 - clearArenaSize / 2;
        const matrixMiddleEnd = matrix.length / 2 + clearArenaSize / 2 - 1;
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (matrix[row][col]) {
                    if (
                    // 7 is the length of each corner square, and we don't want to put
                    // dots in the corner squares
                    !((row < 7 && col < 7) ||
                        (row > matrix.length - 8 && col < 7) ||
                        (row < 7 && col > matrix.length - 8))) {
                        if (!(row > matrixMiddleStart &&
                            row < matrixMiddleEnd &&
                            col > matrixMiddleStart &&
                            col < matrixMiddleEnd)) {
                            dots.push(jsxRuntime.jsx("circle", { className: 'qrcode__dot-circle', cx: row * cellSize + cellSize / 2, cy: col * cellSize + cellSize / 2, fill: Math.random() > 0.9 ? accentColor : 'currentColor', r: cellSize / 2.25 }, `dot-${row}-${col}`));
                        }
                    }
                }
            }
        }
        return dots;
    }, [ecl, logoSize, size, value, accentColor]);
    const logoPosition = size / 2 - logoSize / 2 - logoMargin;
    const walletsWithoutIndicator = ['coinbase', 'walletconnect'];
    const indicator = !walletKey ||
        walletsWithoutIndicator.includes(walletConnectorCore.normalizeWalletName(walletKey))
        ? undefined
        : 'walletConnect';
    return (jsxRuntime.jsx("div", { className: 'qrcode__container', children: jsxRuntime.jsx("div", { className: 'qrcode', children: showQrCodeImage ? (jsxRuntime.jsx("img", { src: data, alt: '' })) : (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsxs("svg", { height: '100%', width: '100%', viewBox: `0 0 ${size} ${size}`, "data-testid": 'qr-code', children: [jsxRuntime.jsx("defs", { children: jsxRuntime.jsx("clipPath", { id: 'clip-logo', children: jsxRuntime.jsx("rect", { height: logoSize, width: logoSize, x: logoPosition, y: logoPosition, rx: 7, ry: 7 }) }) }), jsxRuntime.jsx("rect", { fill: 'none', height: size, width: size }), dots] }), jsxRuntime.jsx(IconWithSpinner.IconWithSpinner, { Icon: Icon, iconSize: logoSize, isSpinning: true, className: 'qrcode__icon', indicator: indicator })] })) }) }));
};

exports.QRCode = QRCode;
