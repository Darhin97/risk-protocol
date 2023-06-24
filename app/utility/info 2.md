Starting with Next.js 10, you can use the built-in fetch method instead of axios for making HTTP requests. Here's how you can do this in Next.js 13.4:

```jsx
import { useState } from "react";

const TOKENS = {
  BTC: "your_btc_address",
  ETH: "your_eth_address",
  USDT: "your_usdt_address",
};

export default function Home() {
  const [selectedTokens, setSelectedTokens] = useState({
    baseToken: "",
    quoteToken: "",
  });

  const fetchOrderBook = async () => {
    const { baseToken, quoteToken } = selectedTokens;

    const url = `https://api.0x.org/orderbook/v1?quoteToken=${quoteToken}&baseToken=${baseToken}`;
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
  };

  console.log(selectedTokens);

  const handleTokenChange = (e) => {
    console.log(e);
    setSelectedTokens((prevTokens) => ({
      ...prevTokens,
      [e.target.name]: TOKENS[e.target.value],
    }));
  };

  return (
    <div>
      <select name="baseToken" onChange={handleTokenChange}>
        <option value="">--Choose a base token--</option>
        {Object.keys(TOKENS).map((token) => (
          <option key={token} value={token}>
            {token}
          </option>
        ))}
      </select>

      <select name="quoteToken" onChange={handleTokenChange}>
        <option value="">--Choose a quote token--</option>
        {Object.keys(TOKENS).map((token) => (
          <option key={token} value={token}>
            {token}
          </option>
        ))}
      </select>

      <button onClick={fetchOrderBook}>Fetch Order Book</button>
    </div>
  );
}
```

This version of the code works similarly to the previous version but uses the fetch API built into Next.js (and modern browsers) instead of axios to make HTTP requests. As before, replace `'your_btc_address'`, `'your_eth_address'`, and `'your_usdt_address'` with the correct contract addresses for BTC, ETH, and USDT.

As with the previous version, this code doesn't handle loading states or errors that might occur during the fetch request. In a production application, you would want to enhance this code to handle those cases.

================================================

"use client";

import { useState } from "react";
import axios from "axios";

const CurrentOrder = () => {
const [quoteToken, setQuoteToken] = useState(
"0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
);
const [baseToken, setBaseToken] = useState(
"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
);

const handleClick = async () => {
const params = {
quoteToken,
baseToken,
};

    console.log(params);
    try {
      const response = await axios.get("/api/orderbook", { params });
      const data = await response;
      console.log(data); // You can handle the API response here
    } catch (error) {
      console.error("Error fetching data:", error);
    }

};

return (

<div className="flex">
<button className="bg-green-600 p-4" onClick={handleClick}>
Fetch Order Book
</button>
<button
className="bg-red-600 p-4"
onClick={() => setQuoteToken("YOUR_NEW_QUOTE_TOKEN")} >
Select Quote Token
</button>
<button
className="bg-pink-600 p-4"
onClick={() => setBaseToken("YOUR_NEW_BASE_TOKEN")} >
Select Base Token
</button>
</div>
);
};

export default CurrentOrder;
