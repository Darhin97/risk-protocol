"use client";

import axios from "axios";
import {
  createContext, Dispatch, SetStateAction,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { toast } from "react-hot-toast";


interface TokenProviderProps {
  children: React.ReactNode;
}

interface TokenContexts {
  selectedToken: SelectedToken;
  setSelectedToken: (newToken: SelectedToken) => void;
  handleQouteToken: (token: string) => void;
  handleBaseToken: (token: string) => void;
  fetchOrderBook: () => void;
  setAsks:  Dispatch<SetStateAction<any>>
  setBids: Dispatch<SetStateAction<any>>;
  setLatest: Dispatch<SetStateAction<any>>;
  latest: any;
  asks: any;
  bids: any;
}

export type SelectedToken = {
  quoteToken: string;
  baseToken: string;
};



// const TokenContext = createContext<TokenContexts>({});
const TokenContext = createContext<Partial<TokenContexts>>({});

const TokenProvider: React.FC<TokenProviderProps> = ({ children }) => {
  const [selectedToken, setSelectedToken] = useState<SelectedToken>({
    quoteToken: "",
    baseToken: "",
  });
  const [asks, setAsks] = useState<any>([]);
  const [bids, setBids] = useState<any>([]);
  const [latest, setLatest] = useState<any>([]);

  function handleQouteToken(token: string) {
    setSelectedToken((prev) => ({
      ...prev,
      quoteToken: token,
    }));
  }
  function handleBaseToken(token: string) {
    setSelectedToken((prev) => ({
      ...prev,
      baseToken: token,
    }));
  }


  const handleAsks =(asks: any) => setAsks([...asks])



  const handleBids = (bids: any) => setBids([...bids])

  const fetchOrderBook = useCallback(async () => {
    if (selectedToken.baseToken === "" || selectedToken.quoteToken === "") {
      return toast.error("Choose quote token or base token");
    }

    if (selectedToken.baseToken === selectedToken.quoteToken) {
      return toast.error("Selected tokens can't be the same");
    }

    const { baseToken, quoteToken } = selectedToken;
    const params = { baseToken, quoteToken };

    try {
      const url = "/api/orderbook";
      const response = await axios.get(url, { params });
      const data = response.data;

      handleAsks(data?.asks?.records);
      handleBids(data?.bids?.records);
    } catch (error) {
      toast.error("Error fetching order book");
    }
  }, [ selectedToken]);


  const value = useMemo(() => {
    return {
      selectedToken,
      asks,
      bids,
      handleBaseToken,
      handleQouteToken,
      handleAsks,
      handleBids,
      fetchOrderBook,
      setBids,
      setAsks,
      setLatest,
      latest,
      setSelectedToken
    };
  }, [asks, bids, setAsks, latest, setBids, selectedToken, fetchOrderBook]);

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
