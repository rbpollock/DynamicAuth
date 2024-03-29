import { jsx } from 'react/jsx-runtime';
import { useTranslation } from 'react-i18next';
import { classNames } from '../../utils/functions/classNames/classNames.js';
import { AnimatePresence } from '../AnimatePresence/AnimatePresence.js';
import { Typography } from '../Typography/Typography.js';
import '../Transition/ZoomTransition/ZoomTransition.js';
import '../Transition/SlideInUpTransition/SlideInUpTransition.js';
import '../Transition/OpacityTransition/OpacityTransition.js';
import { VerticalDrawerTransition } from '../Transition/VerticalDrawerTransition/VerticalDrawerTransition.js';

const typographyColor = {
    error: 'error-1',
    notice: 'brand-primary',
    success: 'green-1',
};
const ModalHeaderBanner = ({ messageKey, type = 'error', disableTruncate = false, }) => {
    const { t } = useTranslation();
    return (jsx(AnimatePresence, { animationComponent: jsx(VerticalDrawerTransition, { style: { width: '100%' } }), children: Boolean(messageKey) && (jsx("div", { className: classNames('modal-header-banner', {
                'modal-header-banner__error': type === 'error',
                'modal-header-banner__notice': type === 'notice',
                'modal-header-banner__success': type === 'success',
            }), children: jsx(Typography, { variant: 'body_small', color: typographyColor[type], truncate: disableTruncate === false, copykey: messageKey, children: t(messageKey || '') }) })) }));
};

export { ModalHeaderBanner };
