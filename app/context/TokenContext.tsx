"use client";

import axios from "axios";
import { createContext, useContext, useMemo, useState } from "react";

interface TokenProviderProps {
  children: React.ReactNode;
}

interface TokenContexts {
  selectedToken: SelectedToken;
  setSelectedToken: (newToken: SelectedToken) => void;
}

// const defaultValues: TokenContext = {
//   selectedToken,
//   setSelectedToken,
// };

type SelectedToken = {
  quoteToken: string;
  baseToken: string;
};

const TokenContext = createContext<Partial<TokenContexts>>({});

const TokenProvider: React.FC<TokenProviderProps> = ({ children }) => {
  const [selectedToken, setSelectedToken] = useState<SelectedToken>({
    quoteToken: "",
    baseToken: "",
  });
  const [asks, setAsks] = useState<any>([]);
  const [bids, setBids] = useState<any>([]);

  function handleSelectedToken(token: any) {
    setSelectedToken((prev) => ({
      ...prev,
      token,
    }));
  }

  function handleAsks(asks: any) {
    setAsks((prev) => [...prev, asks]);
  }

  function handleBids(asks: any) {
    setBids((prev) => [...prev, asks]);
  }

  const fetchOrderBook = async () => {
    const { baseToken, quoteToken } = selectedToken;
    const params = { baseToken, quoteToken };

    const url = "https://api.0x.org/orderbook/v1";
    const response = await axios.get(url, { params });
    const data = await response;

    handleAsks(data.data?.asks.records);
    handleBids(data.data?.bids.records);

    console.log(data);
    // console.log("new object", ask);
  };

  const value = useMemo(() => {
    return {
      selectedToken,
      asks,
      bids,
      handleSelectedToken,
      handleAsks,
      handleBids,
    };
  }, [asks, bids, selectedToken]);

  return (
    <TokenContext.Provider value={value}>{children}</TokenContext.Provider>
  );
};

const useTokenContext = () => {
  const context = useContext(TokenContext);
  if (context === undefined) {
    throw new Error("PostContext was used outside of the PostProvider");
  }
  return context;
};

export { TokenProvider, useTokenContext };
