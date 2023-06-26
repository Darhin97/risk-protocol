"use client";

import { v4 as uuidv4 } from "uuid";

import Card from "./components/Card";
import Header from "./components/Header";
import PriceBox from "./components/PriceBox";
import { useTokenContext } from "./context/TokenContext";
import { useEffect, useState } from "react";
import Empty from "./components/Empty";
import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket";
import { TOKEN_LIST } from "./utility/data";
import LatestUpdates from "./components/LatestUpdates";

export default function Home() {
  const {
    asks,
    bids,
    selectedToken,
    fetchOrderBook,
    setAsks,
    setBids,
    latest,
    setLatest,
  } = useTokenContext();
  const [isWebSocketOpen, setIsWebSocketOpen] = useState(false);

  const  baseToken  = selectedToken?.baseToken;
  const quoteToken = selectedToken?.quoteToken

  const socketURL = "wss://api.0x.org/orderbook/v1";

  const requestPayload = {
    type: "subscribe",
    channel: "orders",
    requestId: uuidv4(),
    pairs: [`${quoteToken}-${baseToken}`],
  };

  const { sendMessage, lastMessage } = useWebSocket(socketURL, {
    onOpen: () => {
      setIsWebSocketOpen(true);
    },
    shouldReconnect: () => true,
    reconnectAttempts: 3,
    reconnectInterval: 3000,
  });

  const handleFetchOrderBook = async () => {
    if (fetchOrderBook) {
      await fetchOrderBook();
    }

    if (isWebSocketOpen) {
      sendMessage(JSON.stringify(requestPayload));
    }
  };

  const update = (data: any) => {
    data.map((token:any) => {
      if (
        token.order.makerToken === quoteToken &&
        token.order.takerToken === baseToken
      ) {
        if(setBids)
        setBids((prev: any) => [...prev, token])
      }
      if (
        token.order.makerToken === baseToken &&
        token.order.takerToken === quoteToken
      ) {
        if(setAsks)
        setAsks((prev: any) => [...prev, token]);
      }
      if (
        TOKEN_LIST.find((tokenS) => tokenS.value === token.order.makerToken) &&
        TOKEN_LIST.find((tokenS) => tokenS.value === token.order.takerToken)
      ) {
        if(setLatest)
        setLatest((prev: any) => [...prev, token.order]);
      }
    });
  };

  useEffect(() => {
    if (baseToken !== "" && quoteToken !== "" && lastMessage !== null) {
      const messageData = JSON.parse(lastMessage.data);
      update(messageData.payload);
    }
  }, [lastMessage, baseToken, quoteToken]);

  useEffect(() => {
    if (baseToken !== "" && quoteToken !== "") {
      if(setLatest)
      setLatest([]);
    }
  }, [baseToken, quoteToken]);

  return (
    <main className="bg-gray-800 w-screen h-screen text-white">
      <Header />
      <div className=" max-w-[1240px] md:h-[80vh] text-black mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-5 w-full h-full gap-5 bg-gray-200 rounded-2xl shadow-lg p-5">
          <div className="md:col-span-3 bg-gray-200  ">
            <div className="flex flex-col gap-5 w-full h-full">
              <div className="h-1/2 bg-gray-200 p-2">
                <div className="flex flex-row gap-3 ">
                  {asks === undefined || asks.length === 0 ? (
                    <Empty title="Asks Token" />
                  ) : (
                    <PriceBox title="Asks Token" tokenList={asks} />
                  )}

                  {bids === undefined || bids.length === 0 ? (
                    <Empty title="Bids Token" />
                  ) : (
                    <PriceBox title="Bids Token" tokenList={bids} />
                  )}
                </div>
              </div>
              <div>
                <div>
                  {latest === undefined || latest.length === 0 ? (
                    <Empty title="Latest Updates" />
                  ) : (
                    <LatestUpdates title="Latest Updates" tokenList={latest} />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 py-10 px-5">
            <div className="w-full pr-5">
              <Card handleClick={handleFetchOrderBook} />
            </div>
          </div>
        </div>
      </div>
    </main>

    // <OrderbookClient />
  );
}
