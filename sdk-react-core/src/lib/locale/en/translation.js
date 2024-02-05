/* eslint-disable */
const translation = {
    /**
     * @description copy keys for account exists view
     * @default
     * {
          connect: 'Connect with {{socialOauth}}',
          description: 'It looks like an account already exists using',
          title: 'Account already exists',
          trail_message_email: '. Please log in with your email.',
          trail_message_social: 'through {{socialOauth}}',
        }
     */
    dyn_account_exists: {
        connect: 'Connect with {{socialOauth}}',
        description: 'It looks like an account already exists using',
        title: 'Account already exists',
        trail_message_email: '. Please log in with your email.',
        trail_message_social: 'through {{socialOauth}}',
    },
    /**
     * @description copy keys for showing an alert when a user is connected to a testnet network
     * @default
     * {
          testnet_warning: 'A testnet network has been selected. Please only use testnet funds or they will be lost.',
       }
     */
    dyn_active_wallet_info: {
        testnet_warning: 'A testnet network has been selected. Please only use testnet funds or they will be lost.',
    },
    /**
     * @description copy keys for bridge view
     * @default
     * {
          summary_view: {
            connection_succeed: 'Congratulations on connecting both your {{firstBlockchainName}} and {{secondBlockchainName}} wallets',
            title: 'Welcome to {{appName}}',
          },
          welcome_view: {
            button: 'Get started',
            description: 'You’ll need to connect both your {{firstBlockchainName}} and {{secondBlockchainName}} wallets to get started',
            title: 'Connect to {{appName}}',
          },
          widget: {
            address: 'Copy wallet address',
            connect: 'Connect wallet',
            connect_with_network: 'Connect {{blockchainName}} wallet',
            copy: {
              address: 'Copy wallet address',
              ens: 'Copy ENS',
            },
            disconnect: 'Disconnect',
            edit_profile: 'Edit profile',
            wallet_network: '{{networkName}} wallet',
          },
        }
     */
    dyn_bridge: {
        summary_view: {
            connection_succeed: 'Congratulations on connecting both your {{firstBlockchainName}} and {{secondBlockchainName}} wallets',
            title: 'Welcome to {{appName}}',
        },
        welcome_view: {
            button: 'Get started',
            description: 'You’ll need to connect both your {{firstBlockchainName}} and {{secondBlockchainName}} wallets to get started',
            title: 'Connect to {{appName}}',
        },
        widget: {
            address: 'Copy wallet address',
            connect: 'Connect wallet',
            connect_with_network: 'Connect {{blockchainName}} wallet',
            copy: {
                address: 'Copy wallet address',
                ens: 'Copy ENS',
            },
            disconnect: 'Disconnect',
            edit_profile: 'Edit profile',
            wallet_network: '{{networkName}} wallet',
        },
    },
    /**
     * @description copy keys for Dynamic Captcha
     * @default
     * {
        verify_user_subtitle: 'We need to quickly verify you’re human before we proceed.',
        verify_user_title: "Let's verify you're human",
      }
     */
    dyn_captcha: {
        verify_user_subtitle: 'We need to quickly verify you’re human before we proceed.',
        verify_user_title: "Let's verify you're human",
    },
    /**
     * @description copy keys for chainalysis blocked wallet view
     * @default
     * {
         title: 'Access denied',
       }
     */
    dyn_chainalysis_blocked_wallet: {
        title: 'Access denied',
    },
    /**
     * @description copy keys for collecting user data
     * @default
     * {
        description: 'We need a bit of information to get started',
        fields: {
          alias: {
            label: 'Alias',
          },
          country: {
            label: 'Country',
          },
          email: {
            label: 'Email',
            validation: 'Email is not valid',
          },
          first_name: {
            label: 'First Name',
          },
          job_title: {
            label: 'Job Title',
          },
          last_name: {
            label: 'Last Name',
          },
          phone_number: {
            label: 'Phone number',
            validation: 'Phone number is not valid',
          },
          policies_consent: {
            label: 'Policies Consent',
          },
          t_shirt_size: {
            label: 'T-Shirt Size',
          },
          team: {
            label: 'Team',
          },
          username: {
            label: 'Username',
            validation: 'Username is not valid',
          },
        },
        greeting: 'Welcome to {{appName}}',
        log_out_button: 'Log out',
        not_supported_network: {
          description: 'Your wallet is not connected to a supported network. Please update before continuing.',
          error_message: 'This network is not available, please update.',
          title: 'Update Network',
        },
        update_email_tooltip:
        'This email is tied to your wallet so cannot be updated',
      }
     */
    dyn_collect_user_data: {
        description: 'We need a bit of information to get started',
        fields: {
            alias: {
                label: 'Alias',
            },
            country: {
                label: 'Country',
            },
            email: {
                label: 'Email',
                validation: 'Email is not valid',
            },
            first_name: {
                label: 'First Name',
            },
            job_title: {
                label: 'Job Title',
            },
            last_name: {
                label: 'Last Name',
            },
            phone_number: {
                label: 'Phone number',
                validation: 'Phone number is not valid',
            },
            policies_consent: {
                label: 'Policies Consent',
            },
            t_shirt_size: {
                label: 'T-Shirt Size',
            },
            team: {
                label: 'Team',
            },
            username: {
                label: 'Username',
                validation: 'Username is not valid',
            },
        },
        greeting: 'Welcome to {{appName}}',
        log_out_button: 'Log out',
        not_supported_network: {
            description: 'Your wallet is not connected to a supported network. Please update before continuing.',
            error_message: 'This network is not available, please update.',
            title: 'Update Network',
        },
        update_email_tooltip: 'This email is tied to your wallet so cannot be updated',
    },
    /**
     * @description copy keys for email verification view after email logging in with magiclink
     * @default
     * {
        description: 'We’ve sent a verification email to',
        note: 'Note: it might take a few seconds to proceed after clicking the link in your email',
        title: 'Confirm your email',
      }
     */
    dyn_email_confirmation: {
        description: 'We’ve sent a verification email to',
        note: 'Note: it might take a few seconds to proceed after clicking the link in your email',
        title: 'Confirm your email',
    },
    /**
     * @description copy keys for email update view
     * @default
     * {
        current_email: 'Your current email address is',
        label: 'Email address',
        send_verification: 'Send Verification Code',
        title: 'Update email',
      }
    */
    dyn_email_update: {
        current_email: 'Your current email address is',
        label: 'Email address',
        send_verification: 'Send Verification Code',
        title: 'Update email',
    },
    /**
     * @description copy keys for email verification view after logging in with dynamic email provider or after kyc verification
     * @default
     * {
        code_not_received: 'Did not receive your code yet?',
        code_sent: 'Code sent',
        complete: 'Verification complete, the email is now verified to this account.',
        description: 'We’ve sent a verification code to',
        edit_email: 'Edit email',
        log_out_button: 'Log out',
        resend_code: 'Re-send code',
        resend_code_in: 'Re-send code in {{remainingSeconds}}',
        title: 'Confirm your email',
      }
     */
    dyn_email_verification: {
        code_not_received: 'Did not receive your code yet?',
        code_sent: 'Code sent',
        complete: 'Verification complete, the email is now verified to this account.',
        description: 'We’ve sent a verification code to',
        edit_email: 'Edit email',
        log_out_button: 'Log out',
        resend_code: 'Re-send code',
        resend_code_in: 'Re-send code in {{remainingSeconds}}',
        title: 'Confirm your email',
    },
    /**
     * @description copy keys for log in view
     * @default
     * {
        connect_wallet: {
          title: 'Connect',
        },
        helper: {
          all_wallet_list: 'Get your first wallet',
          email_form: {
            invalid_email: 'Invalid or incorrect email. Did you mistype it?',
          },
          pending_connect: {
            title: 'Connecting a wallet',
          },
          pending_signature: {
            title: 'Signing a wallet',
          },
          pending_signature_without_back_button: {
            title: 'Signing a wallet',
          },
          qr_code: {
            title: 'Connecting a wallet',
          },
          wallet_only: 'Get your first wallet',
        },
        qr_code: {
          title: 'Connect',
        },
        separators: {
          default: 'OR',
        },
        sign_wallet: {
          title: 'Sign',
        },
        title: {
          all: 'Log in or sign up',
          all_wallet_list: 'Select your wallet',
          wallet_only: 'Select your wallet',
        },
        wallet_group: {
          title: 'Select Chain',
        },
        wallet_list: {
          button_only: 'Continue with a wallet',
        },
        wrong_social_account: {
          retry_button: 'Try again',
          retry_title: 'Please connect with: ',
          subtitle: 'You must connect with the same account you originally signed in with.',
          title: 'Whoops. Wrong Account',
  },
      }
     */
    dyn_login: {
        connect_wallet: {
            title: 'Connect',
        },
        helper: {
            all_wallet_list: 'Get your first wallet',
            email_form: {
                invalid_email: 'Invalid or incorrect email. Did you mistype it?',
            },
            pending_connect: {
                title: 'Connecting a wallet',
            },
            pending_signature: {
                title: 'Signing a wallet',
            },
            pending_signature_without_back_button: {
                title: 'Signing a wallet',
            },
            qr_code: {
                title: 'Connecting a wallet',
            },
            wallet_only: 'Get your first wallet',
        },
        qr_code: {
            title: 'Connect',
        },
        separators: {
            default: 'OR',
        },
        sign_wallet: {
            title: 'Sign',
        },
        title: {
            all: 'Log in or sign up',
            all_wallet_list: 'Select your wallet',
            wallet_only: 'Select your wallet',
        },
        wallet_group: {
            title: 'Select Chain',
        },
        wallet_list: {
            button_only: 'Continue with a wallet',
        },
        wrong_social_account: {
            retry_button: 'Try again',
            retry_title: 'Please connect with: ',
            subtitle: 'You must connect with the same account you originally signed in with.',
            title: 'Whoops. Wrong Account',
        },
    },
    /**
     * @description copy keys for Dynamic manage passkeys view which are used inside dynamic widget
     * @default
     * {
        title: 'My passkeys',
        passkey_from: 'from',
        passkey_providers: {
          android: 'Android Phone',
          brave: 'Brave Browser',
          chrome: 'Google Chrome',
          edge: 'Microsoft Edge',
          firefox: 'Firefox',
          iPhone: 'iPhone',
          opera: 'Opera Browser',
          safari: 'Safari Browser',
        },
        recovery_button: 'Set up new passkey',
      }
     */
    dyn_manage_passkeys: {
        title: 'My passkeys',
        passkey_from: 'from',
        passkey_providers: {
            android: 'Android Phone',
            brave: 'Brave Browser',
            chrome: 'Google Chrome',
            edge: 'Microsoft Edge',
            firefox: 'Firefox',
            iPhone: 'iPhone',
            opera: 'Opera Browser',
            safari: 'Safari Browser',
        },
        recovery_button: 'Set up new passkey',
    },
    /**
     * @description copy keys for merge user accounts view
     * @default
     * {
        cancel_button: "No, I'll use a different email",
        confirm_button: 'Yes, link to existing account',
        errors: {
          merge_error: 'Something went wrong, please try again.',
        },
        existing_account: 'An account already exists that uses',
        existing_account_trail: 'email.',
        title: 'Would you like to link this wallet to this existing account?',
      },
      }
     */
    dyn_merge_user_accounts: {
        cancel_button: "No, I'll use a different email",
        confirm_button: 'Yes, link to existing account',
        errors: {
            merge_error: 'Something went wrong, please try again.',
        },
        existing_account: 'An account already exists that uses',
        existing_account_trail: 'email.',
        title: 'Would you like to link this wallet to this existing account?',
    },
    /**
     * @description copy key for Dynamic need help footer section
     * @default
     * {
        info: 'Can’t find your passkey?',
        contact_support: 'Contact support',
        divider: 'or',
        recovery_button: 'generate a new one.',
      }
     */
    dyn_need_help_section: {
        info: 'Can’t find your passkey?',
        contact_support: 'Contact support',
        divider: 'or',
        recovery_button: 'generate a new one.',
    },
    /**
     * @description copy keys for network not supported view
     * @default
     * {
        button: 'Switch Network',
        subtitle: 'Your wallet is not connected to a supported network. Please update before continuing.',
        title: 'Update Network',
        warning_message: 'This network is not available, please update.',
      }
     */
    dyn_network_not_supported: {
        button: 'Switch Network',
        subtitle: 'Your wallet is not connected to a supported network. Please update before continuing.',
        title: 'Update Network',
        warning_message: 'This network is not available, please update.',
    },
    /**
     * @description copy keys for network not supported view for manual switch
     * @default
     * {
        subtitle_network_defined: 'To continue, please update the network in your wallet to {{network}}',
        subtitle_no_network_defined: 'Your wallet does not support switching networks from this app. Switch networks directly in your wallet.',
        title: 'Update your Network',
        warning_message: 'This network is not available, please update.',
      }
     */
    dyn_network_not_supported_manual_switch: {
        subtitle_network_defined: 'To continue, please update the network in your wallet to {{network}}',
        subtitle_no_network_defined: 'Your wallet does not support switching networks from this app. Switch networks directly in your wallet.',
        title: 'Update your Network',
        warning_message: 'This network is not available, please update.',
    },
    /**
     * @description copy keys for no access view
     * @default
     * {
        chainalysis: {
          button_text: 'Try another method',
          description: 'This wallet has been correlated to illicit activity and cannot access this site.',
          social_media_link_text: 'Why am I seeing this message?',
          social_media_link_url: 'https://docs.dynamic.xyz/docs',
          title: 'This address seems corrupted.',
        },
        default: {
          button_text: 'Try another method',
          description: "We couldn't find your wallet address or email on our allow list of customers.",
          title: 'Access denied',
        },
        gate: {
          button_text: 'Try a different wallet',
          description: 'A NFT or a token is required to access this site.',
          title: 'You cannot access the site',
        },
        not_in_the_list_image_alt: 'user is not in the list',
        title: "You don't have access",
      }
     */
    dyn_no_access: {
        chainalysis: {
            button_text: 'Try another method',
            description: 'This wallet has been correlated to illicit activity and cannot access this site.',
            social_media_link_text: 'Why am I seeing this message?',
            social_media_link_url: 'https://docs.dynamic.xyz/docs',
            title: 'This address seems corrupted.',
        },
        default: {
            button_text: 'Try another method',
            description: "We couldn't find your wallet address or email on our allow list of customers.",
            title: 'Access denied',
        },
        gate: {
            button_text: 'Try a different wallet',
            description: 'A NFT or a token is required to access this site.',
            title: 'You cannot access the site',
        },
        not_in_the_list_image_alt: 'user is not in the list',
        title: "You don't have access",
    },
    /**
     * @description copy keys for email OTP verification for magiclink
     * @default
     * {
        banner_text: 'Sign in to access your email based wallet',
        code_sent: 'We’ve sent a verification code to',
        confirm_code: 'Confirm verification code',
        hang_tight: 'Hang tight while we get things ready for you',
        verification_succeeded: 'Verification code confirmed',
        title: 'Confirm verification code',
      }
     */
    dyn_otp_verification: {
        banner_text: 'Sign in to access your email based wallet',
        code_sent: 'We’ve sent a verification code to',
        confirm_code: 'Confirm verification code',
        hang_tight: 'Hang tight while we get things ready for you',
        verification_succeeded: 'Verification code confirmed',
        title: 'Confirm verification code',
    },
    /**
     * @description copy key for passkey created success banner
     * @default
     * {
        text: 'A new passkey has been created',
      }
     */
    dyn_passkey_created_success: {
        text: 'A new passkey has been created',
    },
    /**
     * @description copy keys for passkey intro view
     * @default
     * {
        button: 'Set up a passkey',
        button_logout: 'Log out',
        disabled: 'Passkeys are not available on this device or browser. Please open on Chrome, Safari, or Brave to continue',
        helper: {
          section_1: {
            description: 'Passkeys are a standard built by Apple, Google and others, and eliminates the use of passwords.',
            title: 'Built by Apple and Google',
          },
          section_2: {
            description: 'Passkeys are stored on your phone and are not shared with anyone.',
            title: 'Secure and Private',
          },
          title: "What's Passkey",
          tooltip: 'Need some help?',
        },
        subtitle: 'Passkeys are stored natively to your device with a biometric and can only be accessed by you.',
        title: 'Secure your wallet',
      }
     */
    dyn_passkey_intro: {
        button: 'Set up a passkey',
        button_logout: 'Log out',
        disabled: 'Passkeys are not available on this device or browser. Please open on Chrome, Safari, or Brave to continue',
        helper: {
            section_1: {
                description: 'Passkeys are a standard built by Apple, Google and others, and eliminates the use of passwords.',
                title: 'Built by Apple and Google',
            },
            section_2: {
                description: 'Passkeys are stored on your phone and are not shared with anyone.',
                title: 'Secure and Private',
            },
            title: "What's Passkey",
            tooltip: 'Need some help?',
        },
        subtitle: 'Passkeys are stored natively to your device with a biometric and can only be accessed by you.',
        title: 'Secure your wallet',
    },
    /**
     * @description copy keys for passkeys recovery flow
     * @default
     * {
        code: {
            description: 'A code has been sent to the email on file.',
            input_label: 'Enter your code here...',
            title: 'Enter email code',
          resend: {
              button: 'Resend code',
              text: "Didn't receive a code?",
          },
        },
        complete: {
          complete_button: 'Create a passkey',
          description: 'Secure your wallet by adding a new passkey.',
          title: 'Create a new passkey',
        },
        start: {
          description:
            'To complete this process, ensure you are using the same device/browser.',
          start_button: 'Send me an email',
          title: 'Initiate Request',
        },
      }
     */
    dyn_passkey_recovery: {
        code: {
            description: 'A code has been sent to the email on file.',
            input_label: 'Enter your code here...',
            title: 'Enter email code',
            resend: {
                button: 'Resend code',
                text: "Didn't receive a code?",
            },
        },
        complete: {
            complete_button: 'Create a passkey',
            description: 'Secure your wallet by adding a new passkey.',
            title: 'Create a new passkey',
        },
        start: {
            description: 'To complete this process, ensure you are using the same device/browser.',
            start_button: 'Send me an email',
            title: 'Initiate Request',
        },
    },
    /**
     * @description copy keys for Dynamic pending wallet connection
     * @default
     * {
        mobile: 'Click connect in your mobile wallet',
        computer: 'Click connect in your wallet popup',
      }
     */
    dyn_pending_connection: {
        mobile: 'Click connect in your mobile wallet',
        computer: 'Click connect in your wallet popup',
    },
    /**
       * @description copy keys for Dynamic pending signature, we have overrides for phantom ledger which does not support message signing.
       * @default
       * {
          click_to_sign: 'Click to Sign',
          note: 'Note: ',
          phantom_ledger_sign: "Click sign in your wallet to confirm you own this wallet (this doesn't cost gas).",
          phantom_ledger_warning: "Ledger with Phantom doesn't support message signing. When logging in, a small fee (which should not apply) may appear. See below to learn more.",
          regular_sign_description: 'Click sign-in in your wallet to confirm you own this wallet.',
    }
       */
    dyn_pending_signature: {
        click_to_sign: 'Click to Sign',
        note: 'Note: ',
        phantom_ledger_sign: "Click sign in your wallet to confirm you own this wallet (this doesn't cost gas).",
        phantom_ledger_warning: "Ledger with Phantom doesn't support message signing. When logging in, a small fee (which should not apply) may appear. See below to learn more.",
        regular_sign_description: 'Click sign-in in your wallet to confirm you own this wallet.',
    },
    /**
       * @description copy keys for Dynamic QR code Wallet Connection Pop-Up
       * @default
       * {
          copy_button: 'Copy QR URI',
          open_button: 'Open {{wallet}} App',
          scan_title: "Scan this QR code from your mobile wallet or phone's camera to connect.",
          wallet_not_installed: {
            browser_install: 'Install {{browser}} extension',
            install: 'Install {{wallet}} extension to connect',
            refresh: 'Refresh the page once installed',
            select: 'Select from your preferred options below:',
          },
        }
       */
    dyn_qr_code: {
        copy_button: 'Copy QR URI',
        open_button: 'Open {{wallet}} App',
        scan_title: "Scan this QR code from your mobile wallet or phone's camera to connect.",
        wallet_not_installed: {
            browser_install: 'Install {{browser}} extension',
            install: 'Install {{wallet}} extension to connect',
            refresh: 'Refresh the page once installed',
            select: 'Select from your preferred options below:',
        },
    },
    /**
       * @description copy keys for Dynamic wallet locked/disconnected
       * @default
       * {
          connect_continue: 'Connect your wallet to continue',
          title: 'Welcome back',
          subtitle: "We couldn't connect to your wallet. Click connect to retry the connection ",
          connect: 'Connect wallet',
          logout: 'Log out',
        }
       */
    dyn_wallet_locked: {
        connect_continue: 'Connect your wallet to continue',
        title: 'Welcome back',
        subtitle: "We couldn't connect to your wallet. Click connect to retry the connection ",
        connect: 'Connect wallet',
        logout: 'Log out',
    },
    /**
     * @description copy keys for passkeys creation flow for existent embedded wallets
     * @default
     * {
        code: {
          description: 'A code has been sent to the email on file.',
          input_label: 'Enter your code here...',
          title: 'Enter email code',
          resend: {
            button: 'Resend code',
            text: "Didn't receive a code?",
          },
        },
        complete: {
          complete_button: 'Create a passkey',
          description:
            'Passkeys are stored natively to your device with a biometric and can only be accessed by you.',
          title: 'Secure your account',
        },
        start: {
          description:
            'A one-time security code will be sent to the email on file. It will expire in 15 minutes.',
          start_button: 'Send me an email',
          title: 'Send Email Code',
        },
      }
     */
    dyn_passkey_secure_modal: {
        code: {
            description: 'A code has been sent to the email on file.',
            input_label: 'Enter your code here...',
            title: 'Enter email code',
            resend: {
                button: 'Resend code',
                text: "Didn't receive a code?",
            },
        },
        complete: {
            complete_button: 'Create a passkey',
            description: 'Passkeys are stored natively to your device with a biometric and can only be accessed by you.',
            title: 'Secure your account',
        },
        start: {
            description: 'A one-time security code will be sent to the email on file. It will expire in 15 minutes.',
            start_button: 'Send me an email',
            title: 'Send Email Code',
        },
    },
    /**
     * @description copy keys for secure pregenerated embedded wallet
     * @default
     * {
        description: 'Some features are not available until you add a security method to your account.',
        secure_button: 'Secure your account',
      }
     */
    dyn_secure_pregenerated_wallet: {
        description: 'Some features are not available until you add a security method to your account.',
        secure_button: 'Secure your account',
    },
    /**
     * @description copy keys for send transaction flow views
     * @default
     * {
        confirmation: {
          cancel_button: 'Cancel',
          confirm_button: 'Confirm',
          data: {
            amount: 'Amount',
            from: 'From (You)',
            gas: 'Gas',
            gas_estimate: 'Gas (estimate)',
            to: 'To',
            total: 'Total',
          },
          not_applied: 'N/A',
          title: 'Confirm transaction',
        },
        data: {
          amount: {
            label: 'Amount',
            placeholder: 'Select amount',
          },
          balance: {
            label: 'Balance:',
          },
          from: 'Send from',
          recipient: {
            label: 'Recipient',
            placeholder: 'Enter wallet address...',
          },
        },
        send_button: 'Send now',
        succeeded: {
          continue_button: 'Continue',
          network: {
            label: 'Network',
          },
          recipient: {
            label: 'Recipient',
          },
          title: 'Transaction successfully sent',
          total_amount: {
            label: 'Total amount',
          },
        },
        validation: {
          amount: {
            invalid_decimals: 'Please enter a value up to the {{decimals}}th decimal place.',
            invalid_format: 'The amount is in invalid format',
            over_balance: 'Insufficient funds to send this amount.',
            required: 'The amount field is required',
          },
          recipient: {
            invalid_format: 'The address is in invalid format',
            required: 'The recipient is required',
          },
        },
        warning_message: {
          insufficient_funds: 'Insufficient funds due to gas price increase from estimate. Please add {{amountLeft}} {{currencySymbol}} to continue.',
        },
        error_message: {
          gas_not_sponsored: 'The gas fee has increased. Confirm if you still want to complete this transaction.',
        },
      }
     */
    dyn_send_transaction: {
        confirmation: {
            cancel_button: 'Cancel',
            confirm_button: 'Confirm',
            data: {
                amount: 'Amount',
                from: 'From (You)',
                gas: 'Gas',
                gas_estimate: 'Gas (estimate)',
                to: 'To',
                total: 'Total',
            },
            not_applied: 'N/A',
            title: 'Confirm transaction',
        },
        data: {
            amount: {
                label: 'Amount',
                placeholder: 'Select amount',
            },
            balance: {
                label: 'Balance:',
            },
            from: 'Send from',
            recipient: {
                label: 'Recipient',
                placeholder: 'Enter wallet address...',
            },
        },
        send_button: 'Send now',
        succeeded: {
            continue_button: 'Continue',
            network: {
                label: 'Network',
            },
            recipient: {
                label: 'Recipient',
            },
            title: 'Transaction successfully sent',
            total_amount: {
                label: 'Total amount',
            },
        },
        validation: {
            amount: {
                invalid_decimals: 'Please enter a value up to the {{decimals}}th decimal place.',
                invalid_format: 'The amount is in invalid format',
                over_balance: 'Insufficient funds to send this amount.',
                required: 'The amount field is required',
            },
            recipient: {
                invalid_format: 'The address is in invalid format',
                required: 'The recipient is required',
            },
        },
        warning_message: {
            insufficient_funds: 'Insufficient funds due to gas price increase from estimate. Please add {{amountLeft}} {{currencySymbol}} to continue.',
        },
        error_message: {
            gas_not_sponsored: 'The gas fee has increased. Confirm if you still want to complete this transaction.',
        },
    },
    /**
     * @description copy keys for sign message flow views
     * @default
     * {
        cancel_button: 'Cancel',
        sign_button: 'Sign',
        title: 'Requesting Signature',
      }
     */
    dyn_sign_message: {
        cancel_button: 'Cancel',
        sign_button: 'Sign',
        title: 'Requesting Signature',
    },
    /**
     * @description copy keys for social redirect view
     * @default
     * {
        logging_in: 'Logging you in',
      }
     */
    dyn_social_redirect: {
        logging_in: 'Logging you in',
    },
    /**
     * @description copy keys for messages related to time since a date
     * @default
     * {
        second: 'second',
        seconds: 'seconds',
        minute: 'minute',
        minutes: 'minutes',
        hour: 'hour',
        hours: 'hours',
        day: 'day',
        days: 'days',
        month: 'month',
        months: 'months',
        year: 'year',
        years: 'years',
        ago: 'ago',
        created: 'Created',
     }
     */
    dyn_time_since: {
        second: 'second',
        seconds: 'seconds',
        minute: 'minute',
        minutes: 'minutes',
        hour: 'hour',
        hours: 'hours',
        day: 'day',
        days: 'days',
        month: 'month',
        months: 'months',
        year: 'year',
        years: 'years',
        ago: 'ago',
        created: 'Created',
    },
    /**
     * @description copy keys for connecting wallets view
     * @default
     * {
        mobile: {
          wallet_list: {
            helper: 'Get your first wallet',
            title: 'WalletConnect wallets',
          },
        },
      }
     */
    dyn_wallet_conect: {
        mobile: {
            wallet_list: {
                helper: 'Get your first wallet',
                title: 'WalletConnect wallets',
            },
        },
    },
    /**
     * @description copy keys for linking wallets to profile view
     * @default
     * {
        cannot_link: {
          cancel_button: 'Cancel',
          description: 'This wallet is the only wallet in your other account. You cannot transfer it, since then you will lose access to that account.',
          link_other_button: 'Link a different wallet',
          title: 'Cannot link this wallet to a new account',
        },
        confirm_button: 'Link wallet to current account',
        existent_account: {
          acceptance: 'I understand that linking this wallet means that I will lose access to the other account.',
          warning: 'Linking your wallet to this account will unlink it from its previously associated account',
        },
        log_out_button: 'Log out',
        title: 'Transfer this wallet?'
      }
     */
    dyn_wallet_link: {
        cannot_link: {
            cancel_button: 'Cancel',
            description: 'This wallet is the only wallet in your other account. You cannot transfer it, since then you will lose access to that account.',
            link_other_button: 'Link a different wallet',
            title: 'Cannot link this wallet to a new account',
        },
        confirm_button: 'Link wallet to current account',
        existent_account: {
            acceptance: 'I understand that linking this wallet means that I will lose access to the other account.',
            warning: 'Linking your wallet to this account will unlink it from its previously associated account',
        },
        log_out_button: 'Log out',
        title: 'Transfer this wallet?',
    },
    /**
     * @description copy keys for connecting wallets list view
     * @default
     * {
        configuration_mismatch: 'Oops, no login methods have been configured.',
        helper: 'Get your first wallet',
        search: {
          label: 'Search through {{numberOfWallets}} wallets...',
          not_found: {
            description: 'Try searching for a different wallet',
            title: 'No wallet found.',
          },
        },
        title: {
          connect: 'Connect a new wallet',
          link: 'Link a new wallet',
          select: 'Select your wallet',
        },
        view_all: 'View all wallets',
        wallet_missing: {
          description: 'Try search instead',
          title: "Don't see your wallet?",
        },
      }
     */
    dyn_wallet_list: {
        configuration_mismatch: 'Oops, no login methods have been configured.',
        helper: 'Get your first wallet',
        search: {
            label: 'Search through {{numberOfWallets}} wallets...',
            not_found: {
                description: 'Try searching for a different wallet',
                title: 'No wallet found.',
            },
        },
        title: {
            connect: 'Connect a new wallet',
            link: 'Link a new wallet',
            select: 'Select your wallet',
        },
        view_all: 'View all wallets',
        wallet_missing: {
            description: 'Try search instead',
            title: "Don't see your wallet?",
        },
    },
    /**
     * @description copy keys for transferring wallets between accounts view
     * @default
     * {
        sign: {
          spinner: {
            cancel: 'Cancel',
            confirm_transfer:
            'Sign the message to confirm transferring this wallet to this account.',
          },
          title: 'Sign to confirm transfer',
        },
      }
     */
    dyn_wallet_transfer: {
        sign: {
            spinner: {
                cancel: 'Cancel',
                confirm_transfer: 'Sign the message to confirm transferring this wallet to this account.',
            },
            title: 'Sign to confirm transfer',
        },
    },
    /**
     * @description copy keys for Dynamic widget
     * @default
     * {
        connect: 'Connect your wallet',
        empty_wallets: '{{action}} additional wallets to see them here.',
        other_wallets: 'My other wallets',
      }
     */
    dyn_widget: {
        connect: 'Connect your wallet',
        empty_wallets: '{{action}} additional wallets to see them here.',
        other_wallets: 'My other wallets',
        empty_wallets_action_link: 'Link',
        empty_wallets_action_connect: 'Connect',
    },
    /**
     * @description copy keys for Dynamic wallet information card
     * @default
     * {
        balance: 'Balance'
      }
     */
    dyn_wallet_information: {
        balance: 'Balance',
    },
};

export { translation };
