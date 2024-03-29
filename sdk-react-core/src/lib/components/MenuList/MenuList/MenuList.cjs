'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var utils = require('@dynamic-labs/utils');
var classNames = require('../../../utils/functions/classNames/classNames.cjs');
var OverlayCard = require('../../OverlayCard/OverlayCard.cjs');
require('react');
require('../../OverlayCard/OverlayCard.context.cjs');
var Dropdown = require('../Dropdown/Dropdown.cjs');
var ModalHeader = require('../../ModalHeader/ModalHeader.cjs');
var Typography = require('../../Typography/Typography.cjs');
var IconButton = require('../../IconButton/IconButton.cjs');
require('@dynamic-labs/sdk-api');
require('../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('../../../context/ViewContext/ViewContext.cjs');
var close = require('../../../shared/assets/close.cjs');
require('@dynamic-labs/wallet-book');
require('../../../utils/constants/colors.cjs');
require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('../../../shared/consts/index.cjs');

const MenuList = ({ isOpen, onClickClose, popperProps, dropdownClassName, dropdownStyle, overlayCardClassName, overlayCardStyle, className, style, children, mobileTitle, }) => {
    const closeButton = (jsxRuntime.jsx(IconButton.IconButton, { onClick: onClickClose, type: 'button', children: jsxRuntime.jsx(close.ReactComponent, {}) }));
    if (utils.isMobile())
        return (jsxRuntime.jsxs(OverlayCard.OverlayCard, { isOpen: isOpen, onClickOverlay: onClickClose, className: classNames.classNames(overlayCardClassName, className), style: Object.assign(Object.assign({}, style), overlayCardStyle), children: [jsxRuntime.jsx(ModalHeader.ModalHeader, { trailing: closeButton, children: jsxRuntime.jsx(Typography.Typography, { as: 'h1', variant: 'title', color: 'primary', children: mobileTitle }) }), jsxRuntime.jsx("div", { className: 'menu-list__overlay-card__container', children: children })] }));
    return (jsxRuntime.jsx(Dropdown.Dropdown, Object.assign({ isOpen: isOpen, onClickOutside: onClickClose, onScroll: onClickClose, className: classNames.classNames(dropdownClassName, className), style: Object.assign(Object.assign({}, style), dropdownStyle) }, popperProps, { children: children })));
};

exports.MenuList = MenuList;
