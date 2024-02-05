'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactI18next = require('react-i18next');
var formik = require('formik');
var yup = require('yup');
var Input = require('../Input/Input.cjs');
var Button = require('../Button/Button.cjs');
require('@dynamic-labs/wallet-connector-core');
require('@dynamic-labs/sdk-api');
require('../../shared/logger.cjs');
require('@dynamic-labs/iconic');
require('../../context/ViewContext/ViewContext.cjs');
require('@dynamic-labs/wallet-book');
require('../../utils/constants/colors.cjs');
require('../../shared/utils/classes/storage/localStorage.cjs');
require('viem');
require('@dynamic-labs/utils');
require('../../shared/consts/index.cjs');
require('@dynamic-labs/multi-wallet');
var getOrdinalNumber = require('../../utils/functions/getOrdinalNumber/getOrdinalNumber.cjs');
var useIsTurnkeyWallet = require('../../utils/hooks/useIsTurnkeyWallet/useIsTurnkeyWallet.cjs');
var SecureTurnkeyWalletCard = require('../SecureTurnkeyWalletCard/SecureTurnkeyWalletCard.cjs');

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
        return errorMessage.replace('{decimals}', getOrdinalNumber.getOrdinalNumber(decimals !== null && decimals !== void 0 ? decimals : 0));
    }
    return '';
};
const SendBalanceForm = ({ initialValues, onSubmit, balance, decimals = 18, }) => {
    const { t } = reactI18next.useTranslation();
    const { isTurnkeyWalletWithoutAuthenticator } = useIsTurnkeyWallet.useIsTurnkeyWallet();
    const sendBalanceFormValidationSchema = React.useMemo(() => {
        const decimalsRegex = new RegExp(`^\\d*(\\.\\d{1,${decimals}})?$`);
        return yup.object().shape({
            amount: yup.string()
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
            recipient: yup.string()
                .required('required')
                .matches(/^0x[0-9a-fA-F]{40}$/, 'invalidFormat'),
        });
    }, [balance, decimals]);
    return (jsxRuntime.jsx(formik.Formik, { initialValues: initialValues || sendBalanceFormInitialValues, validationSchema: sendBalanceFormValidationSchema, onSubmit: (values) => onSubmit(values), validateOnChange: false, validateOnBlur: false, children: ({ errors, touched }) => (jsxRuntime.jsxs(formik.Form, { className: 'send-balance-form', children: [jsxRuntime.jsx(formik.Field, { variant: 'regular', className: 'send-balance-form__field', name: 'amount', label: t('dyn_send_transaction.data.amount.label'), placeholder: t('dyn_send_transaction.data.amount.placeholder'), as: Input.Input, error: errors['amount'], copykey: 'dyn_send_transaction.data.amount.label', message: touched['amount'] &&
                        getDisplayErrorMessage(errors, t, 'amount', decimals) }), jsxRuntime.jsx(formik.Field, { variant: 'regular', className: 'send-balance-form__field', placeholder: t('dyn_send_transaction.data.recipient.placeholder'), label: t('dyn_send_transaction.data.recipient.label'), id: 'recipient', name: 'recipient', as: Input.Input, error: errors['recipient'], copykey: 'dyn_send_transaction.data.recipient.label', message: touched['recipient'] &&
                        getDisplayErrorMessage(errors, t, 'recipient') }), jsxRuntime.jsx(SecureTurnkeyWalletCard.SecureTurnkeyWalletCard, { className: 'send-balance-form__secure-wallet' }), jsxRuntime.jsx(Button.Button, { dataTestId: 'sendBalanceFormSubmitButton', expanded: true, type: 'submit', buttonVariant: 'primary', buttonPadding: 'medium', disabled: isTurnkeyWalletWithoutAuthenticator, buttonClassName: 'send-balance-form__button', copykey: 'dyn_send_transaction.send_button', children: t('dyn_send_transaction.send_button') })] })) }));
};

exports.SendBalanceForm = SendBalanceForm;
