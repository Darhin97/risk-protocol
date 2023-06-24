"use client";

import { useCallback, useState } from "react";
import axios from "axios";

import useAskTokenStore from "./hooks/useAsk";
import useBidTokenStore from "./hooks/useBid";

import useSelectedToken from "./hooks/useSelectedToken";
import TokenSelect from "./components/Select";

const CurrentOrder = () => {
  const addAskToken = useAskTokenStore((state) => state.addItem);
  const askToken = useAskTokenStore((state) => state.Token);

  const addBidToken = useBidTokenStore((state) => state.addItem);
  const bidToken = useBidTokenStore((state) => state.Token);

  const token = useSelectedToken((state) => state.token);
  const setToken = useSelectedToken((state) => state.setToken);
  const resetToken = useSelectedToken((state) => state.resetToken);

  const handleBaseTokenChange = useCallback(
    (value: any) => {
      const updatedToken = {
        ...token,
        baseToken: value?.address || "",
      };
      setToken(updatedToken);
    },
    [setToken, token]
  );

  const handleQouteTokenChange = useCallback(
    (value: any) => {
      const updatedToken = {
        ...token,
        quoteToken: value?.address || "",
      };
      setToken(updatedToken);
    },
    [setToken, token]
  );

  console.log(token);

  const fetchOrderBook = async () => {
    const { baseToken, quoteToken } = token;
    const params = { baseToken, quoteToken };

    const url = "https://api.0x.org/orderbook/v1";
    const response = await axios.get(url, { params });
    const data = await response;

    addAskToken(data.data?.asks.records);
    addBidToken(data.data?.bids.records);

    console.log(data);
    // console.log("new object", ask);
  };

  console.log("ask", askToken);
  console.log("bid", bidToken);

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <button onClick={fetchOrderBook}>Fetch Order Book</button>
      <div className="flex">
        <ul>
          <p>Ask</p>
          {askToken.length &&
            askToken.map((ask) => (
              <li key={ask.order.salt}>
                <p>{ask.order.makerToken}</p>
                <p>{ask.order.makerAmount}</p>
              </li>
            ))}
        </ul>
      </div>
      <div className=" bg-yellow-50 w-[20rem] p-5">
        <TokenSelect
          name="baseToken"
          value={token.baseToken}
          action={handleBaseTokenChange}
        />
      </div>
      <div className=" bg-yellow-50 w-[20rem] p-5">
        <TokenSelect
          name="quoteToken"
          value={token.quoteToken}
          action={handleQouteTokenChange}
        />
      </div>
    </div>
  );
};

export default CurrentOrder;
