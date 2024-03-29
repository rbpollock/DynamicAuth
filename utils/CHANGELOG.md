
### [1.0.9](https://github.com/dynamic-labs/DynamicAuth/compare/v1.0.8...v1.0.9) (2024-01-31)


### Bug Fixes

* lock starknet to 5.25.0 since 5.27.0 breaks the build ([#4542](https://github.com/dynamic-labs/DynamicAuth/issues/4542)) ([6189e93](https://github.com/dynamic-labs/DynamicAuth/commit/6189e9323776649e61e3a4f0d70a61fc77b5d21f))
* properly handle AccountExistsError for signInOAuth ([#4530](https://github.com/dynamic-labs/DynamicAuth/issues/4530)) ([9f4e31c](https://github.com/dynamic-labs/DynamicAuth/commit/9f4e31c3c451557ae0c64cb743c61c0da8654e45))

### [1.0.8](https://github.com/dynamic-labs/DynamicAuth/compare/v1.0.7...v1.0.8) (2024-01-26)


### Bug Fixes

* pass id to wagmi chain override ([#4512](https://github.com/dynamic-labs/DynamicAuth/issues/4512)) ([#4514](https://github.com/dynamic-labs/DynamicAuth/issues/4514)) ([0e6da01](https://github.com/dynamic-labs/DynamicAuth/commit/0e6da0108d30b9ae65062126f4a41543740acc87))

### [1.0.7](https://github.com/dynamic-labs/DynamicAuth/compare/v1.0.6...v1.0.7) (2024-01-25)


### Bug Fixes

* add support for newest backpack extension ([66786ce](https://github.com/dynamic-labs/DynamicAuth/commit/66786ceb7927046c1cdb439888271f3070ca93a4))
* broken help icon in create passkey view  ([2e38ea5](https://github.com/dynamic-labs/DynamicAuth/commit/2e38ea580e55f3349a2d3040d7b07bb2923631f7))
* connect to wallet with wallet connect even if network is not supported ([#4465](https://github.com/dynamic-labs/DynamicAuth/issues/4465)) ([#4472](https://github.com/dynamic-labs/DynamicAuth/issues/4472)) ([8270b94](https://github.com/dynamic-labs/DynamicAuth/commit/8270b9468c289e7c49cd2ef104fb73dfaaa9f41c))
* infinite loop when connecting with trust wallet ([#4448](https://github.com/dynamic-labs/DynamicAuth/issues/4448)) ([#4450](https://github.com/dynamic-labs/DynamicAuth/issues/4450)) ([c5ffee6](https://github.com/dynamic-labs/DynamicAuth/commit/c5ffee67a6a95ee62e779da69ce311c90575388f))
* logging in with an email linked to a third party wallet gets stu… ([#4422](https://github.com/dynamic-labs/DynamicAuth/issues/4422)) ([995889b](https://github.com/dynamic-labs/DynamicAuth/commit/995889b5d03bcbafecd6959c52a88db8d9db940e))
* switching wallet in extension caused connected flag to be false ([#4464](https://github.com/dynamic-labs/DynamicAuth/issues/4464)) ([a53dc1a](https://github.com/dynamic-labs/DynamicAuth/commit/a53dc1a9869a270c98753041cfbd587855629af4)), closes [#4454](https://github.com/dynamic-labs/DynamicAuth/issues/4454)

### [1.0.6](https://github.com/dynamic-labs/DynamicAuth/compare/v1.0.5...v1.0.6) (2024-01-18)


### Bug Fixes

* call onUnlinkSuccess in headless mode ([#4417](https://github.com/dynamic-labs/DynamicAuth/issues/4417)) ([d00e644](https://github.com/dynamic-labs/DynamicAuth/commit/d00e644f3452ab9081af4cad0e98aa055ebe3722))
* correctly map keplr chain ids from project settings ([#4418](https://github.com/dynamic-labs/DynamicAuth/issues/4418)) ([#4420](https://github.com/dynamic-labs/DynamicAuth/issues/4420)) ([1f75a5f](https://github.com/dynamic-labs/DynamicAuth/commit/1f75a5f6138513634d59a4aec389b0271176d72e))
* correctly update wallets connected flag after wallet switch ([#4397](https://github.com/dynamic-labs/DynamicAuth/issues/4397)) ([#4405](https://github.com/dynamic-labs/DynamicAuth/issues/4405)) ([ca9ae8a](https://github.com/dynamic-labs/DynamicAuth/commit/ca9ae8a92e717cb3d5dd66d4bbdb9a7f8834d22a))
* fix ui issues on react 17 ([#4373](https://github.com/dynamic-labs/DynamicAuth/issues/4373)) ([#4376](https://github.com/dynamic-labs/DynamicAuth/issues/4376)) ([a3719cf](https://github.com/dynamic-labs/DynamicAuth/commit/a3719cf23517c82cc7a5574013e14807c99811bb))

### [1.0.5](https://github.com/dynamic-labs/DynamicAuth/compare/v1.0.4...v1.0.5) (2024-01-10)


### Bug Fixes

* trigger onAuthSuccess before embedded wallet creation  ([eff7166](https://github.com/dynamic-labs/DynamicAuth/commit/eff7166902e851e726d5ee7a6bf51f9a9a85dba1))
* turnkeyWalletConnector is not an email otp connector and uses dynamic otp ([#4314](https://github.com/dynamic-labs/DynamicAuth/issues/4314)) ([446b536](https://github.com/dynamic-labs/DynamicAuth/commit/446b536c83ab2ff9d2bc727047dd2ff2601fa2a6))

### [1.0.4](https://github.com/dynamic-labs/DynamicAuth/compare/v1.0.3...v1.0.4) (2024-01-04)


### Bug Fixes

* edge case with unlinking wallet ([#4285](https://github.com/dynamic-labs/DynamicAuth/issues/4285)) ([#4293](https://github.com/dynamic-labs/DynamicAuth/issues/4293)) ([85eb4ea](https://github.com/dynamic-labs/DynamicAuth/commit/85eb4ea0fa4521d37ee3901dbb1fa6d88a8cf8f7))
* phantom solana not connecting on mobile ([#4287](https://github.com/dynamic-labs/DynamicAuth/issues/4287)) ([0d85e24](https://github.com/dynamic-labs/DynamicAuth/commit/0d85e2429f2dc0a92c293cf57dc0e241c4b948be))
* prevent error message when mobile wallet app is open ([#4301](https://github.com/dynamic-labs/DynamicAuth/issues/4301)) ([#4303](https://github.com/dynamic-labs/DynamicAuth/issues/4303)) ([0ba145e](https://github.com/dynamic-labs/DynamicAuth/commit/0ba145e6d1145fecc3e7bc2e60d127106be9aa54))
* **useFetchBalance:** ensure the latest wallet balance is fetched ([#4288](https://github.com/dynamic-labs/DynamicAuth/issues/4288)) ([#4294](https://github.com/dynamic-labs/DynamicAuth/issues/4294)) ([3fa0d60](https://github.com/dynamic-labs/DynamicAuth/commit/3fa0d60552082dffd032317368d20b87cdab9c6d))

### [1.0.3](https://github.com/dynamic-labs/DynamicAuth/compare/v1.0.2...v1.0.3) (2023-12-28)


### Features

* add default footer to wallet list when tos and pp not enabled ([#4229](https://github.com/dynamic-labs/DynamicAuth/issues/4229)) ([a6d90a7](https://github.com/dynamic-labs/DynamicAuth/commit/a6d90a7276cafeaffcb21c5362837d020fc10215)), closes [#4224](https://github.com/dynamic-labs/DynamicAuth/issues/4224)
* add starknet support for sopelia ([#4268](https://github.com/dynamic-labs/DynamicAuth/issues/4268)) ([53d4ce4](https://github.com/dynamic-labs/DynamicAuth/commit/53d4ce400070adfb32021b01b9c748b9a7d90577))
* delay setting user to after pregenerated wallet flow ([#4244](https://github.com/dynamic-labs/DynamicAuth/issues/4244)) ([503d34d](https://github.com/dynamic-labs/DynamicAuth/commit/503d34d9d6f5edd55b009f1f63c049ac6dfb1fb7))


### Bug Fixes

* coinbase solana signMessage ([#4261](https://github.com/dynamic-labs/DynamicAuth/issues/4261)) ([7e0e69c](https://github.com/dynamic-labs/DynamicAuth/commit/7e0e69c0ad9f9c9778ff9255909dd2314e16fa06))
* solflare connect ([#4215](https://github.com/dynamic-labs/DynamicAuth/issues/4215)) ([#4219](https://github.com/dynamic-labs/DynamicAuth/issues/4219)) ([df39306](https://github.com/dynamic-labs/DynamicAuth/commit/df393069b9a9859052b2d55db8dfc3399d85f2a9))

### [1.0.2](https://github.com/dynamic-labs/DynamicAuth/compare/v1.0.1...v1.0.2) (2023-12-18)


### Bug Fixes

* prevent duplicated brave wallet connector ([#4209](https://github.com/dynamic-labs/DynamicAuth/issues/4209)) ([31589b9](https://github.com/dynamic-labs/DynamicAuth/commit/31589b92ea067a5e7ca5a5bd9adb881d086d7868))
* ensure wagmi connects to primary wallet ([#4206](https://github.com/dynamic-labs/DynamicAuth/issues/4206)) ([#4210](https://github.com/dynamic-labs/DynamicAuth/issues/4210)) ([072bb05](https://github.com/dynamic-labs/DynamicAuth/commit/072bb05a5a9fd5b82f5498c20ff74ca966f3ea9f))
* ensure wallets group view shows multiple options ([#4184](https://github.com/dynamic-labs/DynamicAuth/issues/4184)) ([#4187](https://github.com/dynamic-labs/DynamicAuth/issues/4187)) ([b751f49](https://github.com/dynamic-labs/DynamicAuth/commit/b751f4952ea5a46b536edc999f37ea134348f8ef)), closes [#4186](https://github.com/dynamic-labs/DynamicAuth/issues/4186)
* enable brave to read the connected network ([#4198](https://github.com/dynamic-labs/DynamicAuth/issues/4198)) ([979e866](https://github.com/dynamic-labs/DynamicAuth/commit/979e86660f13982992cd43b1d9a8218150437e8b))

### [1.0.1](https://github.com/dynamic-labs/DynamicAuth/compare/v1.0.0...v1.0.1) (2023-12-14)


### Bug Fixes

* update wagmi to v1.4.12 ([#4171](https://github.com/dynamic-labs/DynamicAuth/issues/4171)) ([a741989](https://github.com/dynamic-labs/DynamicAuth/commit/a74198978f4708e96b12743b2f1f372b23940020))

## [1.0.0](https://github.com/dynamic-labs/DynamicAuth/compare/v1.0.0-alpha.14...v1.0.0) (2023-12-12)

Changelog: https://docs.dynamic.xyz/changelog/v1
Upgrade guide: https://docs.dynamic.xyz/react-sdk/upgrade


## [1.0.0-alpha.14](https://github.com/dynamic-labs/DynamicAuth/compare/v1.0.0-alpha.13...v1.0.0-alpha.14) (2023-12-12)


### Bug Fixes

* add user_media scope to instagram ([#4144](https://github.com/dynamic-labs/DynamicAuth/issues/4144)) ([57b9140](https://github.com/dynamic-labs/DynamicAuth/commit/57b91400cae7287157988cd6dfe7f30aeced10de))
* enable buy button onramp even with pregenerated wallets ([#4135](https://github.com/dynamic-labs/DynamicAuth/issues/4135)) ([fd94ecd](https://github.com/dynamic-labs/DynamicAuth/commit/fd94ecdcbe7190dc9abeb829cdcd933561afdd77))
* make the pin input fields responsive ([#4140](https://github.com/dynamic-labs/DynamicAuth/issues/4140)) ([4244744](https://github.com/dynamic-labs/DynamicAuth/commit/42447445ec32a3bca48a48d001c24dcd5b5cf004))

## [1.0.0-alpha.13](https://github.com/dynamic-labs/DynamicAuth/compare/v1.0.0-alpha.12...v1.0.0-alpha.13) (2023-12-12)


### Bug Fixes

* embedded wallet connected flag not picking up ([#4128](https://github.com/dynamic-labs/DynamicAuth/issues/4128)) ([c6fbb1d](https://github.com/dynamic-labs/DynamicAuth/commit/c6fbb1de2027b186a4277a75545fd66d0d11ba95))

## [1.0.0-alpha.12](https://github.com/dynamic-labs/DynamicAuth/compare/v1.0.0-alpha.11...v1.0.0-alpha.12) (2023-12-11)


### Features

* add useFunding hook ([#4098](https://github.com/dynamic-labs/DynamicAuth/issues/4098)) ([27424ab](https://github.com/dynamic-labs/DynamicAuth/commit/27424ab1a15202ee2b7c73c8a19f11e480e1794a))


### Bug Fixes

* add primary color to the secure wallet text ([#4127](https://github.com/dynamic-labs/DynamicAuth/issues/4127)) ([7c642d0](https://github.com/dynamic-labs/DynamicAuth/commit/7c642d0385112289df52874bc5dd2eaa0e6cdf50))

## [1.0.0-alpha.11](https://github.com/dynamic-labs/DynamicAuth/compare/v1.0.0-alpha.10...v1.0.0-alpha.11) (2023-12-11)

## [1.0.0-alpha.10](https://github.com/dynamic-labs/DynamicAuth/compare/v1.0.0-alpha.9...v1.0.0-alpha.10) (2023-12-08)


### Bug Fixes

* allow transaction error to read from viem error ([#4101](https://github.com/dynamic-labs/DynamicAuth/issues/4101)) ([0f46cbe](https://github.com/dynamic-labs/DynamicAuth/commit/0f46cbea1eb260c2efdeee9b62f669fb3cf4ab93))
* trigger claim flow for unclaimed embedded smart contract wallet signer ([#4108](https://github.com/dynamic-labs/DynamicAuth/issues/4108)) ([37c9013](https://github.com/dynamic-labs/DynamicAuth/commit/37c9013109f2d6a37bde041da9072c5f5fa2df67))
* WalletConnect v2 connector with non active chains ([#4085](https://github.com/dynamic-labs/DynamicAuth/issues/4085)) ([f69cbe9](https://github.com/dynamic-labs/DynamicAuth/commit/f69cbe96012563f71e89939c96f2a46926e7b394))

## [1.0.0-alpha.9](https://github.com/dynamic-labs/DynamicAuth/compare/v1.0.0-alpha.8...v1.0.0-alpha.9) (2023-12-07)


### ⚠ BREAKING CHANGES

* how to migrate
Whenever you would use the property wallets from the object returned by useDynamicContext, you must now rename it to walletConnectorOptions.

### Features

* add support for eip6963 ([#4064](https://github.com/dynamic-labs/DynamicAuth/issues/4064)) ([3f8cf0e](https://github.com/dynamic-labs/DynamicAuth/commit/3f8cf0e4250945f3a331f701d491a308fab5f7b8))
* allow AA wallets to access owner features ([#4079](https://github.com/dynamic-labs/DynamicAuth/issues/4079)) ([9efc2be](https://github.com/dynamic-labs/DynamicAuth/commit/9efc2bee87ec9193c3682863d72024b3586de724))
* introduce UserWalletsContext ([#4083](https://github.com/dynamic-labs/DynamicAuth/issues/4083)) ([b9ca7f6](https://github.com/dynamic-labs/DynamicAuth/commit/b9ca7f6b0aff4b3992325b70cc9a903ece445c7f))


### Bug Fixes

* ensure zero dev provider will receive a signer ([#4084](https://github.com/dynamic-labs/DynamicAuth/issues/4084)) ([f02a540](https://github.com/dynamic-labs/DynamicAuth/commit/f02a54036d39bfc5fb0c262f292acf914e4bd653))
* render recovery section only when turnkey provider is enabled ([#4093](https://github.com/dynamic-labs/DynamicAuth/issues/4093)) ([5f29bd2](https://github.com/dynamic-labs/DynamicAuth/commit/5f29bd23ccca2e307822377be28396edc7ab1fda))
* reset selected social provider on logout ([#4078](https://github.com/dynamic-labs/DynamicAuth/issues/4078)) ([85dc611](https://github.com/dynamic-labs/DynamicAuth/commit/85dc611d9c0e733bdb9d316b008bdaa35bcc2a91))


* rename wallets > walletConnectorOptions ([#4086](https://github.com/dynamic-labs/DynamicAuth/issues/4086)) ([10a7795](https://github.com/dynamic-labs/DynamicAuth/commit/10a779567e751469a667095726da52d78facbd57))

## [1.0.0-alpha.8](https://github.com/dynamic-labs/DynamicAuth/compare/v1.0.0-alpha.7...v1.0.0-alpha.8) (2023-12-05)


### ⚠ BREAKING CHANGES

* rename EthereumSmartWalletConnectors to ZeroDevSmartWalletConnectors (#4067)


### Features

* add support for pregenerated wallets + securing them ([#3968](https://github.com/dynamic-labs/DynamicAuth/issues/3968)) ([8212b76](https://github.com/dynamic-labs/DynamicAuth/commit/8212b760ba199bd989e0ba2ad3caf97590db4861))

## [1.0.0-alpha.7](https://github.com/dynamic-labs/DynamicAuth/compare/v1.0.0-alpha.6...v1.0.0-alpha.7) (2023-12-05)


### Features

* add support for Turnkey HD wallets and backwards compatiblity for private key wallets ([#4011](https://github.com/dynamic-labs/DynamicAuth/issues/4011)) ([75c5258](https://github.com/dynamic-labs/DynamicAuth/commit/75c5258da494d5d4dfa8b96655303dd9645f2269))


### Bug Fixes

* add close button to wallets list ([#4036](https://github.com/dynamic-labs/DynamicAuth/issues/4036)) ([a2b988b](https://github.com/dynamic-labs/DynamicAuth/commit/a2b988bdfc662af6f85d37a79ed6666c483aa447))
* add support for embedded wallets in connect-only ([#4041](https://github.com/dynamic-labs/DynamicAuth/issues/4041)) ([ceea635](https://github.com/dynamic-labs/DynamicAuth/commit/ceea635b69e2a0c2636b47fbd30639d69dba7a1c))
* embedded wallet invalid stored chain breaking network picker ([#4050](https://github.com/dynamic-labs/DynamicAuth/issues/4050)) ([2e2384b](https://github.com/dynamic-labs/DynamicAuth/commit/2e2384ba37407d9164cce47e23f5d5f469f7e062))
* handle insufficient funds from AA provider ([#4027](https://github.com/dynamic-labs/DynamicAuth/issues/4027)) ([6b9cc88](https://github.com/dynamic-labs/DynamicAuth/commit/6b9cc886f4f2590094bd50aba195c07a5532dfa4))
* prevent double logout caused by wagmi sync ([#4048](https://github.com/dynamic-labs/DynamicAuth/issues/4048)) ([c66c81c](https://github.com/dynamic-labs/DynamicAuth/commit/c66c81c80839aa9ce1cfae76f4afce12e34f3513))
* properly detect network switch for secondary wallets ([#4038](https://github.com/dynamic-labs/DynamicAuth/issues/4038)) ([f87174d](https://github.com/dynamic-labs/DynamicAuth/commit/f87174de0892dd057401eaf3c0bc68d974add0fc))
* **use-wallets-connected-state:** update state on wallet id change ([#4045](https://github.com/dynamic-labs/DynamicAuth/issues/4045)) ([ca3a835](https://github.com/dynamic-labs/DynamicAuth/commit/ca3a8359eae386bffa758ed646ac14af8360a7f8))
* user should be able to see the full passkey name on management view ([#4043](https://github.com/dynamic-labs/DynamicAuth/issues/4043)) ([7bc1b70](https://github.com/dynamic-labs/DynamicAuth/commit/7bc1b7043cbc9f0e21df78a57efc3e6938a99db2))
* users should be able to easily find passkey recovery ([#4058](https://github.com/dynamic-labs/DynamicAuth/issues/4058)) ([0202ae9](https://github.com/dynamic-labs/DynamicAuth/commit/0202ae98c96544dec5ac357dc77000996e32ad33))

## [1.0.0-alpha.6](https://github.com/dynamic-labs/DynamicAuth/compare/v1.0.0-alpha.5...v1.0.0-alpha.6) (2023-11-29)


### Bug Fixes

* transaction layout show alert ([#4024](https://github.com/dynamic-labs/DynamicAuth/issues/4024)) ([52057f5](https://github.com/dynamic-labs/DynamicAuth/commit/52057f54ebc32464b2486a2328cb6310caf85208)), closes [#4020](https://github.com/dynamic-labs/DynamicAuth/issues/4020)

## [1.0.0-alpha.5](https://github.com/dynamic-labs/DynamicAuth/compare/v1.0.0-alpha.4...v1.0.0-alpha.5) (2023-11-29)


### Features

* gracefully handle uknown wallet ([#3997](https://github.com/dynamic-labs/DynamicAuth/issues/3997)) ([ce7ff6a](https://github.com/dynamic-labs/DynamicAuth/commit/ce7ff6a50a8e8947050734b61587c8cadd041dbe))


### Bug Fixes

* remove total on sponsored transactions ([#4019](https://github.com/dynamic-labs/DynamicAuth/issues/4019)) ([d976678](https://github.com/dynamic-labs/DynamicAuth/commit/d9766787b29665fbcd7983c5d61c31a4d97c8257))
* send balance align information ([#4020](https://github.com/dynamic-labs/DynamicAuth/issues/4020)) ([508dccf](https://github.com/dynamic-labs/DynamicAuth/commit/508dccfa2c6aeaed30616b6a41b30002cccb3b40))

## [1.0.0-alpha.4](https://github.com/dynamic-labs/DynamicAuth/compare/v1.0.0-alpha.3...v1.0.0-alpha.4) (2023-11-28)


### Bug Fixes

* update zerodev provider initialization ([#4015](https://github.com/dynamic-labs/DynamicAuth/issues/4015)) ([8faca00](https://github.com/dynamic-labs/DynamicAuth/commit/8faca00d414677adc5fecde451ca01da53fe9641))

## [1.0.0-alpha.3](https://github.com/dynamic-labs/DynamicAuth/compare/v1.0.0-alpha.2...v1.0.0-alpha.3) (2023-11-28)


### Bug Fixes

* fix solflare mobile wallet deep linking ([#3998](https://github.com/dynamic-labs/DynamicAuth/issues/3998)) ([10069ae](https://github.com/dynamic-labs/DynamicAuth/commit/10069ae9ed5d8e1978131f57c3e90680e85d2efb))
* passkey error message when reaching limit of accounts ([#4010](https://github.com/dynamic-labs/DynamicAuth/issues/4010)) ([dabce3b](https://github.com/dynamic-labs/DynamicAuth/commit/dabce3b6ada4bac75903b43d5cb125cfd5619d18))

## [1.0.0-alpha.2](https://github.com/dynamic-labs/DynamicAuth/compare/v1.0.0-alpha.1...v1.0.0-alpha.2) (2023-11-28)


### ⚠ BREAKING CHANGES

* rename walletsByChain to bridgeChains (#3954)

### Features

* passkey management and recovery ([#3911](https://github.com/dynamic-labs/DynamicAuth/issues/3911)) ([b692b3a](https://github.com/dynamic-labs/DynamicAuth/commit/b692b3a8697d0ffb441faae97e609b144965695d))


### Bug Fixes

* ensure all chain rpc providers are always assigned correctly ([#3981](https://github.com/dynamic-labs/DynamicAuth/issues/3981)) ([cd2e25c](https://github.com/dynamic-labs/DynamicAuth/commit/cd2e25c4eb39791866c1ea283d61fff388cce5df))
* initialize selected chain with first evm network if no value in ls ([#3999](https://github.com/dynamic-labs/DynamicAuth/issues/3999)) ([bc9e43b](https://github.com/dynamic-labs/DynamicAuth/commit/bc9e43be9d33c75bb1236756589f63f17b230ab1))
* nextjs issues to show transaction modals ([#3964](https://github.com/dynamic-labs/DynamicAuth/issues/3964)) ([9326ac4](https://github.com/dynamic-labs/DynamicAuth/commit/9326ac49394e067ce38b17faff08b4fabf91bb3f))
* onEmbeddedWalletCreated not being called ([#3975](https://github.com/dynamic-labs/DynamicAuth/issues/3975)) ([035cebe](https://github.com/dynamic-labs/DynamicAuth/commit/035cebe02891048e62c66a7277ed7f43c27e559d))
* return linked wallets even when there's no primary wallet ([#3965](https://github.com/dynamic-labs/DynamicAuth/issues/3965)) ([27705de](https://github.com/dynamic-labs/DynamicAuth/commit/27705de4ac7e1584efd1245bb9c6a818b1c20742))
* transaction modal not throwing viem compatible exception ([#3971](https://github.com/dynamic-labs/DynamicAuth/issues/3971)) ([bedab0c](https://github.com/dynamic-labs/DynamicAuth/commit/bedab0c4448bcca5c3e696ceb276867ce55bbd85))
* **zero-dev:** ensure the sign typed data is parsed for zero dev to handle ([#3974](https://github.com/dynamic-labs/DynamicAuth/issues/3974)) ([f517738](https://github.com/dynamic-labs/DynamicAuth/commit/f517738e1abc138f882525c128cd1ee5e88b9050))
* zerodev sign message with ethers ([#3972](https://github.com/dynamic-labs/DynamicAuth/issues/3972)) ([5de3873](https://github.com/dynamic-labs/DynamicAuth/commit/5de3873daa9cbfeef6dd9123b7a319d8e6b412d5))
* **zerodev:** ensure ECDSAProvider supports sendUserOperation ([#4003](https://github.com/dynamic-labs/DynamicAuth/issues/4003)) ([c8f5886](https://github.com/dynamic-labs/DynamicAuth/commit/c8f58868fcf6912fd11a92940369faf37e3fcdde))
* **zerodev:** ensure transaction is sponsored before submission ([#3932](https://github.com/dynamic-labs/DynamicAuth/issues/3932)) ([74becb7](https://github.com/dynamic-labs/DynamicAuth/commit/74becb7ec2fd55f8b905a9c9f0bbba44a9d22513))


* rename walletsByChain to bridgeChains ([#3954](https://github.com/dynamic-labs/DynamicAuth/issues/3954)) ([a91e8fe](https://github.com/dynamic-labs/DynamicAuth/commit/a91e8fe605694ccd8a00b71aa194c0c5191f156c))

## [1.0.0-alpha.1](https://github.com/dynamic-labs/DynamicAuth/compare/v1.0.0-alpha.0...v1.0.0-alpha.1) (2023-11-22)


### Features

* add basic zerodev connector ([#3782](https://github.com/dynamic-labs/DynamicAuth/issues/3782)) ([3f8debd](https://github.com/dynamic-labs/DynamicAuth/commit/3f8debddb1bff325389193e0348128ebb9ba59b9))
* add hcaptcha to dynamic signin methods ([#3853](https://github.com/dynamic-labs/DynamicAuth/issues/3853)) ([a4a9ad3](https://github.com/dynamic-labs/DynamicAuth/commit/a4a9ad3b048e33acc5b885cd797697ca4f41995e))
* add hcaptcha to magic login methods ([#3894](https://github.com/dynamic-labs/DynamicAuth/issues/3894)) ([c76b750](https://github.com/dynamic-labs/DynamicAuth/commit/c76b750351557ad9cf5bbcc39bd7fd0970b66312))
* add need help section to sign message modal ([#3847](https://github.com/dynamic-labs/DynamicAuth/issues/3847)) ([4f90617](https://github.com/dynamic-labs/DynamicAuth/commit/4f90617bcf400a7171062435c731d95c6bbf41c7))
* add perawallet to wallet book ([#3868](https://github.com/dynamic-labs/DynamicAuth/issues/3868)) ([5f4e79d](https://github.com/dynamic-labs/DynamicAuth/commit/5f4e79df202b02088b15c5dfab7feee5789e9ece))
* add serialization to allow sending events callbacks and wallet connectors used by customers  ([0077eb0](https://github.com/dynamic-labs/DynamicAuth/commit/0077eb0af05feb765d0c61911a48d5e98554760a))
* add support for dynamic domains for starknet signatures ([#3927](https://github.com/dynamic-labs/DynamicAuth/issues/3927)) ([52797ce](https://github.com/dynamic-labs/DynamicAuth/commit/52797ce867c956049bfa5021cf5b1c562e771a2e))
* add support for Pera Wallet ([#3866](https://github.com/dynamic-labs/DynamicAuth/issues/3866)) ([cb99ae7](https://github.com/dynamic-labs/DynamicAuth/commit/cb99ae77605d913932a77bf2ea565b7e7baf781a))
* add support for private starknet rpc providers ([#3881](https://github.com/dynamic-labs/DynamicAuth/issues/3881)) ([8fd5ef9](https://github.com/dynamic-labs/DynamicAuth/commit/8fd5ef902d48ef828b1cb89d0e462ea5b54f4e42))
* add zerodev to wallet book and render generic wallet icon ([#3822](https://github.com/dynamic-labs/DynamicAuth/issues/3822)) ([9c5768d](https://github.com/dynamic-labs/DynamicAuth/commit/9c5768d0fc1169c62927926c0e436b6a448d5656))
* allow updating evmNetworks in real time ([#3877](https://github.com/dynamic-labs/DynamicAuth/issues/3877)) ([b4a2521](https://github.com/dynamic-labs/DynamicAuth/commit/b4a2521830b859a129d70bad2ae1213db075550d))
* editable copies as typed data ([#3784](https://github.com/dynamic-labs/DynamicAuth/issues/3784)) ([d6c6d74](https://github.com/dynamic-labs/DynamicAuth/commit/d6c6d74e60c9c9d459414c452fbd780d3f6bc2f9))
* email inputs now use email keyboard ([#3843](https://github.com/dynamic-labs/DynamicAuth/issues/3843)) ([76926e2](https://github.com/dynamic-labs/DynamicAuth/commit/76926e26b6a188d9d8e3bba2512340610e218e9f))
* hide unlink if disabled in dashboard ([#3825](https://github.com/dynamic-labs/DynamicAuth/issues/3825)) ([a0625e6](https://github.com/dynamic-labs/DynamicAuth/commit/a0625e6fd01aa5b57e6b8542efe04e280e0c6830))
* initialize smart wallet from verified credentials ([#3790](https://github.com/dynamic-labs/DynamicAuth/issues/3790)) ([1fc5890](https://github.com/dynamic-labs/DynamicAuth/commit/1fc5890f2e0ef458bfb59d38d536c41d183bc2a2))
* set smart wallet as primary when owner is an embedded wallet ([#3898](https://github.com/dynamic-labs/DynamicAuth/issues/3898)) ([ec40172](https://github.com/dynamic-labs/DynamicAuth/commit/ec401729f38d946d5431bbbb15c5c1cdc66acb73))
* support forced network validation via DynamicContext setting ([#3879](https://github.com/dynamic-labs/DynamicAuth/issues/3879)) ([a7993b9](https://github.com/dynamic-labs/DynamicAuth/commit/a7993b9b6bdd739bcb4e66e46d14e7f8623bed66))
* **transaction:** add sponsored gas transaction ([#3869](https://github.com/dynamic-labs/DynamicAuth/issues/3869)) ([ccceb24](https://github.com/dynamic-labs/DynamicAuth/commit/ccceb2421e029dc60e53912e404b574324d6772f))


### Bug Fixes

* **account-abstraction:** set verified credentials before setting EOA to wallet connector ([#3941](https://github.com/dynamic-labs/DynamicAuth/issues/3941)) ([7475c46](https://github.com/dynamic-labs/DynamicAuth/commit/7475c465f5ddf9e27d0b05d23e58d9b474fa8fd4))
* add brand to zerodev object ([#3828](https://github.com/dynamic-labs/DynamicAuth/issues/3828)) ([81cb237](https://github.com/dynamic-labs/DynamicAuth/commit/81cb237df4def8e1c53b4ae145afafccf3b04683))
* add spriteId to zerodev ([#3829](https://github.com/dynamic-labs/DynamicAuth/issues/3829)) ([6b87c5c](https://github.com/dynamic-labs/DynamicAuth/commit/6b87c5c3d5869f6cd15a7534fb0260932845fbb1))
* allow metadata to be updated in updateUser hook ([#3928](https://github.com/dynamic-labs/DynamicAuth/issues/3928)) ([4f39fbd](https://github.com/dynamic-labs/DynamicAuth/commit/4f39fbd757b4e816dd60651252575c1f7e4d80aa))
* blocto flow connect only infinite recursion ([#3883](https://github.com/dynamic-labs/DynamicAuth/issues/3883)) ([6c6f5ba](https://github.com/dynamic-labs/DynamicAuth/commit/6c6f5ba5dc0657cc7ffdc82a4ea7935f65686088))
* clear project settings on page refresh ([#3826](https://github.com/dynamic-labs/DynamicAuth/issues/3826)) ([da5b8f0](https://github.com/dynamic-labs/DynamicAuth/commit/da5b8f0a99bf913ea11314954e5f08c2b019f50f))
* don't call computeConnectedStateForWallets too often to avoid infinite loops ([#3946](https://github.com/dynamic-labs/DynamicAuth/issues/3946)) ([de4e61a](https://github.com/dynamic-labs/DynamicAuth/commit/de4e61a3fcdc9c25cbe030c3c25cbc2c04929a93))
* don't call disconnect multiple times ([#3940](https://github.com/dynamic-labs/DynamicAuth/issues/3940)) ([3ea8623](https://github.com/dynamic-labs/DynamicAuth/commit/3ea86233d8d07dfb3c751a5fec45d5df84e9e143))
* **embedded wallet:** stop overriding primary wallet selection ([#3796](https://github.com/dynamic-labs/DynamicAuth/issues/3796)) ([75b81e7](https://github.com/dynamic-labs/DynamicAuth/commit/75b81e74d472ce8cc493646b441d2b4fe3962373))
* exodusevm wallet connect and mobile deep linking ([#3855](https://github.com/dynamic-labs/DynamicAuth/issues/3855)) ([cf0b3f0](https://github.com/dynamic-labs/DynamicAuth/commit/cf0b3f077f935eab32ce45947f62e73342d6c169))
* handle errors properly when engaging captcha ([#3896](https://github.com/dynamic-labs/DynamicAuth/issues/3896)) ([2596315](https://github.com/dynamic-labs/DynamicAuth/commit/25963153d699b26c6e04ea38b267446d3a3af13b))
* null safe check to window object ([#3882](https://github.com/dynamic-labs/DynamicAuth/issues/3882)) ([8856b5a](https://github.com/dynamic-labs/DynamicAuth/commit/8856b5ae40d43285eac667401387971b9e3f077d))
* pass correct wallet connector onLinkSuccess ([#3904](https://github.com/dynamic-labs/DynamicAuth/issues/3904)) ([79cca69](https://github.com/dynamic-labs/DynamicAuth/commit/79cca69ed53a5ef2c4e4d712ce0934e1a4c11459))
* remove extra captcha context provider instantiation causing unecessary rerenderings ([#3914](https://github.com/dynamic-labs/DynamicAuth/issues/3914)) ([14120a6](https://github.com/dynamic-labs/DynamicAuth/commit/14120a6ac0415f9a59608b376e88de6c729d4e5d))
* remove the coming soon label ([#3860](https://github.com/dynamic-labs/DynamicAuth/issues/3860)) ([1effb7f](https://github.com/dynamic-labs/DynamicAuth/commit/1effb7f124bda66aae3e8991b5386a1cee28fd99))
* Revert "chore: fix vite build ([#3849](https://github.com/dynamic-labs/DynamicAuth/issues/3849))" ([#3870](https://github.com/dynamic-labs/DynamicAuth/issues/3870)) ([13bc424](https://github.com/dynamic-labs/DynamicAuth/commit/13bc42483bcb9338babd46eae00988acada83578))
* **single-wallet:** prompt user to select correct wallet ([#3742](https://github.com/dynamic-labs/DynamicAuth/issues/3742)) ([ccfdd3c](https://github.com/dynamic-labs/DynamicAuth/commit/ccfdd3cc6a4ac7f3b1ea13be92e58982ecfb1c59))
* update walletconnect.json and walletconnect source schema ([#3854](https://github.com/dynamic-labs/DynamicAuth/issues/3854)) ([88ee546](https://github.com/dynamic-labs/DynamicAuth/commit/88ee5468db0130b19c6637a5632e64e0bb5197ba))
* useEmailProvider not checking for enabled providers properly ([7c16edc](https://github.com/dynamic-labs/DynamicAuth/commit/7c16edc3785ba10d69762b174f054b0d10b8a072))
* **wagmi:** ensure chain is defined on wallet client ([#3888](https://github.com/dynamic-labs/DynamicAuth/issues/3888)) ([0e145f6](https://github.com/dynamic-labs/DynamicAuth/commit/0e145f6ac42f55df7a020716d4ddc023554d72f9))

## [1.0.0-alpha.0](https://github.com/dynamic-labs/DynamicAuth/compare/v0.19.0...v1.0.0-alpha.0) (2023-10-31)


### Features

* adding editable copies ([#3773](https://github.com/dynamic-labs/DynamicAuth/issues/3773)) ([7b61b50](https://github.com/dynamic-labs/DynamicAuth/commit/7b61b50be76d8f59a8e01ac855d044fdf4bb923e))

## [0.19.0](https://github.com/dynamic-labs/DynamicAuth/compare/v0.19.0-alpha.28...v0.19.0) (2023-10-31)


### ⚠ BREAKING CHANGES

* rename onConnectSuccess to onConnect (#3744)

### Features

* adding editable copy for sdk views ([#3749](https://github.com/dynamic-labs/DynamicAuth/issues/3749)) ([8e745b7](https://github.com/dynamic-labs/DynamicAuth/commit/8e745b7d937f08156dd74229393e57647427c278))
* rename onConnectSuccess to onConnect ([#3744](https://github.com/dynamic-labs/DynamicAuth/issues/3744)) ([d5403c0](https://github.com/dynamic-labs/DynamicAuth/commit/d5403c0d07c3528376d69e406a3a1d13a012a8de))


### Bug Fixes

* never show default social provider duplicated ([#3768](https://github.com/dynamic-labs/DynamicAuth/issues/3768)) ([524e97e](https://github.com/dynamic-labs/DynamicAuth/commit/524e97e02d31b626040dff76235e5f9d1bf95c49))
* properly interpolate string in translation for countdown ([#3763](https://github.com/dynamic-labs/DynamicAuth/issues/3763)) ([272a45d](https://github.com/dynamic-labs/DynamicAuth/commit/272a45da89dd8af5043f014f1353b88fbd220a02))
* **send-balance:** remove transaction type and let viem set it ([#3747](https://github.com/dynamic-labs/DynamicAuth/issues/3747)) ([43d0831](https://github.com/dynamic-labs/DynamicAuth/commit/43d0831f3111c3d4992ac92f0a0f68f10fab1120))
* set global loading to false on logout ([#3774](https://github.com/dynamic-labs/DynamicAuth/issues/3774)) ([3e99675](https://github.com/dynamic-labs/DynamicAuth/commit/3e99675911809ec0c7a19693a9e67dad19a1ad68))
* **sign-message:** handle collection in sign typed data ([#3748](https://github.com/dynamic-labs/DynamicAuth/issues/3748)) ([bd6bdf7](https://github.com/dynamic-labs/DynamicAuth/commit/bd6bdf7cef3fbdcfa5fea31bc3a013f7cbf41ba7))
* **turnkey:** use transporter to request use confirmation ([#3758](https://github.com/dynamic-labs/DynamicAuth/issues/3758)) ([afc5636](https://github.com/dynamic-labs/DynamicAuth/commit/afc56363c6a237907bdf48d2309c72a531e3a316))

## [0.19.0-alpha.28](https://github.com/dynamic-labs/DynamicAuth/compare/v0.19.0-alpha.27...v0.19.0-alpha.28) (2023-10-26)


### Bug Fixes

* do not pass TransactionType for zksync transactions in Sendbalance view due to RPC errors ([#3745](https://github.com/dynamic-labs/DynamicAuth/issues/3745)) ([27f8aa1](https://github.com/dynamic-labs/DynamicAuth/commit/27f8aa1c7c790fa24a5e6b5e4400bd9415b3c3ce))

## [0.19.0-alpha.27](https://github.com/dynamic-labs/DynamicAuth/compare/v0.19.0-alpha.26...v0.19.0-alpha.27) (2023-10-26)


### ⚠ BREAKING CHANGES

* **useDynamicContext:** make internalEvents private (#3709)

### Features

* add option to show continue button instead of inline submit ([#3720](https://github.com/dynamic-labs/DynamicAuth/issues/3720)) ([35e6172](https://github.com/dynamic-labs/DynamicAuth/commit/35e6172ebd692c9e5c0a96cbf97b4a3b8cea428b))


### Bug Fixes

* **demo:** login view sections ([#3737](https://github.com/dynamic-labs/DynamicAuth/issues/3737)) ([7387cf7](https://github.com/dynamic-labs/DynamicAuth/commit/7387cf7d0834f349e11be55a7271a67e2cc3ba83))
* don't set secondaryWallets if not on multi-wallet or bridge ([#3728](https://github.com/dynamic-labs/DynamicAuth/issues/3728)) ([dcfa845](https://github.com/dynamic-labs/DynamicAuth/commit/dcfa8452304f485ed5fa64e4b82687bee63a6af4))
* **network-picker:** update the networks when connector changes ([#3725](https://github.com/dynamic-labs/DynamicAuth/issues/3725)) ([786a33d](https://github.com/dynamic-labs/DynamicAuth/commit/786a33dc9172a9f0fca0604bb84d2fd3cad064f2))
* reset view on logout ([#3717](https://github.com/dynamic-labs/DynamicAuth/issues/3717)) ([78df3cf](https://github.com/dynamic-labs/DynamicAuth/commit/78df3cf642440d30ecfc51990020eaf3cbb20de9))
* state check for twitter happens in backend ([#3740](https://github.com/dynamic-labs/DynamicAuth/issues/3740)) ([95c3353](https://github.com/dynamic-labs/DynamicAuth/commit/95c3353d47dedd13c6d2d807be908426384fec04))
* **windows:** handle origin_check message from authWindow ([#3730](https://github.com/dynamic-labs/DynamicAuth/issues/3730)) ([dcd7875](https://github.com/dynamic-labs/DynamicAuth/commit/dcd787540db2aff38246cf5b1567765a0c3696f5))


* **useDynamicContext:** make internalEvents private ([#3709](https://github.com/dynamic-labs/DynamicAuth/issues/3709)) ([750bc61](https://github.com/dynamic-labs/DynamicAuth/commit/750bc6165ee0b4ef87958988ea3ca55dc1f9f279))

## [0.19.0-alpha.26](https://github.com/dynamic-labs/DynamicAuth/compare/v0.19.0-alpha.25...v0.19.0-alpha.26) (2023-10-25)


### Features

* allow filtering social providers for Dynamic Social with socialProvidersFilter ([#3707](https://github.com/dynamic-labs/DynamicAuth/issues/3707)) ([e4c16f3](https://github.com/dynamic-labs/DynamicAuth/commit/e4c16f359946e278a372cb8153242946d4887dcc))


### Bug Fixes

* only create embedded wallet if user have no wallet ([#3715](https://github.com/dynamic-labs/DynamicAuth/issues/3715)) ([728e01a](https://github.com/dynamic-labs/DynamicAuth/commit/728e01ab8b5931eaa6fb7877c23847ac85947f52))
* Revert "fix(use-wallet-event-listener): handle switching wallet … ([#3699](https://github.com/dynamic-labs/DynamicAuth/issues/3699)) ([9b94737](https://github.com/dynamic-labs/DynamicAuth/commit/9b94737ecfa72cd047964254d806403b342433a1)), closes [#3626](https://github.com/dynamic-labs/DynamicAuth/issues/3626)
* undefined network edge case ([#3667](https://github.com/dynamic-labs/DynamicAuth/issues/3667)) ([12d4236](https://github.com/dynamic-labs/DynamicAuth/commit/12d42363f69b1dfd5babe05142bd03c501f62e5f))
* **useOnClickOutside:** prevent opening element on click while already open ([#3714](https://github.com/dynamic-labs/DynamicAuth/issues/3714)) ([1999dc5](https://github.com/dynamic-labs/DynamicAuth/commit/1999dc50b6e82eb5ee8d0919118e9dfbc39c2b67))

## [0.19.0-alpha.25](https://github.com/dynamic-labs/DynamicAuth/compare/v0.19.0-alpha.24...v0.19.0-alpha.25) (2023-10-25)


### Features

* reduce screen flickering ([#3674](https://github.com/dynamic-labs/DynamicAuth/issues/3674)) ([bc3f89f](https://github.com/dynamic-labs/DynamicAuth/commit/bc3f89f5c1fe80294b60869be4a1e26daffb5553))


### Bug Fixes

* **demo:** updated sign-in methods section ([#3670](https://github.com/dynamic-labs/DynamicAuth/issues/3670)) ([8d10863](https://github.com/dynamic-labs/DynamicAuth/commit/8d10863872952587d889f5491da4c1df35cbef86))
* don't auto-create passkey on social sign-in and onboarding if disabled ([#3696](https://github.com/dynamic-labs/DynamicAuth/issues/3696)) ([866e305](https://github.com/dynamic-labs/DynamicAuth/commit/866e3051cdd710d7e702562a7db14fc08d9ff275))
* hide auth flow when completing email verification if passkey if disabled  ([#3684](https://github.com/dynamic-labs/DynamicAuth/issues/3684)) ([b3f4b56](https://github.com/dynamic-labs/DynamicAuth/commit/b3f4b56feaeed33a8f34a1c7376eb889dbc85655))
* hide wallet view when filter returns empty ([#3688](https://github.com/dynamic-labs/DynamicAuth/issues/3688)) ([e98d957](https://github.com/dynamic-labs/DynamicAuth/commit/e98d957de123a481e31db04297a467a64de109af))
* **use-wallet-event-listener:** handle switching wallet when multi-wallet is disabled ([#3626](https://github.com/dynamic-labs/DynamicAuth/issues/3626)) ([e3c5899](https://github.com/dynamic-labs/DynamicAuth/commit/e3c58999b3dcfd3818778da458a34097e6b957d9))

## [0.19.0-alpha.24](https://github.com/dynamic-labs/DynamicAuth/compare/v0.19.0-alpha.23...v0.19.0-alpha.24) (2023-10-24)


### Bug Fixes

* check state from message receiver is same as generated oauth state ([#3675](https://github.com/dynamic-labs/DynamicAuth/issues/3675)) ([2407b6c](https://github.com/dynamic-labs/DynamicAuth/commit/2407b6cff09985bbd5b044e44ab600540a4c69cb))

## [0.19.0-alpha.23](https://github.com/dynamic-labs/DynamicAuth/compare/v0.19.0-alpha.22...v0.19.0-alpha.23) (2023-10-24)


### Bug Fixes

* better handling of CB wallet disconnect + upgrade to 3.7.2 ([#3659](https://github.com/dynamic-labs/DynamicAuth/issues/3659)) ([42a0857](https://github.com/dynamic-labs/DynamicAuth/commit/42a0857c66101cde901661e844c66ba324ff641b))
* calculate the settings override in real time ([#3671](https://github.com/dynamic-labs/DynamicAuth/issues/3671)) ([06cf28d](https://github.com/dynamic-labs/DynamicAuth/commit/06cf28d4dc29dda21312691985ed1b903d3120cc))
* handle rp.id edgecases for private domains due to webauthn restrictions on scoping to them ([#3658](https://github.com/dynamic-labs/DynamicAuth/issues/3658)) ([7067bc5](https://github.com/dynamic-labs/DynamicAuth/commit/7067bc5110afb8a010f13c2b2e0170faaa840995))
* twitter origin check should also look for current window location origin ([#3676](https://github.com/dynamic-labs/DynamicAuth/issues/3676)) ([6c30989](https://github.com/dynamic-labs/DynamicAuth/commit/6c30989d4cde3516a177f6290b5376c5d4c61cbc))

## [0.19.0-alpha.22](https://github.com/dynamic-labs/DynamicAuth/compare/v0.19.0-alpha.21...v0.19.0-alpha.22) (2023-10-23)


### ⚠ BREAKING CHANGES

* rename unlinkConnectedWallet to disconnectWallet (#3595)

### Features

* rename unlinkConnectedWallet to disconnectWallet ([#3595](https://github.com/dynamic-labs/DynamicAuth/issues/3595)) ([ac4a59e](https://github.com/dynamic-labs/DynamicAuth/commit/ac4a59ee5e50814fdb4190f07f5905b0c1499c7d))


### Bug Fixes

* add support for apple oauth ([#3568](https://github.com/dynamic-labs/DynamicAuth/issues/3568)) ([10455fd](https://github.com/dynamic-labs/DynamicAuth/commit/10455fd74f22c6a1d66409fc01650d6ec68c2156))
* only process oauth message coming from the expected origin ([#3653](https://github.com/dynamic-labs/DynamicAuth/issues/3653)) ([3bf48d4](https://github.com/dynamic-labs/DynamicAuth/commit/3bf48d4a61fa624c30ff11861e6f5db4c33ef5c3))
* **SignMessagePreview:** safely render message to sign ([#3655](https://github.com/dynamic-labs/DynamicAuth/issues/3655)) ([02b520a](https://github.com/dynamic-labs/DynamicAuth/commit/02b520a2ddb6ba4042bf630de4cf80259c4fac37))

## [0.19.0-alpha.21](https://github.com/dynamic-labs/DynamicAuth/compare/v0.19.0-alpha.20...v0.19.0-alpha.21) (2023-10-23)


### ⚠ BREAKING CHANGES

* Restructure the SDK packages (#3623)

### Features

* add support for overriding views ([#3649](https://github.com/dynamic-labs/DynamicAuth/issues/3649)) ([a722a1e](https://github.com/dynamic-labs/DynamicAuth/commit/a722a1e48d71373939e5f692bf215985959e1f0b))


* Restructure the SDK packages ([#3623](https://github.com/dynamic-labs/DynamicAuth/issues/3623)) ([aff5342](https://github.com/dynamic-labs/DynamicAuth/commit/aff5342f469a91b9092128daf74396c3af47f698))

## [0.19.0-alpha.20](https://github.com/dynamic-labs/DynamicAuth/compare/v0.19.0-alpha.19...v0.19.0-alpha.20) (2023-10-23)


### Bug Fixes

* consider logged in on connect-and-sign only if there's a user ([#3643](https://github.com/dynamic-labs/DynamicAuth/issues/3643)) ([85d0f37](https://github.com/dynamic-labs/DynamicAuth/commit/85d0f37e98a6727bb8749fcd725d8f598c59f728))

## [0.19.0-alpha.19](https://github.com/dynamic-labs/DynamicAuth/compare/v0.19.0-alpha.18...v0.19.0-alpha.19) (2023-10-20)

## [0.19.0-alpha.18](https://github.com/dynamic-labs/DynamicAuth/compare/v0.19.0-alpha.17...v0.19.0-alpha.18) (2023-10-20)


### Bug Fixes

* allow overriding contracts on Wagmi Chains ([#3106](https://github.com/dynamic-labs/DynamicAuth/issues/3106)) ([1a809f3](https://github.com/dynamic-labs/DynamicAuth/commit/1a809f3c2880b6581b58fb277188eac3a39da89a))
* await createEmbeddedWallet in useSocialAuth ([#3636](https://github.com/dynamic-labs/DynamicAuth/issues/3636)) ([6d5a6a6](https://github.com/dynamic-labs/DynamicAuth/commit/6d5a6a68c9adb79914fee4d4d17a47a3c79eec6d))
* disconnect wallet if not able to query address ([#3304](https://github.com/dynamic-labs/DynamicAuth/issues/3304)) ([d6fe979](https://github.com/dynamic-labs/DynamicAuth/commit/d6fe97931e35d9d38cf8525b44fc78326780b9a7))
* don't show user profile when reconnecting a primary social wallet ([#3614](https://github.com/dynamic-labs/DynamicAuth/issues/3614)) ([802243d](https://github.com/dynamic-labs/DynamicAuth/commit/802243d37963ca95d04373989e97d66e1753d8be))
* dynamic widget showing connect when in connect-only and signing with email/social ([#3632](https://github.com/dynamic-labs/DynamicAuth/issues/3632)) ([850a229](https://github.com/dynamic-labs/DynamicAuth/commit/850a229a72669b0e16154feafaec9618c820a036))

## [0.19.0-alpha.17](https://github.com/dynamic-labs/DynamicAuth/compare/v0.19.0-alpha.16...v0.19.0-alpha.17) (2023-10-19)


### Bug Fixes

* memoize createEmbeddedWallet so sync passkey is not called multiple times ([#3612](https://github.com/dynamic-labs/DynamicAuth/issues/3612)) ([11d53e9](https://github.com/dynamic-labs/DynamicAuth/commit/11d53e9bf3e7c4ceb4be7dede96e6facd07a6767))
* revert any changes of the form of the wallet connector key ([#3608](https://github.com/dynamic-labs/DynamicAuth/issues/3608)) ([f0e2a89](https://github.com/dynamic-labs/DynamicAuth/commit/f0e2a8988047e7533cbfc52eee06d6752c5aa9c4))

## [0.19.0-alpha.16](https://github.com/dynamic-labs/DynamicAuth/compare/v0.19.0-alpha.15...v0.19.0-alpha.16) (2023-10-17)


### ⚠ BREAKING CHANGES

* ethers extension integration and rename provider methods (#3573)

### Features

* add onDisconnect ([#3572](https://github.com/dynamic-labs/DynamicAuth/issues/3572)) ([3e612f7](https://github.com/dynamic-labs/DynamicAuth/commit/3e612f72540781b9246a47ac12a7c979fb6c0d88))
* user callback on passkey creation complete ([#3591](https://github.com/dynamic-labs/DynamicAuth/issues/3591)) ([92d5f7d](https://github.com/dynamic-labs/DynamicAuth/commit/92d5f7df2ac1cc06338f7e9e75125f7bb71455ab))


### Bug Fixes

* argentX in-browser wallet ([#3588](https://github.com/dynamic-labs/DynamicAuth/issues/3588)) ([7f3b22d](https://github.com/dynamic-labs/DynamicAuth/commit/7f3b22d003182aa0d84406086a313fc4de25e4a8))
* display a better message when transaction amount decimals are invalid ([#3577](https://github.com/dynamic-labs/DynamicAuth/issues/3577)) ([0238d9b](https://github.com/dynamic-labs/DynamicAuth/commit/0238d9b7712d6a52aec89193c751224dd8fd8b17))
* remove passkey success view ([#3536](https://github.com/dynamic-labs/DynamicAuth/issues/3536)) ([b559de9](https://github.com/dynamic-labs/DynamicAuth/commit/b559de9c83096ed98e9f073b998ac08f876af24e))
* **wagmi-connector:** use wallets list to sync wagmi client ([#3563](https://github.com/dynamic-labs/DynamicAuth/issues/3563)) ([1d551b9](https://github.com/dynamic-labs/DynamicAuth/commit/1d551b933aefe0c535285d68c2e6f819cd321e62))


* ethers extension integration and rename provider methods ([#3573](https://github.com/dynamic-labs/DynamicAuth/issues/3573)) ([efd73c3](https://github.com/dynamic-labs/DynamicAuth/commit/efd73c3b8121df9a7d4ec8c1fb6c4fd76ecce6df))

## [0.19.0-alpha.15](https://github.com/dynamic-labs/DynamicAuth/compare/v0.19.0-alpha.14...v0.19.0-alpha.15) (2023-10-11)

## [0.19.0-alpha.14](https://github.com/dynamic-labs/DynamicAuth/compare/v0.19.0-alpha.13...v0.19.0-alpha.14) (2023-10-10)


### ⚠ BREAKING CHANGES

* remove numberOfWallets (#3521)

### Features

* add embedded widget components ([#3533](https://github.com/dynamic-labs/DynamicAuth/issues/3533)) ([513cba8](https://github.com/dynamic-labs/DynamicAuth/commit/513cba8e7694544122ff9cce3aa1aea0a0c23986))
* add ethers extension support to wallet-connectors ([#3544](https://github.com/dynamic-labs/DynamicAuth/issues/3544)) ([3c09ba5](https://github.com/dynamic-labs/DynamicAuth/commit/3c09ba58b0f2c745df60a87b1820abbbfc1b95b7))
* add switch network for turnkey wallets ([#3539](https://github.com/dynamic-labs/DynamicAuth/issues/3539)) ([1bcbbb2](https://github.com/dynamic-labs/DynamicAuth/commit/1bcbbb2bd4e333d47ce4c93d4bd4b1f29a80c1f4))
* editable copy for switch network view ([#3561](https://github.com/dynamic-labs/DynamicAuth/issues/3561)) ([4dea2f1](https://github.com/dynamic-labs/DynamicAuth/commit/4dea2f159ee0675d5b9ba1cb412d75e5e211b3d1))


### Bug Fixes

* always call connectSucess callback after successfully connecting wallet ([#3562](https://github.com/dynamic-labs/DynamicAuth/issues/3562)) ([2587ff8](https://github.com/dynamic-labs/DynamicAuth/commit/2587ff8a915f61793b15bfa1289689514344fc75))
* don't let user update email if they have an embedded wallet ([#3552](https://github.com/dynamic-labs/DynamicAuth/issues/3552)) ([c710cce](https://github.com/dynamic-labs/DynamicAuth/commit/c710cce22c7a54004f56c8fc68f8c4075f5f9e51))
* embedded widget rerender bug ([#3545](https://github.com/dynamic-labs/DynamicAuth/issues/3545)) ([27ed979](https://github.com/dynamic-labs/DynamicAuth/commit/27ed979618ac7d9e912381faebbf61ec9e9e839c))
* sync passkey should not throw error ([#3535](https://github.com/dynamic-labs/DynamicAuth/issues/3535)) ([0336ba6](https://github.com/dynamic-labs/DynamicAuth/commit/0336ba65bf1cc4394e4f005f273baea26326784a))
* wrap eth wallet connector rpc calls in retry function ([#3497](https://github.com/dynamic-labs/DynamicAuth/issues/3497)) ([7800b45](https://github.com/dynamic-labs/DynamicAuth/commit/7800b45dc93f20731ee643e89e84d57765387778))


* remove numberOfWallets ([#3521](https://github.com/dynamic-labs/DynamicAuth/issues/3521)) ([0174297](https://github.com/dynamic-labs/DynamicAuth/commit/017429745d08b7b1edc23bc4da43bc01b4ef1cd4))

## [0.19.0-alpha.13](https://github.com/dynamic-labs/DynamicAuth/compare/v0.19.0-alpha.12...v0.19.0-alpha.13) (2023-10-04)


### Features

* add ethers 5/6 util methods for converting connectors to ethers classes ([#3435](https://github.com/dynamic-labs/DynamicAuth/issues/3435)) ([5f4da48](https://github.com/dynamic-labs/DynamicAuth/commit/5f4da48526dbce4be2d437fc93f4cc8ddded73c5))
* show goerli icon on network button and a warning message ([#3494](https://github.com/dynamic-labs/DynamicAuth/issues/3494)) ([64851a3](https://github.com/dynamic-labs/DynamicAuth/commit/64851a3d60ba19dd164690dcb26056cad2d22e61))


### Bug Fixes

* fix broken test ([#3520](https://github.com/dynamic-labs/DynamicAuth/issues/3520)) ([d7a3bd4](https://github.com/dynamic-labs/DynamicAuth/commit/d7a3bd4c71309a2df8106cae3f8f03f4aaedaa56))
* **handleWalletsToConnect:** require wallet connector in the props ([#3512](https://github.com/dynamic-labs/DynamicAuth/issues/3512)) ([ddc0d19](https://github.com/dynamic-labs/DynamicAuth/commit/ddc0d19c9996f4fd52d19aad837fdf1e632d1b3d))
* use providers redirect url in getOauthLoginUrl function ([#3519](https://github.com/dynamic-labs/DynamicAuth/issues/3519)) ([3f8601d](https://github.com/dynamic-labs/DynamicAuth/commit/3f8601d47d2fc6aa65f3a6890b1b9a4b93c9e9f6))
* **wagmi-connector:** set websocket rpc to wagmi client ([#3474](https://github.com/dynamic-labs/DynamicAuth/issues/3474)) ([c94a43e](https://github.com/dynamic-labs/DynamicAuth/commit/c94a43ea9be11352313eafb2cd42c5f4941562a3))

## [0.19.0-alpha.12](https://github.com/dynamic-labs/DynamicAuth/compare/v0.19.0-alpha.11...v0.19.0-alpha.12) (2023-10-03)


### Features

* filter wallet list for wallets which have not been connected ([#3499](https://github.com/dynamic-labs/DynamicAuth/issues/3499)) ([10e531f](https://github.com/dynamic-labs/DynamicAuth/commit/10e531f0836b029ab43713b9b2c7ecf273a4018c))
* passkey flow copies should be fully editable ([#3504](https://github.com/dynamic-labs/DynamicAuth/issues/3504)) ([390392c](https://github.com/dynamic-labs/DynamicAuth/commit/390392cc5c95afd0226f29a72560c295fa2be391))


### Bug Fixes

* remove useEffect in useSetWalletConnectorVerifiedCredentials to avoid race conditions ([#3495](https://github.com/dynamic-labs/DynamicAuth/issues/3495)) ([aa17676](https://github.com/dynamic-labs/DynamicAuth/commit/aa176761f324806000317db1f683d545ec642619))
* show android touch id icon for those with it available on passkey intro ([#3503](https://github.com/dynamic-labs/DynamicAuth/issues/3503)) ([4017f16](https://github.com/dynamic-labs/DynamicAuth/commit/4017f16fe0b0ceeb03f064ac9e9d34b71764b242))

## [0.19.0-alpha.11](https://github.com/dynamic-labs/DynamicAuth/compare/v0.19.0-alpha.10...v0.19.0-alpha.11) (2023-10-02)


### Bug Fixes

* **AuthProviderIcon:** ensure social icon shows up ([#3439](https://github.com/dynamic-labs/DynamicAuth/issues/3439)) ([5064f28](https://github.com/dynamic-labs/DynamicAuth/commit/5064f28af9125699c8e23597812c6c526bb8a213))
* fix passkey on Windows ([#3440](https://github.com/dynamic-labs/DynamicAuth/issues/3440)) ([c0da96c](https://github.com/dynamic-labs/DynamicAuth/commit/c0da96c17c6c10a736fb394b6b1e6be3ccd616b2))
* missing popper provider ([#3488](https://github.com/dynamic-labs/DynamicAuth/issues/3488)) ([d7ca76e](https://github.com/dynamic-labs/DynamicAuth/commit/d7ca76e21dc5e842c316a654cb20d9dd115d7204))
* passkey intro view should have a logout button ([#3466](https://github.com/dynamic-labs/DynamicAuth/issues/3466)) ([7ae626f](https://github.com/dynamic-labs/DynamicAuth/commit/7ae626fd2b2b6f685e48257c38ed00dae95d06e4))
* passkey intro view should not be closed until user create wallet ([#3458](https://github.com/dynamic-labs/DynamicAuth/issues/3458)) ([651459b](https://github.com/dynamic-labs/DynamicAuth/commit/651459b8d8a4ad131381ed8de52c9ef0c42191df))
* removing weird passkey intro logout button hover background ([#3490](https://github.com/dynamic-labs/DynamicAuth/issues/3490)) ([1adedfa](https://github.com/dynamic-labs/DynamicAuth/commit/1adedfaf87e6fd01e8528ff43ccf75fcb020ef65))
* resolve promise if there's no error, even if result is falsy ([#3477](https://github.com/dynamic-labs/DynamicAuth/issues/3477)) ([1b570dc](https://github.com/dynamic-labs/DynamicAuth/commit/1b570dc8ae6b104567790d93ebb57efed032ba1c))
* return promise from createEmbeddedWallet ([#3476](https://github.com/dynamic-labs/DynamicAuth/issues/3476)) ([5a9591e](https://github.com/dynamic-labs/DynamicAuth/commit/5a9591e0808d5d16fb886901902d763eabd8ec61))
* utilize the wallet connector key when looking up the wallet in localstorage during getWalletConnectorByKey ([#3386](https://github.com/dynamic-labs/DynamicAuth/issues/3386)) ([13a8ef4](https://github.com/dynamic-labs/DynamicAuth/commit/13a8ef4581e7799cc467bddb7cd1435dc4ab4de5))

## [0.19.0-alpha.10](https://github.com/dynamic-labs/DynamicAuth/compare/v0.19.0-alpha.9...v0.19.0-alpha.10) (2023-09-28)


### ⚠ BREAKING CHANGES

* change magic walletProvider from custodialService to embeddedWallet (#3429)

### Features

* allow passkey setup after social sign in ([#3410](https://github.com/dynamic-labs/DynamicAuth/issues/3410)) ([d225a63](https://github.com/dynamic-labs/DynamicAuth/commit/d225a63544284422589990c4e872430f7eb88f07))
* create useEmbeddedWallet hook to trigger embedded wallet creation ([#3437](https://github.com/dynamic-labs/DynamicAuth/issues/3437)) ([d79c558](https://github.com/dynamic-labs/DynamicAuth/commit/d79c558d31deacb293823c2fe42d006d0645b470))
* **passkey:** direct user to passkey intro view when enabled ([#3393](https://github.com/dynamic-labs/DynamicAuth/issues/3393)) ([e02e0dc](https://github.com/dynamic-labs/DynamicAuth/commit/e02e0dcaa87dbbd56665868ff637156cea23f574))
* **wcv2:** add support for dynamic network configuration to wallet connect ([#3332](https://github.com/dynamic-labs/DynamicAuth/issues/3332)) ([a285360](https://github.com/dynamic-labs/DynamicAuth/commit/a2853606e1065a252cab37fa693db1c51cd3ac55))


### Bug Fixes

* don't filter out disabled providers in settings so we can access their data ([#3407](https://github.com/dynamic-labs/DynamicAuth/issues/3407)) ([0f68e88](https://github.com/dynamic-labs/DynamicAuth/commit/0f68e887fed40777c8e539b20e9598edf76e612b))
* don't show error until passkey enabled check promise is fulfilled ([#3446](https://github.com/dynamic-labs/DynamicAuth/issues/3446)) ([101ac98](https://github.com/dynamic-labs/DynamicAuth/commit/101ac980aa56a1cd3d3fdda68ddac6ad7779727e))
* **DYN-2732:** wait for networks to fetch ([#3431](https://github.com/dynamic-labs/DynamicAuth/issues/3431)) ([e66e86c](https://github.com/dynamic-labs/DynamicAuth/commit/e66e86cefd826b04dcde3474e0ed169b41f7b715))
* error handling for non-supported devices ([#3397](https://github.com/dynamic-labs/DynamicAuth/issues/3397)) ([e5cc7e6](https://github.com/dynamic-labs/DynamicAuth/commit/e5cc7e65c05da132c325c57cf06e33cac86440f9))
* error handling when creating passkey ([#3416](https://github.com/dynamic-labs/DynamicAuth/issues/3416)) ([3274df4](https://github.com/dynamic-labs/DynamicAuth/commit/3274df4f7bd2a00ad0776392f55a8493c9bc2b60))
* passkey icon breaks line into 2 on mobile ([#3426](https://github.com/dynamic-labs/DynamicAuth/issues/3426)) ([2dd045b](https://github.com/dynamic-labs/DynamicAuth/commit/2dd045b04d4cc4806e653c10a22412d8a5c3b9fc))
* set primary wallet id when passkey is already set up ([#3419](https://github.com/dynamic-labs/DynamicAuth/issues/3419)) ([496555f](https://github.com/dynamic-labs/DynamicAuth/commit/496555fd8e239601880a3fcd38519d09b3c35bd5))
* signing messages with backpack ([#3398](https://github.com/dynamic-labs/DynamicAuth/issues/3398)) ([a68d3da](https://github.com/dynamic-labs/DynamicAuth/commit/a68d3da97e2b2c8f555d9126e0ab400343d7bec1))
* social signing icon loading after logout ([#3417](https://github.com/dynamic-labs/DynamicAuth/issues/3417)) ([3ac0f19](https://github.com/dynamic-labs/DynamicAuth/commit/3ac0f194f9a55795718fb6ca6f44ab2fe87eeb06))
* trigger passkey flow after email kyc verification ([#3434](https://github.com/dynamic-labs/DynamicAuth/issues/3434)) ([a6fc353](https://github.com/dynamic-labs/DynamicAuth/commit/a6fc353f6dfe9fd5ee67139a8fae6c37c947cd14))
* trigger passkey flow after onboarding ([#3428](https://github.com/dynamic-labs/DynamicAuth/issues/3428)) ([fa81643](https://github.com/dynamic-labs/DynamicAuth/commit/fa81643575c0fe6174e6521810fcdf139dc259e6))
* **turnkey:** sign message with viem and current address ([#3433](https://github.com/dynamic-labs/DynamicAuth/issues/3433)) ([025ffac](https://github.com/dynamic-labs/DynamicAuth/commit/025ffac4a9bf1e4526894f242c1cd882c0e10b45))
* use correct authenticator type in passkey creation params ([#3411](https://github.com/dynamic-labs/DynamicAuth/issues/3411)) ([eefbf01](https://github.com/dynamic-labs/DynamicAuth/commit/eefbf01aa7962e95db80ff19676fa582da756d11))
* **use-element-by-id:** include pointer events style rule to ensure modal is interactive ([#3396](https://github.com/dynamic-labs/DynamicAuth/issues/3396)) ([15077d4](https://github.com/dynamic-labs/DynamicAuth/commit/15077d4752379924f35ff889b05f03bdf6c051bf))


* change magic walletProvider from custodialService to embeddedWallet ([#3429](https://github.com/dynamic-labs/DynamicAuth/issues/3429)) ([c617439](https://github.com/dynamic-labs/DynamicAuth/commit/c617439d745cff81d415a042d2187a98b29318da))

## [0.19.0-alpha.9](https://github.com/dynamic-labs/DynamicAuth/compare/v0.19.0-alpha.8...v0.19.0-alpha.9) (2023-09-21)


### Features

* allow enabling multi wallet in connect-only mode ([#3367](https://github.com/dynamic-labs/DynamicAuth/issues/3367)) ([8ef68a2](https://github.com/dynamic-labs/DynamicAuth/commit/8ef68a295738db5353fcddc54985744313a5474b))
* move injected wallets configuration to the cdn ([#3077](https://github.com/dynamic-labs/DynamicAuth/issues/3077)) ([291183b](https://github.com/dynamic-labs/DynamicAuth/commit/291183b8daf124577d1049152a2556b6f2a85758))
* passkey setup completed view ([#3358](https://github.com/dynamic-labs/DynamicAuth/issues/3358)) ([020faf6](https://github.com/dynamic-labs/DynamicAuth/commit/020faf63815e232c64ac8626f747b2997adbaa02))
* **rohithv/gvty-326:** check if email is real before sending ([#3361](https://github.com/dynamic-labs/DynamicAuth/issues/3361)) ([db554f3](https://github.com/dynamic-labs/DynamicAuth/commit/db554f344707e3c3701012ecc09b67be2aaebba4))
* safe guard wrong locale override keys ([#3329](https://github.com/dynamic-labs/DynamicAuth/issues/3329)) ([b2cf96b](https://github.com/dynamic-labs/DynamicAuth/commit/b2cf96b55fdd2705335ad942fe8e1c1109bf4134))
* secure account with passkey view ([#3356](https://github.com/dynamic-labs/DynamicAuth/issues/3356)) ([9d58c44](https://github.com/dynamic-labs/DynamicAuth/commit/9d58c4472f1967ff5201bae6556c7d88a33d6276))


### Bug Fixes

* better handling of window opener to mitigate window opener for social linking ([#3379](https://github.com/dynamic-labs/DynamicAuth/issues/3379)) ([e784061](https://github.com/dynamic-labs/DynamicAuth/commit/e784061ab190d314976213e321516bbb256627e7))
* change buttom copy when cannot link a wallet ([#3364](https://github.com/dynamic-labs/DynamicAuth/issues/3364)) ([5428a60](https://github.com/dynamic-labs/DynamicAuth/commit/5428a60abcbbd9c47e9227a53610ee5975bac379))
* **DynamicWidget:** goToInitialView when closing send balance ([#3333](https://github.com/dynamic-labs/DynamicAuth/issues/3333)) ([7ea40ec](https://github.com/dynamic-labs/DynamicAuth/commit/7ea40ec3827c40e3340e5ecfa2153e59c05a79f1))
* **EmailMagicWalletConnector:** to only cancel the verification if user clicks back ([#3374](https://github.com/dynamic-labs/DynamicAuth/issues/3374)) ([1111a18](https://github.com/dynamic-labs/DynamicAuth/commit/1111a186b7b84066e89d385c0bd9c064d0326eae))
* **embedded-wallet:** display sign typed data message ([#3316](https://github.com/dynamic-labs/DynamicAuth/issues/3316)) ([0014c8b](https://github.com/dynamic-labs/DynamicAuth/commit/0014c8b4250cf9db92b554f02b4e46f3aba2d943))
* missing translation keys ([#3325](https://github.com/dynamic-labs/DynamicAuth/issues/3325)) ([0e7c383](https://github.com/dynamic-labs/DynamicAuth/commit/0e7c3838a0eb8b49298e59b2919e16994a2d6b19))
* only set scope/prompt in oauth query params when they're defined ([#3324](https://github.com/dynamic-labs/DynamicAuth/issues/3324)) ([9e8aa2d](https://github.com/dynamic-labs/DynamicAuth/commit/9e8aa2d186fff563607dc836017b918af79718ce))
* pass the network param on wallet transfers ([#3307](https://github.com/dynamic-labs/DynamicAuth/issues/3307)) ([faf89fd](https://github.com/dynamic-labs/DynamicAuth/commit/faf89fdbfa690a87ae91d7f09c3647b4160b53ad))
* send primaryWalletId when available to unlinkOauth ([#3342](https://github.com/dynamic-labs/DynamicAuth/issues/3342)) ([0da0ae2](https://github.com/dynamic-labs/DynamicAuth/commit/0da0ae23040f7683000223109446a516c6d7b212))
* twitter sign-in with dynamic ([#3313](https://github.com/dynamic-labs/DynamicAuth/issues/3313)) ([c77dae4](https://github.com/dynamic-labs/DynamicAuth/commit/c77dae41dbdc02c84f3d3f5f3338136efd5766f9))
* use social profile photo for profile icon whenever available ([#3298](https://github.com/dynamic-labs/DynamicAuth/issues/3298)) ([143303b](https://github.com/dynamic-labs/DynamicAuth/commit/143303ba5e24d16aaa362f1888e3942bdef59602))
* wallet transition in the bridge ([#3270](https://github.com/dynamic-labs/DynamicAuth/issues/3270)) ([143cf47](https://github.com/dynamic-labs/DynamicAuth/commit/143cf47e0cd4806780f5b3f527ace2d6c0208534)), closes [#3268](https://github.com/dynamic-labs/DynamicAuth/issues/3268) [#3243](https://github.com/dynamic-labs/DynamicAuth/issues/3243)
* **wallet-connect:** prevent connector from connecting after logout ([#3345](https://github.com/dynamic-labs/DynamicAuth/issues/3345)) ([9bada77](https://github.com/dynamic-labs/DynamicAuth/commit/9bada7775c5ac7a4fdb5ad8d4d21691335e06936))

## [0.19.0-alpha.8](https://github.com/dynamic-labs/DynamicAuth/compare/v0.19.0-alpha.7...v0.19.0-alpha.8) (2023-09-11)


### Features

* add onSignedMessage callback ([#3118](https://github.com/dynamic-labs/DynamicAuth/issues/3118)) ([acc36f6](https://github.com/dynamic-labs/DynamicAuth/commit/acc36f6cf584eb05a019027475a6e2e413fd6bd5))
* add social sign-in without embedded wallet ([#3172](https://github.com/dynamic-labs/DynamicAuth/issues/3172)) ([ff1acc6](https://github.com/dynamic-labs/DynamicAuth/commit/ff1acc6d9753ba745ac01c5ef6d26f2e4291b752))
* show default wallet icon when image breaks ([#3234](https://github.com/dynamic-labs/DynamicAuth/issues/3234)) ([657e6bb](https://github.com/dynamic-labs/DynamicAuth/commit/657e6bbc1cdcd840562d25194a827ea833237c1a))


### Bug Fixes

* catch error sending sdkSettings and log warning ([#3274](https://github.com/dynamic-labs/DynamicAuth/issues/3274)) ([fcbe01b](https://github.com/dynamic-labs/DynamicAuth/commit/fcbe01bc733a73f38aebd6ffb0969b040dd2f781))
* detect if oauth popup is blocked and throw error ([#3250](https://github.com/dynamic-labs/DynamicAuth/issues/3250)) ([b87ddf3](https://github.com/dynamic-labs/DynamicAuth/commit/b87ddf399104e29c56566abbbecab6ff947992d6))
* display error message to user if social account already exits ([#3258](https://github.com/dynamic-labs/DynamicAuth/issues/3258)) ([bb52cb4](https://github.com/dynamic-labs/DynamicAuth/commit/bb52cb4ae42d89310d435584ed4ece126f9b6a4a))
* don't call callbacks if window closed due to oauth process complete ([#3252](https://github.com/dynamic-labs/DynamicAuth/issues/3252)) ([09a3c73](https://github.com/dynamic-labs/DynamicAuth/commit/09a3c73446aa337f24e0875cd4a0af617ea8ca84))
* issue where unexpected token would occur when bundlers defined process.env ([#3283](https://github.com/dynamic-labs/DynamicAuth/issues/3283)) ([d31d0a4](https://github.com/dynamic-labs/DynamicAuth/commit/d31d0a4011256f59cb3760acdc2c3dfe6c5b504a))
* login view layout updates ([#3231](https://github.com/dynamic-labs/DynamicAuth/issues/3231)) ([7762d06](https://github.com/dynamic-labs/DynamicAuth/commit/7762d067bdd4b3f313a15308262f18dac0b961ab))
* **MagicWalletConnector:** remove async from getWeb3Provider method ([#3230](https://github.com/dynamic-labs/DynamicAuth/issues/3230)) ([69356e9](https://github.com/dynamic-labs/DynamicAuth/commit/69356e9b0bd1800acdf24fc96c72b094b595eaa7))
* remove react component props from sending to sdk api ([#3282](https://github.com/dynamic-labs/DynamicAuth/issues/3282)) ([b0d8f2b](https://github.com/dynamic-labs/DynamicAuth/commit/b0d8f2b9dd0856a5a7bd862f6c3499b65ec29f64))
* seprate ls checks for dynamiccontext and wagmi settings ([#3275](https://github.com/dynamic-labs/DynamicAuth/issues/3275)) ([aa4e756](https://github.com/dynamic-labs/DynamicAuth/commit/aa4e756a10310ce216b5942d0d6845f7092a89a2))
* use context to handle social sign-in and display message while processing ([#3216](https://github.com/dynamic-labs/DynamicAuth/issues/3216)) ([0e3ce73](https://github.com/dynamic-labs/DynamicAuth/commit/0e3ce73eafbb8d5725377c9a8cbd86a82d6c525f))
* **wallet-connect-v2:** use appropriate default chain id with WC v2 ([#3218](https://github.com/dynamic-labs/DynamicAuth/issues/3218)) ([2e6e7be](https://github.com/dynamic-labs/DynamicAuth/commit/2e6e7beb801ea5a8dc7429970bcd1e705610d605))

## [0.19.0-alpha.7](https://github.com/dynamic-labs/DynamicAuth/compare/v0.19.0-alpha.6...v0.19.0-alpha.7) (2023-08-31)


### Features

* include deepLinkPreference option for wallet connect deep linking mode ([#3174](https://github.com/dynamic-labs/DynamicAuth/issues/3174)) ([f715948](https://github.com/dynamic-labs/DynamicAuth/commit/f715948050ddab52373ab742ea47cfc0879842ae))
* add option to disable the locked wallet view ([#3184](https://github.com/dynamic-labs/DynamicAuth/issues/3184)) ([d9a1290](https://github.com/dynamic-labs/DynamicAuth/commit/d9a1290214b7f86337abb544acd96f65ffe37759))
* migrate starknet version to v5 ([#3153](https://github.com/dynamic-labs/DynamicAuth/issues/3153)) ([b674011](https://github.com/dynamic-labs/DynamicAuth/commit/b67401133bf75d416118b51be11e3f099d2e2cda))
* add editable text with react i18next ([#3170](https://github.com/dynamic-labs/DynamicAuth/issues/3170)) ([a46b2ca](https://github.com/dynamic-labs/DynamicAuth/commit/a46b2ca880a4e14356024d2936920f72c8bc447e))


### Bug Fixes

* allow to select L2 wallet after changing L1 network ([#3158](https://github.com/dynamic-labs/DynamicAuth/issues/3158)) ([cf68472](https://github.com/dynamic-labs/DynamicAuth/commit/cf6847270181f7fd33537ac1ff2a03e70b67daf2))
* allow user to cancel magic login to choose another email ([#3123](https://github.com/dynamic-labs/DynamicAuth/issues/3123)) ([cd73d6d](https://github.com/dynamic-labs/DynamicAuth/commit/cd73d6d0500c313dda01bca6245c52d2d8fca93a))
* verify email OTP when email is updated ([#3168](https://github.com/dynamic-labs/DynamicAuth/issues/3168)) ([641eeb6](https://github.com/dynamic-labs/DynamicAuth/commit/641eeb685b0c9d77cc72912f29b137c699c192f0))
* end connector session when unlinking in bridge ([#3120](https://github.com/dynamic-labs/DynamicAuth/issues/3120)) ([4c15da2](https://github.com/dynamic-labs/DynamicAuth/commit/4c15da27646c7bd176f6080dee6d76833e30f8a1))
* improves loading the sdk setting once per session ([#3189](https://github.com/dynamic-labs/DynamicAuth/issues/3189)) ([c9b0241](https://github.com/dynamic-labs/DynamicAuth/commit/c9b0241da28d2a73c90fd7643280c8632772c90b))
* update wallet address when switching network on bridge ([#3171](https://github.com/dynamic-labs/DynamicAuth/issues/3171)) ([f35f35e](https://github.com/dynamic-labs/DynamicAuth/commit/f35f35e632bcf88794884b66e0466cdf2e924812))
* updates the user email when updateUserWithModal method is used ([#3186](https://github.com/dynamic-labs/DynamicAuth/issues/3186)) ([8c71863](https://github.com/dynamic-labs/DynamicAuth/commit/8c718632cef0165328b929c27b6eef313641458d))
* sign message for embedded wallet when auth mode is connect only ([#3185](https://github.com/dynamic-labs/DynamicAuth/issues/3185)) ([0e3859c](https://github.com/dynamic-labs/DynamicAuth/commit/0e3859cfc738d3ecf8f19976e5cdaebc0c4f01c9))
* sync wagmi with wallet connector ([#3149](https://github.com/dynamic-labs/DynamicAuth/issues/3149)) ([3216e15](https://github.com/dynamic-labs/DynamicAuth/commit/3216e1570ac12ded6b3ce50b7efb762fe6814815))

## [0.19.0-alpha.6](https://github.com/dynamic-labs/DynamicAuth/compare/v0.19.0-alpha.5...v0.19.0-alpha.6) (2023-08-25)


### Features

* optionally split up email and social and change their display order in login view ([#3125](https://github.com/dynamic-labs/DynamicAuth/issues/3125)) ([ee82d26](https://github.com/dynamic-labs/DynamicAuth/commit/ee82d264eb3cb7f4ca7eb33369ef5409fe6860e4))
* post a connection request for second wallet ([#3113](https://github.com/dynamic-labs/DynamicAuth/issues/3113)) ([630aefa](https://github.com/dynamic-labs/DynamicAuth/commit/630aefa5ce83278082db1e3cd419c03e4fd081c7))


### Bug Fixes

* fix bug where user was not able to confirm last wallet transfer ([#3102](https://github.com/dynamic-labs/DynamicAuth/issues/3102)) ([453b4c2](https://github.com/dynamic-labs/DynamicAuth/commit/453b4c20ea8f09d92dda11cdf92ddab562096d6f))
* fix github social linking icon on dark mode ([#3126](https://github.com/dynamic-labs/DynamicAuth/issues/3126)) ([6a8f3e3](https://github.com/dynamic-labs/DynamicAuth/commit/6a8f3e3d6e43d76b428e169fd5ead9ee0e2ec43d))
* fix issue with detecting oauth window closed before finishing linking ([#3124](https://github.com/dynamic-labs/DynamicAuth/issues/3124)) ([6a80ee9](https://github.com/dynamic-labs/DynamicAuth/commit/6a80ee97deb54e5b62bf2285d71b03c36802c5d2))
* stop calling handleLogOut prematurely ([#3135](https://github.com/dynamic-labs/DynamicAuth/issues/3135)) ([e7c81ad](https://github.com/dynamic-labs/DynamicAuth/commit/e7c81ad7e9e9cff03e5d2ca1e0fb7cfea083d06e))

## [0.19.0-alpha.5](https://github.com/dynamic-labs/DynamicAuth/compare/v0.19.0-alpha.4...v0.19.0-alpha.5) (2023-08-24)


### Bug Fixes

* send wagmi settings only once when DynamicWagmiConnector loads ([#3103](https://github.com/dynamic-labs/DynamicAuth/issues/3103)) ([8bba505](https://github.com/dynamic-labs/DynamicAuth/commit/8bba505f84f6f3567743397a3f1274a3840a7700))

## [0.19.0-alpha.4](https://github.com/dynamic-labs/DynamicAuth/compare/v0.19.0-alpha.3...v0.19.0-alpha.4) (2023-08-23)


### Features

* **GVTY-142:** support both emailOnly and dynamic as login with email provider ([#3025](https://github.com/dynamic-labs/DynamicAuth/issues/3025)) ([a4c43d3](https://github.com/dynamic-labs/DynamicAuth/commit/a4c43d36c44026df747530bc60193e73b77b9020))


### Bug Fixes

* jumps when entering OTP code on IOS ([#3036](https://github.com/dynamic-labs/DynamicAuth/issues/3036)) ([f87eade](https://github.com/dynamic-labs/DynamicAuth/commit/f87eadeab9b7ea0c3f55d5d6d682a916868f2a58))
* log user out when magic session expires ([#3085](https://github.com/dynamic-labs/DynamicAuth/issues/3085)) ([fd5a328](https://github.com/dynamic-labs/DynamicAuth/commit/fd5a328dc41074c05413e0da82e82bb41bc803a1))
* switching network after connecting L1 wallet breaks bridge flow ([#3054](https://github.com/dynamic-labs/DynamicAuth/issues/3054)) ([e119f2b](https://github.com/dynamic-labs/DynamicAuth/commit/e119f2b23f3e6eedb0d2798dcf025bd401d78002))

## [0.19.0-alpha.3](https://github.com/dynamic-labs/DynamicAuth/compare/v0.19.0-alpha.2...v0.19.0-alpha.3) (2023-08-22)


### Bug Fixes

* multiwallet toolkit toggle not persisted after page refresh ([#3070](https://github.com/dynamic-labs/DynamicAuth/issues/3070)) ([ca454a7](https://github.com/dynamic-labs/DynamicAuth/commit/ca454a7aace415dbfaeef3f16f8e0d5b79b2d142))

## [0.19.0-alpha.2](https://github.com/dynamic-labs/DynamicAuth/compare/v0.19.0-alpha.1...v0.19.0-alpha.2) (2023-08-21)


### ⚠ BREAKING CHANGES

* useSocialAccounts: error type changed from string to SocialOAuthError:
export type SocialOAuthError = {
  code: SocialOAuthErrorCode;
  message: string;
};

### Features

* add ErrorPage when user tries to transfer the last wallet out account when preventOrphanedAccounts is true ([#2919](https://github.com/dynamic-labs/DynamicAuth/issues/2919)) ([7144211](https://github.com/dynamic-labs/DynamicAuth/commit/71442116851ddb22911b7809b45f9c3a49989fdf)), closes [#2924](https://github.com/dynamic-labs/DynamicAuth/issues/2924) [#2956](https://github.com/dynamic-labs/DynamicAuth/issues/2956) [#2960](https://github.com/dynamic-labs/DynamicAuth/issues/2960)
* add onEmailVerificationX callbacks ([#2859](https://github.com/dynamic-labs/DynamicAuth/issues/2859)) ([1c1c66d](https://github.com/dynamic-labs/DynamicAuth/commit/1c1c66dc47fb1966a2ef8102957dd06b42c9f7dc))
* add UserFieldEditorView component ([#2873](https://github.com/dynamic-labs/DynamicAuth/issues/2873)) ([7a6d1d7](https://github.com/dynamic-labs/DynamicAuth/commit/7a6d1d7057422e4ff5f4efebbf8f08eb7398c51d))
* e2e refresh on unsupported network ([#2915](https://github.com/dynamic-labs/DynamicAuth/issues/2915)) ([8504c73](https://github.com/dynamic-labs/DynamicAuth/commit/8504c73d75a057c695fe86b25d8bf42ff071efb4))
* introduces updateUserWithModal ([#2972](https://github.com/dynamic-labs/DynamicAuth/issues/2972)) ([883f500](https://github.com/dynamic-labs/DynamicAuth/commit/883f500f35e5db9dcaf073e049f67672e0115670))
* update wallet locked view ([#2892](https://github.com/dynamic-labs/DynamicAuth/issues/2892)) ([e3aaaca](https://github.com/dynamic-labs/DynamicAuth/commit/e3aaaca50c6335498b9e3938674b37524a001b49))


### Bug Fixes

*  input's css hiding submit button and label on autocomplete ([#2916](https://github.com/dynamic-labs/DynamicAuth/issues/2916)) ([d07acfc](https://github.com/dynamic-labs/DynamicAuth/commit/d07acfc627dd72fea690c0492190c995be9e6b2c))
* always enable magic connectors when enabled ([#3014](https://github.com/dynamic-labs/DynamicAuth/issues/3014)) ([ce33b43](https://github.com/dynamic-labs/DynamicAuth/commit/ce33b4336397d5d77863ce32746dc4e975d16f6a))
* **captcha:** complete sign in with magic and blocto ([#2967](https://github.com/dynamic-labs/DynamicAuth/issues/2967)) ([07e4cf7](https://github.com/dynamic-labs/DynamicAuth/commit/07e4cf7d3f8158e04ed6f78d1cc11b499da50eea))
* ensure social sign in embedded wallets sync correctly with wagmi ([#3043](https://github.com/dynamic-labs/DynamicAuth/issues/3043)) ([e139d38](https://github.com/dynamic-labs/DynamicAuth/commit/e139d38056bc2f20adbeff458ff6a9731e44a677))
* fix twitter linking ([#2918](https://github.com/dynamic-labs/DynamicAuth/issues/2918)) ([1511924](https://github.com/dynamic-labs/DynamicAuth/commit/1511924c89bb3bc12a290695a43f5db9e7d475f4))
* guard against null or undefined provider value when logging in with magic ([#3021](https://github.com/dynamic-labs/DynamicAuth/issues/3021)) ([7c1580a](https://github.com/dynamic-labs/DynamicAuth/commit/7c1580a782f0d6b30931a7f9c84f96416a7236cf))
* **GVTY-195:** issues with mergeUserAccountsView ([#2943](https://github.com/dynamic-labs/DynamicAuth/issues/2943)) ([b290132](https://github.com/dynamic-labs/DynamicAuth/commit/b29013269df539b4901f1f5fc688905f0f50548e))
* issue where walletconnectors are instantiated without walletbook ([#3020](https://github.com/dynamic-labs/DynamicAuth/issues/3020)) ([bb91c24](https://github.com/dynamic-labs/DynamicAuth/commit/bb91c24d4f03966f96c960eb04891846807ed49d))
* **Magic:** improve gas estimate for transactions ([#2929](https://github.com/dynamic-labs/DynamicAuth/issues/2929)) ([13dcb7a](https://github.com/dynamic-labs/DynamicAuth/commit/13dcb7a40a75e088fea81d51865dddf5391bcf83))
* missing enable isVerificationInProgress ([#2893](https://github.com/dynamic-labs/DynamicAuth/issues/2893)) ([bcd76a5](https://github.com/dynamic-labs/DynamicAuth/commit/bcd76a5b55f9e85872ff3dd9f5353b39ca47053b))
* **networks:** merge custom network after API networks ([#2925](https://github.com/dynamic-labs/DynamicAuth/issues/2925)) ([c2f53ca](https://github.com/dynamic-labs/DynamicAuth/commit/c2f53ca9ee3485ed26be4e7d7d255dbdb5a952d4))
* onBeforeConnectSuccessConfirmation is being called multiple times on network change ([#2917](https://github.com/dynamic-labs/DynamicAuth/issues/2917)) ([f873ca4](https://github.com/dynamic-labs/DynamicAuth/commit/f873ca47118796f277e37f5decf810503ee740bd))
* only use the production api environment of magicLink ([#3022](https://github.com/dynamic-labs/DynamicAuth/issues/3022)) ([cd86753](https://github.com/dynamic-labs/DynamicAuth/commit/cd867534262b8f77f5fa37344182181a7ea8d3c2))
* **QNTM-249:** broken email update when user is authenticated ([#2931](https://github.com/dynamic-labs/DynamicAuth/issues/2931)) ([5471ab1](https://github.com/dynamic-labs/DynamicAuth/commit/5471ab1b51f9bffdf1e36e1c2fac1fb9af06a067))
* reformat social sign-in text ([#2956](https://github.com/dynamic-labs/DynamicAuth/issues/2956)) ([0e149db](https://github.com/dynamic-labs/DynamicAuth/commit/0e149db5b661347145928f4de6ce932604ed7184))
* remove unused provider variable from OKX.spec.ts ([#2959](https://github.com/dynamic-labs/DynamicAuth/issues/2959)) ([6bc9d4d](https://github.com/dynamic-labs/DynamicAuth/commit/6bc9d4d51795ff46779650d929d8e0df3179e0b1))
* set error if user closes oauth window or if it times out ([#3050](https://github.com/dynamic-labs/DynamicAuth/issues/3050)) ([ef2b189](https://github.com/dynamic-labs/DynamicAuth/commit/ef2b189cbf650bf82382e538e7ce653fb677a22f))
* switching network in connected state should update wallets to connect list ([#2989](https://github.com/dynamic-labs/DynamicAuth/issues/2989)) ([f0553fd](https://github.com/dynamic-labs/DynamicAuth/commit/f0553fd24c27204e9ec7b7c12d6589ce92910553))
* sync wagmi correctly in connect-only mode ([#2990](https://github.com/dynamic-labs/DynamicAuth/issues/2990)) ([d15b6d5](https://github.com/dynamic-labs/DynamicAuth/commit/d15b6d5eb7349e872138d4394a1a155fdb67e6b4))
* **transactions:** send transaction with auto nonce ([#3049](https://github.com/dynamic-labs/DynamicAuth/issues/3049)) ([769cdce](https://github.com/dynamic-labs/DynamicAuth/commit/769cdce50fba786c94ac139fc031073513bbec3a))
* use ETH currency symbol for STARK chains ([#3005](https://github.com/dynamic-labs/DynamicAuth/issues/3005)) ([a43f184](https://github.com/dynamic-labs/DynamicAuth/commit/a43f184121463844a0934189290c8251db36d3dc))
* useSyncPrimaryWallet overrides views with "wallet-locked-view" ([#2861](https://github.com/dynamic-labs/DynamicAuth/issues/2861)) ([a21d9e4](https://github.com/dynamic-labs/DynamicAuth/commit/a21d9e42a900201b8f4039038ced50d59c763e8a))
* **wallet-list:** update key to distinguish wallet and wallet group ([#2909](https://github.com/dynamic-labs/DynamicAuth/issues/2909)) ([ce5055f](https://github.com/dynamic-labs/DynamicAuth/commit/ce5055febab9b8a479505d3f21b1cdf2b5091fd7))

## [0.19.0-alpha.1](https://github.com/dynamic-labs/DynamicAuth/compare/v0.19.0-alpha.0...v0.19.0-alpha.1) (2023-08-10)


### Features

* cleaning up email input field - delete continue button ([#2833](https://github.com/dynamic-labs/DynamicAuth/issues/2833)) ([baa399e](https://github.com/dynamic-labs/DynamicAuth/commit/baa399e387bce9570a7e7774d68dc3c92f86be1b))
* disable social buttons after provider is selected ([#2875](https://github.com/dynamic-labs/DynamicAuth/issues/2875)) ([6296ce1](https://github.com/dynamic-labs/DynamicAuth/commit/6296ce13062a8589cf6fb4741957dc9bf84552a2))
* **GVTY-65:** Allow Merging accounts when duplicated email in KYC step ([#2772](https://github.com/dynamic-labs/DynamicAuth/issues/2772)) ([8efb6ae](https://github.com/dynamic-labs/DynamicAuth/commit/8efb6aecc9445ef1798a5c6358eac27b16f661b6))
* hide network from nav if hideNetworkInDynamicWidget setting is true ([#2842](https://github.com/dynamic-labs/DynamicAuth/issues/2842)) ([f3dc9ba](https://github.com/dynamic-labs/DynamicAuth/commit/f3dc9ba987781d5d0540336f351bb9f148400eac))
* show email submit button on focus ([#2860](https://github.com/dynamic-labs/DynamicAuth/issues/2860)) ([87d8ae0](https://github.com/dynamic-labs/DynamicAuth/commit/87d8ae0806425a25835efda5f9b9abc58e5de18e))


### Bug Fixes

* account already exist message not displaying automatically ([#2896](https://github.com/dynamic-labs/DynamicAuth/issues/2896)) ([ba56c93](https://github.com/dynamic-labs/DynamicAuth/commit/ba56c936546428b0a1111ab5ef6e8d0d9a463bb5))
* array of dynamicWagmiSettings not being sent, must be turned into object ([#2835](https://github.com/dynamic-labs/DynamicAuth/issues/2835)) ([092c45a](https://github.com/dynamic-labs/DynamicAuth/commit/092c45afd3676fbd7c3d28f51818470de7f95768))
* change network modal doesn't pop on secondary wallet, when primaryWallet was disconnected ([#2817](https://github.com/dynamic-labs/DynamicAuth/issues/2817)) ([b68c156](https://github.com/dynamic-labs/DynamicAuth/commit/b68c1565f936d2f4275b104a0881ba5720101abd))
* connectSuccess callback is not being called when connecting new wallet after unlink ([#2814](https://github.com/dynamic-labs/DynamicAuth/issues/2814)) ([d5b34d8](https://github.com/dynamic-labs/DynamicAuth/commit/d5b34d8a073436ce39280766608578fd97567fac))
* css variables are being ignored for ConnectButton component  ([#2869](https://github.com/dynamic-labs/DynamicAuth/issues/2869)) ([a54fb46](https://github.com/dynamic-labs/DynamicAuth/commit/a54fb46648758001450a33e6d86cf04765507701))
* css variables for the ConnectButton are being ignored ([#2856](https://github.com/dynamic-labs/DynamicAuth/issues/2856)) ([65a342f](https://github.com/dynamic-labs/DynamicAuth/commit/65a342f828b6a16f714fc6b6e2066e1b742b2c0a))
* don't let user update email if it's linked to an embedded wallet ([#2883](https://github.com/dynamic-labs/DynamicAuth/issues/2883)) ([99aa303](https://github.com/dynamic-labs/DynamicAuth/commit/99aa3033e62c0dee14657cb811db8d5b3597f7de))
* **GVTY-150:** blocto pop up to sign after disconnect ([#2854](https://github.com/dynamic-labs/DynamicAuth/issues/2854)) ([df5481b](https://github.com/dynamic-labs/DynamicAuth/commit/df5481b2d5438848ad96cdee402f40b520bead08))
* **GVTY-155:** update to the new design ([#2889](https://github.com/dynamic-labs/DynamicAuth/issues/2889)) ([31f7f54](https://github.com/dynamic-labs/DynamicAuth/commit/31f7f54444c623fe7d5bcf8a42f94ee22eedc3e1))
* **GVTY-159:** email update view not showing email used error ([#2887](https://github.com/dynamic-labs/DynamicAuth/issues/2887)) ([bd40e4c](https://github.com/dynamic-labs/DynamicAuth/commit/bd40e4c77cda42752d44e42b98bfcea4cfd77a80))
* **OTPOverviewView:** enable close only on close button click ([#2877](https://github.com/dynamic-labs/DynamicAuth/issues/2877)) ([2be23e7](https://github.com/dynamic-labs/DynamicAuth/commit/2be23e7ddefe67c971d863ad9069ac5b8a74f4e5))
* **transaction:** improve gas estimate in transaction confirmation ([#2767](https://github.com/dynamic-labs/DynamicAuth/issues/2767)) ([7180ae5](https://github.com/dynamic-labs/DynamicAuth/commit/7180ae50559f924ae9769b2b8d87eadc6604c754))
* use findSocialIcon instead getSocialIcon to avoid render errors ([#2834](https://github.com/dynamic-labs/DynamicAuth/issues/2834)) ([2c57f98](https://github.com/dynamic-labs/DynamicAuth/commit/2c57f98fd5c461ae4acbe2836f719ebe18bc21fc))
* **useWalletConnectorEvent:** ensure connector is initialized ([#2849](https://github.com/dynamic-labs/DynamicAuth/issues/2849)) ([9137131](https://github.com/dynamic-labs/DynamicAuth/commit/913713166af8a6e6cc15a8e362e57b328fc0a76f))
* **wcv2:** simulate chain change event in switchNetwork ([#2809](https://github.com/dynamic-labs/DynamicAuth/issues/2809)) ([2329b80](https://github.com/dynamic-labs/DynamicAuth/commit/2329b808f57644cebb664be536bc41e256d108d8))
* wrong wallet list is showing after disconnecting and network change ([#2815](https://github.com/dynamic-labs/DynamicAuth/issues/2815)) ([6cae101](https://github.com/dynamic-labs/DynamicAuth/commit/6cae1019f40be4ffe7ab0426aa159c652a770a82))

## [0.19.0-alpha.0](https://github.com/dynamic-labs/DynamicAuth/compare/v0.18.0-RC.25...v0.19.0-alpha.0) (2023-08-01)

## [0.18.0-RC.25](https://github.com/dynamic-labs/DynamicAuth/compare/v0.18.0-RC.24...v0.18.0-RC.25) (2023-08-01)


### ⚠ BREAKING CHANGES

* displayTermsOfService prop set to false breaks message verfication (#2751)

### Bug Fixes

* always call onBeforeConnectSuccess callback when wallet state changes ([#2786](https://github.com/dynamic-labs/DynamicAuth/issues/2786)) ([e2eaef3](https://github.com/dynamic-labs/DynamicAuth/commit/e2eaef3da1f80cdc7dc21e902e9c033e581242d2))
* displayTermsOfService prop set to false breaks message verfication ([#2751](https://github.com/dynamic-labs/DynamicAuth/issues/2751)) ([6433732](https://github.com/dynamic-labs/DynamicAuth/commit/6433732fac87d641f2475d19ef743ac31130274f))
* ensure auto-redirect back to dapp after message signing ([#2783](https://github.com/dynamic-labs/DynamicAuth/issues/2783)) ([dba4664](https://github.com/dynamic-labs/DynamicAuth/commit/dba466473ecc2afd808cdae0fd9023d38676b01f))

## [0.18.0-RC.24](https://github.com/dynamic-labs/DynamicAuth/compare/v0.18.0-RC.23...v0.18.0-RC.24) (2023-08-01)


### Features

* **QNTM-156:** onBeforeConnectSuccessConfirmation on account change ([#2782](https://github.com/dynamic-labs/DynamicAuth/issues/2782)) ([eeabcd0](https://github.com/dynamic-labs/DynamicAuth/commit/eeabcd07889b7284680dc92a83bfa1b8321fa0f5))


### Bug Fixes

* **bridge:** reordering not mess connected wallets ([#2758](https://github.com/dynamic-labs/DynamicAuth/issues/2758)) ([2cdc240](https://github.com/dynamic-labs/DynamicAuth/commit/2cdc240b1f5b401880d776174646ebc9383506d2))

## [0.18.0-RC.23](https://github.com/dynamic-labs/DynamicAuth/compare/v0.18.0-RC.22...v0.18.0-RC.23) (2023-07-31)


### Features

* add hook to expose link/unlink social account ([#2766](https://github.com/dynamic-labs/DynamicAuth/issues/2766)) ([06366ee](https://github.com/dynamic-labs/DynamicAuth/commit/06366eebd9917f39c0177307616bcd936f023326))
* show modal for duplicate emails ([#2761](https://github.com/dynamic-labs/DynamicAuth/issues/2761)) ([421235b](https://github.com/dynamic-labs/DynamicAuth/commit/421235b4c41ce682b0cf75093dff8281031121cb))


### Bug Fixes

* missing dependencies and providers for MockContextProvider ([#2779](https://github.com/dynamic-labs/DynamicAuth/issues/2779)) ([15ce9af](https://github.com/dynamic-labs/DynamicAuth/commit/15ce9af40240f50878c2a4f103bdcb98d845b49b))
* Revert "fix: ensure metamask auto-redirect upon message signing ([#2757](https://github.com/dynamic-labs/DynamicAuth/issues/2757))" ([#2776](https://github.com/dynamic-labs/DynamicAuth/issues/2776)) ([9abe356](https://github.com/dynamic-labs/DynamicAuth/commit/9abe3568a9ba9c70a6e17f03e9746a787feae92e))

## [0.18.0-RC.22](https://github.com/dynamic-labs/DynamicAuth/compare/v0.18.0-RC.21...v0.18.0-RC.22) (2023-07-28)

## [0.18.0-RC.21](https://github.com/dynamic-labs/DynamicAuth/compare/v0.18.0-RC.20...v0.18.0-RC.21) (2023-07-28)

## [0.18.0-RC.20](https://github.com/dynamic-labs/DynamicAuth/compare/v0.18.0-RC.19...v0.18.0-RC.20) (2023-07-27)


### Features

* **QNTM-56:** add onBeforeConnectSuccessConfirmation callback ([#2753](https://github.com/dynamic-labs/DynamicAuth/issues/2753)) ([b174396](https://github.com/dynamic-labs/DynamicAuth/commit/b174396ab341cbcf11c6940e54931c0db3954d0d))
* **QNTM-72:** add backpack wallet ([#2702](https://github.com/dynamic-labs/DynamicAuth/issues/2702)) ([0d0ce9c](https://github.com/dynamic-labs/DynamicAuth/commit/0d0ce9c0d92118a78b5e40f64c5530246523712a))


### Bug Fixes

* bump sdk version and change sdksettings api ([#2760](https://github.com/dynamic-labs/DynamicAuth/issues/2760)) ([6e3e205](https://github.com/dynamic-labs/DynamicAuth/commit/6e3e2050ed63d2df2d88d9169bc89d5f17870847))
* check funding enabled based on enabled onramp providers instead of onrampFunding settings ([#2662](https://github.com/dynamic-labs/DynamicAuth/issues/2662)) ([d542a9b](https://github.com/dynamic-labs/DynamicAuth/commit/d542a9b2950640e473afe378c857f4d2dd1926ff))
* ensure metamask auto-redirect upon message signing ([#2757](https://github.com/dynamic-labs/DynamicAuth/issues/2757)) ([a590f4b](https://github.com/dynamic-labs/DynamicAuth/commit/a590f4b054cd1de7ad400763d769b0daf4fcaad2))
* **QNTM-123:** use `linkedWallets` after signing the first message ([#2741](https://github.com/dynamic-labs/DynamicAuth/issues/2741)) ([7f26151](https://github.com/dynamic-labs/DynamicAuth/commit/7f26151db69b50102fd4b09ec470c8f19ce7b68f))

## [0.18.0-RC.19](https://github.com/dynamic-labs/DynamicAuth/compare/v0.18.0-RC.18...v0.18.0-RC.19) (2023-07-25)


### ⚠ BREAKING CHANGES

* it updates the variable name isUserConnected to isFullyConnected
to better reflect its purpose in the codebase. user should be reserved for fully authenticated entities

### Features

* Update WalletConnect wallet registry ([#2744](https://github.com/dynamic-labs/DynamicAuth/issues/2744)) ([46285ad](https://github.com/dynamic-labs/DynamicAuth/commit/46285adc77d12cdfe43d0ce1296308f4905fbfb5))


### Bug Fixes

* missing field handling on email verification ([#2740](https://github.com/dynamic-labs/DynamicAuth/issues/2740)) ([3a42804](https://github.com/dynamic-labs/DynamicAuth/commit/3a428049a1f56a263135d636a335e597b3195b51))


* rename isUserConnected to isFullyConnected ([#2739](https://github.com/dynamic-labs/DynamicAuth/issues/2739)) ([951780b](https://github.com/dynamic-labs/DynamicAuth/commit/951780be79acdc5191ffb8a6a525a2701832a2ad))

## [0.18.0-RC.18](https://github.com/dynamic-labs/DynamicAuth/compare/v0.18.0-RC.17...v0.18.0-RC.18) (2023-07-24)

### Bug Fixes

* do not call connectSuccess when already connected ([#2705](https://github.com/dynamic-labs/DynamicAuth/issues/2705)) ([12a65fb](https://github.com/dynamic-labs/DynamicAuth/commit/12a65fb5e59a38de0f5fb0e7eab3ce3d558f201f))
* do not proceed to authSuccess if there are still missing fields ([#2712](https://github.com/dynamic-labs/DynamicAuth/issues/2712)) ([2fb10ed](https://github.com/dynamic-labs/DynamicAuth/commit/2fb10ed7f9c28476d61856887b517bdae10b80f4))
* add legacy safari detection ([#2733](https://github.com/dynamic-labs/DynamicAuth/issues/2733)) ([1b21c57](https://github.com/dynamic-labs/DynamicAuth/commit/1b21c57c1fd7c458f499cc09ef60364c314b0464))

## [0.18.0-RC.17](https://github.com/dynamic-labs/DynamicAuth/compare/v0.18.0-RC.16...v0.18.0-RC.17) (2023-07-24)


### Features

* add ongoingVerifications object disclaiming which verifications are in progress ([#2633](https://github.com/dynamic-labs/DynamicAuth/issues/2633)) ([948c778](https://github.com/dynamic-labs/DynamicAuth/commit/948c778e5955fcf80e31ac7f368e7605cd7eb7d5))
* add rabby wallet support ([#2590](https://github.com/dynamic-labs/DynamicAuth/issues/2590)) ([d70c49d](https://github.com/dynamic-labs/DynamicAuth/commit/d70c49d0b348ced3ee5691fdfc19b3eef5ba79db))
* **DYN-2399:** send dynamicContext props from sdk to api ([#2659](https://github.com/dynamic-labs/DynamicAuth/issues/2659)) ([f06787b](https://github.com/dynamic-labs/DynamicAuth/commit/f06787bf6ec1dc69c53ee6287fd3721d47901ad1))
* introduce MenuList and Dropdown components to unify previously redundant implementations ([#2675](https://github.com/dynamic-labs/DynamicAuth/issues/2675)) ([dfc63a5](https://github.com/dynamic-labs/DynamicAuth/commit/dfc63a5fef2c00cf0187e7a481dc3267d44f6cc3))
* **QNTM-101:** add loading state to button  ([#2691](https://github.com/dynamic-labs/DynamicAuth/issues/2691)) ([5a7b539](https://github.com/dynamic-labs/DynamicAuth/commit/5a7b5392c4b17cc26ecc621d11afdf37f2f10c65))
* update blocto version to v2 ([#2651](https://github.com/dynamic-labs/DynamicAuth/issues/2651)) ([441f85e](https://github.com/dynamic-labs/DynamicAuth/commit/441f85efa3921a57b9b282631016162902c8aabb))
* verify connected wallets network at runtime ([#2667](https://github.com/dynamic-labs/DynamicAuth/issues/2667)) ([8fa8dcc](https://github.com/dynamic-labs/DynamicAuth/commit/8fa8dccdfcb56d9d76d0cd00a153a95e5d52b4dc))


### Bug Fixes

* correctly round balance numbers on widget ([#2625](https://github.com/dynamic-labs/DynamicAuth/issues/2625)) ([7b45483](https://github.com/dynamic-labs/DynamicAuth/commit/7b45483e7bdb458434b7787f9df930ba9acbc8e0))
* decrease NetworkNotSupported useEffects calls to avoid race condition ([#2731](https://github.com/dynamic-labs/DynamicAuth/issues/2731)) ([6a7baf1](https://github.com/dynamic-labs/DynamicAuth/commit/6a7baf1c63e82b27d03540d670603fe11685348a))
* **GVTY-58:** do not allow users to submit empty whitespace strings in onboarding form ([#2720](https://github.com/dynamic-labs/DynamicAuth/issues/2720)) ([916f27a](https://github.com/dynamic-labs/DynamicAuth/commit/916f27a5c880281245c71af3f16217cda5317c26))
* playwright tests were failing due to new cookies popup that overlapped sdk modal ([#2709](https://github.com/dynamic-labs/DynamicAuth/issues/2709)) ([9254777](https://github.com/dynamic-labs/DynamicAuth/commit/92547773047687fcc50ad6b895b1b59176d42af7))
* **QNTM-111:** call onConnectSuccess with correct wallet connector in… ([#2724](https://github.com/dynamic-labs/DynamicAuth/issues/2724)) ([159e78c](https://github.com/dynamic-labs/DynamicAuth/commit/159e78ce458762f0e2ccbaf2acbc81efde35830a))
* **QNTM-98:** improve connectedWallets state management and connected wallets events listeners ([#2696](https://github.com/dynamic-labs/DynamicAuth/issues/2696)) ([3a91a37](https://github.com/dynamic-labs/DynamicAuth/commit/3a91a371423f50d28640141d0ca6a643a8dcf25a))
* update broken safe icon ([#2713](https://github.com/dynamic-labs/DynamicAuth/issues/2713)) ([42943b4](https://github.com/dynamic-labs/DynamicAuth/commit/42943b4684c165ec103fbed0e69e691bee4d305f))

## [0.18.0-RC.16](https://github.com/dynamic-labs/DynamicAuth/compare/v0.18.0-RC.15...v0.18.0-RC.16) (2023-07-18)


### Features

* **QNTM-30:** add spinner to log out button ([#2663](https://github.com/dynamic-labs/DynamicAuth/issues/2663)) ([fceafbb](https://github.com/dynamic-labs/DynamicAuth/commit/fceafbb6fecf323df39ac3a8f518ba8005d4b550))


### Bug Fixes

* handle edge cases for missing projectSettings for PoweredByDynamic ([#2684](https://github.com/dynamic-labs/DynamicAuth/issues/2684)) ([6f5b3d8](https://github.com/dynamic-labs/DynamicAuth/commit/6f5b3d8d1b1d4aed0dd2e73e5423f6e50347ff3d))
* typo in blocked view ([#2673](https://github.com/dynamic-labs/DynamicAuth/issues/2673)) ([034bdaf](https://github.com/dynamic-labs/DynamicAuth/commit/034bdafb44b767600ea7c0148f39dd026280e3b8))

## [0.18.0-RC.15](https://github.com/dynamic-labs/DynamicAuth/compare/v0.18.0-RC.14...v0.18.0-RC.15) (2023-07-18)


### Features

* add `updateConnectedWalletById` function, add `network` property to connectedWallets ([#2666](https://github.com/dynamic-labs/DynamicAuth/issues/2666)) ([3c50abf](https://github.com/dynamic-labs/DynamicAuth/commit/3c50abf964a2807c6e1af9fceeb1ca259785a21f))
* add magic to ethereum-all package ([#2576](https://github.com/dynamic-labs/DynamicAuth/issues/2576)) ([7676ef2](https://github.com/dynamic-labs/DynamicAuth/commit/7676ef2883b30adf2c1b521d7c1848248ceadb24))
* allow switching between multiwallet and single wallet on demo ([#2596](https://github.com/dynamic-labs/DynamicAuth/issues/2596)) ([dae87c1](https://github.com/dynamic-labs/DynamicAuth/commit/dae87c12d2f1be64c2ca1f232ffdf2da998b1c1e))
* clear values from LS that cannot be parsed ([#2542](https://github.com/dynamic-labs/DynamicAuth/issues/2542)) ([41faf5d](https://github.com/dynamic-labs/DynamicAuth/commit/41faf5dbc07937685b4d89f87ae040021c5fee00))
* **QNTM-82:** should not go back to "get started" view if one wallet already connected ([#2653](https://github.com/dynamic-labs/DynamicAuth/issues/2653)) ([004db41](https://github.com/dynamic-labs/DynamicAuth/commit/004db410eb11af9ba105058df4958f20633a3002))


### Bug Fixes

* **bridge:** update the wallets to connect when unlinking ([#2604](https://github.com/dynamic-labs/DynamicAuth/issues/2604)) ([4739306](https://github.com/dynamic-labs/DynamicAuth/commit/4739306c2d742e961281747427821af7c36b6cc2))
* network picker is broken in network switch view ([#2612](https://github.com/dynamic-labs/DynamicAuth/issues/2612)) ([c514ba4](https://github.com/dynamic-labs/DynamicAuth/commit/c514ba4f931c243bdd60329db7ed1691fc36819c))
* search not found icon in wrong color in dark mode ([#2656](https://github.com/dynamic-labs/DynamicAuth/issues/2656)) ([a4db736](https://github.com/dynamic-labs/DynamicAuth/commit/a4db736b8659567330dd857792cc12b17ce9d851))
* use dynamicauth.com for api requests ([#2649](https://github.com/dynamic-labs/DynamicAuth/issues/2649)) ([acae0af](https://github.com/dynamic-labs/DynamicAuth/commit/acae0afc2a18c41fa61b2c487ff1ceb46c5d9a1f))
* wallet should be disconnected when NetworkNotSupported view is ignored in connect-only mode ([#2658](https://github.com/dynamic-labs/DynamicAuth/issues/2658)) ([f3565cf](https://github.com/dynamic-labs/DynamicAuth/commit/f3565cf09a1ddcc671b596bbe23c68d35afc81b5))

## [0.18.0-RC.14](https://github.com/dynamic-labs/DynamicAuth/compare/v0.18.0-RC.13...v0.18.0-RC.14) (2023-07-11)


### ⚠ BREAKING CHANGES

* **QNTM-68:** we currently expose concatenated primary and secondary
wallets array as connectedWallets, this is wrong and may cause issues with
understanding our architecture as well as issues for customers that want
to have access to connectedWallets array.

* chore(QNTM-68): expose connectedWallets from DynamicContext

since, we renamed connectedWallets to linkedWallets, we now want to expose correct value
for connectedWallets.

* chore(QNTM-68)!: remove connectedWalletsInfo from useDynamicContext
* **QNTM-68:** since we're exposing connectedWallets and this variable
has less information there is no need in exposing it from DynamicContext

* **QNTM-68:** update connectedWallets property and expose linkedWallets ([#2644](https://github.com/dynamic-labs/DynamicAuth/issues/2644)) ([8b707c3](https://github.com/dynamic-labs/DynamicAuth/commit/8b707c3fb2e14aa25385b35768ffa355ef7117e5))

## [0.18.0-RC.13](https://github.com/dynamic-labs/DynamicAuth/compare/v0.18.0-RC.12...v0.18.0-RC.13) (2023-07-11)


### Features

* **DynamicContextProvider:** expose socialProviderFilter to modify social provider display order ([#2607](https://github.com/dynamic-labs/DynamicAuth/issues/2607)) ([0f03260](https://github.com/dynamic-labs/DynamicAuth/commit/0f03260e739da3e68c32a2a87a2ca629bb1f28b5))
* **GVTY-21:** Blocto Email provider ([#2524](https://github.com/dynamic-labs/DynamicAuth/issues/2524)) ([434ce59](https://github.com/dynamic-labs/DynamicAuth/commit/434ce598b3bc13841121b61e5ead7547d3c44eea))
* listen for the network change in network not supported views ([#2611](https://github.com/dynamic-labs/DynamicAuth/issues/2611)) ([957fbce](https://github.com/dynamic-labs/DynamicAuth/commit/957fbce55d7906f9d6b109838035b2c0306a4b85))


### Bug Fixes

* Clean up provider re-initializing after logout ([#2632](https://github.com/dynamic-labs/DynamicAuth/issues/2632)) ([fbc2201](https://github.com/dynamic-labs/DynamicAuth/commit/fbc22013d6784061cb4fdd72e24695c89f0e2fe5))
* **MagicWalletConnector:** check if user is logged when getting balance ([#2614](https://github.com/dynamic-labs/DynamicAuth/issues/2614)) ([ced9d66](https://github.com/dynamic-labs/DynamicAuth/commit/ced9d66cb335c3033a18642bdd841ee6be6c1e05))
* **useValidateSessin:** only check for bridge on wallet connect wallets ([#2571](https://github.com/dynamic-labs/DynamicAuth/issues/2571)) ([349b659](https://github.com/dynamic-labs/DynamicAuth/commit/349b65963f1d5392f63aaa138f6498f0d17cd43f))

## [0.18.0-RC.12](https://github.com/dynamic-labs/DynamicAuth/compare/v0.18.0-RC.11...v0.18.0-RC.12) (2023-07-07)


### Features

* add event listeners to connect-only ([#2578](https://github.com/dynamic-labs/DynamicAuth/issues/2578)) ([42fcf09](https://github.com/dynamic-labs/DynamicAuth/commit/42fcf096ac439ec883a79bf5811b27cdc360015a))
* add message when search finds no wallet ([#2421](https://github.com/dynamic-labs/DynamicAuth/issues/2421)) ([694ecee](https://github.com/dynamic-labs/DynamicAuth/commit/694ecee94d9f6f636364eae4aa95ea48e3ff0e0a))
* allow adding either ToS or PP and enable customization for both ([#2451](https://github.com/dynamic-labs/DynamicAuth/issues/2451)) ([0dce0fe](https://github.com/dynamic-labs/DynamicAuth/commit/0dce0fe534056298cbfdd9caa694231ede00c3fc))


### Bug Fixes

* **BridgeSummaryView:** handle primary wallet when it is not defined ([#2602](https://github.com/dynamic-labs/DynamicAuth/issues/2602)) ([8a5daa4](https://github.com/dynamic-labs/DynamicAuth/commit/8a5daa4b2ad218460ccfaab0fa68c75d0d5d569f))
* secondary wallets network change overrides primary wallet network ([#2603](https://github.com/dynamic-labs/DynamicAuth/issues/2603)) ([358fc45](https://github.com/dynamic-labs/DynamicAuth/commit/358fc45ecb73f31294744f7ba4dbba5779a3e1cf))

## [0.18.0-RC.11](https://github.com/dynamic-labs/DynamicAuth/compare/v0.18.0-RC.10...v0.18.0-RC.11) (2023-07-07)


### Features

* **DYN-2384:** expose useDynamicScopes hook ([#2179](https://github.com/dynamic-labs/DynamicAuth/issues/2179)) ([c224749](https://github.com/dynamic-labs/DynamicAuth/commit/c2247493d9c99dab7e41d7d8d156ae7e478973bc))
* **DynamicBridgeWidget:** add UI inline widget to match designs ([#2587](https://github.com/dynamic-labs/DynamicAuth/issues/2587)) ([d623aec](https://github.com/dynamic-labs/DynamicAuth/commit/d623aecda6388b67e40a3f8dabb03ca03a6f22b6))
* support starknet networks ([#2579](https://github.com/dynamic-labs/DynamicAuth/issues/2579)) ([a01545e](https://github.com/dynamic-labs/DynamicAuth/commit/a01545e0cf8e4e19a22dc64877d590d78647c579))


### Bug Fixes

* metamask getConnectedAccounts triggering an infinite loop ([#2580](https://github.com/dynamic-labs/DynamicAuth/issues/2580)) ([e025cea](https://github.com/dynamic-labs/DynamicAuth/commit/e025cea33e4a95ea2a03ac11e47a88a73db39848))

## [0.18.0-RC.10](https://github.com/dynamic-labs/DynamicAuth/compare/v0.18.0-RC.9...v0.18.0-RC.10) (2023-07-06)


### Features

* Update handleUnlink to support connected only wallets ([#2573](https://github.com/dynamic-labs/DynamicAuth/issues/2573)) ([07438c9](https://github.com/dynamic-labs/DynamicAuth/commit/07438c9580b830aa68fcc6a06ea4050a3743a501))


### Bug Fixes

* restore connectedWallet clearing function ([#2575](https://github.com/dynamic-labs/DynamicAuth/issues/2575)) ([8d3c41a](https://github.com/dynamic-labs/DynamicAuth/commit/8d3c41a6871037b1003270e724259f23c5f6f370))

## [0.18.0-RC.9](https://github.com/dynamic-labs/DynamicAuth/compare/v0.18.0-RC.8...v0.18.0-RC.9) (2023-07-04)


### Features

* add Network Not Supported prompt to connect-only & show prompt before sign in connect-sign mode ([#2474](https://github.com/dynamic-labs/DynamicAuth/issues/2474)) ([8d5bfa9](https://github.com/dynamic-labs/DynamicAuth/commit/8d5bfa97ca4da50e06ce258a38a63e7407a795f6))
* **DYN-2602:** add ability to unlink connected wallet ([#2494](https://github.com/dynamic-labs/DynamicAuth/issues/2494)) ([389861b](https://github.com/dynamic-labs/DynamicAuth/commit/389861bc0281baec379b1593e529cef3467f3326))
* **DYN-2604:** add chainId property to walletsByChain object ([#2405](https://github.com/dynamic-labs/DynamicAuth/issues/2405)) ([d9b42f7](https://github.com/dynamic-labs/DynamicAuth/commit/d9b42f7b1d53dac1ed0228ecb5e56a44c6abd8d2))
* **DynamicAuthLayout:** show connected wallet progress ([#2567](https://github.com/dynamic-labs/DynamicAuth/issues/2567)) ([a20ff6f](https://github.com/dynamic-labs/DynamicAuth/commit/a20ff6f32b360ccc699d2a271c7a96751ae87d29))
* **DynamicBridgeFlow:** add bridge flow ([#2543](https://github.com/dynamic-labs/DynamicAuth/issues/2543)) ([79c4c87](https://github.com/dynamic-labs/DynamicAuth/commit/79c4c870d47a0c853c292a8d913bd9be9e209a15))


### Bug Fixes

* don't force required chain to eth in case is not enabled ([#2537](https://github.com/dynamic-labs/DynamicAuth/issues/2537)) ([b01d6c9](https://github.com/dynamic-labs/DynamicAuth/commit/b01d6c9e91e9971e82739c5a2c900de4768f977c))
* log out if there's any session sync issue ([#2545](https://github.com/dynamic-labs/DynamicAuth/issues/2545)) ([29972fa](https://github.com/dynamic-labs/DynamicAuth/commit/29972fad1067f5550a61f6e2cd9adcaf811fd268))
* persist chain to WalletConnect session when changed in wallet ([#2556](https://github.com/dynamic-labs/DynamicAuth/issues/2556)) ([fc9ec35](https://github.com/dynamic-labs/DynamicAuth/commit/fc9ec3501de1e3235adee4df95b296dc22cce23e))
* WC2 sign-message on non-selected chain ([#2544](https://github.com/dynamic-labs/DynamicAuth/issues/2544)) ([48a4384](https://github.com/dynamic-labs/DynamicAuth/commit/48a4384f77c29775e0c28ed335956cfbd6f89ca3))
* **wcv2:** add eth_signTypedData_v4 to optional methods ([#2527](https://github.com/dynamic-labs/DynamicAuth/issues/2527)) ([b99474b](https://github.com/dynamic-labs/DynamicAuth/commit/b99474b81b083134762be0fe9554a6f049b3edda))
* **wcv2:** allow getWeb3Provider to wait to provider init ([#2523](https://github.com/dynamic-labs/DynamicAuth/issues/2523)) ([d9c7fee](https://github.com/dynamic-labs/DynamicAuth/commit/d9c7fee10d2a6c766043515e19829fd7e3d5b2ef))

## [0.18.0-RC.8](https://github.com/dynamic-labs/DynamicAuth/compare/v0.18.0-RC.7...v0.18.0-RC.8) (2023-06-29)


### Features

* add support for custom walletconnect v1 bridge ([#2487](https://github.com/dynamic-labs/DynamicAuth/issues/2487)) ([5b0ca2e](https://github.com/dynamic-labs/DynamicAuth/commit/5b0ca2e4e8aa241ed13e4f38346c31da8479a6c4))
* **DYN-2623:** improve error message on sign cancellation for wallets ([#2493](https://github.com/dynamic-labs/DynamicAuth/issues/2493)) ([081c515](https://github.com/dynamic-labs/DynamicAuth/commit/081c515c9d28d6fa4c0eaac388ee421a7b23144b))


### Bug Fixes

* clearing the activeAccount value ([#2469](https://github.com/dynamic-labs/DynamicAuth/issues/2469)) ([ff75bde](https://github.com/dynamic-labs/DynamicAuth/commit/ff75bde938a4178541568b79754f773607b9d87f))
* don't initialize provider if it's already initialized ([#2490](https://github.com/dynamic-labs/DynamicAuth/issues/2490)) ([878d38f](https://github.com/dynamic-labs/DynamicAuth/commit/878d38f5c8d7d7448c65e58b25cefd9f3518217e))
* more wcv2 improvements ([#2475](https://github.com/dynamic-labs/DynamicAuth/issues/2475)) ([13baa84](https://github.com/dynamic-labs/DynamicAuth/commit/13baa84218d6259d02df7d8c387b40dc3cb11ce5)), closes [#2469](https://github.com/dynamic-labs/DynamicAuth/issues/2469) [#2470](https://github.com/dynamic-labs/DynamicAuth/issues/2470) [#2471](https://github.com/dynamic-labs/DynamicAuth/issues/2471) [#2477](https://github.com/dynamic-labs/DynamicAuth/issues/2477) [#2479](https://github.com/dynamic-labs/DynamicAuth/issues/2479) [#2471](https://github.com/dynamic-labs/DynamicAuth/issues/2471) [#2476](https://github.com/dynamic-labs/DynamicAuth/issues/2476)
* multiple improvements for WC2 ([#2458](https://github.com/dynamic-labs/DynamicAuth/issues/2458)) ([0813af2](https://github.com/dynamic-labs/DynamicAuth/commit/0813af2aafa8019868117084efe8ae147ac24581))
* revert changes since latest wcv2 improvements ([#2473](https://github.com/dynamic-labs/DynamicAuth/issues/2473)) ([3375371](https://github.com/dynamic-labs/DynamicAuth/commit/337537101a13d67b860748b62f172eba01d0b461)), closes [#2471](https://github.com/dynamic-labs/DynamicAuth/issues/2471) [#2470](https://github.com/dynamic-labs/DynamicAuth/issues/2470) [#2469](https://github.com/dynamic-labs/DynamicAuth/issues/2469)
* sync issue within connect-only mode  ([#2496](https://github.com/dynamic-labs/DynamicAuth/issues/2496)) ([44af274](https://github.com/dynamic-labs/DynamicAuth/commit/44af274618c30fe65ec95739cd16a8ddde08e34e))
* typo in terms of service ([#2401](https://github.com/dynamic-labs/DynamicAuth/issues/2401)) ([5b195e5](https://github.com/dynamic-labs/DynamicAuth/commit/5b195e54479d9a88bd017fc45f2f2455d1caedc4))
* **wc_v1_bridget:** disable WC v2 when WC v1 bridge is set ([#2505](https://github.com/dynamic-labs/DynamicAuth/issues/2505)) ([b3f0a68](https://github.com/dynamic-labs/DynamicAuth/commit/b3f0a6895095bb37c635984fc970b52446e04f56))
* wc2 android improvements ([#2488](https://github.com/dynamic-labs/DynamicAuth/issues/2488)) ([f60ef9c](https://github.com/dynamic-labs/DynamicAuth/commit/f60ef9c1dd672f78199eee40edbe2707c043e1b5))
* **wcv2:** make sure to clear active account when ending session ([#2471](https://github.com/dynamic-labs/DynamicAuth/issues/2471)) ([b766df3](https://github.com/dynamic-labs/DynamicAuth/commit/b766df39a7e4dabc54fda9131b7bd9b53895cf2f))
* **wcv2:** use native or universal link when signing message ([#2502](https://github.com/dynamic-labs/DynamicAuth/issues/2502)) ([6e3e3fb](https://github.com/dynamic-labs/DynamicAuth/commit/6e3e3fbb58fb9e3eb314e6631ac2123237f41e8c))

## [0.18.0-RC.7](https://github.com/dynamic-labs/DynamicAuth/compare/v0.18.0-RC.6...v0.18.0-RC.7) (2023-06-23)


### Features

* add bridge connect button ([#2399](https://github.com/dynamic-labs/DynamicAuth/issues/2399)) ([6987eea](https://github.com/dynamic-labs/DynamicAuth/commit/6987eeae8f49a5d077de6c4343b83ecbb1fc8b89))
* add useTimeout, useInterval and useIsomorphicLayoutEffect hooks ([#2418](https://github.com/dynamic-labs/DynamicAuth/issues/2418)) ([3ed8595](https://github.com/dynamic-labs/DynamicAuth/commit/3ed859526a6ec982b61a4335a9a63512d0e631e3))
* **DYN-2411:** WalletLockedView when user has valid jwt and all of their wallets are disconnected ([#2273](https://github.com/dynamic-labs/DynamicAuth/issues/2273)) ([2e6d0d6](https://github.com/dynamic-labs/DynamicAuth/commit/2e6d0d6ed734eb628bd05b6ad64560c496ad915f))
* **DYN-2598:** add powered by, update copy and paddings in the select wallet chain layout ([#2391](https://github.com/dynamic-labs/DynamicAuth/issues/2391)) ([f2a7924](https://github.com/dynamic-labs/DynamicAuth/commit/f2a79241dcf1ea5720242c2cc65a6fcd077ea0e9))
* **solana:** add logic to get network based on genesis hash ([#2402](https://github.com/dynamic-labs/DynamicAuth/issues/2402)) ([b76c626](https://github.com/dynamic-labs/DynamicAuth/commit/b76c62660bae334aef84678db5d8349a3d575630))


### Bug Fixes

* better handling of the CB wallet provider ([#2376](https://github.com/dynamic-labs/DynamicAuth/issues/2376)) ([720e510](https://github.com/dynamic-labs/DynamicAuth/commit/720e510d0793c530d06db5eaa1d5a7be608703bb))
* clear AUTH_USER when there is no AUTH_TOKEN on LS ([#2423](https://github.com/dynamic-labs/DynamicAuth/issues/2423)) ([bf1e1c0](https://github.com/dynamic-labs/DynamicAuth/commit/bf1e1c0f8a7a7a852c67ef363613deecacdad92e))
* set auth mode to connect-and-sign when verifiying wallet ([#2369](https://github.com/dynamic-labs/DynamicAuth/issues/2369)) ([666aa69](https://github.com/dynamic-labs/DynamicAuth/commit/666aa6954d19551a354af933a69ab8eeee7a98b5))
* use getAuthTokenValue in initExpirationTime ([#2422](https://github.com/dynamic-labs/DynamicAuth/issues/2422)) ([fa8ff78](https://github.com/dynamic-labs/DynamicAuth/commit/fa8ff78d64421ca4447794fe9af53c175adf94c3))

## [0.18.0-RC.6](https://github.com/dynamic-labs/DynamicAuth/compare/v0.18.0-RC.5...v0.18.0-RC.6) (2023-06-20)


### Features

* add export keys option for magic wallets ([#2377](https://github.com/dynamic-labs/DynamicAuth/issues/2377)) ([6b40f53](https://github.com/dynamic-labs/DynamicAuth/commit/6b40f538f207691b54fe2f245ed6018c467b83fe))


### Bug Fixes

* add polyfill for css layers ([#2386](https://github.com/dynamic-labs/DynamicAuth/issues/2386)) ([3d489f5](https://github.com/dynamic-labs/DynamicAuth/commit/3d489f59d676864134a94d031697e0f83fc0d742))

## [0.18.0-RC.5](https://github.com/dynamic-labs/DynamicAuth/compare/v0.18.0-RC.4...v0.18.0-RC.5) (2023-06-20)


### Bug Fixes

* remove process variable declaration ([#2389](https://github.com/dynamic-labs/DynamicAuth/issues/2389)) ([3c05121](https://github.com/dynamic-labs/DynamicAuth/commit/3c05121473850444f2c8393fa6e98e10d58870bc))
* wallet book singleton class to initalize when walletBook is undefined ([#2392](https://github.com/dynamic-labs/DynamicAuth/issues/2392)) ([7e07137](https://github.com/dynamic-labs/DynamicAuth/commit/7e0713712321439ee48e0c9ec88fef8c9aecd9cf))

## [0.18.0-RC.4](https://github.com/dynamic-labs/DynamicAuth/compare/v0.18.0-RC.3...v0.18.0-RC.4) (2023-06-20)


### ⚠ BREAKING CHANGES

* **DYN-1260:** integrate wallets group view with group logic (#2305)

### Features

* **DYN-1260:** integrate wallets group view with group logic ([#2305](https://github.com/dynamic-labs/DynamicAuth/issues/2305)) ([d5adb41](https://github.com/dynamic-labs/DynamicAuth/commit/d5adb411f263d1583abe5102e60d02573c6bf416))


### Bug Fixes

* **DYN-2507:** too long network name shrinks users avatar ([#2383](https://github.com/dynamic-labs/DynamicAuth/issues/2383)) ([8586c3b](https://github.com/dynamic-labs/DynamicAuth/commit/8586c3be5a499118b7229eb7a3702d3350642107))
* hide wallet menu items that are not needed ([#2375](https://github.com/dynamic-labs/DynamicAuth/issues/2375)) ([35a6723](https://github.com/dynamic-labs/DynamicAuth/commit/35a67234da47f1a992a94c17e445b1fcba1c700f))
* use overflow auto to avoid showing the disabled scrollbar on gecko browser ([#2382](https://github.com/dynamic-labs/DynamicAuth/issues/2382)) ([16a7db4](https://github.com/dynamic-labs/DynamicAuth/commit/16a7db49e5b154bc6a4ea263c8a8c8a92cf1d810))
* use primary color for wallet group item copy ([#2384](https://github.com/dynamic-labs/DynamicAuth/issues/2384)) ([3fe439e](https://github.com/dynamic-labs/DynamicAuth/commit/3fe439ea2a271bc4b24b145db3f70774e221723e))

## [0.18.0-RC.3](https://github.com/dynamic-labs/DynamicAuth/compare/v0.18.0-RC.2...v0.18.0-RC.3) (2023-06-16)


### Features

* add skeleton to walletlistfooter ([#2361](https://github.com/dynamic-labs/DynamicAuth/issues/2361)) ([676be6c](https://github.com/dynamic-labs/DynamicAuth/commit/676be6c108dff8df7175f0587cf0568658276e4e))


### Bug Fixes

* **local-storage:** load auth token when stringified ([#2368](https://github.com/dynamic-labs/DynamicAuth/issues/2368)) ([3a54266](https://github.com/dynamic-labs/DynamicAuth/commit/3a54266fde3cd1f7362ccc490f89b8925132271b))

## [0.18.0-RC.2](https://github.com/dynamic-labs/DynamicAuth/compare/v0.18.0-RC.1...v0.18.0-RC.2) (2023-06-16)


### Features

* add Dynamic Bridge widget ([#2316](https://github.com/dynamic-labs/DynamicAuth/issues/2316)) ([0e71a88](https://github.com/dynamic-labs/DynamicAuth/commit/0e71a88c6dd740583448ed7b45fa335aaa736079))
* add search bar to bridge wallets view ([#2357](https://github.com/dynamic-labs/DynamicAuth/issues/2357)) ([a8415fc](https://github.com/dynamic-labs/DynamicAuth/commit/a8415fc744216660a78c1443962711699e45429a))
* bridge flow improvements ([#2367](https://github.com/dynamic-labs/DynamicAuth/issues/2367)) ([38a44be](https://github.com/dynamic-labs/DynamicAuth/commit/38a44be417fd1363b0d8e45ec1834f9aaf680427))
* **Bridge:** add bridge navigation component ([#2340](https://github.com/dynamic-labs/DynamicAuth/issues/2340)) ([1e9adae](https://github.com/dynamic-labs/DynamicAuth/commit/1e9adaed3682bc9a7aab385221818946cad397f2))
* **Bridge:** integrate dynamic bridge ui ([#2354](https://github.com/dynamic-labs/DynamicAuth/issues/2354)) ([1465bf8](https://github.com/dynamic-labs/DynamicAuth/commit/1465bf8717cbc9905285c2d867bc3e1d0cd1114b))
* **DYN-2519:** create state for multiple connected wallets ([#2326](https://github.com/dynamic-labs/DynamicAuth/issues/2326)) ([fc05aa4](https://github.com/dynamic-labs/DynamicAuth/commit/fc05aa4d91b0af8950c5da84c69130557ba36b09)), closes [#2319](https://github.com/dynamic-labs/DynamicAuth/issues/2319)
* **MultiWalletStepSelectorModal:** add modal to connect multiple wallets ([#2348](https://github.com/dynamic-labs/DynamicAuth/issues/2348)) ([39ce0b2](https://github.com/dynamic-labs/DynamicAuth/commit/39ce0b26fdf6494a4e1ba7867e80bf399d11631f))
* use wallet-book from CDN ([#2352](https://github.com/dynamic-labs/DynamicAuth/issues/2352)) ([9d1498f](https://github.com/dynamic-labs/DynamicAuth/commit/9d1498f2aec4bb9f3e3d6b386d9cafea3a33bd58))


### Bug Fixes

* handle email only without primary wallet state ([#2342](https://github.com/dynamic-labs/DynamicAuth/issues/2342)) ([98583bb](https://github.com/dynamic-labs/DynamicAuth/commit/98583bb8820ac80967bf1059cbaf47d04bfd603a))
* s3 cp for walletbook json ([8127b79](https://github.com/dynamic-labs/DynamicAuth/commit/8127b790333b36f40a2cc230a576c01aaad42196))
* setting initial view when error in auth flow ([#2345](https://github.com/dynamic-labs/DynamicAuth/issues/2345)) ([85dcefb](https://github.com/dynamic-labs/DynamicAuth/commit/85dcefb54be498b540904b381b53f9ea7e0cd024))
* typo in github action ([d746bc0](https://github.com/dynamic-labs/DynamicAuth/commit/d746bc01981a3263e3ab4f654debf77b408cda3a))
* **widget:** add fallback icon when oauth provider does not exist ([#2349](https://github.com/dynamic-labs/DynamicAuth/issues/2349)) ([bd2a505](https://github.com/dynamic-labs/DynamicAuth/commit/bd2a505724affd6f5356c0c4f31586ffd188e539))

## [0.18.0-RC.1](https://github.com/dynamic-labs/DynamicAuth/compare/v0.18.0-RC.0...v0.18.0-RC.1) (2023-06-14)


### Bug Fixes

* await setEmailInput in handleSubmit for LoginWithemailForm ([#2336](https://github.com/dynamic-labs/DynamicAuth/issues/2336)) ([05b1fe0](https://github.com/dynamic-labs/DynamicAuth/commit/05b1fe09abaa1563fb187cf410b1e0e991f29c60))
* don't remove project settings from ls if there's a connected wallet ([#2329](https://github.com/dynamic-labs/DynamicAuth/issues/2329)) ([bc2f627](https://github.com/dynamic-labs/DynamicAuth/commit/bc2f627a80d0a8e6a4637dc60c699ffd07362a19))

## [0.18.0-RC.0](https://github.com/dynamic-labs/DynamicAuth/compare/v0.17.0...v0.18.0-RC.0) (2023-06-14)


### Features

* **DYN-1260:** support for building groups in wallet list builder ([#2272](https://github.com/dynamic-labs/DynamicAuth/issues/2272)) ([a120f98](https://github.com/dynamic-labs/DynamicAuth/commit/a120f9848def97ae70565e06c9058a2a992ad4bb))


### Bug Fixes

* **social:** display social icons is current order ([#2320](https://github.com/dynamic-labs/DynamicAuth/issues/2320)) ([ca8099f](https://github.com/dynamic-labs/DynamicAuth/commit/ca8099f23e17313f23b0aaa1ba02f1903565da37))

## [0.17.0](https://github.com/dynamic-labs/DynamicAuth/compare/v0.17.0-RC.33...v0.17.0) (2023-06-13)

Dynamic is excited to announce our most amazing SDK update yet (at least since 0.16.0 :-))!
We have some great things in this version, here are the highlights:

### Breaking Changes
- In favor of supporting MagicLink Wallets we removed the support for Fortmatic.

### Deprecations
- `chainName` on EvmNetwork is deprecated in favor of `name`. If you're passing `evmNetworks` to `DynamicContextProvider` or `DynamicWagmiConnector`, you should update your code like so:
```ts
<DynamicContextProvider
  settings={{
    environmentId: 'YOUR_ENV_ID',
    evmNetworks: [
      {
        blockExplorerUrls: [],
        chainId: 1,
        iconUrls: [],
     -  chainName: 'Ethereum',
     +  name: 'Ethereum',
        nativeCurrency: {
          decimals: 18,
          name: 'Ether',
          symbol: 'ETH',
        },
        networkId: 1,
        rpcUrls: [],
      },
    ],
  }}
>
  <HomePage />
</DynamicContextProvider>
```
- the `multiWallet` prop on DynamicContextProvider is deprecated in favor of the Dashboard settings. See [here](https://docs.dynamic.xyz/docs/multi-wallet#setup) for more info

### Highlighted Features
- Package splitting. You asked for it, and here it is!
  If you want to reduce your package size to include only the chains and the wallets that your app needs, you now have the option to customize your build  [See instructions](https://docs.dynamic.xyz/docs/reduce-bundle-size-with-modular-sdk)

- Two cool features for Magic Wallets:
   - Support for [social login](https://docs.dynamic.xyz/docs/magic#enable-social-sign-in)
   - Modal for supporting [send balance](https://docs.dynamic.xyz/docs/send-balance-ui).


- Generic types on various connector methods. For example, if you know you are working with an EVM network, you can typecast with `walletConnector.getNetwork<number>()` to work nicely in typescript.

- [onRamp with Banxa](https://docs.dynamic.xyz/docs/onramps) (please reach out to us to enable the feature)

- Ability to support multiple RPCs with fallbacks when providing the URL to network prop.

- Added suffix to the local storage key, in case you are testing multiple local environments locally at the same time.

- We have a new global loading state that you can now easily use to tell when the SDK completed loading (`sdkHasLoaded`)

And many other minor improvements and bug fixes.

Enjoy!

### Features

* Add suffix to local storage ([#2227](https://github.com/dynamic-labs/DynamicAuth/issues/2227)) ([b901b9b](https://github.com/dynamic-labs/DynamicAuth/commit/b901b9b43a3eaa80706b9ec0679f668a7b8b2507))
* dyn 2486 Add support for superb ([#2271](https://github.com/dynamic-labs/DynamicAuth/issues/2271)) ([8ea51e9](https://github.com/dynamic-labs/DynamicAuth/commit/8ea51e93c5d74d02efd47877042d7af05ca55f5c))
* pass icon theme variant to usages of SocialIcon ([#2303](https://github.com/dynamic-labs/DynamicAuth/issues/2303)) ([da59d6f](https://github.com/dynamic-labs/DynamicAuth/commit/da59d6f22e7ec49cb8cff757baada3cb1e737b99))


### Bug Fixes

*  brief red error message as the KYC screen loads ([#2240](https://github.com/dynamic-labs/DynamicAuth/issues/2240)) ([1155e8b](https://github.com/dynamic-labs/DynamicAuth/commit/1155e8bd66ffdc96ae3f9d88f027793217c120a8))
* account controls hover does not fill the container ([#2300](https://github.com/dynamic-labs/DynamicAuth/issues/2300)) ([fdc984e](https://github.com/dynamic-labs/DynamicAuth/commit/fdc984e2d0b11d9d38dcd9e877c228fbc41c5855))
* refresh session in walletconnectv2 ([#2294](https://github.com/dynamic-labs/DynamicAuth/issues/2294)) ([d54263e](https://github.com/dynamic-labs/DynamicAuth/commit/d54263ea04c58f842b60b0c13f964fde25be786b))

## [0.17.0-RC.33](https://github.com/dynamic-labs/DynamicAuth/compare/v0.17.0-RC.32...v0.17.0-RC.33) (2023-06-09)


### Bug Fixes

* display chain name in smaller format ([#2292](https://github.com/dynamic-labs/DynamicAuth/issues/2292)) ([95ff444](https://github.com/dynamic-labs/DynamicAuth/commit/95ff44412fcc192ecc2e9a2c1a5f090708c2da9c))

## [0.17.0-RC.32](https://github.com/dynamic-labs/DynamicAuth/compare/v0.17.0-RC.31...v0.17.0-RC.32) (2023-06-09)


### Bug Fixes

* missing walletlist when filter finds no wallets ([#2289](https://github.com/dynamic-labs/DynamicAuth/issues/2289)) ([a7708d3](https://github.com/dynamic-labs/DynamicAuth/commit/a7708d3eab9609daa4c860555f5804f280958da5))

## [0.17.0-RC.31](https://github.com/dynamic-labs/DynamicAuth/compare/v0.17.0-RC.30...v0.17.0-RC.31) (2023-06-09)


### Features

* add fake dapper mobile metadata so that it appears on mobile ([#2288](https://github.com/dynamic-labs/DynamicAuth/issues/2288)) ([ea98462](https://github.com/dynamic-labs/DynamicAuth/commit/ea98462e762d3fa032e2e40f17d2e3679146b3ae))
* pass variant to social icon getter ([#2277](https://github.com/dynamic-labs/DynamicAuth/issues/2277)) ([b1492ed](https://github.com/dynamic-labs/DynamicAuth/commit/b1492eda50eb80fbfee1aa968771f338694ef7e6))


### Bug Fixes

* don't remove network config from ls if there's a connected wallet ([#2280](https://github.com/dynamic-labs/DynamicAuth/issues/2280)) ([0703dfc](https://github.com/dynamic-labs/DynamicAuth/commit/0703dfc099f86a0802e83a27849b6953e1ddca31))
* **use-wallets-connection-state:** load connected state when wallets are present ([#2285](https://github.com/dynamic-labs/DynamicAuth/issues/2285)) ([7fb72dc](https://github.com/dynamic-labs/DynamicAuth/commit/7fb72dc8fe1404cd76e68bb3f0de9efa78634525))

## [0.17.0-RC.30](https://github.com/dynamic-labs/DynamicAuth/compare/v0.17.0-RC.29...v0.17.0-RC.30) (2023-06-08)


### Bug Fixes

* **view-context:** refactor view context to have initial view ([#2268](https://github.com/dynamic-labs/DynamicAuth/issues/2268)) ([0afe6ae](https://github.com/dynamic-labs/DynamicAuth/commit/0afe6ae469f62fd16fd8471322f9295957f607f6))
* **wcv2:** upgrade universal provider and refactor wcv2 ([#2163](https://github.com/dynamic-labs/DynamicAuth/issues/2163)) ([e69c67c](https://github.com/dynamic-labs/DynamicAuth/commit/e69c67c95dca0f694c4a554702be96c3f7d3d77e))

## [0.17.0-RC.29](https://github.com/dynamic-labs/DynamicAuth/compare/v0.17.0-RC.28...v0.17.0-RC.29) (2023-06-07)


### Bug Fixes

* de-duplicate authSuccess call ([#2269](https://github.com/dynamic-labs/DynamicAuth/issues/2269)) ([00268d0](https://github.com/dynamic-labs/DynamicAuth/commit/00268d001355946c98d285d71d7f7acc96d4c9f7))
* hide search when filtered wallets equal to number of shown wallets ([#2221](https://github.com/dynamic-labs/DynamicAuth/issues/2221)) ([fb0f629](https://github.com/dynamic-labs/DynamicAuth/commit/fb0f629ae76240fe681db91b485139934026054e))

## [0.17.0-RC.28](https://github.com/dynamic-labs/DynamicAuth/compare/v0.17.0-RC.27...v0.17.0-RC.28) (2023-06-06)


### Features

* lower username minimum length requirement ([#2265](https://github.com/dynamic-labs/DynamicAuth/issues/2265)) ([ed891ca](https://github.com/dynamic-labs/DynamicAuth/commit/ed891cac8cceaf9e0556b679eda7a3575725805d))


### Bug Fixes

* **send_balance:** add amount validation to form ([#2261](https://github.com/dynamic-labs/DynamicAuth/issues/2261)) ([9a57cfe](https://github.com/dynamic-labs/DynamicAuth/commit/9a57cfe0dd7f97aa16351b091ab385b2b5c7c5e4))
* shrink dynamic widget in smaller containers ([#2260](https://github.com/dynamic-labs/DynamicAuth/issues/2260)) ([353f447](https://github.com/dynamic-labs/DynamicAuth/commit/353f44724db83e9f1500c606fdea7d50a8067711))

## [0.17.0-RC.27](https://github.com/dynamic-labs/DynamicAuth/compare/v0.17.0-RC.26...v0.17.0-RC.27) (2023-06-06)


### Features

* sync wagmi to first connected eth wallet ([#2253](https://github.com/dynamic-labs/DynamicAuth/issues/2253)) ([c00aed7](https://github.com/dynamic-labs/DynamicAuth/commit/c00aed73a1014c668311c8cb59e5a466b5ee6779))


### Bug Fixes

* include username in userFieldsSchema ([#2257](https://github.com/dynamic-labs/DynamicAuth/issues/2257)) ([6e5431d](https://github.com/dynamic-labs/DynamicAuth/commit/6e5431d08323d718b11accf3790ef56fc7325b5c))

## [0.17.0-RC.26](https://github.com/dynamic-labs/DynamicAuth/compare/v0.17.0-RC.25...v0.17.0-RC.26) (2023-06-05)


### Features

* disable button on social unlink ([#2234](https://github.com/dynamic-labs/DynamicAuth/issues/2234)) ([7f148de](https://github.com/dynamic-labs/DynamicAuth/commit/7f148de76b0fca632e1b4d6ff71c18eb0207c02b))
* update magic + email icon in auth flow views ([#2224](https://github.com/dynamic-labs/DynamicAuth/issues/2224)) ([93f1ed6](https://github.com/dynamic-labs/DynamicAuth/commit/93f1ed644428701c2747565033d0ad113fa8eeb2))


### Bug Fixes

* **wallets:** keep  magic social wallet connector on mobile ([#2242](https://github.com/dynamic-labs/DynamicAuth/issues/2242)) ([35c092d](https://github.com/dynamic-labs/DynamicAuth/commit/35c092da3b8a76c74ae25558489d663ce963d72f))
* wrong logger instance in UserProfileSocialAccount ([#2248](https://github.com/dynamic-labs/DynamicAuth/issues/2248)) ([814108d](https://github.com/dynamic-labs/DynamicAuth/commit/814108d416d9d730bed8976956bc7974c7fde2a8))

## [0.17.0-RC.25](https://github.com/dynamic-labs/DynamicAuth/compare/v0.17.0-RC.24...v0.17.0-RC.25) (2023-06-05)


### Bug Fixes

* **EmailOTPMagicWalletConnector:** allow user to reconnect with email wallet ([#2230](https://github.com/dynamic-labs/DynamicAuth/issues/2230)) ([6059886](https://github.com/dynamic-labs/DynamicAuth/commit/605988650a783ae824bb8c45edc5533fecf8726a))
* only set wagmi connector if connected chain is evm ([#2237](https://github.com/dynamic-labs/DynamicAuth/issues/2237)) ([a7be7d3](https://github.com/dynamic-labs/DynamicAuth/commit/a7be7d302d1e74088b0aa2b6848c879079e6f963))
* Revert "fix(ViewContext): only set view when on wallet list" ([#2235](https://github.com/dynamic-labs/DynamicAuth/issues/2235)) ([e790315](https://github.com/dynamic-labs/DynamicAuth/commit/e79031577f640161cc5f0b9b2e695e22d9a98901)), closes [#2226](https://github.com/dynamic-labs/DynamicAuth/issues/2226)
* set view to social-redirect-view while waiting to process magic redirect ([#2229](https://github.com/dynamic-labs/DynamicAuth/issues/2229)) ([f50a29c](https://github.com/dynamic-labs/DynamicAuth/commit/f50a29c0b9623c703f1577c7a41fcc5aee58abb8))
* user profile does not extend on mobile ([#2236](https://github.com/dynamic-labs/DynamicAuth/issues/2236)) ([5bb7912](https://github.com/dynamic-labs/DynamicAuth/commit/5bb7912a865338fdf6eca1a19ff4b74a3fb18eeb))
* **ViewContext:** only set view when on wallet list ([#2226](https://github.com/dynamic-labs/DynamicAuth/issues/2226)) ([85e8fc1](https://github.com/dynamic-labs/DynamicAuth/commit/85e8fc140069cabff41f4067ac93ea0c5cfaa161))

## [0.17.0-RC.24](https://github.com/dynamic-labs/DynamicAuth/compare/v0.17.0-RC.23...v0.17.0-RC.24) (2023-06-02)

## [0.17.0-RC.23](https://github.com/dynamic-labs/DynamicAuth/compare/v0.17.0-RC.22...v0.17.0-RC.23) (2023-06-02)


### Bug Fixes

* flow connection status improvements ([#2212](https://github.com/dynamic-labs/DynamicAuth/issues/2212)) ([5225e9f](https://github.com/dynamic-labs/DynamicAuth/commit/5225e9f3f19705cdde3c1d860ddf4e69689a839b))
* **useSyncPrimaryWallet:** disables the hook while connect state is loaded ([#2193](https://github.com/dynamic-labs/DynamicAuth/issues/2193)) ([d2a69c8](https://github.com/dynamic-labs/DynamicAuth/commit/d2a69c8edfbb2a19305b0fd322e24d909bbf9b4f)), closes [#2155](https://github.com/dynamic-labs/DynamicAuth/issues/2155)

## [0.17.0-RC.22](https://github.com/dynamic-labs/DynamicAuth/compare/v0.17.0-RC.21...v0.17.0-RC.22) (2023-06-02)


### Features

* social copy update ([#2215](https://github.com/dynamic-labs/DynamicAuth/issues/2215)) ([1fe7316](https://github.com/dynamic-labs/DynamicAuth/commit/1fe7316a94284db7227d5ab09026354269559752))

## [0.17.0-RC.21](https://github.com/dynamic-labs/DynamicAuth/compare/v0.17.0-RC.20...v0.17.0-RC.21) (2023-06-02)


### Bug Fixes

* social icon is missing on some views ([#2211](https://github.com/dynamic-labs/DynamicAuth/issues/2211)) ([bddd255](https://github.com/dynamic-labs/DynamicAuth/commit/bddd255f0aa61aed4b767145c51624ac1eb9b963))

## [0.17.0-RC.20](https://github.com/dynamic-labs/DynamicAuth/compare/v0.17.0-RC.19...v0.17.0-RC.20) (2023-06-01)


### Features

* add AccessDeniedContext to lift denied wallet state up ([#2180](https://github.com/dynamic-labs/DynamicAuth/issues/2180)) ([509519d](https://github.com/dynamic-labs/DynamicAuth/commit/509519d08496248545f1548f676b13e140473e41))
* **DYN-2338:** update magic icons to social icons ([#2176](https://github.com/dynamic-labs/DynamicAuth/issues/2176)) ([42a4f63](https://github.com/dynamic-labs/DynamicAuth/commit/42a4f6367e6fa4ad8736f9ac42f535c8a9c1d377))
* **DynamicWidget:** add send balance button ([#2183](https://github.com/dynamic-labs/DynamicAuth/issues/2183)) ([d76355e](https://github.com/dynamic-labs/DynamicAuth/commit/d76355e1f9c3a7b05cbb5b7b3144dad379586689))
* handle magic redirect error ([#2203](https://github.com/dynamic-labs/DynamicAuth/issues/2203)) ([9a088c6](https://github.com/dynamic-labs/DynamicAuth/commit/9a088c6aad2eb2c1045f544a784083d2732df440))
* **SendBalanceModal:** adds openSendBalanceModal in dynamic context ([#2159](https://github.com/dynamic-labs/DynamicAuth/issues/2159)) ([f89b21b](https://github.com/dynamic-labs/DynamicAuth/commit/f89b21bfcd65bb61ef33b17b460140404574b235))
* social error handling improvements ([#2146](https://github.com/dynamic-labs/DynamicAuth/issues/2146)) ([a64a26a](https://github.com/dynamic-labs/DynamicAuth/commit/a64a26aa42c228654cb135cd6c4778e8bd2bd0e6))


### Bug Fixes

* amendments to user profile ([#2201](https://github.com/dynamic-labs/DynamicAuth/issues/2201)) ([5d12c17](https://github.com/dynamic-labs/DynamicAuth/commit/5d12c1716cdcd8d843ef3ff941e163bad28573b1))
* **formatBigNumber:** display the ceil value when value is too low ([#2165](https://github.com/dynamic-labs/DynamicAuth/issues/2165)) ([ad56fe1](https://github.com/dynamic-labs/DynamicAuth/commit/ad56fe11d55ee038e08ef77dfa2bd6155fee7fe3))
* use wcv2 only if wallet supports it ([#2198](https://github.com/dynamic-labs/DynamicAuth/issues/2198)) ([3d5fea7](https://github.com/dynamic-labs/DynamicAuth/commit/3d5fea7743a18b47f33ef371ecc2652003accb4d))

## [0.17.0-RC.19](https://github.com/dynamic-labs/DynamicAuth/compare/v0.17.0-RC.18...v0.17.0-RC.19) (2023-05-30)


### Features

* add SocialWrongAccountView ([#2153](https://github.com/dynamic-labs/DynamicAuth/issues/2153)) ([531a29d](https://github.com/dynamic-labs/DynamicAuth/commit/531a29d7d87739d974ecc35c57ef0d333a5e7451))
* do not show unlink button for embedded wallets ([#2169](https://github.com/dynamic-labs/DynamicAuth/issues/2169)) ([f813058](https://github.com/dynamic-labs/DynamicAuth/commit/f8130585c82c7ae73d1e32e107f67ec86b4edb89))
* **DYN-2402:** coinbase issues after disconnecting ([#2149](https://github.com/dynamic-labs/DynamicAuth/issues/2149)) ([91d49fb](https://github.com/dynamic-labs/DynamicAuth/commit/91d49fb7f8c6fca3ab03098f3fba53d277c836ad))
* handle user reconnecting with wrong social account ([#2157](https://github.com/dynamic-labs/DynamicAuth/issues/2157)) ([4f7c6df](https://github.com/dynamic-labs/DynamicAuth/commit/4f7c6dff7df9a7966a644bf2510cb3825b2c6408))
* **social:** handle reconnect ([#2131](https://github.com/dynamic-labs/DynamicAuth/issues/2131)) ([2b3e5fb](https://github.com/dynamic-labs/DynamicAuth/commit/2b3e5fbb72bb7dafee3bd0bbfa73fae444055410))

## [0.17.0-RC.18](https://github.com/dynamic-labs/DynamicAuth/compare/v0.17.0-RC.17...v0.17.0-RC.18) (2023-05-19)


### Features

* add getReferencedAccount ([#2141](https://github.com/dynamic-labs/DynamicAuth/issues/2141)) ([ac170a6](https://github.com/dynamic-labs/DynamicAuth/commit/ac170a6dfac25ff9911feb390495974aa5dbede6))
* add reconnectSocialWallet ([#2142](https://github.com/dynamic-labs/DynamicAuth/issues/2142)) ([fefd759](https://github.com/dynamic-labs/DynamicAuth/commit/fefd759b816b286dd8a7673cf6c839fee59768ac))
* **DYN-2220:** add Transaction Successfully Sent view ([#2134](https://github.com/dynamic-labs/DynamicAuth/issues/2134)) ([7db96ad](https://github.com/dynamic-labs/DynamicAuth/commit/7db96adcd3b84aef29fbabe40a1e048ea629d2bb))
* **MagicSocialWalletConnector:** store public address from redirect result in local storage ([#2139](https://github.com/dynamic-labs/DynamicAuth/issues/2139)) ([90b60e4](https://github.com/dynamic-labs/DynamicAuth/commit/90b60e485a53ff29a0e52ef27a58383771490974))


### Bug Fixes

* issue when linking from detect_new_wallet ([#2148](https://github.com/dynamic-labs/DynamicAuth/issues/2148)) ([98feb7b](https://github.com/dynamic-labs/DynamicAuth/commit/98feb7bde081a8107577ac7ec70d0f9c4b611a2b))
* multi-wallet flows ([#2150](https://github.com/dynamic-labs/DynamicAuth/issues/2150)) ([c82ef4a](https://github.com/dynamic-labs/DynamicAuth/commit/c82ef4a5cc75c9f8edb30620e32dd64bbdb0eb7f))
* starknet getConnectedAccounts should return an empty array if there's no address to return ([#2140](https://github.com/dynamic-labs/DynamicAuth/issues/2140)) ([ce39641](https://github.com/dynamic-labs/DynamicAuth/commit/ce39641a6dbec1d05d8d5cc611a02de8bd756351))

## [0.17.0-RC.17](https://github.com/dynamic-labs/DynamicAuth/compare/v0.17.0-RC.16...v0.17.0-RC.17) (2023-05-17)


### Features

* distinguish walletconnect deeplink types ([#2093](https://github.com/dynamic-labs/DynamicAuth/issues/2093)) ([dcd29f7](https://github.com/dynamic-labs/DynamicAuth/commit/dcd29f7cfc5e6481aaaae502b3fc4e4d225f1fc1))
* **social:** pass did token to verify request ([#2124](https://github.com/dynamic-labs/DynamicAuth/issues/2124)) ([60d73a5](https://github.com/dynamic-labs/DynamicAuth/commit/60d73a5f432d488979f33fe29666d1afa8fc0e8e))
* support optional priority and stalltimeout for customer provided rpc urls ([#2091](https://github.com/dynamic-labs/DynamicAuth/issues/2091)) ([eebacda](https://github.com/dynamic-labs/DynamicAuth/commit/eebacda6a9d6ba583eff4e4e5a38eb9945c4825e))


### Bug Fixes

* add and remove event listeners for Solflare ([#2127](https://github.com/dynamic-labs/DynamicAuth/issues/2127)) ([978c7ba](https://github.com/dynamic-labs/DynamicAuth/commit/978c7ba0e3745e26d9dfc9b7c46a24adc913f02f))
* get publicKey from provider if no address and publicKey are returned on connect ([#2126](https://github.com/dynamic-labs/DynamicAuth/issues/2126)) ([c9c9b2a](https://github.com/dynamic-labs/DynamicAuth/commit/c9c9b2af81f660aa651fc4b0e01cd3c823bb0229))
* remove detect known secondary wallet modal ([#2117](https://github.com/dynamic-labs/DynamicAuth/issues/2117)) ([0e8bbd8](https://github.com/dynamic-labs/DynamicAuth/commit/0e8bbd8c385fe528a7af3ccc037812df9d6e0c84))
* revert changes for select wallet to work with solflare ([#2120](https://github.com/dynamic-labs/DynamicAuth/issues/2120)) ([76cf228](https://github.com/dynamic-labs/DynamicAuth/commit/76cf228c495d6592da4c88b8a0d5a5fc480861ae))
* setIsVerifying to false when selecting a connector ([#2133](https://github.com/dynamic-labs/DynamicAuth/issues/2133)) ([8ddeba3](https://github.com/dynamic-labs/DynamicAuth/commit/8ddeba377f35dfb4a104cd6bd7ee6315d574710f))
* setPrimaryWallet and useSyncPrimaryWallet updates ([#2128](https://github.com/dynamic-labs/DynamicAuth/issues/2128)) ([fb47b17](https://github.com/dynamic-labs/DynamicAuth/commit/fb47b17ddc7f41c29f140a1a85a1e47dbf017fff))
* update text color and add close button on extension not installed prompt ([#2122](https://github.com/dynamic-labs/DynamicAuth/issues/2122)) ([b4848a0](https://github.com/dynamic-labs/DynamicAuth/commit/b4848a0a8094b4ceac67e2667d277a9aa5e2e137))

## [0.17.0-RC.16](https://github.com/dynamic-labs/DynamicAuth/compare/v0.17.0-RC.15...v0.17.0-RC.16) (2023-05-15)


### Features

* add social oauth result to verify request ([#2081](https://github.com/dynamic-labs/DynamicAuth/issues/2081)) ([4da650a](https://github.com/dynamic-labs/DynamicAuth/commit/4da650affe9c96e0ab9e446f58c91b9b13db3651))


### Bug Fixes

* **DYN-2327:** user profile is not loaded properly on the first load ([#2113](https://github.com/dynamic-labs/DynamicAuth/issues/2113)) ([c05834e](https://github.com/dynamic-labs/DynamicAuth/commit/c05834ed89ecc12d586baa97bcaf2bd3c1919f59))

## [0.17.0-RC.15](https://github.com/dynamic-labs/DynamicAuth/compare/v0.17.0-RC.14...v0.17.0-RC.15) (2023-05-15)


### Bug Fixes

* pass network to link request ([#2114](https://github.com/dynamic-labs/DynamicAuth/issues/2114)) ([0f7d20d](https://github.com/dynamic-labs/DynamicAuth/commit/0f7d20d948b737b98d4a8db8aaa7648033e25922))

## [0.17.0-RC.14](https://github.com/dynamic-labs/DynamicAuth/compare/v0.17.0-RC.13...v0.17.0-RC.14) (2023-05-12)


### Features

* add local flowNetwork prop to toggle between mainnet and testnet ([#2094](https://github.com/dynamic-labs/DynamicAuth/issues/2094)) ([43c3f20](https://github.com/dynamic-labs/DynamicAuth/commit/43c3f20abf2d6c83e88e48f885749b978cec078a))
* deprecate multiWallet sdk setting and fetch it from projectSettings ([#2079](https://github.com/dynamic-labs/DynamicAuth/issues/2079)) ([8b7f11d](https://github.com/dynamic-labs/DynamicAuth/commit/8b7f11d9eb71a17056be05cc8006d15dc149e3ff))


### Bug Fixes

* **balance:** correctly compare AVAX address when fetching balance ([#2064](https://github.com/dynamic-labs/DynamicAuth/issues/2064)) ([c5942d1](https://github.com/dynamic-labs/DynamicAuth/commit/c5942d112804f3a935bca396221fb33a3c7cc42a))
* **DYN-2231:** restore User Profile display when social is the only enabled flag in information capture ([#2070](https://github.com/dynamic-labs/DynamicAuth/issues/2070)) ([6790bc7](https://github.com/dynamic-labs/DynamicAuth/commit/6790bc7e54afb1807be9996dc47129932441bbae))

## [0.17.0-RC.13](https://github.com/dynamic-labs/DynamicAuth/compare/v0.17.0-RC.12...v0.17.0-RC.13) (2023-05-10)


### Features

* discriminate magic connectors ([#2069](https://github.com/dynamic-labs/DynamicAuth/issues/2069)) ([e9f6fd1](https://github.com/dynamic-labs/DynamicAuth/commit/e9f6fd15082364612a86d6d2a091cb8bd4eccc1f))


### Bug Fixes

* add popper to fix dots menu positioning ([#2075](https://github.com/dynamic-labs/DynamicAuth/issues/2075)) ([fe945bd](https://github.com/dynamic-labs/DynamicAuth/commit/fe945bd3bcc5edeecfa0a2e7e53e30dc507c6118))
* polyfill process if not defined in global ([#2088](https://github.com/dynamic-labs/DynamicAuth/issues/2088)) ([a5d8194](https://github.com/dynamic-labs/DynamicAuth/commit/a5d81942440a6fe290c15b58b942012afe42aa00))

## [0.17.0-RC.12](https://github.com/dynamic-labs/DynamicAuth/compare/v0.17.0-RC.11...v0.17.0-RC.12) (2023-05-09)


### Bug Fixes

* allow opening network picker when unsupported network and only one network enabled ([#2061](https://github.com/dynamic-labs/DynamicAuth/issues/2061)) ([486607f](https://github.com/dynamic-labs/DynamicAuth/commit/486607f8bb2666749ce39f18cf2368c86a78f74f))
* **DynamicWagmiConnector:** prevent disconnect when WC is not present ([#2063](https://github.com/dynamic-labs/DynamicAuth/issues/2063)) ([ef93623](https://github.com/dynamic-labs/DynamicAuth/commit/ef93623fb68b63a9e89a5958eb87bbddedd15fb6))

## [0.17.0-RC.11](https://github.com/dynamic-labs/DynamicAuth/compare/v0.17.0-RC.10...v0.17.0-RC.11) (2023-05-08)


### Features

* add walletConnectors setting for supplying array of wallet connectors ([#2059](https://github.com/dynamic-labs/DynamicAuth/issues/2059)) ([ae65218](https://github.com/dynamic-labs/DynamicAuth/commit/ae652180b17a870f7bbf5f99c876f386e0de1af5))

## [0.17.0-RC.10](https://github.com/dynamic-labs/DynamicAuth/compare/v0.17.0-RC.9...v0.17.0-RC.10) (2023-05-05)

## [0.17.0-RC.9](https://github.com/dynamic-labs/DynamicAuth/compare/v0.17.0-RC.8...v0.17.0-RC.9) (2023-05-05)


### Features

* **DYN-2231:** show in the user profile all existing fields ([#1988](https://github.com/dynamic-labs/DynamicAuth/issues/1988)) ([1f8cee2](https://github.com/dynamic-labs/DynamicAuth/commit/1f8cee22cf8338bd518961288c570c40e807cd52))
* **TransactionModal:** add insufficient funds warning ([#2031](https://github.com/dynamic-labs/DynamicAuth/issues/2031)) ([bf868e2](https://github.com/dynamic-labs/DynamicAuth/commit/bf868e239e74f4cd0ceda5e09b7538d97d4e431d))


### Bug Fixes

* **DYN-1820:** use missing_from_list error code ([#2040](https://github.com/dynamic-labs/DynamicAuth/issues/2040)) ([92c7ad5](https://github.com/dynamic-labs/DynamicAuth/commit/92c7ad565376573d963c65fa821c97a2102ec8d7))
* **MagicClientNetworkHandler:** save last used network id ([#2045](https://github.com/dynamic-labs/DynamicAuth/issues/2045)) ([6e1c571](https://github.com/dynamic-labs/DynamicAuth/commit/6e1c57127a824cd02d4b785fb8a387e4f221f044))
* **TransactionModal:** ensure alchemy will not fail when estimating for gas ([#2034](https://github.com/dynamic-labs/DynamicAuth/issues/2034)) ([86c0d7c](https://github.com/dynamic-labs/DynamicAuth/commit/86c0d7cc7b20ff12bc9fc2e33961e177d9decf2a))

## [0.17.0-RC.8](https://github.com/dynamic-labs/DynamicAuth/compare/v0.17.0-RC.7...v0.17.0-RC.8) (2023-05-03)


### ⚠ BREAKING CHANGES

* Removes support for Fortmatic in favor of Magic

### Features

* add selected address to qr code modal ([#2017](https://github.com/dynamic-labs/DynamicAuth/issues/2017)) ([58a5d69](https://github.com/dynamic-labs/DynamicAuth/commit/58a5d691f8a4045d92be1a2bcaf6092f44b91b73))
* **DYN-2228:** show network picker only when more than 1 network ([#2007](https://github.com/dynamic-labs/DynamicAuth/issues/2007)) ([8329737](https://github.com/dynamic-labs/DynamicAuth/commit/83297378cc5ed019f3f8297b48c16f56d7cfe9a7))


### Bug Fixes

* disable kyc submit button when network is not supported ([#1952](https://github.com/dynamic-labs/DynamicAuth/issues/1952)) ([ec2f0eb](https://github.com/dynamic-labs/DynamicAuth/commit/ec2f0eb708ed2938dd68cbc7e8ee40f3bc856c2b))
* missing evm networks for connect-only ([#2006](https://github.com/dynamic-labs/DynamicAuth/issues/2006)) ([78561b3](https://github.com/dynamic-labs/DynamicAuth/commit/78561b3243ac38a348a383bb3c79ce58c8731538))
* wallet-connect menu on mobile ([#2025](https://github.com/dynamic-labs/DynamicAuth/issues/2025)) ([1f358a6](https://github.com/dynamic-labs/DynamicAuth/commit/1f358a66dda696e745db32f121fb4ef62379cb9a))


* remove Fortmatic ([#2010](https://github.com/dynamic-labs/DynamicAuth/issues/2010)) ([0ca95c1](https://github.com/dynamic-labs/DynamicAuth/commit/0ca95c175b5d8383433340832bd9ae7dab85f912))

## [0.17.0-RC.7](https://github.com/dynamic-labs/DynamicAuth/compare/v0.17.0-RC.6...v0.17.0-RC.7) (2023-04-28)


### ⚠ BREAKING CHANGES

* EvmNetwork has deprecated `chainName` and replaced it with `name` with the exact same value.
Additionally, calling `walletConnector.getNetwork()` or `walletConnector.switchNetwork()` are generic network types of `string | number`

If for example, you know you are working with an EVM network, you can type cast with `walletConnector.getNetwork<number>()` to work nicely in typescript.

* feat: add network config version to invalidate local storage cache if new version is available

### Features

* added onramp funding UI ([#1884](https://github.com/dynamic-labs/DynamicAuth/issues/1884)) ([d2d9895](https://github.com/dynamic-labs/DynamicAuth/commit/d2d98953b511ebe4aa62b6b5c9cd36c15e1fef97))
* create useNameService hook ([#1909](https://github.com/dynamic-labs/DynamicAuth/issues/1909)) ([78fd40a](https://github.com/dynamic-labs/DynamicAuth/commit/78fd40a7781fd907b6b807c544b5840fab30009a))
* **DYN-2235:** automatically move customer to the next step after updating their network ([#1999](https://github.com/dynamic-labs/DynamicAuth/issues/1999)) ([7721f51](https://github.com/dynamic-labs/DynamicAuth/commit/7721f51a92a899613c63a0bdc4d3504ab5d027b7))
* expose getNameService to useDynamicContext and add it to walletkitactions ([#1987](https://github.com/dynamic-labs/DynamicAuth/issues/1987)) ([48ac670](https://github.com/dynamic-labs/DynamicAuth/commit/48ac670bf086a67648c8853329a8069ba3905d36))
* **magic-link:** add default chain id to magic connector ([#1946](https://github.com/dynamic-labs/DynamicAuth/issues/1946)) ([8b64d96](https://github.com/dynamic-labs/DynamicAuth/commit/8b64d9680525e4882c390667f98d778ce887343e))


### Bug Fixes

* call authSucces in missing places ([#1961](https://github.com/dynamic-labs/DynamicAuth/issues/1961)) ([c61ee5b](https://github.com/dynamic-labs/DynamicAuth/commit/c61ee5bac965a0b7c8f62ee8a5aa0167b1aa190b)), closes [#1963](https://github.com/dynamic-labs/DynamicAuth/issues/1963)
* display ens info when there's any ([#1973](https://github.com/dynamic-labs/DynamicAuth/issues/1973)) ([9b14dbe](https://github.com/dynamic-labs/DynamicAuth/commit/9b14dbe69043933edce7f0cecc0406f6d7c7a45d))
* revert trigger onAuthSuccess on additional flows ([#1953](https://github.com/dynamic-labs/DynamicAuth/issues/1953)) ([#1960](https://github.com/dynamic-labs/DynamicAuth/issues/1960)) ([fb10791](https://github.com/dynamic-labs/DynamicAuth/commit/fb107914eb799692e25d4fa63229ad66967bd3aa))
* show 'install extension' prompt when selecting a secondary wallet that cannot be detected ([#1948](https://github.com/dynamic-labs/DynamicAuth/issues/1948)) ([b6593c1](https://github.com/dynamic-labs/DynamicAuth/commit/b6593c19fe8edaefeca3fa9b8b1d5c64f7c3b9f9))
* support both number and string types for chainId regardless of chain ([#1978](https://github.com/dynamic-labs/DynamicAuth/issues/1978)) ([25fcc96](https://github.com/dynamic-labs/DynamicAuth/commit/25fcc969129be832cc0e9c68edc04773944dacae))
* update setPrimaryWallet return type ([#1983](https://github.com/dynamic-labs/DynamicAuth/issues/1983)) ([0724a4b](https://github.com/dynamic-labs/DynamicAuth/commit/0724a4bcaee25639b29335a91824dcaedb7b0330))
* update walletconnect disconned callback to reject instead of throwing an error ([#1992](https://github.com/dynamic-labs/DynamicAuth/issues/1992)) ([da726cf](https://github.com/dynamic-labs/DynamicAuth/commit/da726cfca67c945026bd29c6db7f8c6fef910b4d))

## [0.17.0-RC.6](https://github.com/dynamic-labs/DynamicAuth/compare/v0.17.0-RC.5...v0.17.0-RC.6) (2023-04-25)


### Bug Fixes

* pass autoConnect to true on wagmi client ([#1957](https://github.com/dynamic-labs/DynamicAuth/issues/1957)) ([10b9df8](https://github.com/dynamic-labs/DynamicAuth/commit/10b9df87374e9d4c4d85b98110cc10e84ed35cb8))
* trigger onAuthSuccess on additional flows ([#1953](https://github.com/dynamic-labs/DynamicAuth/issues/1953)) ([a485231](https://github.com/dynamic-labs/DynamicAuth/commit/a4852312bc8a11136b391ca59d38755397c00f76))

## [0.17.0-RC.5](https://github.com/dynamic-labs/DynamicAuth/compare/v0.17.0-RC.4...v0.17.0-RC.5) (2023-04-24)


### Bug Fixes

* **Cypress:** add polyfills ([#1945](https://github.com/dynamic-labs/DynamicAuth/issues/1945)) ([4902ecf](https://github.com/dynamic-labs/DynamicAuth/commit/4902ecf74306cc052c2df52796e1b254fb1829e5))
* **DYN-2261:** hide authorization flow after network switch ([#1942](https://github.com/dynamic-labs/DynamicAuth/issues/1942)) ([cc3ca53](https://github.com/dynamic-labs/DynamicAuth/commit/cc3ca5398191f18046958cc950cec25d6043fab3))

## [0.17.0-RC.4](https://github.com/dynamic-labs/DynamicAuth/compare/v0.17.0-RC.3...v0.17.0-RC.4) (2023-04-22)


### Bug Fixes

* wait for safe transaction validation before verify call to api ([#1925](https://github.com/dynamic-labs/DynamicAuth/issues/1925)) ([c2cd271](https://github.com/dynamic-labs/DynamicAuth/commit/c2cd27195f0058384bf6569b7da81815d4a31bb6))

## [0.17.0-RC.3](https://github.com/dynamic-labs/DynamicAuth/compare/v0.17.0-RC.2...v0.17.0-RC.3) (2023-04-21)


### Features

* consume social sign in settings from dashboard ([#1896](https://github.com/dynamic-labs/DynamicAuth/issues/1896)) ([484fc53](https://github.com/dynamic-labs/DynamicAuth/commit/484fc539ee4f4bbef02dea52a3c4dace1a647b70))
* **DYN-1820:** support allow list in email authorization ([#1916](https://github.com/dynamic-labs/DynamicAuth/issues/1916)) ([9356346](https://github.com/dynamic-labs/DynamicAuth/commit/93563460d3231f644f21c9acda1b0c33e4dcd893))
* **DYN-2092:** add and expose global loading state ([#1872](https://github.com/dynamic-labs/DynamicAuth/issues/1872)) ([2aa1781](https://github.com/dynamic-labs/DynamicAuth/commit/2aa1781d02a801b712ff0a3fd6f9d608cc420b2a))


### Bug Fixes

* lock QR Code to 1.5.1 ([#1924](https://github.com/dynamic-labs/DynamicAuth/issues/1924)) ([5c49ba7](https://github.com/dynamic-labs/DynamicAuth/commit/5c49ba7ca20d1effdb8f3d367158adeacda42809))

## [0.17.0-RC.2](https://github.com/dynamic-labs/DynamicAuth/compare/v0.17.0-RC.1...v0.17.0-RC.2) (2023-04-20)


### Bug Fixes

* shouldn't throw error when doesn't find provider ([#1920](https://github.com/dynamic-labs/DynamicAuth/issues/1920)) ([fb3ef1f](https://github.com/dynamic-labs/DynamicAuth/commit/fb3ef1f8f38e88a97cfdda75515007fddd52bb57))

## [0.17.0-RC.1](https://github.com/dynamic-labs/DynamicAuth/compare/v0.17.0-RC.0...v0.17.0-RC.1) (2023-04-20)


### Features

* add getNameService method to connectors ([#1894](https://github.com/dynamic-labs/DynamicAuth/issues/1894)) ([000b4e9](https://github.com/dynamic-labs/DynamicAuth/commit/000b4e9af89bb69299191c1452984168f30d81b5))
* add social sign in flow ([#1849](https://github.com/dynamic-labs/DynamicAuth/issues/1849)) ([aa0f201](https://github.com/dynamic-labs/DynamicAuth/commit/aa0f201e6de35b092edc8283fc95e1a9074c7d56))
* add wallet filter by chain name ([#1878](https://github.com/dynamic-labs/DynamicAuth/issues/1878)) ([8f3f99f](https://github.com/dynamic-labs/DynamicAuth/commit/8f3f99ff4f6d63d5e5ae9193277f35d4c2f99ab6))
* only set view to wallet list when linking ([#1905](https://github.com/dynamic-labs/DynamicAuth/issues/1905)) ([3413048](https://github.com/dynamic-labs/DynamicAuth/commit/341304832340f2d262e58a59df44691c81572ed6))
* social sign in ux improvements ([#1898](https://github.com/dynamic-labs/DynamicAuth/issues/1898)) ([cb5a037](https://github.com/dynamic-labs/DynamicAuth/commit/cb5a0376d051a401aadb15c3ad49f0d3301de3e9))
* **SocialUICard:** adds overlay card with more social options ([#1889](https://github.com/dynamic-labs/DynamicAuth/issues/1889)) ([8ff6920](https://github.com/dynamic-labs/DynamicAuth/commit/8ff6920844b104c4d0679bb23a092eb675297d95))


### Bug Fixes

* **DYN-2147:** connectWallet calling createVisit multiple times  ([ceba216](https://github.com/dynamic-labs/DynamicAuth/commit/ceba216a82f4073751a210be6e6c8326286e4266))
* handle undefined or defined cases in new WalletConnector class ([#1914](https://github.com/dynamic-labs/DynamicAuth/issues/1914)) ([869afa6](https://github.com/dynamic-labs/DynamicAuth/commit/869afa67536b26715b4c91a457d8965548f107bd))
* issue with wallets list being empty after linking new wallet ([#1883](https://github.com/dynamic-labs/DynamicAuth/issues/1883)) ([19bd8cd](https://github.com/dynamic-labs/DynamicAuth/commit/19bd8cd47619b5164fe18235fca02c0a7935780f))
* make providerResources default to undefined instead of empty array ([#1913](https://github.com/dynamic-labs/DynamicAuth/issues/1913)) ([dbcc5f1](https://github.com/dynamic-labs/DynamicAuth/commit/dbcc5f1874209295464032bdfd3e42d23828e5ab))
* remove event listeners ([#1910](https://github.com/dynamic-labs/DynamicAuth/issues/1910)) ([b6e1dfd](https://github.com/dynamic-labs/DynamicAuth/commit/b6e1dfd09951e7e97678d5c92648ef2abb548664))
* use named export from coinbase wallet sdk ([#1903](https://github.com/dynamic-labs/DynamicAuth/issues/1903)) ([cbd106f](https://github.com/dynamic-labs/DynamicAuth/commit/cbd106f065f86a161b082a41023efb2ffd7ab9e0))
* when linking a new wallet, show sign message if active wallet is not linked ([#1887](https://github.com/dynamic-labs/DynamicAuth/issues/1887)) ([11d86d6](https://github.com/dynamic-labs/DynamicAuth/commit/11d86d6641c8c0b5e48b040d02226585b6d5f1dd))

## [0.17.0-RC.0](https://github.com/dynamic-labs/DynamicAuth/compare/v0.16.1...v0.17.0-RC.0) (2023-04-18)


### Features

* add magic social wallet connector ([#1848](https://github.com/dynamic-labs/DynamicAuth/issues/1848)) ([3f49d22](https://github.com/dynamic-labs/DynamicAuth/commit/3f49d2222ddf90835e3e3d58ac860835f33c9910))


### Bug Fixes

* type=module requires dot cjs files for running with node ([#1890](https://github.com/dynamic-labs/DynamicAuth/issues/1890)) ([5751d6e](https://github.com/dynamic-labs/DynamicAuth/commit/5751d6ebd6df376b241e812c5ae860b3a0cf6c80))

### [0.16.1](https://github.com/dynamic-labs/DynamicAuth/compare/v0.16.0...v0.16.1) (2023-04-15)


### Bug Fixes

* stream polyfill error that impacted some setups ([#1876](https://github.com/dynamic-labs/DynamicAuth/issues/1876)) ([7e4ef90](https://github.com/dynamic-labs/DynamicAuth/commit/7e4ef90f372f61f8961f8e6a5dd2a22f06e3d8ba))

## [0.16.0](https://github.com/dynamic-labs/DynamicAuth/compare/v0.15.0...v0.16.0) (2023-04-14)
It is has been a bit over a month since our last stable launch, and here comes V0.16.0!
We have some cool features for you and one breaking change that you should be aware of (We try our best to minimize these, but we gotta keep on cleaning legacy stuff).

### ⚠ BREAKING CHANGES
* With the introduction of email login and social verification we moved to `verifiedCredentials` instead of `blockchainAccounts`. `blockChainAccounts` was removed from the [user's object](https://dash.readme.com/project/dynamic/v2.5/docs/userprofile) and from the [JWT payload](https://docs.dynamic.xyz/docs/user-payload).

### Feature Highlights
* Support for social verifications (Github, Google, Facebook, Twitter, and Discord).
* Support for Cosmos and Keplr Wallet.
* Support for hCaptcha.
* Magic Wallet improvements: OTP authentication, network switching, send transaction/sign-message page, and performance improvements.
* Improvements to the Starknet integration.
* Expose updateSelf method that handles all the side effects that involve in updating a profile.
* User profile has a new boolean (newUser) to indicate (suprise) whether it is a new user that was just created.
* [defaultNumberOfWalletsToShow](https://docs.dynamic.xyz/docs/sort-and-filter-wallets#sortwallets) is a param that can control how many wallets to show on the wallet listing when a walletFilter is applied.
* Two new callbacks were added: [onConnectSuccess](https://docs.dynamic.xyz/docs/onconnectsuccess), and [onUserProfileUpdate](https://docs.dynamic.xyz/docs/onuserprofileupdate)
* Added support for multiple additional wallets (such as: Uniswap and Dawn).

And tons of other small improvements and bug fixes.


## [0.16.0-RC.14](https://github.com/dynamic-labs/DynamicAuth/compare/v0.16.0-RC.13...v0.16.0-RC.14) (2023-04-12)


### Features

* **DYN-2073:** use emailOnly property to decide whether to show wallet list or not ([#1855](https://github.com/dynamic-labs/DynamicAuth/issues/1855)) ([9f98713](https://github.com/dynamic-labs/DynamicAuth/commit/9f9871343811e9bcaa4bad3b01407fcab7401630))
* **Keplr:** sign message with walletconnect and authorize ([699d438](https://github.com/dynamic-labs/DynamicAuth/commit/699d438e9c14ce5f562cbebe9c4895530bbeb0cf))
* **Keplr:** support network switch ([28c98b3](https://github.com/dynamic-labs/DynamicAuth/commit/28c98b31010bfd74b0a1a767165311a7ca1bca8a))
* **KeplrWalletCnnect:** fetch balance ([d42aad9](https://github.com/dynamic-labs/DynamicAuth/commit/d42aad9c848ced5eff782da23fd0ed50a1727f74))
* **KeplrWalletCnnect:** fetch balance ([bd0f854](https://github.com/dynamic-labs/DynamicAuth/commit/bd0f854ea95425dabdc918f87a3e85c1f30e42c9))
* **magic:** handle network switching ([c9636ef](https://github.com/dynamic-labs/DynamicAuth/commit/c9636ef61bc72970fde4182f7c2e5c05fcccf1bf))


### Bug Fixes

* **Keplr:** authorize with persited network ([82e9e94](https://github.com/dynamic-labs/DynamicAuth/commit/82e9e945039d9ee39a64193d6b14f993b9f980f0))
* remove extend WalletConnect from keplrWalletConnect ([9ae62be](https://github.com/dynamic-labs/DynamicAuth/commit/9ae62be5d47e1b17a986bd4c84aba3a8d3583743))

## [0.16.0-RC.13](https://github.com/dynamic-labs/DynamicAuth/compare/v0.16.0-RC.12...v0.16.0-RC.13) (2023-04-11)


### Features

* add cosmos to the new wallet chain options ([ba93570](https://github.com/dynamic-labs/DynamicAuth/commit/ba93570a1b51d79135e985273c9a8ac7b417b690))
* add glow and starknet to shouldManuallyReconnectOnRefresh ([a971787](https://github.com/dynamic-labs/DynamicAuth/commit/a97178750aa2ff6b2e6c8b84bf8587f43faaf243))
* starknet update signature for getWeb3Provider and updated isInstalled ([94e84ac](https://github.com/dynamic-labs/DynamicAuth/commit/94e84ac04e4ceb20a6b13ede4ff22230b0bb08f5))


### Bug Fixes

* **connect-only:** manually reconnect connector based on shouldManuallyReconnectOnRefresh ([e81ec1c](https://github.com/dynamic-labs/DynamicAuth/commit/e81ec1ccee9fe4361dc4e12e358a4d199b750478))
* remove useFetchPublicAddress ([5cb5659](https://github.com/dynamic-labs/DynamicAuth/commit/5cb5659aa8b3d03589f6e6a065a087ff54afe863))
* starknet properly teardown the listeners ([1212251](https://github.com/dynamic-labs/DynamicAuth/commit/121225146ed2d7e6dff58f00681f7876ba20bd6e))
* update kycEnabled value when projectSettings change ([#1836](https://github.com/dynamic-labs/DynamicAuth/issues/1836)) ([56f4312](https://github.com/dynamic-labs/DynamicAuth/commit/56f431218648d34275d4ea0ab5e5dbfadd8ed7b3))

## [0.16.0-RC.12](https://github.com/dynamic-labs/DynamicAuth/compare/v0.16.0-RC.11...v0.16.0-RC.12) (2023-04-06)


### Bug Fixes

* only display ouath providers in social accounts profile section ([1d11297](https://github.com/dynamic-labs/DynamicAuth/commit/1d11297bad425867068b5f6bf90473aa014166cc))
* social auth updates ([#1819](https://github.com/dynamic-labs/DynamicAuth/issues/1819)) ([ade0aba](https://github.com/dynamic-labs/DynamicAuth/commit/ade0aba4f02be756456c947cd634f605517942e3))
* update multi-wallet list ([#1814](https://github.com/dynamic-labs/DynamicAuth/issues/1814)) ([3d97ebd](https://github.com/dynamic-labs/DynamicAuth/commit/3d97ebd50b8458bece4ad1946d0c397232e28a48))
* update wallets list so the tiles look stacked again ([#1813](https://github.com/dynamic-labs/DynamicAuth/issues/1813)) ([299f46b](https://github.com/dynamic-labs/DynamicAuth/commit/299f46b89e3dcddc0886509502ede9c2e72d58f3))

## [0.16.0-RC.11](https://github.com/dynamic-labs/DynamicAuth/compare/v0.16.0-RC.10...v0.16.0-RC.11) (2023-04-05)


### Features

* **DYN-1710:** Add Manual Switch Network view ([3526a5d](https://github.com/dynamic-labs/DynamicAuth/commit/3526a5d869e2b8b8b404959f02360b1e7db75f97))
* **DYN-2030:** replace hardcoded network properties to api response ([5af6d5e](https://github.com/dynamic-labs/DynamicAuth/commit/5af6d5efba280bfffa196075cf7b9d9ca702296e))
* enable social profiles integration ([#1729](https://github.com/dynamic-labs/DynamicAuth/issues/1729)) ([d33ae28](https://github.com/dynamic-labs/DynamicAuth/commit/d33ae2859cbe097de58b9caa654c3c5aec13f9fa))
* export the type of DynamicContextProp ([452fe1b](https://github.com/dynamic-labs/DynamicAuth/commit/452fe1b066b293659357b9722c5383025639f197))


### Bug Fixes

* add missing dependecy to the useEffect ([cacbcc4](https://github.com/dynamic-labs/DynamicAuth/commit/cacbcc4bc2ec813bb8b4298eefee8e893377434d))
* **Button:** loading state ([af7a9b0](https://github.com/dynamic-labs/DynamicAuth/commit/af7a9b0e937bbc859f551ba7fc5463e61d7fc1c4))
* make Wallets the 1st option in widget switcher ([#1794](https://github.com/dynamic-labs/DynamicAuth/issues/1794)) ([7156b37](https://github.com/dynamic-labs/DynamicAuth/commit/7156b37ee4a94fd4e74e3889d93a5613f39fdf0f))
* only show ens name/avatar if there's any for the selected wallet ([#1779](https://github.com/dynamic-labs/DynamicAuth/issues/1779)) ([1a6cf6b](https://github.com/dynamic-labs/DynamicAuth/commit/1a6cf6b583f55c67d190bc962451073839b3ecfb))
* update 'wallet not connected' pop up (update copy, add logout button and spinner) ([#1780](https://github.com/dynamic-labs/DynamicAuth/issues/1780)) ([0b2701f](https://github.com/dynamic-labs/DynamicAuth/commit/0b2701fbfb07b23c646f77608a21eff183fdc0ab))
* update 'wallet not connected' prompt ([#1793](https://github.com/dynamic-labs/DynamicAuth/issues/1793)) ([a9b9064](https://github.com/dynamic-labs/DynamicAuth/commit/a9b906438255d46ac1a4e3b0dd8efaa3c5d92e1c))

## [0.16.0-RC.10](https://github.com/dynamic-labs/DynamicAuth/compare/v0.16.0-RC.9...v0.16.0-RC.10) (2023-03-31)


### Features

* **DYN-2093:** add new_user boolean flag to UserProfile ([4150047](https://github.com/dynamic-labs/DynamicAuth/commit/4150047ae5598ec949f1e1e4484d08be6e84eba5))


### Bug Fixes

* **magic-otp:** reload the page on click edit email ([11af506](https://github.com/dynamic-labs/DynamicAuth/commit/11af506b50462b8e121d5b95b1b1ec53ed09992b))
* **multi-wallet:** display OTP view when reconnecting wallet ([4a3ad0a](https://github.com/dynamic-labs/DynamicAuth/commit/4a3ad0a96912edba8451697252de47ea5858fe31))
* **Portal:** allow for custom element id ([d27589d](https://github.com/dynamic-labs/DynamicAuth/commit/d27589de093e0933c69041a90fe18bb35325cfc8))

## [0.16.0-RC.9](https://github.com/dynamic-labs/DynamicAuth/compare/v0.16.0-RC.8...v0.16.0-RC.9) (2023-03-30)


### Features

* **DYN-2030:** cosmos/keplr integration ([#1756](https://github.com/dynamic-labs/DynamicAuth/issues/1756)) ([1521dac](https://github.com/dynamic-labs/DynamicAuth/commit/1521dac370b6dbecfedf7eaa367c436ce4d9286d))

## [0.16.0-RC.8](https://github.com/dynamic-labs/DynamicAuth/compare/v0.16.0-RC.7...v0.16.0-RC.8) (2023-03-29)


### Features

* **DYN-2030:** filter keplr wallets ([6f38c81](https://github.com/dynamic-labs/DynamicAuth/commit/6f38c818d1489f118d10703f180d20e79b262c2f))
* **Keplr:** prepare basic Keplr, Cosmos connector ([0316736](https://github.com/dynamic-labs/DynamicAuth/commit/03167364d78218aa7b93dc24333a1172826411c7))
* **magic_otp:** enable magic otp ([cd073a3](https://github.com/dynamic-labs/DynamicAuth/commit/cd073a3a50ccb268a0bbd7f1462a85cf263e34e3))


### Bug Fixes

* make depedencies patch only ([ac23c2b](https://github.com/dynamic-labs/DynamicAuth/commit/ac23c2bb315d650a6d8727893b8997e98e8a0d86))
* multiple improvments for keplr integration ([119da9b](https://github.com/dynamic-labs/DynamicAuth/commit/119da9be7c1513ef4e4805c832a0e22f9a2fbdde))
* pin @hcaptcha/react-hcaptcha to patch updates only ([c173f14](https://github.com/dynamic-labs/DynamicAuth/commit/c173f1448ad3db8c9257cc74f7bb5d9cfaabc9f3))
* show all the wallets if they are less than number of wallets to show ([17258b1](https://github.com/dynamic-labs/DynamicAuth/commit/17258b19fcea4da386f20d01877fb6dc8e54fc83))

## [0.16.0-RC.7](https://github.com/dynamic-labs/DynamicAuth/compare/v0.16.0-RC.6...v0.16.0-RC.7) (2023-03-27)


### Features

* support phantom evm in non-override mode ([6505dfa](https://github.com/dynamic-labs/DynamicAuth/commit/6505dfa15640c775bc3c9a25c830b64ad9d5c4ce))
* update user profile ui ([#1670](https://github.com/dynamic-labs/DynamicAuth/issues/1670)) ([13220fa](https://github.com/dynamic-labs/DynamicAuth/commit/13220faee806a94d3594c21f61cf00ad9eb23dbf))


### Bug Fixes

* **CustomerCallbacks:** make sure that we always call customer callbacks ([5013508](https://github.com/dynamic-labs/DynamicAuth/commit/5013508207d3c55a591b4e781e12049757528526))
* do not filter out magic even if all chains are disabled ([6970129](https://github.com/dynamic-labs/DynamicAuth/commit/697012962909427ca30c4426e86c7b080261e76d))
* **email_wallet:** display loading state for magic auth ([ebab810](https://github.com/dynamic-labs/DynamicAuth/commit/ebab81041c7988cd6b239ab4614755b693b6f3b4))
* exclude flow from primary wallet sync hook ([d6fc719](https://github.com/dynamic-labs/DynamicAuth/commit/d6fc719f9c382b66666a7aebdbea71b92e9df43b))
* **magic_wallet:** disconnect user when magic is logged out ([8573cb5](https://github.com/dynamic-labs/DynamicAuth/commit/8573cb50231da281c534d3f83a05aa3f7b55bd14))
* **magic_wallet:** prevent failure when email is edited ([dd7cbbb](https://github.com/dynamic-labs/DynamicAuth/commit/dd7cbbb823aa65ef1df80a5dcf909aff961c37ce))
* **NetworkPicker:** make sure that we use correct network picker on 'network not supported' step ([2062d5f](https://github.com/dynamic-labs/DynamicAuth/commit/2062d5fb2ad68c2b44c70445c0146cc7b9ee56bc))
* remove dep on multi-wallet in wagmi connector ([e8069b3](https://github.com/dynamic-labs/DynamicAuth/commit/e8069b30a39728e8175880838e2bd3e30c0adb1f))
* wallet transfer icon size ([77409bd](https://github.com/dynamic-labs/DynamicAuth/commit/77409bd0c1f674be26c93786235bd9f95d5b29ad))

## [0.16.0-RC.6](https://github.com/dynamic-labs/DynamicAuth/compare/v0.16.0-RC.5...v0.16.0-RC.6) (2023-03-21)


### Features

* add Braavos in-App browser navigation ([5c59e5a](https://github.com/dynamic-labs/DynamicAuth/commit/5c59e5a24f00a0ed74561a30a42ac3ec0b801998))
* add Dawn wallet ([6fc9135](https://github.com/dynamic-labs/DynamicAuth/commit/6fc91354083433cbebbdd8fd593db78eea7307d7))
* add getDeepLink to WalletConnector ([7af621c](https://github.com/dynamic-labs/DynamicAuth/commit/7af621ccc35875c296b7698c5c474f53ba702dca))
* add new link-wallet icon ([bf8b7ce](https://github.com/dynamic-labs/DynamicAuth/commit/bf8b7ce35612a73b3b4b0d4ee670c4294c9ae9a2))
* change buttonSize prop name to buttonPadding and add a padding-none variant ([91ec635](https://github.com/dynamic-labs/DynamicAuth/commit/91ec63520dbc1f87f351c1b1716d4a07068b34e0))
* create LogoutButton ([6c76820](https://github.com/dynamic-labs/DynamicAuth/commit/6c76820d4c23122e1227372c7badad63dca28ad1))
* **DYN-2039:** expose defaultNumberOfWalletsToShow ([bf069b9](https://github.com/dynamic-labs/DynamicAuth/commit/bf069b9810ef64f1872f8f68f27c3d950ce87efd))
* **DYN-2044:** update network switcher in kyc step ([687d38c](https://github.com/dynamic-labs/DynamicAuth/commit/687d38ce7f844e26ea288389124e65e392fd8429))
* fix tests ([8977740](https://github.com/dynamic-labs/DynamicAuth/commit/8977740f0f8e75e4dcba1fe0fad773ba4c5030ac))
* **magic:** add network/testMode/locale/redirectURI magic configuration ([34b7a97](https://github.com/dynamic-labs/DynamicAuth/commit/34b7a9721c0d67e13809e44ca2983bcbb2240b22))
* **magic:** sendTransaction/signMessage modal improvements ([6ee448e](https://github.com/dynamic-labs/DynamicAuth/commit/6ee448ecf726905934e1a5d8e7c23bc2e9b77ee9))
* make profile the 1st option in the widget switcher ([9693f47](https://github.com/dynamic-labs/DynamicAuth/commit/9693f47279d92ebacc13e5c8e08a24a002d0e8c6))
* move LinkWalletIcon to iconic ([76ba74d](https://github.com/dynamic-labs/DynamicAuth/commit/76ba74d8feda15b2ee4903e441d5394e4fe55ce3))
* move logout button from widget header to index view footer and profile view footer ([c919005](https://github.com/dynamic-labs/DynamicAuth/commit/c919005ccd43444f734bdafd6e9876e6bf59327d))
* move widget switcher to the top ([e038744](https://github.com/dynamic-labs/DynamicAuth/commit/e0387444813dadc8f4494edca152649f9e3a3a56))
* set max height to onboarding user data form ([a25129e](https://github.com/dynamic-labs/DynamicAuth/commit/a25129ed72460b392fa54cdc85e7d7276ffc826b))
* set max height to user profile view ([c207b21](https://github.com/dynamic-labs/DynamicAuth/commit/c207b2111bb39189487e08b95889ab9977d9db81))
* update buttons aligment in footer ([e6f3638](https://github.com/dynamic-labs/DynamicAuth/commit/e6f36384a902db03b5ae7aec0909192a0ddf5776))


### Bug Fixes

* add missing width to dynamic logo to work with webkit browsers ([c03cdfb](https://github.com/dynamic-labs/DynamicAuth/commit/c03cdfb6577f6a9b6c0432befb6bec57fa89afa0))
* **DYN-2045:** no access icon is too big ([8c34ab7](https://github.com/dynamic-labs/DynamicAuth/commit/8c34ab74643f0c8bf06bedfda7f8487f8d0591fc))
* **DynamicContext:** use the app name and logo from project settings ([0a08dc8](https://github.com/dynamic-labs/DynamicAuth/commit/0a08dc80ab699e3c4b499e1180dac2f22b7b1604))
* icon with spinner inner icon size ([b8f94e2](https://github.com/dynamic-labs/DynamicAuth/commit/b8f94e2d4239bd2992e7918dbd27848f3878825e))
* PendingConnectView icon size ([a801edf](https://github.com/dynamic-labs/DynamicAuth/commit/a801edff524e8993b8f6a6723ca4c0eca0349c01))
* remove IsBrowser from dynamic wagmi connector ([f89d5c0](https://github.com/dynamic-labs/DynamicAuth/commit/f89d5c0b6368d873181bdfc51656db638d8c2692))
* remove scroll copy ([601774c](https://github.com/dynamic-labs/DynamicAuth/commit/601774c12debc02f3f14a772c1cf54a792addded))

## [0.16.0-RC.5](https://github.com/dynamic-labs/DynamicAuth/compare/v0.16.0-RC.4...v0.16.0-RC.5) (2023-03-16)


### Features

* add modal backdrop css variables ([8b872d4](https://github.com/dynamic-labs/DynamicAuth/commit/8b872d403437da4232698dd059ad727aec74c24b))
* add optional evmNetworks prop to dynamic wagmi connector ([29f1a95](https://github.com/dynamic-labs/DynamicAuth/commit/29f1a951b96ab17025da60e95cceeda2e7d644e9))
* add optional evmNetworks prop to dynamic wagmi connector ([62da3fa](https://github.com/dynamic-labs/DynamicAuth/commit/62da3fa024480c65eea7343037101e9a65b79ffa))
* implement @dynamic-labs/wallet-book ([f6ebbee](https://github.com/dynamic-labs/DynamicAuth/commit/f6ebbee99786409cb8ee037a53942bac3aab1ca6))


### Bug Fixes

* **bundle_size:** move bundle size to its own CI job ([6870845](https://github.com/dynamic-labs/DynamicAuth/commit/68708457464f7d740e055cda00dd5c26f42d8c83))
* coolwallet icon id ([c48e1bf](https://github.com/dynamic-labs/DynamicAuth/commit/c48e1bf4331594d11f3fceee17fc726a7f28970d))
* **DYN-2016:** User is not able to logout when 'wallet not connected' promp shows ([a19b113](https://github.com/dynamic-labs/DynamicAuth/commit/a19b1132290c5602c4cbfb24240588d2343da0d6))
* image-update-npm ([ae05791](https://github.com/dynamic-labs/DynamicAuth/commit/ae05791434c6f12cc3953bcda33d430d15b056d0))
* **magic_wallet:** add confirmation to transactions ([14d0e20](https://github.com/dynamic-labs/DynamicAuth/commit/14d0e2069e64a393d82f97d7214d8449e930b341))
* **react-focus-lock:** ensure it will not fight with blocto focus ([631f0f9](https://github.com/dynamic-labs/DynamicAuth/commit/631f0f9c6bdeca47baec65078f996e0ae26bb905))
* **UserAddress:** use correct user address in UserAddress component ([9ea8754](https://github.com/dynamic-labs/DynamicAuth/commit/9ea875482fe2f27aaeb97a7186596f85489a44b4))
* **UserProfile:** Submit button should be active after changes are made ([3d36e2e](https://github.com/dynamic-labs/DynamicAuth/commit/3d36e2e374646f7981765845a2c547af969927a1))

## [0.16.0-RC.4](https://github.com/dynamic-labs/DynamicAuth/compare/v0.16.0-RC.3...v0.16.0-RC.4) (2023-03-10)


### Features

* Show toolkit on user profile open ([fe373be](https://github.com/dynamic-labs/DynamicAuth/commit/fe373be16b54727bb6596b6bae3e42afa3b3262b))


### Bug Fixes

* **DYN-144:** Dynamic widget should show when multiWalletWidgetState changes ([1e0ae27](https://github.com/dynamic-labs/DynamicAuth/commit/1e0ae27bb99d95a2e436f011302c532dfecfc3db))
* **dynamic_context:** use token to check if is authenticated ([88e4de4](https://github.com/dynamic-labs/DynamicAuth/commit/88e4de44636078bfc2408130ec526d75f0909f93))
* update validateAuthUser to account for verified credential with emails ([4d3ab68](https://github.com/dynamic-labs/DynamicAuth/commit/4d3ab6812525efa9e042374150ba59fe47596212))

## [0.16.0-RC.3](https://github.com/dynamic-labs/DynamicAuth/compare/v0.16.0-RC.2...v0.16.0-RC.3) (2023-03-08)

## [0.16.0-RC.2](https://github.com/dynamic-labs/DynamicAuth/compare/v0.16.0-RC.1...v0.16.0-RC.2) (2023-03-08)


### Features

* add feedback to the button component ([cb8e79b](https://github.com/dynamic-labs/DynamicAuth/commit/cb8e79b230eda12a76141b0bbe8b6df8a8a8bd55))
* **DYN-1792:** install hCaptcha ([d981a10](https://github.com/dynamic-labs/DynamicAuth/commit/d981a10180b352c26518b9b20580bdb06f1f9c46))
* **LoginWithEmail:** hide wallets in login with email view when chains are disabled ([ffbea58](https://github.com/dynamic-labs/DynamicAuth/commit/ffbea582d32ef88bfa6e1b5cfb6dce3cdc4b0601))
* **magic-link:** add send transaction confirmation gate ([77d6ac9](https://github.com/dynamic-labs/DynamicAuth/commit/77d6ac94b33776d838aabb3383ee5a2ad1ce9e4f))
* save authMode to localstorage ([e0ba68c](https://github.com/dynamic-labs/DynamicAuth/commit/e0ba68c148db69229f2dd53baa6c19764a13d3df))


### Bug Fixes

* **DYN-2006:** broken user profile on single wallet and email login ([7937d7b](https://github.com/dynamic-labs/DynamicAuth/commit/7937d7be855f03e9772a2c7b37fa3f2ba2775a58))
* **LoginWithEmail:** update email verifaction success message background color to dynamic-connection-green-2 ([cc86957](https://github.com/dynamic-labs/DynamicAuth/commit/cc86957ba025a313175034478ac61f7d228e8472))
* network picker for connect-only ([561bf95](https://github.com/dynamic-labs/DynamicAuth/commit/561bf951fa8fb9a0ba8b686d9c11458df40b040b))
* not opening the widget ([810a400](https://github.com/dynamic-labs/DynamicAuth/commit/810a4002242c43679b25fa158a44b9bf74ea1702))
* update profile to work with connect-only ([3577c53](https://github.com/dynamic-labs/DynamicAuth/commit/3577c5337db4f08e2943ed3ed2d920586d9bf8cc))

## [0.16.0-RC.1](https://github.com/dynamic-labs/DynamicAuth/compare/v0.15.1-RC.1...v0.16.0-RC.1) (2023-03-07)


### ⚠ BREAKING CHANGES

* as we move to use verifiedCredentials instead of
blockchainAccounts we blockChainAccount is removed from the user's
object.

### Features

* replace blockchainAccounts with verifiedCredentials ([5f32e4e](https://github.com/dynamic-labs/DynamicAuth/commit/5f32e4e038e7888c1a8993dc381f23688758ce46))

## [0.16.0-RC.0](https://github.com/dynamic-labs/DynamicAuth/compare/v0.15.1-RC.1...v0.16.0-RC.0) (2023-03-07)


### ⚠ BREAKING CHANGES

* as we move to use verifiedCredentials instead of
blockchainAccounts we blockChainAccount is removed from the user's
object.

### Features

* replace blockchainAccounts with verifiedCredentials ([5f32e4e](https://github.com/dynamic-labs/DynamicAuth/commit/5f32e4e038e7888c1a8993dc381f23688758ce46))

### [0.15.1-RC.1](https://github.com/dynamic-labs/DynamicAuth/compare/v0.16.0-RC.0...v0.15.1-RC.1) (2023-03-06)


### Features

* **DYN-1918:** adds test to verify zIndexes ([298571b](https://github.com/dynamic-labs/DynamicAuth/commit/298571b42e25db54bf96921e1a5b5309a455b578))
* setup EmvNetworks for Magic Link connector ([b9e5a1e](https://github.com/dynamic-labs/DynamicAuth/commit/b9e5a1eb4c3da4da7d4a6bbaadf2c18901209a2e))
* **Toolkit:** hide toolkit on mobile ([223f608](https://github.com/dynamic-labs/DynamicAuth/commit/223f608c659d8a2c4651c1da440ebec276455316))
* **WalletListItem:** add handleWalletItemClick to useWalletItemActions hook ([72083e0](https://github.com/dynamic-labs/DynamicAuth/commit/72083e040802760d8e5887456f0162ef037f77e6))
* **WalletListItem:** create getWalletListItemLabel helper method ([42920a7](https://github.com/dynamic-labs/DynamicAuth/commit/42920a7b35f21cfa9ed402352f1cda5d7921f64b))
* **WalletListItem:** simplify WalletListItem ([95c0e71](https://github.com/dynamic-labs/DynamicAuth/commit/95c0e7106fb64b8441a6f65995a61d7638724067))


### Bug Fixes

* no access button provides to login with email or wallet list ([20c0dfc](https://github.com/dynamic-labs/DynamicAuth/commit/20c0dfc2258001eb7f8e0b085d2b79f68bb3c01a))
* number of walllets show numbers under 10 ([7876cf6](https://github.com/dynamic-labs/DynamicAuth/commit/7876cf6f0b3188e1aabc8bb37753a34de7c35288))
* **UserProfile:** remove borderBottom in UserProfileField component ([9f848fe](https://github.com/dynamic-labs/DynamicAuth/commit/9f848fe6fa7e3ba30278ad8d6117acf2687b31aa))
* **UserProfile:** widget is visible after relogin ([b2efbad](https://github.com/dynamic-labs/DynamicAuth/commit/b2efbadefc047183d4ae6c97a3d230fa77780795))
* **wallet-ui-utils:** add confirmation screen to wallet provider ([8341c8b](https://github.com/dynamic-labs/DynamicAuth/commit/8341c8bab559dffc2fc4a7bca70a8fa6dcb797c2))
* **WalletList:** remove console.logs from walletListBuilder spec ([aa9d088](https://github.com/dynamic-labs/DynamicAuth/commit/aa9d088fc199434258482024ed1310a4a70aa85d))

### [0.15.1-RC.0](https://github.com/dynamic-labs/DynamicAuth/compare/v0.16.0-RC.0...v0.15.1-RC.0) (2023-03-06)


### Features

* **DYN-1918:** adds test to verify zIndexes ([298571b](https://github.com/dynamic-labs/DynamicAuth/commit/298571b42e25db54bf96921e1a5b5309a455b578))
* setup EmvNetworks for Magic Link connector ([b9e5a1e](https://github.com/dynamic-labs/DynamicAuth/commit/b9e5a1eb4c3da4da7d4a6bbaadf2c18901209a2e))
* **Toolkit:** hide toolkit on mobile ([223f608](https://github.com/dynamic-labs/DynamicAuth/commit/223f608c659d8a2c4651c1da440ebec276455316))
* **WalletListItem:** add handleWalletItemClick to useWalletItemActions hook ([72083e0](https://github.com/dynamic-labs/DynamicAuth/commit/72083e040802760d8e5887456f0162ef037f77e6))
* **WalletListItem:** create getWalletListItemLabel helper method ([42920a7](https://github.com/dynamic-labs/DynamicAuth/commit/42920a7b35f21cfa9ed402352f1cda5d7921f64b))
* **WalletListItem:** simplify WalletListItem ([95c0e71](https://github.com/dynamic-labs/DynamicAuth/commit/95c0e7106fb64b8441a6f65995a61d7638724067))


### Bug Fixes

* no access button provides to login with email or wallet list ([20c0dfc](https://github.com/dynamic-labs/DynamicAuth/commit/20c0dfc2258001eb7f8e0b085d2b79f68bb3c01a))
* number of walllets show numbers under 10 ([7876cf6](https://github.com/dynamic-labs/DynamicAuth/commit/7876cf6f0b3188e1aabc8bb37753a34de7c35288))
* **UserProfile:** remove borderBottom in UserProfileField component ([9f848fe](https://github.com/dynamic-labs/DynamicAuth/commit/9f848fe6fa7e3ba30278ad8d6117acf2687b31aa))
* **UserProfile:** widget is visible after relogin ([b2efbad](https://github.com/dynamic-labs/DynamicAuth/commit/b2efbadefc047183d4ae6c97a3d230fa77780795))
* **wallet-ui-utils:** add confirmation screen to wallet provider ([8341c8b](https://github.com/dynamic-labs/DynamicAuth/commit/8341c8bab559dffc2fc4a7bca70a8fa6dcb797c2))
* **WalletList:** remove console.logs from walletListBuilder spec ([aa9d088](https://github.com/dynamic-labs/DynamicAuth/commit/aa9d088fc199434258482024ed1310a4a70aa85d))

## [0.15.0](https://github.com/dynamic-labs/DynamicAuth/compare/v0.14.31...v0.15.0) (2023-03-01)


We are excited to release V0.15.0 as part of our public beta announcement.
v0.14 release.
You can read more about it in our announcement [blog post](https://www.dynamic.xyz/blog/public-beta-release)

### ⚠ BREAKING CHANGES
As always we try to introduce as few breaking changes as possible, if you have any issue with the changes below please don't hesitate to reach out.

* Based on your feedback, our team has been hard at work to completely redesign our SDK UI and move it to ShadowDom. Now in addition, to the default customizations that we provide in the our admin dashboard, you have full control and ability to customize any element in the Dynamic's SDK to your liking. If you previously used any CSS Classes to override our previous SDK modal you will need to update them to the current CSS classes.

For more info see: [Custom CSS](https://docs.dynamic.xyz/docs/custom-css).

* As we introduced more callbacks, we now require all the callbacks to be nested under `eventsCallbacks` see: [Callbacks](https://docs.dynamic.xyz/docs/onauthflowclose)

* We removed `user.walletPublicKey`, instead please use `primaryWallet.address`.

### Highlights
 * A Complete rewrite of our SDK UI and design configurations (see: [Custom CSS](https://docs.dynamic.xyz/docs/custom-css))
 * Support for Email Verification + and Sign in with Email.
 * Integration with magic.link.
 * New and improved network selector experience
 * Support for Wallet Connect V2
 * Multi-wallet support for Flow  + Lilico
 * Multiple Bug Fixes + reduction in our package size

## [0.15.0-RC.16](https://github.com/dynamic-labs/DynamicAuth/compare/v0.15.0-RC.15...v0.15.0-RC.16) (2023-03-01)


### Features

* **DYN-1637:** update linking, transfering and unlinking logic for login with email ([91c7fcf](https://github.com/dynamic-labs/DynamicAuth/commit/91c7fcf766af9096f4682f1126103d33eed38184))
* **DYN-1637:** update widget ui for non-wallet users ([d988c9a](https://github.com/dynamic-labs/DynamicAuth/commit/d988c9a0c01ec29739205d9df14218ad949a9153))
* **DYN-1638:** create CollectUserDataViewLoginWithEmail ([5272025](https://github.com/dynamic-labs/DynamicAuth/commit/527202544bd0dbe4473b65cca4cbeee72ce26c17))
* **DYN-1638:** remove checkIfThirdRequired last ([319e763](https://github.com/dynamic-labs/DynamicAuth/commit/319e763db4b3bf16674a1f0c3a405d9cfb4d3a63))
* **DYN-1638:** use missingFields from jwt ([fdf52dd](https://github.com/dynamic-labs/DynamicAuth/commit/fdf52ddd01b39d214acbe09aa5f470dd28568634))
* export DynamicWidgetContextProvider ([25fc164](https://github.com/dynamic-labs/DynamicAuth/commit/25fc1649395cdbe29f01858e4ae5f168a1d29b9d))

## [0.15.0-RC.15](https://github.com/dynamic-labs/DynamicAuth/compare/v0.15.0-RC.14...v0.15.0-RC.15) (2023-03-01)


### Features

* add EmailConnectorPendingSignModalContent ([c31b791](https://github.com/dynamic-labs/DynamicAuth/commit/c31b791c21e6c1ec2385e60d1a1cc101df582fd2))
* add getEnabledProviders ([d8d5cb1](https://github.com/dynamic-labs/DynamicAuth/commit/d8d5cb1a1f99e097cde5e633c3b98bd52b7f5f16))
* add new signatures/types for Magic Link ([61065e9](https://github.com/dynamic-labs/DynamicAuth/commit/61065e92ea59f205e69ab97ac3aecb0f36be2f56))
* **display_order:** use display order from api ([074f5bb](https://github.com/dynamic-labs/DynamicAuth/commit/074f5bb4b06855e5c40463471811ba5e42bbe70c))
* implement isEmailWalletConnector ([e7f0527](https://github.com/dynamic-labs/DynamicAuth/commit/e7f05275103f43a914f266b8dc6ec1f6a82b51b8))
* Implement Magic Link connector ([dd4e5f6](https://github.com/dynamic-labs/DynamicAuth/commit/dd4e5f6a536d37adfba7111764caf3e521f6514f))
* integrate Magic Link with email flow ([dca5f07](https://github.com/dynamic-labs/DynamicAuth/commit/dca5f078ef781dc0bffb6d4fbbb473e4b9e06f25))
* UI, modals and utils for Magic Link ([76accbd](https://github.com/dynamic-labs/DynamicAuth/commit/76accbd657f342d9abe9a49508f43261b8398857))


### Bug Fixes

* **email_confirmation:** go to correct view when clicking edit email ([29af782](https://github.com/dynamic-labs/DynamicAuth/commit/29af78292b4a6088443606b8b79533fefe68d3f3))
* init magic's SDK only during the login process ([a6e5615](https://github.com/dynamic-labs/DynamicAuth/commit/a6e5615af1edc8dd6d1dd31e8f2af83b7f4e5fb0))
* NetworkPicker is cut in widget ([883b3b6](https://github.com/dynamic-labs/DynamicAuth/commit/883b3b65908d6614021713e3e6e3c56211799947))
* Tooltip has lower z-index than auth flow ([0a111e5](https://github.com/dynamic-labs/DynamicAuth/commit/0a111e5a0ba918dc66454114f7899cc81b747a56))

## [0.15.0-RC.14](https://github.com/dynamic-labs/DynamicAuth/compare/v0.15.0-RC.13...v0.15.0-RC.14) (2023-02-27)

## [0.15.0-RC.13](https://github.com/dynamic-labs/DynamicAuth/compare/v0.15.0-RC.12...v0.15.0-RC.13) (2023-02-27)


### ⚠ BREAKING CHANGES

* it removes user.walletPublicKey, instead use primaryWallet.address

### Features

* **DYN-1943:** Granular control over widget ([0255408](https://github.com/dynamic-labs/DynamicAuth/commit/02554084abb1cc0090dbe1722a611f061597ca22))


### Bug Fixes

* **dynamic_context:** update email view state when settings is loaded ([0860090](https://github.com/dynamic-labs/DynamicAuth/commit/086009033078c69fc4b01d9a856164946ac14920))
* **KYC:** remove wallet icon next to ens name ([6f7b7ed](https://github.com/dynamic-labs/DynamicAuth/commit/6f7b7ed6d35d0adc62a75fe4bf7541b19608ed99))
* Tooltip position is not updated after view change ([3a3f616](https://github.com/dynamic-labs/DynamicAuth/commit/3a3f6161a05fd90a60588593161f67cd11a1cdbd))


* remove user walletpublickey prop ([a016aab](https://github.com/dynamic-labs/DynamicAuth/commit/a016aab1b6aa438900fda45283ce909ff521b47b))

## [0.15.0-RC.12](https://github.com/dynamic-labs/DynamicAuth/compare/v0.15.0-RC.11...v0.15.0-RC.12) (2023-02-24)


### ⚠ BREAKING CHANGES

* remove deprecated callbacks

### Features

* add auto theme mode to switch theme depending on system ([94f13a0](https://github.com/dynamic-labs/DynamicAuth/commit/94f13a0d3a411902db35c1238375341099ec75cd))
* **DYN-1916:** Add verified email tooltip & icon ([2b6742d](https://github.com/dynamic-labs/DynamicAuth/commit/2b6742d4089863e39fb87eeaf06007cc032f4028))
* **DYN-1968:** reset ErrorContext state on modal close/open ([a5ca73e](https://github.com/dynamic-labs/DynamicAuth/commit/a5ca73e2bad70f7496fc1a446a3c05349cf3fbc5))
* **DYN-1975:** move user to main screen on failed retry attempt ([77edfd7](https://github.com/dynamic-labs/DynamicAuth/commit/77edfd77ad674f94001697045a6f5536d9ad57e2))


### Bug Fixes

* **DYN-1975:** wrong error message on too many login attempts ([07f191a](https://github.com/dynamic-labs/DynamicAuth/commit/07f191a24beee65c9e4235514e3c4fe71d53fa1e))
* **email-field:** add id to email field so label focus on correct element ([d8696f7](https://github.com/dynamic-labs/DynamicAuth/commit/d8696f7395cb7462ee7062dce6ce45a02856345c))
* fallback to wc v1 when projectId is not present ([049cd45](https://github.com/dynamic-labs/DynamicAuth/commit/049cd45d85e37c45fcd6175042346eb7e31db21d))


* remove deprecated callbacks ([4d77083](https://github.com/dynamic-labs/DynamicAuth/commit/4d770836d86bccf0a01db7284483e91231d48894))

## [0.15.0-RC.11](https://github.com/dynamic-labs/DynamicAuth/compare/v0.15.0-RC.10...v0.15.0-RC.11) (2023-02-22)

## [0.15.0-RC.10](https://github.com/dynamic-labs/DynamicAuth/compare/v0.15.0-RC.9...v0.15.0-RC.10) (2023-02-21)


### Features

* **DYN-1637:** add logInWithEmail to walletListBuilder ([b812851](https://github.com/dynamic-labs/DynamicAuth/commit/b81285147416403bd9a00ae6a23f3147c687cab5))
* **DYN-1637:** add new api call ([bad0ce0](https://github.com/dynamic-labs/DynamicAuth/commit/bad0ce0433acb95bc81689d3903094cd997f4559))
* **DYN-1637:** create and add two new switches to the Toolkit ([733fb34](https://github.com/dynamic-labs/DynamicAuth/commit/733fb34d093a80432c34999b39671cba735442fa))
* **DYN-1637:** create Divider component ([babf5b6](https://github.com/dynamic-labs/DynamicAuth/commit/babf5b65365b7f1ef6651ae2adcd86770b8d9f1c))
* **DYN-1637:** create LoginWithEmailView ([9f049b7](https://github.com/dynamic-labs/DynamicAuth/commit/9f049b7f73cafa65004b2dfe504a6ae9818f06ae))
* **DYN-1637:** create LoginWithEmailView components ([beebab2](https://github.com/dynamic-labs/DynamicAuth/commit/beebab2ffbcd9b3c2231329ae961a5e58586afac))
* **DYN-1637:** it adds new variables to useInternalDynamicContext ([ada34c9](https://github.com/dynamic-labs/DynamicAuth/commit/ada34c9869b59947f6954692b95929480c9c213f))
* **DYN-1637:** update DynamicConnectButton to display email login view based on the props ([9adc119](https://github.com/dynamic-labs/DynamicAuth/commit/9adc119938295b8ce3c384c566f46e72450dbfdc))
* **DYN-1637:** update EmailVerification component, so that it can call different methods and looks different based on the view ([6c55cd6](https://github.com/dynamic-labs/DynamicAuth/commit/6c55cd6848c076cb7c897dfeeedba32a5634bd46))
* **DYN-1637:** update Main component to show new views ([243fafc](https://github.com/dynamic-labs/DynamicAuth/commit/243fafc72a62d2ab40ba992bed75b0f9f933c4ec))
* **DYN-1637:** update ModalHeader, Portal and DynamicAuthLayout ([7631c48](https://github.com/dynamic-labs/DynamicAuth/commit/7631c4853b54f0451525aafa4dfc812d8eb2e896))
* **DYN-1637:** update sdk-api ([cdf8fbd](https://github.com/dynamic-labs/DynamicAuth/commit/cdf8fbd2f490bfe3a4f9ad97e7f417e6e9280edb))
* **DYN-1637:** update tos and pp ([82304be](https://github.com/dynamic-labs/DynamicAuth/commit/82304be1c9ad7f69bfbd41d6631f7ee0e5385a41))
* **DYN-1836:** user profile multiple improvments ([2316177](https://github.com/dynamic-labs/DynamicAuth/commit/2316177142bcb083966e307e16bfb27f061508cc))
* **DYN-1837:** move UserDataForm to hook ([224c031](https://github.com/dynamic-labs/DynamicAuth/commit/224c03119d9f050b6447edde76acbc1427979230))
* **DYN-1840:** show ENS profile pic & name in dynamic widget ([f4bcde9](https://github.com/dynamic-labs/DynamicAuth/commit/f4bcde97ce9d1d031b4c3bfb7273d908b3b802bc))
* **DYN-1892:** Update SingleWallet popup unline with designs; Show user details in it ([7d3a314](https://github.com/dynamic-labs/DynamicAuth/commit/7d3a314975c8847f1e262f1f41abe28e961afc85))
* **DYN-1923:** Unify widget experience ([a287259](https://github.com/dynamic-labs/DynamicAuth/commit/a28725951fe5d5ad5c2c42d4a8aca4a83203423d))
* **DYN-1937:** Add onUserProfileUpdate ([3dd6e9e](https://github.com/dynamic-labs/DynamicAuth/commit/3dd6e9e78a9e9101f645f146ea6cd8fed1de9ad6))
* **EmptyWallets:** update copy ([ee9c210](https://github.com/dynamic-labs/DynamicAuth/commit/ee9c210743a108d49a553549e461907fa1303720))
* use dropdown variant in e2e tests ([ec39bf1](https://github.com/dynamic-labs/DynamicAuth/commit/ec39bf1c757cf842cde1d550ee0084f6b6e8fc66))
* **UserProfile:** add edit view with form ([1f2d1a3](https://github.com/dynamic-labs/DynamicAuth/commit/1f2d1a36987aed38265a05ac0f357653054730df))
* **UserProfile:** multiple improvments after review ([a881d03](https://github.com/dynamic-labs/DynamicAuth/commit/a881d03463dd47453104de971f0084390646559e))
* **UserProfile:** show ens name in AccountControl ([c657152](https://github.com/dynamic-labs/DynamicAuth/commit/c65715279d5475f469fc9f623a372da1b423a570))
* **UserProfile:** update test coverage ([e2bb398](https://github.com/dynamic-labs/DynamicAuth/commit/e2bb3989629c7dbbaae1e1fece2feb0047201afb))


### Bug Fixes

* **UserProfile:** apply border to dynamic widget card ([30802ba](https://github.com/dynamic-labs/DynamicAuth/commit/30802ba8df6244deb17d373c28d3355a9548a936))
* **UserProfile:** multiple improvments for userProfile ([3f79c9b](https://github.com/dynamic-labs/DynamicAuth/commit/3f79c9b1a0f115d155a79ee4a833c7750ae7413e))
* **UserProfile:** show DotsMenu in proper position ([577ccab](https://github.com/dynamic-labs/DynamicAuth/commit/577ccabb1b8096c6299044fc556b4e581292910b))
* **UserProfile:** update DynamicWidgetCard radius inline with DynamicAuthLayout radius ([de3447f](https://github.com/dynamic-labs/DynamicAuth/commit/de3447f0974384ba19023945ac24d9cb011f1f36))

## [0.15.0-RC.9](https://github.com/dynamic-labs/DynamicAuth/compare/v0.15.0-RC.8...v0.15.0-RC.9) (2023-02-21)

## [0.15.0-RC.8](https://github.com/dynamic-labs/DynamicAuth/compare/v0.15.0-RC.7...v0.15.0-RC.8) (2023-02-20)


### Features

* ability to connect multiple blocto and dapper ([d67ca7c](https://github.com/dynamic-labs/DynamicAuth/commit/d67ca7c350fe3794b9ed254c29472a568c4634b1))
* add wallet-connector-core package ([f6e6dfb](https://github.com/dynamic-labs/DynamicAuth/commit/f6e6dfbe7ae0dfdc6d616c187d944c702f7f9de4))
* **EmailConfirmationWaitingView:** add view to wait for email confirmation ([f71f9c6](https://github.com/dynamic-labs/DynamicAuth/commit/f71f9c66ba2cae2e2d8db02bdd130e9475f25f1b))
* **Link:** add link component ([5f86e01](https://github.com/dynamic-labs/DynamicAuth/commit/5f86e0179eed05dfb0189767f0b8a558cdb3d347))
* put wcv2 initialization behind flag ([905eb1a](https://github.com/dynamic-labs/DynamicAuth/commit/905eb1a2a6e70bf228f6d9f316e2a814f52c50f2))
* source walletconnectv2 settings from projectSettings ([671dd65](https://github.com/dynamic-labs/DynamicAuth/commit/671dd659ea92d671aa434a9f041c9314c69799a2))
* update CollectUserDataView to use header and message data from settings ([701a7ba](https://github.com/dynamic-labs/DynamicAuth/commit/701a7ba571b2467b8229eda0c2a7590ba6d7ce60))
* update sdk-api version ([71d5316](https://github.com/dynamic-labs/DynamicAuth/commit/71d5316bbbf290f3d8146f346c85b4896ef64e4a))
* walletconnect v2 deeplinking ([5d4a548](https://github.com/dynamic-labs/DynamicAuth/commit/5d4a54876ef7d05713ffe089c41ce7d3ea35126b))
* **walletconnect-v2:** handle accountsChanged and chainChanged ([1e6caa6](https://github.com/dynamic-labs/DynamicAuth/commit/1e6caa6fefed30d6abb9f87c587acc17521575ad))
* **walletconnect-v2:** hex-encode message to sign ([360e10c](https://github.com/dynamic-labs/DynamicAuth/commit/360e10cfe721ab56464bd90c1af9612d6b23a635))


### Bug Fixes

* **Accordion:** ensure the accordion can decrease in height ([522e82f](https://github.com/dynamic-labs/DynamicAuth/commit/522e82fb2d73dc86bff9874bc3244309fea7094f))
* **walletconnect-v2:** restore session ([aac5357](https://github.com/dynamic-labs/DynamicAuth/commit/aac5357e79c4bab9dff7413f623ba02d15ddf0ea))

## [0.15.0-RC.7](https://github.com/dynamic-labs/DynamicAuth/compare/v0.15.0-RC.6...v0.15.0-RC.7) (2023-02-15)

## [0.15.0-RC.6](https://github.com/dynamic-labs/DynamicAuth/compare/v0.15.0-RC.5...v0.15.0-RC.6) (2023-02-15)


### Features

* **WalletActionConfirmationModal:** adds confirmation modal for signing message ([7a52b9e](https://github.com/dynamic-labs/DynamicAuth/commit/7a52b9ea7195f948b3844a0b0b8632ec0104e859))


### Bug Fixes

* **NetworkPicker:** network picker button click submits formik ([8f1dc6d](https://github.com/dynamic-labs/DynamicAuth/commit/8f1dc6d421e6d8d0f71e399543240326a2d66d1f))

## [0.15.0-RC.5](https://github.com/dynamic-labs/DynamicAuth/compare/v0.15.0-RC.4...v0.15.0-RC.5) (2023-02-15)

## [0.15.0-RC.4](https://github.com/dynamic-labs/DynamicAuth/compare/v0.15.0-RC.3...v0.15.0-RC.4) (2023-02-15)

## [0.15.0-RC.3](https://github.com/dynamic-labs/DynamicAuth/compare/v0.15.0-RC.2...v0.15.0-RC.3) (2023-02-14)


### Features

* add support for phantom evm ([cb8eac9](https://github.com/dynamic-labs/DynamicAuth/commit/cb8eac91bfa485434dabd8865ce01a95b5b1eb63))


### Bug Fixes

* **MultiWallet:** wallet transfer was breaking primary wallet in multi-wallet ([e7eeb9f](https://github.com/dynamic-labs/DynamicAuth/commit/e7eeb9fa942cec4ff13157805840c9983d20e666))

## [0.15.0-RC.2](https://github.com/dynamic-labs/DynamicAuth/compare/v0.15.0-RC.1...v0.15.0-RC.2) (2023-02-14)


### Features

* add Argent X wallet automated tests with Selenoid ([5add2ed](https://github.com/dynamic-labs/DynamicAuth/commit/5add2ed0056ddb979a7f454578827ff01261d58d))
* add lilico support for flow via extension ([8266039](https://github.com/dynamic-labs/DynamicAuth/commit/82660394a0b2bfd5c9544c617ab259e8cd92d083))
* add logger package lib ([b2114ab](https://github.com/dynamic-labs/DynamicAuth/commit/b2114ab3041fe237b489fd67b4f63fc0a36a0be4))
* **CollectUserDataView:** improve the error display ([01f51bc](https://github.com/dynamic-labs/DynamicAuth/commit/01f51bc30936da515eb67990ca0e585498e3e21b))
* **DYN-1262:** create network picker component ([227c16d](https://github.com/dynamic-labs/DynamicAuth/commit/227c16d3af900868a91f97ac943a79787f1ee9dc))
* **DYN-1262:** create NetworkNotSupported view ([5c436d1](https://github.com/dynamic-labs/DynamicAuth/commit/5c436d125be042aeb3470055af8f135893ccff22))
* **DYN-1262:** scope network picker classnames inside DynamicWidget ([4af4a30](https://github.com/dynamic-labs/DynamicAuth/commit/4af4a302f4049e975f57afe3937cf7409cc73639))
* **DYN-1262:** set primary wallet on kyc step instead of login ([1ed0d92](https://github.com/dynamic-labs/DynamicAuth/commit/1ed0d9271bba1e211319329ef69a73f1a88d85b7))
* **DYN-1262:** update KYC step to use new network picker component ([1b4af70](https://github.com/dynamic-labs/DynamicAuth/commit/1b4af709405b0a75b3f3fc6e91f792bb5027bd14))
* **DYN-1552:** unsupported network flickers while switching between chains ([b5662eb](https://github.com/dynamic-labs/DynamicAuth/commit/b5662eb815c65b7a50cec2383c1bc05d33a85ece))
* **DYN-1642:** disable closing modal ([e76e59e](https://github.com/dynamic-labs/DynamicAuth/commit/e76e59e36faee031b4b9d8b7b1f789e50e7a941d))
* **DYN-1772:** add PoweredByDynamic component ([6850eca](https://github.com/dynamic-labs/DynamicAuth/commit/6850eca2892930b0bc2d17d38bfe52d7aa2b35de))
* **DYN-1831:** update the way we handle jwt on the frontend ([56e81da](https://github.com/dynamic-labs/DynamicAuth/commit/56e81da933d527e1de76974156e51c87b51f1ac9))
* **DYN-1885:** remove sleep from useOnSuccessfulUserUpdate ([baa16c4](https://github.com/dynamic-labs/DynamicAuth/commit/baa16c4d7ec7ea1b9e9a4c3d742a89838022f2b6))
* **DYN-1885:** show transfer message if email is duplicate ([dc1fd66](https://github.com/dynamic-labs/DynamicAuth/commit/dc1fd6601136e5d6def2b4f30500428f55b3fd43))
* **DYN-1885:** update sdk-api version ([7f9e880](https://github.com/dynamic-labs/DynamicAuth/commit/7f9e88017f1b8d4f0719990b2f30daf192177359))
* extract isAuthTokenExpired ([9b99341](https://github.com/dynamic-labs/DynamicAuth/commit/9b99341b729cc1d18e78ab8fc7f8d00f67b8bcb4))
* **Select:** add basic style to select component ([6305bdd](https://github.com/dynamic-labs/DynamicAuth/commit/6305bdd559bea926f10d43eb5d54fc29298b9623))
* setup Braavos wallet wdio automated tests ([c861144](https://github.com/dynamic-labs/DynamicAuth/commit/c8611442e88c16c021771f7be07c8c974db2ac56))
* **SignInWithEmail:** add log out button to EmailVerification and CollectUserDataView ([89df323](https://github.com/dynamic-labs/DynamicAuth/commit/89df323d42dff757775c3e5916471351b24b1087))
* **SignInWithEmail:** remove duplicated call to removeLsSettings ([fa85334](https://github.com/dynamic-labs/DynamicAuth/commit/fa8533493ed1190459504a00b6de9271d44e0f0c))
* **SignInWithEmail:** update EmailVerification component to use --px-to-rem utility ([b6a4fbb](https://github.com/dynamic-labs/DynamicAuth/commit/b6a4fbbc0caba98ee8661838370060a58d1e6244))
* **useWalletItemActions:** add openWallet method to sign directly ([fba1238](https://github.com/dynamic-labs/DynamicAuth/commit/fba123804a7ef0459e432df976f10debab2e00e4))
* **walletconnect-v2:** add async init method on walletconnet provider ([0bebc2e](https://github.com/dynamic-labs/DynamicAuth/commit/0bebc2e30544572e5a5fbbb00dd57e2847b85ace))
* **walletconnect-v2:** add support for evm network switching ([5e55c7f](https://github.com/dynamic-labs/DynamicAuth/commit/5e55c7f16ffe82d35c6f7e7c6d156efeb6a90c26))
* **walletconnect-v2:** generalize evm chains passed to walletconnect provider ([3b69263](https://github.com/dynamic-labs/DynamicAuth/commit/3b69263945db75bf5c7c5c150be4a3882a890a77))


### Bug Fixes

* don't return authToken if expired ([0e47693](https://github.com/dynamic-labs/DynamicAuth/commit/0e47693a821b06a7ad9c18eb26b1718b1981e518))
* **DYN-1262:** create isSupportedNetwork helper function ([da4b52f](https://github.com/dynamic-labs/DynamicAuth/commit/da4b52f804dc86481d00e14d017d9118f715b650))
* **DYN-1262:** create UserAddress component ([b21beb5](https://github.com/dynamic-labs/DynamicAuth/commit/b21beb5c3ec6b58a0b6c03f517423231fadfbc3a))
* **DYN-1262:** remove duplicated components ([d0077f2](https://github.com/dynamic-labs/DynamicAuth/commit/d0077f28e2bb919543c2d4a1310791782095e882))
* **DYN-1262:** update useVerifyWallet hook to show NetworkNotSupported view ([9ca6aa2](https://github.com/dynamic-labs/DynamicAuth/commit/9ca6aa223a8e21451b50ad85f45ec8b77241f0a4))
* **DYN-1917:** update PendingAccountSwitchModal and WalletUsedView to use selectedWalletConnector ([b2caa4c](https://github.com/dynamic-labs/DynamicAuth/commit/b2caa4c1e8f1631816b634b8acbff0a295723de5))
* **DYN-1917:** update Typography color in DetectedNewWalletModal ([42d0312](https://github.com/dynamic-labs/DynamicAuth/commit/42d03120f75da6dfea32f52e86a51b46f6d649b5))
* **INC-78:** add zIndex prop to ShadowDOM component ([b6e5ee4](https://github.com/dynamic-labs/DynamicAuth/commit/b6e5ee424ba262c095a79613e32911fd72f2419f))
* **NetworkPicker:** fix single wallet ui ([9ea00b2](https://github.com/dynamic-labs/DynamicAuth/commit/9ea00b23effd6064937ee0ad0a32609cd65920f9))
* **normalizeAddress:** remove the 0x from address beginning ([c43829d](https://github.com/dynamic-labs/DynamicAuth/commit/c43829d532c416136e62202ae59e84afc510f3d3))
* pass reloadOnDisconnect to coinbase wallet sdk ([c147f0a](https://github.com/dynamic-labs/DynamicAuth/commit/c147f0a263d93fe5150422bf7336515dc25c437e))
* **SignInWithEmail:** add container to verified icon to prevent flickering ([422bef1](https://github.com/dynamic-labs/DynamicAuth/commit/422bef11ad7a69fb0f1b417fdfc683921b295c34))
* skip solflare extension error ([0ba97df](https://github.com/dynamic-labs/DynamicAuth/commit/0ba97df6f73dbfe342b4f8492c4b8af417ff778b))
* temporary fix for blinking button in demo app ([630100d](https://github.com/dynamic-labs/DynamicAuth/commit/630100da1f6041893916fa9733124b5a1613886e))
* **walletConnect:** add delay when connecting with OKX wallet ([a2ebbfc](https://github.com/dynamic-labs/DynamicAuth/commit/a2ebbfc4e45798fbe5f879a7af52c79d45555d15))

## [0.15.0-RC.1](https://github.com/dynamic-labs/DynamicAuth/compare/v0.15.0-RC.0...v0.15.0-RC.1) (2023-01-31)


### Features

* add media queries mixins ([9e7e0fe](https://github.com/dynamic-labs/DynamicAuth/commit/9e7e0feb870ec413159a4f4c685e5163aae7a5fc))
* add prop to pass css overrides to shadow dom ([71a6728](https://github.com/dynamic-labs/DynamicAuth/commit/71a672817264d81dd66653fa38c38044c336a426))
* add scss mixin for theme modes ([a1ee744](https://github.com/dynamic-labs/DynamicAuth/commit/a1ee74429c06f640fdbc20003584ebf9b82a332c))
* add toast back to the demo ([bf6d2cd](https://github.com/dynamic-labs/DynamicAuth/commit/bf6d2cdeb8dacce74ed85b081ffac5a8ef03a20b))
* **Checkbox:** use BEM instead of css modules ([ef6bc6e](https://github.com/dynamic-labs/DynamicAuth/commit/ef6bc6e14aa70f566e840451cefffbcc591de0cb))
* **CopyButton:** use BEM instead of css modules ([b481585](https://github.com/dynamic-labs/DynamicAuth/commit/b48158539f8838153745f51b032c7a641fd7af75))
* **Dots:** remove dots components as it is not used anymore ([ba6ef1c](https://github.com/dynamic-labs/DynamicAuth/commit/ba6ef1c87e8b8326930caa6f4b9283c3e0060396))
* **DynamicConnectButton:** update ButtonNew component ([6579229](https://github.com/dynamic-labs/DynamicAuth/commit/65792295a8112be988e60b29979635b3bdb4ce86))
* **ErrorContainer:** replace styled components with pure css ([67f0d30](https://github.com/dynamic-labs/DynamicAuth/commit/67f0d300dfdb63d5f9d5b411075e2d211639f287))
* **IconButton:** use BEM ([cba6c8e](https://github.com/dynamic-labs/DynamicAuth/commit/cba6c8ef89020d68f153c2b30d366359d5dbdb87))
* **Icon:** replace css modules with pure css ([f9e0296](https://github.com/dynamic-labs/DynamicAuth/commit/f9e0296e1549da3b240bfcfc744fb725cac43fcd))
* **IconWithSpinner:** use BEM ([57cecae](https://github.com/dynamic-labs/DynamicAuth/commit/57cecae25ee30ae8b9510b08c99b136782cbb7f7))
* **Indicator:** use BEM ([e0737d3](https://github.com/dynamic-labs/DynamicAuth/commit/e0737d38f5020d474f7c3c834b6a4e2b29794487))
* **InfoItem:** use BEM and replace tailwind with scss ([51dbf80](https://github.com/dynamic-labs/DynamicAuth/commit/51dbf807cb795494d017dcdae5dbeec0e22c4647))
* **Input:** add unit tests to input component ([af14ed9](https://github.com/dynamic-labs/DynamicAuth/commit/af14ed9b0457ab75a584f2d5688fd4a78c11c96e))
* **Input:** remove styled-components, use BEM and replace tailwind with scss ([95ae74f](https://github.com/dynamic-labs/DynamicAuth/commit/95ae74f26e2c55bb53abfdfe6adf2b19faacb01e))
* **PendingSignModal:** update view component to use SCSS with BEM ([09d662c](https://github.com/dynamic-labs/DynamicAuth/commit/09d662c87ea81d528db0cdbbda67e5492791aa81))
* **Portal:** remove styled-components, use BEM and replace tailwind with scss ([d6afb25](https://github.com/dynamic-labs/DynamicAuth/commit/d6afb259a592cf4c79e3d6406b6404700e8dbb4f))
* **PrimaryNotConnectedModal:** update view component to use SCSS with BEM ([6d06f1d](https://github.com/dynamic-labs/DynamicAuth/commit/6d06f1dc13687393325d8dbf6ba57cccaafce1d0))
* **ProfilePicture:** remove component as it is no longer used ([0679436](https://github.com/dynamic-labs/DynamicAuth/commit/06794364379bc22fcf6b286b2005fccda5cc128f))
* **QrCodeView:** update QrCodeView to use scss instead of tailwind and css modules ([b276d86](https://github.com/dynamic-labs/DynamicAuth/commit/b276d867bc78193d62cd57bbb5b857e2b87214e6))
* remove missing icon and replace it with error icon ([7ea6b18](https://github.com/dynamic-labs/DynamicAuth/commit/7ea6b18f7e2026a2bb04a93b393afc6c5ade6441))
* rewrite paper without styled components ([dabadb1](https://github.com/dynamic-labs/DynamicAuth/commit/dabadb12c712c5f3ed8df351d339b2ee31c201e6))
* **ShadowDOM:** add unit tests and remove shadow-dom-testing-library dep. ([c77d17f](https://github.com/dynamic-labs/DynamicAuth/commit/c77d17f10e80f551aa104331fc5aad31bd130437))
* **ShadowDOM:** implement ShadowDOM component and CSS injecting ([0efe2bb](https://github.com/dynamic-labs/DynamicAuth/commit/0efe2bbfef061943ba8e0c5cacf5a98eb388c08b))
* **ShadowDOM:** implement ShadowDOM component and CSS injecting ([e6c717a](https://github.com/dynamic-labs/DynamicAuth/commit/e6c717ae6591d19945dbc49008e255a1a08cf218))
* **ShadowDOM:** isShadowDOMEnabled flag support ([4942704](https://github.com/dynamic-labs/DynamicAuth/commit/4942704a1f30a2c3acb8248549a4656826d7a1e0))
* **ShadowDOM:** separation of injecting for global and shadowdom styles ([308bfe0](https://github.com/dynamic-labs/DynamicAuth/commit/308bfe030a17468b9fedabdd812323edb4e65bb9))
* **TextButton:** small refactor, use BEM and replace tailwind with scss ([ccbb244](https://github.com/dynamic-labs/DynamicAuth/commit/ccbb244ea44d36f51706b69c1f05d27aa1301aa6))
* **Toolkit:** remove styled-components, use BEM and replace tailwind with scss ([7c5cd1a](https://github.com/dynamic-labs/DynamicAuth/commit/7c5cd1af34fbfb4fb2cbaf138e9b80a055eb09a7))
* **WalletList:** update WalletList ([891b48a](https://github.com/dynamic-labs/DynamicAuth/commit/891b48ad5d6e9b981c2af013133db282dcc39693))
* **WalletNoAccess:** update view component to use SCSS with BEM ([2f9f320](https://github.com/dynamic-labs/DynamicAuth/commit/2f9f3200070ec5c143c6d7d53b69042a6b1cac40))


### Bug Fixes

* **ActionList:** update title text color on mobile ([901f8a3](https://github.com/dynamic-labs/DynamicAuth/commit/901f8a3cf6bc5fb456b863948a688ada3e9c5510))
* add previously deleted test ([2c89737](https://github.com/dynamic-labs/DynamicAuth/commit/2c897376f79d94dd8c9b4dae776fd9b7e7d56989))
* change capitalization of components ([fd8f696](https://github.com/dynamic-labs/DynamicAuth/commit/fd8f696893f4dc6c9d7affc1268d55e87235d20b))
* **Checks:** resolve checks issues after latest merge ([2a7afc2](https://github.com/dynamic-labs/DynamicAuth/commit/2a7afc28ad280959d3d7926372ff7def2698547c))
* **DynamicConnectButton:** use the default primary with default border radius ([2a41282](https://github.com/dynamic-labs/DynamicAuth/commit/2a41282812e8d254460b5a327404011bb77b222d))
* linting error ([7eb9c42](https://github.com/dynamic-labs/DynamicAuth/commit/7eb9c42ca78546465e5838cd4cde24c01b3629c2))
* linting errors ([a4fdd6e](https://github.com/dynamic-labs/DynamicAuth/commit/a4fdd6e185398567e506a919ecafe81fe2a60924))
* make typography classnames less specific than passed classnames ([5f582a6](https://github.com/dynamic-labs/DynamicAuth/commit/5f582a6453cfeff4ad05d788648ede20d4167f14))
* **NetworkControl:** shrink network name ([2df5533](https://github.com/dynamic-labs/DynamicAuth/commit/2df55335f59840c6770119019824f2dab0936efa))
* primary color input label for ([37ccfea](https://github.com/dynamic-labs/DynamicAuth/commit/37ccfeaf4c5a67ff4b17bbc0d5d67eaa5ad8ab60))
* proper color for multiwallet header logout button ([9ae00c9](https://github.com/dynamic-labs/DynamicAuth/commit/9ae00c9334b3159cf394976f1999cebcc0055766))
* remove scss import now that everything is imported at root ([48a51c0](https://github.com/dynamic-labs/DynamicAuth/commit/48a51c0b2a8ce1382a5eb95169f1aacc7eac1980))
* remove unused themecontext in multiwallet ([35b7e6f](https://github.com/dynamic-labs/DynamicAuth/commit/35b7e6fad6d146c258889c25e527d4fd7a7695fe))
* resolve build and unit tests issues after rebase ([139a305](https://github.com/dynamic-labs/DynamicAuth/commit/139a305184c6d0bb2a089d3d8a580c39420d7385))
* Select use css variable ([78c8fc9](https://github.com/dynamic-labs/DynamicAuth/commit/78c8fc9755af26b1f95dd1b9b32e0cf7582d3abd))
* **ShadowDOM:** apply vars in global.scss ([d4c2436](https://github.com/dynamic-labs/DynamicAuth/commit/d4c2436b05eb11ddc1bea7492fe5aad31166f1b6))
* **ShadowDOM:** remove unused depedencies, use postcss config file ([41fc5b8](https://github.com/dynamic-labs/DynamicAuth/commit/41fc5b85b4dc877acb244ed26e4f00ef34150363))
* **ShadowDOM:** update sign in and out integration test ([6f884ca](https://github.com/dynamic-labs/DynamicAuth/commit/6f884ca63acf528a93b6edffeff55c62878b41f4))
* update --dynamic-border-radius to 24px ([84e4d83](https://github.com/dynamic-labs/DynamicAuth/commit/84e4d83635a98f973f8f56395eae485f3a3242d6))
* update qrcode container style to remove padding ([b278be5](https://github.com/dynamic-labs/DynamicAuth/commit/b278be5ab2af98c6650906f179004aa6a72d06f8))
* update tos and privacy policy styling ([7846a71](https://github.com/dynamic-labs/DynamicAuth/commit/7846a711b748dfbf5df93f28c22a18ac84c2e471))
* update wdio selectors following rewrite ([652d9ca](https://github.com/dynamic-labs/DynamicAuth/commit/652d9cafb447d152f42001f1e8434639b4bebfec))
* update wdio tests ([57e40ef](https://github.com/dynamic-labs/DynamicAuth/commit/57e40efb5f87a8467947650224a9bdc70d3e6576))
* use typography for network name in network control ([6fa79a5](https://github.com/dynamic-labs/DynamicAuth/commit/6fa79a5ce6a3e05d8e0b3265197ebd060cab6c55))
* WalletSignSpinnerView use css variable ([edc4245](https://github.com/dynamic-labs/DynamicAuth/commit/edc424502debedaf4c7a46efab0f445d071e0a01))
* **wdio:** update class references in tests ([0b5e11c](https://github.com/dynamic-labs/DynamicAuth/commit/0b5e11c2b2975d31a7f34abb583398314c70a6a5))
* **WDIO:** update selectors className in walletKit.ts ([96f4862](https://github.com/dynamic-labs/DynamicAuth/commit/96f486254c9c2e0461310093554fe62bd71a14fe))

## [0.15.0-RC.0](https://github.com/dynamic-labs/DynamicAuth/compare/v0.14.31...v0.15.0-RC.0) (2023-01-31)

First release candidate for 0.15.0
