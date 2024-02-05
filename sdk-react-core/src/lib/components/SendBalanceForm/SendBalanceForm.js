import { jsx, jsxs } from 'react/jsx-runtime';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik, Form, Field } from 'formik';
import { object, string } from 'yup';
import { Input } from '../Input/Input.js';
import { Button } from '../Button/Button.js';
import '@dynamic-labs/wallet-connector-core';
import '@dynamic-labs/sdk-api';
import '../../shared/logger.js';
import '@dynamic-labs/iconic';
import '../../context/ViewContext/ViewContext.js';
import '@dynamic-labs/wallet-book';
import '../../utils/constants/colors.js';
import '../../shared/utils/classes/storage/localStorage.js';
import 'viem';
import '@dynamic-labs/utils';
import '../../shared/consts/index.js';
import '@dynamic-labs/multi-wallet';
import { getOrdinalNumber } from '../../utils/functions/getOrdinalNumber/getOrdinalNumber.js';
import { useIsTurnkeyWallet } from '../../utils/hooks/useIsTurnkeyWallet/useIsTurnkeyWallet.js';
import { SecureTurnkeyWalletCard } from '../SecureTurnkeyWalletCard/SecureTurnkeyWalletCard.js';

const sendBalanceFormInitialValues = {
    amount: '',
    recipient: '',
};
const getDisplayErrorMessage = (errors, t, field, decimals) => {
    const mapFieldAndErrorToMessage = {
        amount: {
            invalidDecimals: t('dyn_send_transaction.validation.amount.invalid_decimals', { decimals }),
            invalidFormat: t('dyn_send_transaction.validation.amount.invalid_decimals', { decimals }),
            overBalance: t('dyn_send_transaction.validation.amount.over_balance'),
            required: t('dyn_send_transaction.validation.amount.required'),
        },
        recipient: {
            invalidFormat: t('dyn_send_transaction.validation.recipient.invalid_format'),
            required: t('dyn_send_transaction.validation.recipient.required'),
        },
    };
    const errorType = errors[field];
    if (errorType) {
        const errorMessage = mapFieldAndErrorToMessage[field][errorType];
        return errorMessage.replace('{decimals}', getOrdinalNumber(decimals !== null && decimals !== void 0 ? decimals : 0));
    }
    return '';
};
const SendBalanceForm = ({ initialValues, onSubmit, balance, decimals = 18, }) => {
    const { t } = useTranslation();
    const { isTurnkeyWalletWithoutAuthenticator } = useIsTurnkeyWallet();
    const sendBalanceFormValidationSchema = useMemo(() => {
        const decimalsRegex = new RegExp(`^\\d*(\\.\\d{1,${decimals}})?$`);
        return object().shape({
            amount: string()
                .required('required')
                .matches(/^\d*(\.\d+)?$/, 'invalidFormat')
                .matches(decimalsRegex, 'invalidDecimals')
                .test({
                message: 'overBalance',
                test: (value) => {
                    if (!value || balance === undefined)
                        return true;
                    try {
                        const valueNumber = parseFloat(value);
                        return valueNumber < balance;
                    }
                    catch (err) {
                        return true;
                    }
                },
            }),
            recipient: string()
                .required('required')
                .matches(/^0x[0-9a-fA-F]{40}$/, 'invalidFormat'),
        });
    }, [balance, decimals]);
    return (jsx(Formik, { initialValues: initialValues || sendBalanceFormInitialValues, validationSchema: sendBalanceFormValidationSchema, onSubmit: (values) => onSubmit(values), validateOnChange: false, validateOnBlur: false, children: ({ errors, touched }) => (jsxs(Form, { className: 'send-balance-form', children: [jsx(Field, { variant: 'regular', className: 'send-balance-form__field', name: 'amount', label: t('dyn_send_transaction.data.amount.label'), placeholder: t('dyn_send_transaction.data.amount.placeholder'), as: Input, error: errors['amount'], copykey: 'dyn_send_transaction.data.amount.label', message: touched['amount'] &&
                        getDisplayErrorMessage(errors, t, 'amount', decimals) }), jsx(Field, { variant: 'regular', className: 'send-balance-form__field', placeholder: t('dyn_send_transaction.data.recipient.placeholder'), label: t('dyn_send_transaction.data.recipient.label'), id: 'recipient', name: 'recipient', as: Input, error: errors['recipient'], copykey: 'dyn_send_transaction.data.recipient.label', message: touched['recipient'] &&
                        getDisplayErrorMessage(errors, t, 'recipient') }), jsx(SecureTurnkeyWalletCard, { className: 'send-balance-form__secure-wallet' }), jsx(Button, { dataTestId: 'sendBalanceFormSubmitButton', expanded: true, type: 'submit', buttonVariant: 'primary', buttonPadding: 'medium', disabled: isTurnkeyWalletWithoutAuthenticator, buttonClassName: 'send-balance-form__button', copykey: 'dyn_send_transaction.send_button', children: t('dyn_send_transaction.send_button') })] })) }));
};

export { SendBalanceForm };
