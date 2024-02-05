import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useMemo } from 'react';
import QRCodeUtil from 'qrcode';
import { normalizeWalletName } from '@dynamic-labs/wallet-connector-core';
import { IconWithSpinner } from '../../components/IconWithSpinner/IconWithSpinner.js';
import { useQrCodeContext } from '../../context/QrCodeContext/QrCodeContext.js';
import '@dynamic-labs/utils';
import '../../context/DynamicContext/DynamicContext.js';
import '../../context/CaptchaContext/CaptchaContext.js';
import '../../context/ErrorContext/ErrorContext.js';
import '../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-book';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import '../../context/AccessDeniedContext/AccessDeniedContext.js';
import '../../context/AccountExistsContext/AccountExistsContext.js';
import '../../config/ApiEndpoint.js';
import '../../context/EmailVerificationContext/EmailVerificationContext.js';
import 'react-dom';
import '../../context/ThemeContext/ThemeContext.js';
import { usePromise } from '../../utils/hooks/usePromise/usePromise.js';
import '@dynamic-labs/types';
import 'yup';
import 'react-i18next';
import '../../context/MockContext/MockContext.js';
import '../../utils/hooks/useUserUpdateRequest/useUpdateUser/useUpdateUser.js';
import '../../context/UserFieldEditorContext/UserFieldEditorContext.js';
import '@dynamic-labs/rpc-providers';
import '../../context/UserWalletsContext/UserWalletsContext.js';
import '../../components/Alert/Alert.js';
import '../../components/ShadowDOM/ShadowDOM.js';
import '../../components/IconButton/IconButton.js';
import '../../components/InlineWidget/InlineWidget.js';
import '../../components/MenuList/Dropdown/Dropdown.js';
import '../../components/Transition/ZoomTransition/ZoomTransition.js';
import '../../components/Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../../components/Transition/OpacityTransition/OpacityTransition.js';
import '../../components/Popper/Popper/Popper.js';
import '../../components/Popper/PopperContext/PopperContext.js';
import 'react-focus-lock';
import 'formik';
import 'i18next';
import '../../components/OverlayCard/OverlayCard.context.js';
import '../../context/FooterAnimationContext/index.js';
import '../../context/WalletGroupContext/WalletGroupContext.js';
import '../../widgets/DynamicWidget/components/DynamicWidgetHeader/DynamicWidgetHeader.js';
import '../../context/LoadingContext/LoadingContext.js';
import '../../widgets/DynamicWidget/context/DynamicWidgetContext.js';
import '../../components/UserProfile/parts/UserProfileField/components/VerifiedEmailIcon/VerifiedEmailIcon.js';
import '@dynamic-labs/viem-utils';
import '../../widgets/DynamicWidget/views/ManagePasskeysWidgetView/PasskeyCard/PasskeyCard.js';

const generateMatrix = (value, errorCorrectionLevel) => {
    const arr = Array.prototype.slice.call(QRCodeUtil.create(value, { errorCorrectionLevel }).modules.data, 0);
    const sqrt = Math.sqrt(arr.length);
    return arr.reduce((rows, key, index) => (index % sqrt === 0
        ? rows.push([key])
        : rows[rows.length - 1].push(key)) && rows, []);
};
const QRCode = ({ ecl = 'M', Icon, logoMargin = 0, logoSize = 40, size = 250, value, accentColor, walletKey = undefined, }) => {
    const { showQrCodeImage } = useQrCodeContext();
    const { data } = usePromise(() => QRCodeUtil.toDataURL(value));
    const dots = useMemo(() => {
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
                dots.push(jsx("rect", { fill: i % 2 !== 0 ? 'currentColor' : accentColor, height: cellSize * (7 - i * 2), rx: i === 0 ? 10 : i === 1 ? 7 : 20, ry: i === 0 ? 10 : i === 1 ? 7 : 20, width: cellSize * (7 - i * 2), x: x1 + cellSize * i, y: y1 + cellSize * i }, `corner-square-${x}-${y}-${i}`));
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
                            dots.push(jsx("circle", { className: 'qrcode__dot-circle', cx: row * cellSize + cellSize / 2, cy: col * cellSize + cellSize / 2, fill: Math.random() > 0.9 ? accentColor : 'currentColor', r: cellSize / 2.25 }, `dot-${row}-${col}`));
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
        walletsWithoutIndicator.includes(normalizeWalletName(walletKey))
        ? undefined
        : 'walletConnect';
    return (jsx("div", { className: 'qrcode__container', children: jsx("div", { className: 'qrcode', children: showQrCodeImage ? (jsx("img", { src: data, alt: '' })) : (jsxs(Fragment, { children: [jsxs("svg", { height: '100%', width: '100%', viewBox: `0 0 ${size} ${size}`, "data-testid": 'qr-code', children: [jsx("defs", { children: jsx("clipPath", { id: 'clip-logo', children: jsx("rect", { height: logoSize, width: logoSize, x: logoPosition, y: logoPosition, rx: 7, ry: 7 }) }) }), jsx("rect", { fill: 'none', height: size, width: size }), dots] }), jsx(IconWithSpinner, { Icon: Icon, iconSize: logoSize, isSpinning: true, className: 'qrcode__icon', indicator: indicator })] })) }) }));
};

export { QRCode };
