import { jsx } from 'react/jsx-runtime';
import '@dynamic-labs/sdk-api';
import '../../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import '../../../context/ViewContext/ViewContext.js';
import 'react';
import { ReactComponent as SvgAt } from '../../../shared/assets/at.js';
import { ReactComponent as SvgJustifiedText } from '../../../shared/assets/justified-text.js';
import { ReactComponent as SvgLocation } from '../../../shared/assets/location.js';
import { ReactComponent as SvgMail } from '../../../shared/assets/mail.js';
import { ReactComponent as SvgPhone } from '../../../shared/assets/phone.js';
import { ReactComponent as SvgSizeLabels } from '../../../shared/assets/size-labels.js';
import { ReactComponent as SvgUserCard } from '../../../shared/assets/user-card.js';
import { ReactComponent as SvgUser } from '../../../shared/assets/user.js';
import { ReactComponent as SvgWorkSuitcase } from '../../../shared/assets/work-suitcase.js';
import '@dynamic-labs/wallet-book';
import '../../../utils/constants/colors.js';
import '../../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../../shared/consts/index.js';

/** Maps fields names to Icon components */
const mapFieldToIcon = {
    alias: SvgUser,
    country: SvgLocation,
    email: SvgMail,
    firstName: SvgUserCard,
    jobTitle: SvgWorkSuitcase,
    lastName: SvgUserCard,
    phoneNumber: SvgPhone,
    tShirtSize: SvgSizeLabels,
    username: SvgAt,
};
const UserFieldsToIcon = ({ fields, className, }) => {
    // When there are more than 1 fields, we use a generic icon
    const Icon = fields.length === 1 ? mapFieldToIcon[fields[0]] : undefined;
    if (!Icon)
        return jsx(SvgJustifiedText, { className: className });
    return jsx(Icon, { className: className });
};

export { UserFieldsToIcon };
