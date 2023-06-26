export interface ITokenList {
  label: string;
  value: string;
  symbol: string;
  decimals: number;
  logoSrc: string;
}

export const TOKEN_LIST: ITokenList[] = [
  {
    label: "Wrapped Ether",
    value: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    symbol: "WETH",
    decimals: 18,
    logoSrc:
      "https://cdn.moralis.io/eth/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png",
  },

  {
    value: "0xb8c77482e45f1f44de1745f52c74426c631bdd52",
    label: "BNB",
    symbol: "BNB",
    decimals: 18,
    logoSrc: "https://etherscan.io/token/images/bnb_28_2.png",
  },
  {
    value: "0xdac17f958d2ee523a2206206994597c13d831ec7",

    label: "Tether USD",
    symbol: "USDT",
    decimals: 6,
    logoSrc:
      "https://cdn.moralis.io/eth/0xdac17f958d2ee523a2206206994597c13d831ec7.png",
  },
  {
    value: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    label: "USD Coin",
    symbol: "USDC",
    decimals: 6,
    logoSrc:
      "https://cdn.moralis.io/eth/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
  },

  {
    symbol: "SHIB",
    logoSrc:
      "https://cdn.moralis.io/eth/0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce.png",
    label: "Shiba Inu",
    value: "0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce",
    decimals: 18,
  },
];
