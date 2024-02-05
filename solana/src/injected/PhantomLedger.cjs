'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.cjs');
var web3_js = require('@solana/web3.js');
var utils = require('@dynamic-labs/utils');
var walletConnectorCore = require('@dynamic-labs/wallet-connector-core');
var extractNonce = require('../utils/extractNonce.cjs');
var InjectedWalletBase = require('./InjectedWalletBase.cjs');

const MEMO_PROGRAM_ID = new web3_js.PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr');
class PhantomLedger extends InjectedWalletBase.InjectedWalletBase {
    constructor() {
        super(...arguments);
        /**
         * I'm exporting the walletName to use it for DYN-1447. As we only need the wallet name,
         * exporting it in this way, we avoid to instantiate the whole PhantomLedger class every time.
         */
        this.name = walletConnectorCore.PhantomLedgerWalletName;
        this.buildAuthTx = (message) => {
            const transaction = new web3_js.Transaction();
            transaction.add(new web3_js.TransactionInstruction({
                data: Buffer.from(message, 'utf8'),
                keys: [],
                programId: MEMO_PROGRAM_ID,
            }));
            return transaction;
        };
    }
    signMessage() {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            throw new utils.NotSupportedError(`Message signing is currently not supported on ${this.name}
      You can use signMessageViaTransaction instead to achieve similar functionality
      by signing a transaction with a memo instruction.
      You can read more about it here https://github.com/solana-labs/solana/issues/21366`);
        });
    }
    proveOwnership(messageToSign) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const nonce = extractNonce.extractNonce(messageToSign);
            if (!nonce) {
                throw new utils.DynamicError('Nonce missing');
            }
            return this.signMessageViaTransaction(nonce);
        });
    }
    signMessageViaTransaction(messageToSign) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            const address = yield this.fetchPublicAddress();
            if (!address) {
                throw new utils.DynamicError('Address missing');
            }
            const transaction = this.buildAuthTx(messageToSign);
            transaction.feePayer = new web3_js.PublicKey(address);
            transaction.recentBlockhash = (yield this.getWalletClient().getLatestBlockhash()).blockhash;
            const signer = yield this.getSigner();
            if (!signer) {
                throw new utils.DynamicError('Signer not found');
            }
            const signedTransaction = yield signer.signTransaction(transaction);
            return JSON.stringify({
                signedTransaction: signedTransaction.serialize(),
            });
        });
    }
}

exports.MEMO_PROGRAM_ID = MEMO_PROGRAM_ID;
exports.PhantomLedger = PhantomLedger;
