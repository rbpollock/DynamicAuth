import { useTranslation } from 'react-i18next';
import { string, boolean } from 'yup';
import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import '@dynamic-labs/iconic';
import '@dynamic-labs/wallet-connector-core';
import 'react/jsx-runtime';
import '../../context/ViewContext/ViewContext.js';
import 'react';
import '@dynamic-labs/wallet-book';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import { countryCodes, tShirtSizes, teamNames } from '../../shared/consts/index.js';

const useFields = () => {
    const { t } = useTranslation();
    const fieldsConfig = {
        alias: {
            key: 'dyn_collect_user_data.fields.alias.label',
            label: t('dyn_collect_user_data.fields.alias.label'),
            type: 'string',
            validation: string().trim(),
        },
        country: {
            key: 'dyn_collect_user_data.fields.country.label',
            label: t('dyn_collect_user_data.fields.country.label'),
            type: 'select',
            validation: string().oneOf(countryCodes.map((c) => c.code)),
        },
        email: {
            key: 'dyn_collect_user_data.fields.email.label',
            label: t('dyn_collect_user_data.fields.email.label'),
            type: 'email',
            validation: string().email(t('dyn_collect_user_data.fields.email.validation')),
        },
        firstName: {
            key: 'dyn_collect_user_data.fields.first_name.label',
            label: t('dyn_collect_user_data.fields.first_name.label'),
            type: 'string',
            validation: string().trim(),
        },
        jobTitle: {
            key: 'dyn_collect_user_data.fields.job_title.label',
            label: t('dyn_collect_user_data.fields.job_title.label'),
            type: 'string',
            validation: string().trim(),
        },
        lastName: {
            key: 'dyn_collect_user_data.fields.last_name.label',
            label: t('dyn_collect_user_data.fields.last_name.label'),
            type: 'string',
            validation: string().trim(),
        },
        phoneNumber: {
            key: 'dyn_collect_user_data.fields.phone_number.label',
            label: t('dyn_collect_user_data.fields.phone_number.label'),
            type: 'string',
            validation: string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, t('dyn_collect_user_data.fields.phone_number.validation')),
        },
        policiesConsent: {
            key: 'dyn_collect_user_data.fields.policies_consent.label',
            label: t('dyn_collect_user_data.fields.policies_consent.label'),
            type: 'boolean',
            validation: boolean(),
        },
        tShirtSize: {
            key: 'dyn_collect_user_data.fields.t_shirt_size.label',
            label: t('dyn_collect_user_data.fields.t_shirt_size.label'),
            type: 'select',
            validation: string().oneOf(tShirtSizes),
        },
        team: {
            key: 'dyn_collect_user_data.fields.team.label',
            label: t('dyn_collect_user_data.fields.team.label'),
            type: 'select',
            validation: string().oneOf(teamNames),
        },
        username: {
            key: 'dyn_collect_user_data.fields.username.label',
            label: t('dyn_collect_user_data.fields.username.label'),
            type: 'string',
            // From chatGPT:
            // - string can contain letters A-Z, a-z, numbers 0-9, or symbols $ ! # % ?
            // - string must be length 3 to 20
            // - string cannot contain consecutive symbols
            validation: string().matches(/^(?!.*([$!#%?])\1)[A-Za-z0-9$!#%?]{3,20}$/, t('dyn_collect_user_data.fields.username.validation')),
        },
    };
    return { fieldsConfig };
};

export { useFields };
