import { jsx, jsxs } from 'react/jsx-runtime';
import { isMobile } from '@dynamic-labs/utils';
import { classNames } from '../../../utils/functions/classNames/classNames.js';
import { OverlayCard } from '../../OverlayCard/OverlayCard.js';
import 'react';
import '../../OverlayCard/OverlayCard.context.js';
import { Dropdown } from '../Dropdown/Dropdown.js';
import { ModalHeader } from '../../ModalHeader/ModalHeader.js';
import { Typography } from '../../Typography/Typography.js';
import { IconButton } from '../../IconButton/IconButton.js';
import '@dynamic-labs/sdk-api';
import '../../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import '../../../context/ViewContext/ViewContext.js';
import { ReactComponent as SvgClose } from '../../../shared/assets/close.js';
import '@dynamic-labs/wallet-book';
import '../../../utils/constants/colors.js';
import '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '../../../shared/consts/index.js';

const MenuList = ({ isOpen, onClickClose, popperProps, dropdownClassName, dropdownStyle, overlayCardClassName, overlayCardStyle, className, style, children, mobileTitle, }) => {
    const closeButton = (jsx(IconButton, { onClick: onClickClose, type: 'button', children: jsx(SvgClose, {}) }));
    if (isMobile())
        return (jsxs(OverlayCard, { isOpen: isOpen, onClickOverlay: onClickClose, className: classNames(overlayCardClassName, className), style: Object.assign(Object.assign({}, style), overlayCardStyle), children: [jsx(ModalHeader, { trailing: closeButton, children: jsx(Typography, { as: 'h1', variant: 'title', color: 'primary', children: mobileTitle }) }), jsx("div", { className: 'menu-list__overlay-card__container', children: children })] }));
    return (jsx(Dropdown, Object.assign({ isOpen: isOpen, onClickOutside: onClickClose, onScroll: onClickClose, className: classNames(dropdownClassName, className), style: Object.assign(Object.assign({}, style), dropdownStyle) }, popperProps, { children: children })));
};

export { MenuList };
