export interface ITokenList {
  name: string;
  address: string;
  symbol: string;
  decimals: number;
  logoSrc: string;
}

export const TOKEN_LIST: ITokenList[] = [
  {
    name: "Wrapped Ether",
    address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    symbol: "WETH",
    decimals: 18,
    logoSrc:
      "https://cdn.moralis.io/eth/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png",
  },

  {
    address: "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
    name: "BNB",
    symbol: "BNB",
    decimals: 18,
    logoSrc: "https://etherscan.io/token/images/bnb_28_2.png",
  },
  {
    address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",

    name: "Tether USD",
    symbol: "USDT",
    decimals: 6,
    logoSrc:
      "https://cdn.moralis.io/eth/0xdac17f958d2ee523a2206206994597c13d831ec7.png",
  },
  {
    address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    name: "USD Coin",
    symbol: "USDC",
    decimals: 6,
    logoSrc:
      "https://cdn.moralis.io/eth/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
  },

  {
    symbol: "SHIB",
    logoSrc:
      "https://cdn.moralis.io/eth/0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce.png",
    name: "Shiba Inu",
    address: "0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce",
    decimals: 18,
  },
];

export const asksT = [
  {
    chainId: 1,
    expiry: "1687717774",
    feeRecipient: "0x9b858be6e3047d88820f439b240deac2418a2551",
    maker: "0x8d381481be81184259dd6e3daef415bccf71a610",
    makerAmount: "1400000000000000000",
    makerToken: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    pool: "0x0000000000000000000000000000000000000000000000000000000000000000",
    salt: "1687112974",
    sender: "0x0000000000000000000000000000000000000000",
    taker: "0x0000000000000000000000000000000000000000",
    takerAmount: "3569999000000000000",
    takerToken: "0xb8c77482e45f1f44de1745f52c74426c631bdd52",
    takerTokenFeeAmount: "0",
    verifyingContract: "0xdef1c0ded9bec7f1a1670819833240f027b25eff",
  },
  {
    chainId: 1,
    expiry: "1687845557",
    feeRecipient: "0x9b858be6e3047d88820f439b240deac2418a2551",
    maker: "0x47f3ee781040899b8ece5572ebc6e53a0bb188c9",
    makerAmount: "232000000000000000",
    makerToken: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    pool: "0x0000000000000000000000000000000000000000000000000000000000000000",
    salt: "1687240757",
    sender: "0x0000000000000000000000000000000000000000",
    taker: "0x0000000000000000000000000000000000000000",
    takerAmount: "788800000000000000",
    takerToken: "0xb8c77482e45f1f44de1745f52c74426c631bdd52",
    takerTokenFeeAmount: "0",
    verifyingContract: "0xdef1c0ded9bec7f1a1670819833240f027b25eff",
  },
];

export const bidsT = [
  {
    chainId: 1,
    expiry: "1687717375",
    feeRecipient: "0x9b858be6e3047d88820f439b240deac2418a2551",
    maker: "0x8d381481be81184259dd6e3daef415bccf71a610",
    makerAmount: "4372100000000000000",
    makerToken: "0xb8c77482e45f1f44de1745f52c74426c631bdd52",
    pool: "0x0000000000000000000000000000000000000000000000000000000000000000",
    salt: "1687630975",
    sender: "0x0000000000000000000000000000000000000000",
    taker: "0x0000000000000000000000000000000000000000",
    takerAmount: "1901863000000000000",
    takerToken: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    takerTokenFeeAmount: "0",
    verifyingContract: "0xdef1c0ded9bec7f1a1670819833240f027b25eff",
  },
  {
    chainId: 1,
    expiry: "1688150287",
    feeRecipient: "0x9b858be6e3047d88820f439b240deac2418a2551",
    maker: "0x8d381481be81184259dd6e3daef415bccf71a610",
    makerAmount: "4372000000000000000",
    makerToken: "0xb8c77482e45f1f44de1745f52c74426c631bdd52",
    pool: "0x0000000000000000000000000000000000000000000000000000000000000000",
    salt: "1687545487",
    sender: "0x0000000000000000000000000000000000000000",
    taker: "0x0000000000000000000000000000000000000000",
    takerAmount: "2002376000000000000",
    takerToken: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    takerTokenFeeAmount: "0",
    verifyingContract: "0xdef1c0ded9bec7f1a1670819833240f027b25eff",
  },
];
