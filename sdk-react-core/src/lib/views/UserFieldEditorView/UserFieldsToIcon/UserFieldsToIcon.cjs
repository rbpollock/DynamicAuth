'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
require('@dynamic-labs/sdk-api');
require('../../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('../../../context/ViewContext/ViewContext.cjs');
require('react');
var at = require('../../../shared/assets/at.cjs');
var justifiedText = require('../../../shared/assets/justified-text.cjs');
var location = require('../../../shared/assets/location.cjs');
var mail = require('../../../shared/assets/mail.cjs');
var phone = require('../../../shared/assets/phone.cjs');
var sizeLabels = require('../../../shared/assets/size-labels.cjs');
var userCard = require('../../../shared/assets/user-card.cjs');
var user = require('../../../shared/assets/user.cjs');
var workSuitcase = require('../../../shared/assets/work-suitcase.cjs');
require('@dynamic-labs/wallet-book');
require('../../../utils/constants/colors.cjs');
require('../../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../../shared/consts/index.cjs');

/** Maps fields names to Icon components */
const mapFieldToIcon = {
    alias: user.ReactComponent,
    country: location.ReactComponent,
    email: mail.ReactComponent,
    firstName: userCard.ReactComponent,
    jobTitle: workSuitcase.ReactComponent,
    lastName: userCard.ReactComponent,
    phoneNumber: phone.ReactComponent,
    tShirtSize: sizeLabels.ReactComponent,
    username: at.ReactComponent,
};
const UserFieldsToIcon = ({ fields, className, }) => {
    // When there are more than 1 fields, we use a generic icon
    const Icon = fields.length === 1 ? mapFieldToIcon[fields[0]] : undefined;
    if (!Icon)
        return jsxRuntime.jsx(justifiedText.ReactComponent, { className: className });
    return jsxRuntime.jsx(Icon, { className: className });
};

exports.UserFieldsToIcon = UserFieldsToIcon;
