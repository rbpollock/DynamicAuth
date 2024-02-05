'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var groups = {
	blocto: {
		brand: {
			alt: "Blocto",
			primaryColor: "#5E678A",
			spriteId: "blocto"
		},
		key: "blocto",
		name: "Blocto"
	},
	brave: {
		brand: {
			alt: "Brave Browser",
			primaryColor: "#4B49C6",
			spriteId: "brave"
		},
		key: "brave",
		name: "Brave"
	},
	coinbase: {
		brand: {
			alt: "Coinbase Wallet",
			primaryColor: "#1648F9",
			spriteId: "coinbase"
		},
		key: "coinbase",
		name: "Coinbase"
	},
	exodus: {
		brand: {
			alt: "Exodus Wallet",
			spriteId: "exodus"
		},
		key: "exodus",
		name: "Exodus"
	},
	magiceden: {
		brand: {
			alt: "Magic Eden",
			spriteId: "magiceden"
		},
		key: "magiceden",
		name: "Magic Eden"
	},
	phantom: {
		brand: {
			alt: "Phantom",
			primaryColor: "#4B49C6",
			spriteId: "phantom"
		},
		key: "phantom",
		name: "Phantom"
	}
};
var wallets = {
	metamask: {
		brand: {
			alt: "MetaMask Wallet",
			primaryColor: "#E8831D",
			spriteId: "metamask"
		},
		chains: [
			"eip155:1"
		],
		desktop: {
			chromeId: "nkbihfbeogaeaoehlefnkodbefgpgknn",
			edgeId: "ejbalbakoplchlghecdalmeeeajnimhm",
			firefoxId: "ether-metamask"
		},
		eip6963Config: {
			rdns: "io.metamask"
		},
		filterFromWalletConnect: true,
		injectedConfig: [
			{
				chain: "evm",
				extensionLocators: [
					{
						flag: "isMetaMask",
						value: true
					},
					{
						flag: "isDawn",
						value: false
					},
					{
						flag: "isBraveWallet",
						value: false
					},
					{
						flag: "isTrustWallet",
						value: false
					},
					{
						flag: "isExodus",
						value: false
					},
					{
						flag: "isZerion",
						value: false
					},
					{
						flag: "isSuperb",
						value: false
					},
					{
						flag: "isRabby",
						value: false
					},
					{
						flag: "isOKExWallet",
						value: false
					},
					{
						flag: "isOkxWallet",
						value: false
					},
					{
						flag: "isRainbow",
						value: false
					},
					{
						flag: "isAvalanche",
						value: false
					},
					{
						flag: "isMagicEden",
						value: false
					}
				]
			}
		],
		mobile: {
			androidId: "io.metamask",
			iosId: "id1438144202",
			native: "metamask://wc",
			universal: "https://metamask.app.link/wc"
		},
		name: "MetaMask",
		shortName: "MetaMask",
		walletConnect: {
			sdks: [
				"sign_v1",
				"sign_v2"
			]
		}
	},
	coinbase: {
		brand: {
			alt: "Coinbase Wallet",
			primaryColor: "#1648F9",
			spriteId: "coinbase"
		},
		desktop: {
			chromeId: "hnfanknocfeofbddgcijnmhnfnkdnaad"
		},
		eip6963Config: {
			rdns: "com.coinbase.wallet"
		},
		group: "coinbase",
		mobile: {
			androidId: "org.toshi",
			iosId: "id1278383455"
		},
		name: "Coinbase Wallet"
	},
	phantom: {
		brand: {
			alt: "Phantom Wallet",
			primaryColor: "#4B49C6",
			spriteId: "phantom"
		},
		desktop: {
			chromeId: "bfnaelmomeimhlpmgjnjophhpkkoljpa",
			firefoxId: "phantom-app"
		},
		group: "phantom",
		mobile: {
			androidId: "app.phantom",
			iosId: "id1598432977"
		},
		name: "Phantom"
	},
	walletconnect: {
		brand: {
			alt: "WalletConnect",
			primaryColor: "#3182CE",
			spriteId: "walletconnect"
		},
		mobile: {
			androidId: "enable-android",
			iosId: "id1438144202"
		},
		name: "WalletConnect"
	},
	argentx: {
		brand: {
			alt: "Argent Wallet",
			primaryColor: "#FF875B",
			spriteId: "argentx"
		},
		desktop: {
			chromeId: "dlcobpjiigpikoobohmabehhmhfoodbb",
			firefoxId: "argent-x"
		},
		mobile: {
			androidId: "im.argent.contractwalletclient",
			iosId: "id1358741926"
		},
		name: "Argent X"
	},
	myalgo: {
		brand: {
			alt: "MyAlgo Wallet",
			spriteId: "myalgo"
		},
		name: "MyAlgo"
	},
	blocto: {
		brand: {
			alt: "Blocto Wallet",
			primaryColor: "#5E678A",
			spriteId: "blocto"
		},
		group: "blocto",
		mobile: {
			androidId: "com.portto.blocto",
			iosId: "id1481181682"
		},
		name: "Blocto (Flow)"
	},
	solflare: {
		brand: {
			alt: "Solflare Wallet",
			primaryColor: "#FC7227",
			spriteId: "solflare"
		},
		desktop: {
			chromeId: "bhhhlbepdkbapadjdnnojkbgioiodbic"
		},
		mobile: {
			androidId: "com.solflare.mobile",
			iosId: "id1580902717"
		},
		name: "Solflare"
	},
	braavos: {
		brand: {
			alt: "Braavos Wallet",
			primaryColor: "#FABB38",
			spriteId: "braavos"
		},
		desktop: {
			chromeId: "jnlgamecbpmbajjfhmmmlhejkemejdma",
			edgeId: "hkkpjehhcnhgefhbdcgfkeegglpjchdc",
			firefoxId: "braavos-wallet"
		},
		mobile: {
			androidId: "app.braavos.wallet",
			iosId: "id1636013523"
		},
		name: "Braavos"
	},
	trust: {
		brand: {
			alt: "Trust Wallet",
			imageId: "7677b54f-3486-46e2-4e37-bf8747814f00",
			primaryColor: "#0500FF"
		},
		chains: [
			"eip155:1"
		],
		desktop: {
			chromeId: "egjidjbpglichdcondbcbdnbeeppgdph"
		},
		filterFromWalletConnect: true,
		mobile: {
			androidId: "com.wallet.crypto.trustapp",
			iosId: "id1288339409",
			native: "trust://wc"
		},
		name: "Trust",
		shortName: "Trust",
		walletConnect: {
			sdks: [
				"sign_v1",
				"sign_v2",
				"auth_v1"
			]
		}
	},
	rainbow: {
		brand: {
			alt: "Rainbow Wallet",
			primaryColor: "#001e59",
			spriteId: "rainbow"
		},
		chains: [
			"eip155:1",
			"eip155:10",
			"eip155:137",
			"eip155:42161",
			"eip155:56",
			"eip155:7777777",
			"eip155:8453"
		],
		desktop: {
			chromeId: "opfgelmcmbiajamepnmloijbpoleiama",
			edgeId: "cpojfbodiccabbabgimdeohkkpjfpbnf",
			firefoxId: "rainbow-extension"
		},
		filterFromWalletConnect: true,
		injectedConfig: [
			{
				chain: "evm",
				extensionLocators: [
					{
						flag: "isRainbow",
						value: true
					}
				],
				windowLocations: [
					"rainbow"
				]
			}
		],
		mobile: {
			androidId: "me.rainbow",
			iosId: "id1457119021",
			native: "rainbow://wc",
			universal: "https://rnbwapp.com/wc"
		},
		name: "Rainbow",
		walletConnect: {
			sdks: [
				"sign_v1",
				"sign_v2",
				"auth_v1"
			]
		}
	},
	dapper: {
		brand: {
			alt: "Dapper Wallet",
			primaryColor: "#762FBE",
			spriteId: "dapper"
		},
		mobile: {
			android: "fake-to-get-dapper-to-appear",
			ios: "fake-to-get-dapper-to-appear"
		},
		name: "Dapper"
	},
	glow: {
		brand: {
			alt: "Glow Wallet",
			spriteId: "glow"
		},
		desktop: {
			chromeId: "ojbcfhjmpigfobfclfflafhblgemeidi",
			edgeId: "niihfokdlimbddhfmngnplgfcgpmlido",
			firefoxId: "glow-solana-wallet"
		},
		name: "Glow"
	},
	lilico: {
		brand: {
			alt: "Lilico Wallet",
			spriteId: "lilico"
		},
		desktop: {
			chromeId: "hpclkefagolihohboafpheddmmgdffjm"
		},
		filterFromWalletConnect: true,
		name: "Lilico"
	},
	magicemailotp: {
		brand: {
			alt: "Magic Email OTP",
			spriteId: "magiclink"
		},
		name: "Magic Email OTP"
	},
	magiclink: {
		brand: {
			alt: "Magic Link",
			spriteId: "magiclink"
		},
		name: "Magic Link"
	},
	magicsocial: {
		brand: {
			alt: "Magic Social",
			spriteId: "magiclink"
		},
		name: "Magic Social"
	},
	magiceden: {
		brand: {
			alt: "Magic Eden",
			spriteId: "magiceden"
		},
		desktop: {
			chromeId: "mkpegjkblkkefacfnmkajcjmabijhclg"
		},
		group: "magiceden",
		injectedConfig: [
			{
				chain: "evm",
				extensionLocators: [
					{
						flag: "isMagicEden",
						value: true
					}
				],
				windowLocations: [
					"magicEden.ethereum"
				]
			}
		],
		name: "Magic Eden"
	},
	magicedensol: {
		brand: {
			alt: "Magic Eden",
			spriteId: "magiceden"
		},
		desktop: {
			chromeId: "mkpegjkblkkefacfnmkajcjmabijhclg"
		},
		group: "magiceden",
		name: "Magic Eden (Solana)"
	}
};
var walletBookFallbacks = {
	groups: groups,
	wallets: wallets
};

exports["default"] = walletBookFallbacks;
exports.groups = groups;
exports.wallets = wallets;
