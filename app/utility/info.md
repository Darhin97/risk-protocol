In Next.js 13.4, you can create an API route that will handle the fetching of the order book from the 0x API. This is beneficial for two main reasons: it abstracts the fetching logic away from the front end, and it allows you to introduce server-side processing or transformations on the data before sending it to the front end.

Here's how you can achieve this:

1. First, create an API route file in your `pages/api` directory. For instance, you could create a file named `orderbook.js`.

`pages/api/orderbook.js`:

```jsx
export default async function handler(req, res) {
  const { baseToken, quoteToken } = req.query;

  const url = `https://api.0x.org/orderbook/v1?quoteToken=${quoteToken}&baseToken=${baseToken}`;

  const response = await fetch(url);
  const data = await response.json();

  res.status(200).json(data);
}
```

2. Then, update your page component to call your newly created API route instead of the 0x API directly.

`pages/index.js`:

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

    const url = `/api/orderbook?quoteToken=${quoteToken}&baseToken=${baseToken}`;
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
  };

  const handleTokenChange = (e) => {
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

As before, replace `'your_btc_address'`, `'your_eth_address'`, and `'your_usdt_address'` with the correct contract addresses for BTC, ETH, and USDT.

Now, when you click the "Fetch Order Book" button, it will make a request to your own API route, which will then make a request to the 0x API and return the response back to the front end. As with the previous versions, you should add error handling and loading states for a more robust application.
