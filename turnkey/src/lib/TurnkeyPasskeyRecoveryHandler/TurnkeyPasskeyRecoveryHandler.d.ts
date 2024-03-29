import { PasskeyRecoveryHandler, RecoveryWebAuthnAttestation } from '@dynamic-labs/wallet-connector-core';
export declare class TurnkeyPasskeyRecoveryHandler implements PasskeyRecoveryHandler {
    private __iframeStamper;
    private __publicKey;
    private __client;
    private __turnkeyRecoveryUserId;
    get publicKey(): string | null | undefined;
    set recoveryUserId(turnkeyRecoveryUserId: string);
    clear(): void;
    initRecovery(iframeContainerId: string, iframeElementId: string): Promise<string | null>;
    verifyRecoveryCode(recoveryBundle: string, organizationId?: string): Promise<void>;
    completeRecovery({ attestation, challenge, organizationId, }: RecoveryWebAuthnAttestation): Promise<{
        activity: {
            id: string;
            organizationId: string;
            status: "ACTIVITY_STATUS_CREATED" | "ACTIVITY_STATUS_PENDING" | "ACTIVITY_STATUS_COMPLETED" | "ACTIVITY_STATUS_FAILED" | "ACTIVITY_STATUS_CONSENSUS_NEEDED" | "ACTIVITY_STATUS_REJECTED";
            type: "ACTIVITY_TYPE_RECOVER_USER" | "ACTIVITY_TYPE_CREATE_API_KEYS" | "ACTIVITY_TYPE_CREATE_USERS" | "ACTIVITY_TYPE_CREATE_PRIVATE_KEYS" | "ACTIVITY_TYPE_SIGN_RAW_PAYLOAD" | "ACTIVITY_TYPE_CREATE_INVITATIONS" | "ACTIVITY_TYPE_ACCEPT_INVITATION" | "ACTIVITY_TYPE_CREATE_POLICY" | "ACTIVITY_TYPE_DISABLE_PRIVATE_KEY" | "ACTIVITY_TYPE_DELETE_USERS" | "ACTIVITY_TYPE_DELETE_API_KEYS" | "ACTIVITY_TYPE_DELETE_INVITATION" | "ACTIVITY_TYPE_DELETE_ORGANIZATION" | "ACTIVITY_TYPE_DELETE_POLICY" | "ACTIVITY_TYPE_CREATE_USER_TAG" | "ACTIVITY_TYPE_DELETE_USER_TAGS" | "ACTIVITY_TYPE_CREATE_ORGANIZATION" | "ACTIVITY_TYPE_SIGN_TRANSACTION" | "ACTIVITY_TYPE_APPROVE_ACTIVITY" | "ACTIVITY_TYPE_REJECT_ACTIVITY" | "ACTIVITY_TYPE_DELETE_AUTHENTICATORS" | "ACTIVITY_TYPE_CREATE_AUTHENTICATORS" | "ACTIVITY_TYPE_CREATE_PRIVATE_KEY_TAG" | "ACTIVITY_TYPE_DELETE_PRIVATE_KEY_TAGS" | "ACTIVITY_TYPE_SET_PAYMENT_METHOD" | "ACTIVITY_TYPE_ACTIVATE_BILLING_TIER" | "ACTIVITY_TYPE_DELETE_PAYMENT_METHOD" | "ACTIVITY_TYPE_CREATE_POLICY_V2" | "ACTIVITY_TYPE_CREATE_POLICY_V3" | "ACTIVITY_TYPE_CREATE_API_ONLY_USERS" | "ACTIVITY_TYPE_UPDATE_ROOT_QUORUM" | "ACTIVITY_TYPE_UPDATE_USER_TAG" | "ACTIVITY_TYPE_UPDATE_PRIVATE_KEY_TAG" | "ACTIVITY_TYPE_CREATE_AUTHENTICATORS_V2" | "ACTIVITY_TYPE_CREATE_ORGANIZATION_V2" | "ACTIVITY_TYPE_CREATE_USERS_V2" | "ACTIVITY_TYPE_ACCEPT_INVITATION_V2" | "ACTIVITY_TYPE_CREATE_SUB_ORGANIZATION" | "ACTIVITY_TYPE_CREATE_SUB_ORGANIZATION_V2" | "ACTIVITY_TYPE_UPDATE_ALLOWED_ORIGINS" | "ACTIVITY_TYPE_CREATE_PRIVATE_KEYS_V2" | "ACTIVITY_TYPE_UPDATE_USER" | "ACTIVITY_TYPE_UPDATE_POLICY" | "ACTIVITY_TYPE_SET_PAYMENT_METHOD_V2" | "ACTIVITY_TYPE_CREATE_SUB_ORGANIZATION_V3" | "ACTIVITY_TYPE_CREATE_WALLET" | "ACTIVITY_TYPE_CREATE_WALLET_ACCOUNTS" | "ACTIVITY_TYPE_INIT_USER_EMAIL_RECOVERY" | "ACTIVITY_TYPE_SET_ORGANIZATION_FEATURE" | "ACTIVITY_TYPE_REMOVE_ORGANIZATION_FEATURE" | "ACTIVITY_TYPE_SIGN_RAW_PAYLOAD_V2" | "ACTIVITY_TYPE_SIGN_TRANSACTION_V2" | "ACTIVITY_TYPE_EXPORT_PRIVATE_KEY" | "ACTIVITY_TYPE_EXPORT_WALLET" | "ACTIVITY_TYPE_CREATE_SUB_ORGANIZATION_V4";
            intent: {
                createOrganizationIntent: {
                    organizationName: string;
                    rootEmail: string;
                    rootAuthenticator: {
                        authenticatorName: string;
                        userId: string;
                        attestation: {
                            id: string;
                            type: "public-key";
                            rawId: string;
                            authenticatorAttachment?: "cross-platform" | "platform" | null | undefined;
                            response: {
                                clientDataJson: string;
                                attestationObject: string;
                                transports?: ("AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_HYBRID")[] | undefined;
                                authenticatorAttachment?: "cross-platform" | "platform" | null | undefined;
                            };
                            clientExtensionResults: {
                                appid?: boolean | undefined;
                                appidExclude?: boolean | undefined;
                                credProps?: {
                                    rk: boolean;
                                } | undefined;
                            };
                        };
                        challenge: string;
                    };
                    rootUserId?: string | undefined;
                };
                createAuthenticatorsIntent?: {
                    authenticators: {
                        authenticatorName: string;
                        userId: string;
                        attestation: {
                            id: string;
                            type: "public-key";
                            rawId: string;
                            authenticatorAttachment?: "cross-platform" | "platform" | null | undefined;
                            response: {
                                clientDataJson: string;
                                attestationObject: string;
                                transports?: ("AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_HYBRID")[] | undefined;
                                authenticatorAttachment?: "cross-platform" | "platform" | null | undefined;
                            };
                            clientExtensionResults: {
                                appid?: boolean | undefined;
                                appidExclude?: boolean | undefined;
                                credProps?: {
                                    rk: boolean;
                                } | undefined;
                            };
                        };
                        challenge: string;
                    }[];
                    userId: string;
                } | undefined;
                createUsersIntent?: {
                    users: {
                        userName: string;
                        userEmail?: string | undefined;
                        accessType: "ACCESS_TYPE_WEB" | "ACCESS_TYPE_API" | "ACCESS_TYPE_ALL";
                        apiKeys: {
                            apiKeyName: string;
                            publicKey: string;
                        }[];
                        authenticators: {
                            authenticatorName: string;
                            userId: string;
                            attestation: {
                                id: string;
                                type: "public-key";
                                rawId: string;
                                authenticatorAttachment?: "cross-platform" | "platform" | null | undefined;
                                response: {
                                    clientDataJson: string;
                                    attestationObject: string;
                                    transports?: ("AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_HYBRID")[] | undefined;
                                    authenticatorAttachment?: "cross-platform" | "platform" | null | undefined;
                                };
                                clientExtensionResults: {
                                    appid?: boolean | undefined;
                                    appidExclude?: boolean | undefined;
                                    credProps?: {
                                        rk: boolean;
                                    } | undefined;
                                };
                            };
                            challenge: string;
                        }[];
                        userTags: string[];
                    }[];
                } | undefined;
                createPrivateKeysIntent?: {
                    privateKeys: {
                        privateKeyName: string;
                        curve: "CURVE_SECP256K1" | "CURVE_ED25519";
                        privateKeyTags: string[];
                        addressFormats: ("ADDRESS_FORMAT_UNCOMPRESSED" | "ADDRESS_FORMAT_COMPRESSED" | "ADDRESS_FORMAT_ETHEREUM" | "ADDRESS_FORMAT_SOLANA" | "ADDRESS_FORMAT_COSMOS")[];
                    }[];
                } | undefined;
                signRawPayloadIntent?: {
                    privateKeyId: string;
                    payload: string;
                    encoding: "PAYLOAD_ENCODING_HEXADECIMAL" | "PAYLOAD_ENCODING_TEXT_UTF8";
                    hashFunction: "HASH_FUNCTION_NO_OP" | "HASH_FUNCTION_SHA256" | "HASH_FUNCTION_KECCAK256" | "HASH_FUNCTION_NOT_APPLICABLE";
                } | undefined;
                createInvitationsIntent?: {
                    invitations: {
                        receiverUserName: string;
                        receiverUserEmail: string;
                        receiverUserTags: string[];
                        accessType: "ACCESS_TYPE_WEB" | "ACCESS_TYPE_API" | "ACCESS_TYPE_ALL";
                        senderUserId: string;
                    }[];
                } | undefined;
                acceptInvitationIntent?: {
                    invitationId: string;
                    userId: string;
                    authenticator: {
                        authenticatorName: string;
                        userId: string;
                        attestation: {
                            id: string;
                            type: "public-key";
                            rawId: string;
                            authenticatorAttachment?: "cross-platform" | "platform" | null | undefined;
                            response: {
                                clientDataJson: string;
                                attestationObject: string;
                                transports?: ("AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_HYBRID")[] | undefined;
                                authenticatorAttachment?: "cross-platform" | "platform" | null | undefined;
                            };
                            clientExtensionResults: {
                                appid?: boolean | undefined;
                                appidExclude?: boolean | undefined;
                                credProps?: {
                                    rk: boolean;
                                } | undefined;
                            };
                        };
                        challenge: string;
                    };
                } | undefined;
                createPolicyIntent?: {
                    policyName: string;
                    selectors: {
                        subject?: string | undefined;
                        operator?: "OPERATOR_EQUAL" | "OPERATOR_MORE_THAN" | "OPERATOR_MORE_THAN_OR_EQUAL" | "OPERATOR_LESS_THAN" | "OPERATOR_LESS_THAN_OR_EQUAL" | "OPERATOR_CONTAINS" | "OPERATOR_NOT_EQUAL" | "OPERATOR_IN" | "OPERATOR_NOT_IN" | "OPERATOR_CONTAINS_ONE" | "OPERATOR_CONTAINS_ALL" | undefined;
                        target?: string | undefined;
                    }[];
                    effect: "EFFECT_ALLOW" | "EFFECT_DENY";
                    notes?: string | undefined;
                } | undefined;
                disablePrivateKeyIntent?: {
                    privateKeyId: string;
                } | undefined;
                deleteUsersIntent?: {
                    userIds: string[];
                } | undefined;
                deleteAuthenticatorsIntent?: {
                    userId: string;
                    authenticatorIds: string[];
                } | undefined;
                deleteInvitationIntent?: {
                    invitationId: string;
                } | undefined;
                deleteOrganizationIntent?: {
                    organizationId: string;
                } | undefined;
                deletePolicyIntent?: {
                    policyId: string;
                } | undefined;
                createUserTagIntent?: {
                    userTagName: string;
                    userIds: string[];
                } | undefined;
                deleteUserTagsIntent?: {
                    userTagIds: string[];
                } | undefined;
                signTransactionIntent?: {
                    privateKeyId: string;
                    unsignedTransaction: string;
                    type: "TRANSACTION_TYPE_ETHEREUM";
                } | undefined;
                createApiKeysIntent?: {
                    apiKeys: {
                        apiKeyName: string;
                        publicKey: string;
                    }[];
                    userId: string;
                } | undefined;
                deleteApiKeysIntent?: {
                    userId: string;
                    apiKeyIds: string[];
                } | undefined;
                approveActivityIntent?: {
                    fingerprint: string;
                } | undefined;
                rejectActivityIntent?: {
                    fingerprint: string;
                } | undefined;
                createPrivateKeyTagIntent?: {
                    privateKeyTagName: string;
                    privateKeyIds: string[];
                } | undefined;
                deletePrivateKeyTagsIntent?: {
                    privateKeyTagIds: string[];
                } | undefined;
                createPolicyIntentV2?: {
                    policyName: string;
                    selectors: {
                        subject?: string | undefined;
                        operator?: "OPERATOR_EQUAL" | "OPERATOR_MORE_THAN" | "OPERATOR_MORE_THAN_OR_EQUAL" | "OPERATOR_LESS_THAN" | "OPERATOR_LESS_THAN_OR_EQUAL" | "OPERATOR_CONTAINS" | "OPERATOR_NOT_EQUAL" | "OPERATOR_IN" | "OPERATOR_NOT_IN" | "OPERATOR_CONTAINS_ONE" | "OPERATOR_CONTAINS_ALL" | undefined;
                        targets?: string[] | undefined;
                    }[];
                    effect: "EFFECT_ALLOW" | "EFFECT_DENY";
                    notes?: string | undefined;
                } | undefined;
                setPaymentMethodIntent?: {
                    number: string;
                    cvv: string;
                    expiryMonth: string;
                    expiryYear: string;
                    cardHolderEmail: string;
                    cardHolderName: string;
                } | undefined;
                activateBillingTierIntent?: {
                    productId: string;
                } | undefined;
                deletePaymentMethodIntent?: {
                    paymentMethodId: string;
                } | undefined;
                createPolicyIntentV3?: {
                    policyName: string;
                    effect: "EFFECT_ALLOW" | "EFFECT_DENY";
                    condition?: string | undefined;
                    consensus?: string | undefined;
                    notes?: string | undefined;
                } | undefined;
                createApiOnlyUsersIntent?: {
                    apiOnlyUsers: {
                        userName: string;
                        userEmail?: string | undefined;
                        userTags: string[];
                        apiKeys: {
                            apiKeyName: string;
                            publicKey: string;
                        }[];
                    }[];
                } | undefined;
                updateRootQuorumIntent?: {
                    threshold: number;
                    userIds: string[];
                } | undefined;
                updateUserTagIntent?: {
                    userTagId: string;
                    newUserTagName?: string | undefined;
                    addUserIds: string[];
                    removeUserIds: string[];
                } | undefined;
                updatePrivateKeyTagIntent?: {
                    privateKeyTagId: string;
                    newPrivateKeyTagName?: string | undefined;
                    addPrivateKeyIds: string[];
                    removePrivateKeyIds: string[];
                } | undefined;
                createAuthenticatorsIntentV2?: {
                    authenticators: {
                        authenticatorName: string;
                        challenge: string;
                        attestation: {
                            credentialId: string;
                            clientDataJson: string;
                            attestationObject: string;
                            transports: ("AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_HYBRID")[];
                        };
                    }[];
                    userId: string;
                } | undefined;
                acceptInvitationIntentV2?: {
                    invitationId: string;
                    userId: string;
                    authenticator: {
                        authenticatorName: string;
                        challenge: string;
                        attestation: {
                            credentialId: string;
                            clientDataJson: string;
                            attestationObject: string;
                            transports: ("AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_HYBRID")[];
                        };
                    };
                } | undefined;
                createOrganizationIntentV2?: {
                    organizationName: string;
                    rootEmail: string;
                    rootAuthenticator: {
                        authenticatorName: string;
                        challenge: string;
                        attestation: {
                            credentialId: string;
                            clientDataJson: string;
                            attestationObject: string;
                            transports: ("AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_HYBRID")[];
                        };
                    };
                    rootUserId?: string | undefined;
                } | undefined;
                createUsersIntentV2?: {
                    users: {
                        userName: string;
                        userEmail?: string | undefined;
                        apiKeys: {
                            apiKeyName: string;
                            publicKey: string;
                        }[];
                        authenticators: {
                            authenticatorName: string;
                            challenge: string;
                            attestation: {
                                credentialId: string;
                                clientDataJson: string;
                                attestationObject: string;
                                transports: ("AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_HYBRID")[];
                            };
                        }[];
                        userTags: string[];
                    }[];
                } | undefined;
                createSubOrganizationIntent?: {
                    name: string;
                    rootAuthenticator: {
                        authenticatorName: string;
                        challenge: string;
                        attestation: {
                            credentialId: string;
                            clientDataJson: string;
                            attestationObject: string;
                            transports: ("AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_HYBRID")[];
                        };
                    };
                } | undefined;
                createSubOrganizationIntentV2?: {
                    subOrganizationName: string;
                    rootUsers: {
                        userName: string;
                        userEmail?: string | undefined;
                        apiKeys: {
                            apiKeyName: string;
                            publicKey: string;
                        }[];
                        authenticators: {
                            authenticatorName: string;
                            challenge: string;
                            attestation: {
                                credentialId: string;
                                clientDataJson: string;
                                attestationObject: string;
                                transports: ("AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_HYBRID")[];
                            };
                        }[];
                    }[];
                    rootQuorumThreshold: number;
                } | undefined;
                updateAllowedOriginsIntent?: {
                    allowedOrigins: string[];
                } | undefined;
                createPrivateKeysIntentV2?: {
                    privateKeys: {
                        privateKeyName: string;
                        curve: "CURVE_SECP256K1" | "CURVE_ED25519";
                        privateKeyTags: string[];
                        addressFormats: ("ADDRESS_FORMAT_UNCOMPRESSED" | "ADDRESS_FORMAT_COMPRESSED" | "ADDRESS_FORMAT_ETHEREUM" | "ADDRESS_FORMAT_SOLANA" | "ADDRESS_FORMAT_COSMOS")[];
                    }[];
                } | undefined;
                updateUserIntent?: {
                    userId: string;
                    userName?: string | undefined;
                    userEmail?: string | undefined;
                    userTagIds?: string[] | undefined;
                } | undefined;
                updatePolicyIntent?: {
                    policyId: string;
                    policyName?: string | undefined;
                    policyEffect?: "EFFECT_ALLOW" | "EFFECT_DENY" | undefined;
                    policyCondition?: string | undefined;
                    policyConsensus?: string | undefined;
                    policyNotes?: string | undefined;
                } | undefined;
                setPaymentMethodIntentV2?: {
                    paymentMethodId: string;
                    cardHolderEmail: string;
                    cardHolderName: string;
                } | undefined;
                createSubOrganizationIntentV3?: {
                    subOrganizationName: string;
                    rootUsers: {
                        userName: string;
                        userEmail?: string | undefined;
                        apiKeys: {
                            apiKeyName: string;
                            publicKey: string;
                        }[];
                        authenticators: {
                            authenticatorName: string;
                            challenge: string;
                            attestation: {
                                credentialId: string;
                                clientDataJson: string;
                                attestationObject: string;
                                transports: ("AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_HYBRID")[];
                            };
                        }[];
                    }[];
                    rootQuorumThreshold: number;
                    privateKeys: {
                        privateKeyName: string;
                        curve: "CURVE_SECP256K1" | "CURVE_ED25519";
                        privateKeyTags: string[];
                        addressFormats: ("ADDRESS_FORMAT_UNCOMPRESSED" | "ADDRESS_FORMAT_COMPRESSED" | "ADDRESS_FORMAT_ETHEREUM" | "ADDRESS_FORMAT_SOLANA" | "ADDRESS_FORMAT_COSMOS")[];
                    }[];
                } | undefined;
                createWalletIntent?: {
                    walletName: string;
                    accounts: {
                        curve: "CURVE_SECP256K1" | "CURVE_ED25519";
                        pathFormat: "PATH_FORMAT_BIP32";
                        path: string;
                        addressFormat: "ADDRESS_FORMAT_UNCOMPRESSED" | "ADDRESS_FORMAT_COMPRESSED" | "ADDRESS_FORMAT_ETHEREUM" | "ADDRESS_FORMAT_SOLANA" | "ADDRESS_FORMAT_COSMOS";
                    }[];
                } | undefined;
                createWalletAccountsIntent?: {
                    walletId: string;
                    accounts: {
                        curve: "CURVE_SECP256K1" | "CURVE_ED25519";
                        pathFormat: "PATH_FORMAT_BIP32";
                        path: string;
                        addressFormat: "ADDRESS_FORMAT_UNCOMPRESSED" | "ADDRESS_FORMAT_COMPRESSED" | "ADDRESS_FORMAT_ETHEREUM" | "ADDRESS_FORMAT_SOLANA" | "ADDRESS_FORMAT_COSMOS";
                    }[];
                } | undefined;
                initUserEmailRecoveryIntent?: {
                    email: string;
                    targetPublicKey: string;
                } | undefined;
                recoverUserIntent?: {
                    authenticator: {
                        authenticatorName: string;
                        challenge: string;
                        attestation: {
                            credentialId: string;
                            clientDataJson: string;
                            attestationObject: string;
                            transports: ("AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_HYBRID")[];
                        };
                    };
                    userId: string;
                } | undefined;
                setOrganizationFeatureIntent?: {
                    name: "FEATURE_NAME_ROOT_USER_EMAIL_RECOVERY" | "FEATURE_NAME_WEBAUTHN_ORIGINS";
                    value: string;
                } | undefined;
                removeOrganizationFeatureIntent?: {
                    name: "FEATURE_NAME_ROOT_USER_EMAIL_RECOVERY" | "FEATURE_NAME_WEBAUTHN_ORIGINS";
                } | undefined;
                signRawPayloadIntentV2?: {
                    signWith: string;
                    payload: string;
                    encoding: "PAYLOAD_ENCODING_HEXADECIMAL" | "PAYLOAD_ENCODING_TEXT_UTF8";
                    hashFunction: "HASH_FUNCTION_NO_OP" | "HASH_FUNCTION_SHA256" | "HASH_FUNCTION_KECCAK256" | "HASH_FUNCTION_NOT_APPLICABLE";
                } | undefined;
                signTransactionIntentV2?: {
                    signWith: string;
                    unsignedTransaction: string;
                    type: "TRANSACTION_TYPE_ETHEREUM";
                } | undefined;
                exportPrivateKeyIntent?: {
                    privateKeyId: string;
                    targetPublicKey: string;
                } | undefined;
                exportWalletIntent?: {
                    walletId: string;
                    targetPublicKey: string;
                    language?: "MNEMONIC_LANGUAGE_ENGLISH" | "MNEMONIC_LANGUAGE_SIMPLIFIED_CHINESE" | "MNEMONIC_LANGUAGE_TRADITIONAL_CHINESE" | "MNEMONIC_LANGUAGE_CZECH" | "MNEMONIC_LANGUAGE_FRENCH" | "MNEMONIC_LANGUAGE_ITALIAN" | "MNEMONIC_LANGUAGE_JAPANESE" | "MNEMONIC_LANGUAGE_KOREAN" | "MNEMONIC_LANGUAGE_SPANISH" | undefined;
                } | undefined;
                createSubOrganizationIntentV4?: {
                    subOrganizationName: string;
                    rootUsers: {
                        userName: string;
                        userEmail?: string | undefined;
                        apiKeys: {
                            apiKeyName: string;
                            publicKey: string;
                        }[];
                        authenticators: {
                            authenticatorName: string;
                            challenge: string;
                            attestation: {
                                credentialId: string;
                                clientDataJson: string;
                                attestationObject: string;
                                transports: ("AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_HYBRID")[];
                            };
                        }[];
                    }[];
                    rootQuorumThreshold: number;
                    wallet?: {
                        walletName: string;
                        accounts: {
                            curve: "CURVE_SECP256K1" | "CURVE_ED25519";
                            pathFormat: "PATH_FORMAT_BIP32";
                            path: string;
                            addressFormat: "ADDRESS_FORMAT_UNCOMPRESSED" | "ADDRESS_FORMAT_COMPRESSED" | "ADDRESS_FORMAT_ETHEREUM" | "ADDRESS_FORMAT_SOLANA" | "ADDRESS_FORMAT_COSMOS";
                        }[];
                    } | undefined;
                    disableEmailRecovery?: boolean | undefined;
                } | undefined;
            };
            result: {
                createOrganizationResult?: {
                    organizationId: string;
                } | undefined;
                createAuthenticatorsResult?: {
                    authenticatorIds: string[];
                } | undefined;
                createUsersResult?: {
                    userIds: string[];
                } | undefined;
                createPrivateKeysResult?: {
                    privateKeyIds: string[];
                } | undefined;
                createInvitationsResult?: {
                    invitationIds: string[];
                } | undefined;
                acceptInvitationResult?: {
                    invitationId: string;
                    userId: string;
                } | undefined;
                signRawPayloadResult?: {
                    r: string;
                    s: string;
                    v: string;
                } | undefined;
                createPolicyResult?: {
                    policyId: string;
                } | undefined;
                disablePrivateKeyResult?: {
                    privateKeyId: string;
                } | undefined;
                deleteUsersResult?: {
                    userIds: string[];
                } | undefined;
                deleteAuthenticatorsResult?: {
                    authenticatorIds: string[];
                } | undefined;
                deleteInvitationResult?: {
                    invitationId: string;
                } | undefined;
                deleteOrganizationResult?: {
                    organizationId: string;
                } | undefined;
                deletePolicyResult?: {
                    policyId: string;
                } | undefined;
                createUserTagResult?: {
                    userTagId: string;
                    userIds: string[];
                } | undefined;
                deleteUserTagsResult?: {
                    userTagIds: string[];
                    userIds: string[];
                } | undefined;
                signTransactionResult?: {
                    signedTransaction: string;
                } | undefined;
                deleteApiKeysResult?: {
                    apiKeyIds: string[];
                } | undefined;
                createApiKeysResult?: {
                    apiKeyIds: string[];
                } | undefined;
                createPrivateKeyTagResult?: {
                    privateKeyTagId: string;
                    privateKeyIds: string[];
                } | undefined;
                deletePrivateKeyTagsResult?: {
                    privateKeyTagIds: string[];
                    privateKeyIds: string[];
                } | undefined;
                setPaymentMethodResult?: {
                    lastFour: string;
                    cardHolderName: string;
                    cardHolderEmail: string;
                } | undefined;
                activateBillingTierResult?: {
                    productId: string;
                } | undefined;
                deletePaymentMethodResult?: {
                    paymentMethodId: string;
                } | undefined;
                createApiOnlyUsersResult?: {
                    userIds: string[];
                } | undefined;
                updateRootQuorumResult?: {
                    [key: string]: unknown;
                } | undefined;
                updateUserTagResult?: {
                    userTagId: string;
                } | undefined;
                updatePrivateKeyTagResult?: {
                    privateKeyTagId: string;
                } | undefined;
                createSubOrganizationResult?: {
                    subOrganizationId: string;
                } | undefined;
                updateAllowedOriginsResult?: {
                    [key: string]: unknown;
                } | undefined;
                createPrivateKeysResultV2?: {
                    privateKeys: {
                        privateKeyId?: string | undefined;
                        addresses?: {
                            format?: "ADDRESS_FORMAT_UNCOMPRESSED" | "ADDRESS_FORMAT_COMPRESSED" | "ADDRESS_FORMAT_ETHEREUM" | "ADDRESS_FORMAT_SOLANA" | "ADDRESS_FORMAT_COSMOS" | undefined;
                            address?: string | undefined;
                        }[] | undefined;
                    }[];
                } | undefined;
                updateUserResult?: {
                    userId: string;
                } | undefined;
                updatePolicyResult?: {
                    policyId: string;
                } | undefined;
                createSubOrganizationResultV3?: {
                    subOrganizationId: string;
                    privateKeys: {
                        privateKeyId?: string | undefined;
                        addresses?: {
                            format?: "ADDRESS_FORMAT_UNCOMPRESSED" | "ADDRESS_FORMAT_COMPRESSED" | "ADDRESS_FORMAT_ETHEREUM" | "ADDRESS_FORMAT_SOLANA" | "ADDRESS_FORMAT_COSMOS" | undefined;
                            address?: string | undefined;
                        }[] | undefined;
                    }[];
                } | undefined;
                createWalletResult?: {
                    walletId: string;
                    addresses: string[];
                } | undefined;
                createWalletAccountsResult?: {
                    addresses: string[];
                } | undefined;
                initUserEmailRecoveryResult?: {
                    userId: string;
                } | undefined;
                recoverUserResult?: {
                    authenticatorId: string[];
                } | undefined;
                setOrganizationFeatureResult?: {
                    features: {
                        name?: "FEATURE_NAME_ROOT_USER_EMAIL_RECOVERY" | "FEATURE_NAME_WEBAUTHN_ORIGINS" | undefined;
                        value?: string | undefined;
                    }[];
                } | undefined;
                removeOrganizationFeatureResult?: {
                    features: {
                        name?: "FEATURE_NAME_ROOT_USER_EMAIL_RECOVERY" | "FEATURE_NAME_WEBAUTHN_ORIGINS" | undefined;
                        value?: string | undefined;
                    }[];
                } | undefined;
                exportPrivateKeyResult?: {
                    privateKeyId: string;
                    exportBundle: string;
                } | undefined;
                exportWalletResult?: {
                    walletId: string;
                    exportBundle: string;
                } | undefined;
                createSubOrganizationResultV4?: {
                    subOrganizationId: string;
                    wallet?: {
                        walletId: string;
                        addresses: string[];
                    } | undefined;
                } | undefined;
            };
            votes: {
                id: string;
                userId: string;
                user: {
                    userId: string;
                    userName: string;
                    userEmail?: string | undefined;
                    authenticators: {
                        transports: ("AUTHENTICATOR_TRANSPORT_BLE" | "AUTHENTICATOR_TRANSPORT_INTERNAL" | "AUTHENTICATOR_TRANSPORT_NFC" | "AUTHENTICATOR_TRANSPORT_USB" | "AUTHENTICATOR_TRANSPORT_HYBRID")[];
                        attestationType: string;
                        aaguid: string;
                        credentialId: string;
                        model: string;
                        credential: {
                            publicKey: string;
                            type: "CREDENTIAL_TYPE_WEBAUTHN_AUTHENTICATOR" | "CREDENTIAL_TYPE_API_KEY_P256" | "CREDENTIAL_TYPE_RECOVER_USER_KEY_P256";
                        };
                        authenticatorId: string;
                        authenticatorName: string;
                        createdAt: {
                            seconds: string;
                            nanos: string;
                        };
                        updatedAt: {
                            seconds: string;
                            nanos: string;
                        };
                    }[];
                    apiKeys: {
                        credential: {
                            publicKey: string;
                            type: "CREDENTIAL_TYPE_WEBAUTHN_AUTHENTICATOR" | "CREDENTIAL_TYPE_API_KEY_P256" | "CREDENTIAL_TYPE_RECOVER_USER_KEY_P256";
                        };
                        apiKeyId: string;
                        apiKeyName: string;
                        createdAt: {
                            seconds: string;
                            nanos: string;
                        };
                        updatedAt: {
                            seconds: string;
                            nanos: string;
                        };
                    }[];
                    userTags: string[];
                    createdAt: {
                        seconds: string;
                        nanos: string;
                    };
                    updatedAt: {
                        seconds: string;
                        nanos: string;
                    };
                };
                activityId: string;
                selection: "VOTE_SELECTION_APPROVED" | "VOTE_SELECTION_REJECTED";
                message: string;
                publicKey: string;
                signature: string;
                scheme: string;
                createdAt: {
                    seconds: string;
                    nanos: string;
                };
            }[];
            fingerprint: string;
            canApprove: boolean;
            canReject: boolean;
            createdAt: {
                seconds: string;
                nanos: string;
            };
            updatedAt: {
                seconds: string;
                nanos: string;
            };
        };
    }>;
}
