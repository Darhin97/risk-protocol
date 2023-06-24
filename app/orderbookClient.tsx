"use client";

import { useEffect, useState } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { v4 as uuidv4 } from "uuid";
type TokenPair = string; // Add more token pair options if needed

interface Order {
  // Define the structure of an order
  id: string;
  markerToken: string;
  markerAmount: string;
  takerToken: string;
}

const LatestUpdates = (): JSX.Element => {
  const [selectedPair, setSelectedPair] = useState<TokenPair>("");
  const [orders, setOrders] = useState<Order[]>([]);

  const handlePairChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPair(event.target.value as TokenPair);
  };
  // console.log(orders);

  // const;

  const requestPayload = {
    type: "subscribe",
    channel: "orders",
    requestId: "123e4567-e89b-12d3-a456-426655440000",
    pairs: [selectedPair],
  };

  const { sendMessage, lastMessage, readyState } = useWebSocket(
    "wss://api.0x.org/orderbook/v1",
    {
      onOpen: () => {
        sendMessage(JSON.stringify(requestPayload));
      },
      shouldReconnect: () => true,
      reconnectAttempts: 3,
      reconnectInterval: 3000,
    }
  );

  useEffect(() => {
    sendMessage(JSON.stringify(requestPayload));
  }, [selectedPair, sendMessage]);

  useEffect(() => {
    if (lastMessage !== null) {
      const messageData = JSON.parse(lastMessage.data);
      // setOrders(messageData.payload[0].order);
      setOrders(messageData.payload);
    }
  }, [lastMessage]);

  return (
    <div>
      <select value={selectedPair} onChange={handlePairChange}>
        <option value="">Select a token pair</option>
        <option value="ETH-USD">ETH-USD</option>
        <option value="BTC-USD">BTC-USD</option>
        <option value="ETH-USDT">ETH-USDT</option>
        {/* Add more token pair options as needed */}
      </select>
      <div>
        <h3>Orders</h3>
        {Array.isArray(orders) && orders.length > 0 ? (
          orders.map((order) => (
            <div key={order.id}>
              <p>Price: {order.price}</p>
              <p>Quantity: {order.quantity}</p>
            </div>
          ))
        ) : (
          <p>No orders available.</p>
        )}
      </div>
      <div>WebSocket ready state: {ReadyState[readyState]}</div>
    </div>
  );
};

export default LatestUpdates;
