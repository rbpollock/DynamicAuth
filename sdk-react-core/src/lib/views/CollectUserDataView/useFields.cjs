'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var reactI18next = require('react-i18next');
var yup = require('yup');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('@dynamic-labs/wallet-connector-core');
require('react/jsx-runtime');
require('../../context/ViewContext/ViewContext.cjs');
require('react');
require('@dynamic-labs/wallet-book');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
var index = require('../../shared/consts/index.cjs');

const useFields = () => {
    const { t } = reactI18next.useTranslation();
    const fieldsConfig = {
        alias: {
            key: 'dyn_collect_user_data.fields.alias.label',
            label: t('dyn_collect_user_data.fields.alias.label'),
            type: 'string',
            validation: yup.string().trim(),
        },
        country: {
            key: 'dyn_collect_user_data.fields.country.label',
            label: t('dyn_collect_user_data.fields.country.label'),
            type: 'select',
            validation: yup.string().oneOf(index.countryCodes.map((c) => c.code)),
        },
        email: {
            key: 'dyn_collect_user_data.fields.email.label',
            label: t('dyn_collect_user_data.fields.email.label'),
            type: 'email',
            validation: yup.string().email(t('dyn_collect_user_data.fields.email.validation')),
        },
        firstName: {
            key: 'dyn_collect_user_data.fields.first_name.label',
            label: t('dyn_collect_user_data.fields.first_name.label'),
            type: 'string',
            validation: yup.string().trim(),
        },
        jobTitle: {
            key: 'dyn_collect_user_data.fields.job_title.label',
            label: t('dyn_collect_user_data.fields.job_title.label'),
            type: 'string',
            validation: yup.string().trim(),
        },
        lastName: {
            key: 'dyn_collect_user_data.fields.last_name.label',
            label: t('dyn_collect_user_data.fields.last_name.label'),
            type: 'string',
            validation: yup.string().trim(),
        },
        phoneNumber: {
            key: 'dyn_collect_user_data.fields.phone_number.label',
            label: t('dyn_collect_user_data.fields.phone_number.label'),
            type: 'string',
            validation: yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, t('dyn_collect_user_data.fields.phone_number.validation')),
        },
        policiesConsent: {
            key: 'dyn_collect_user_data.fields.policies_consent.label',
            label: t('dyn_collect_user_data.fields.policies_consent.label'),
            type: 'boolean',
            validation: yup.boolean(),
        },
        tShirtSize: {
            key: 'dyn_collect_user_data.fields.t_shirt_size.label',
            label: t('dyn_collect_user_data.fields.t_shirt_size.label'),
            type: 'select',
            validation: yup.string().oneOf(index.tShirtSizes),
        },
        team: {
            key: 'dyn_collect_user_data.fields.team.label',
            label: t('dyn_collect_user_data.fields.team.label'),
            type: 'select',
            validation: yup.string().oneOf(index.teamNames),
        },
        username: {
            key: 'dyn_collect_user_data.fields.username.label',
            label: t('dyn_collect_user_data.fields.username.label'),
            type: 'string',
            // From chatGPT:
            // - string can contain letters A-Z, a-z, numbers 0-9, or symbols $ ! # % ?
            // - string must be length 3 to 20
            // - string cannot contain consecutive symbols
            validation: yup.string().matches(/^(?!.*([$!#%?])\1)[A-Za-z0-9$!#%?]{3,20}$/, t('dyn_collect_user_data.fields.username.validation')),
        },
    };
    return { fieldsConfig };
};

exports.useFields = useFields;
