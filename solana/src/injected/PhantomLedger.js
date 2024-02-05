import { __awaiter } from '../../_virtual/_tslib.js';
import { PublicKey, Transaction, TransactionInstruction } from '@solana/web3.js';
import { NotSupportedError, DynamicError } from '@dynamic-labs/utils';
import { PhantomLedgerWalletName } from '@dynamic-labs/wallet-connector-core';
import { extractNonce } from '../utils/extractNonce.js';
import { InjectedWalletBase } from './InjectedWalletBase.js';

const MEMO_PROGRAM_ID = new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr');
class PhantomLedger extends InjectedWalletBase {
    constructor() {
        super(...arguments);
        /**
         * I'm exporting the walletName to use it for DYN-1447. As we only need the wallet name,
         * exporting it in this way, we avoid to instantiate the whole PhantomLedger class every time.
         */
        this.name = PhantomLedgerWalletName;
        this.buildAuthTx = (message) => {
            const transaction = new Transaction();
            transaction.add(new TransactionInstruction({
                data: Buffer.from(message, 'utf8'),
                keys: [],
                programId: MEMO_PROGRAM_ID,
            }));
            return transaction;
        };
    }
    signMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new NotSupportedError(`Message signing is currently not supported on ${this.name}
      You can use signMessageViaTransaction instead to achieve similar functionality
      by signing a transaction with a memo instruction.
      You can read more about it here https://github.com/solana-labs/solana/issues/21366`);
        });
    }
    proveOwnership(messageToSign) {
        return __awaiter(this, void 0, void 0, function* () {
            const nonce = extractNonce(messageToSign);
            if (!nonce) {
                throw new DynamicError('Nonce missing');
            }
            return this.signMessageViaTransaction(nonce);
        });
    }
    signMessageViaTransaction(messageToSign) {
        return __awaiter(this, void 0, void 0, function* () {
            const address = yield this.fetchPublicAddress();
            if (!address) {
                throw new DynamicError('Address missing');
            }
            const transaction = this.buildAuthTx(messageToSign);
            transaction.feePayer = new PublicKey(address);
            transaction.recentBlockhash = (yield this.getWalletClient().getLatestBlockhash()).blockhash;
            const signer = yield this.getSigner();
            if (!signer) {
                throw new DynamicError('Signer not found');
            }
            const signedTransaction = yield signer.signTransaction(transaction);
            return JSON.stringify({
                signedTransaction: signedTransaction.serialize(),
            });
        });
    }
}

export { MEMO_PROGRAM_ID, PhantomLedger };
