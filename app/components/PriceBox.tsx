"use client";

import { createObject } from "../utility/actions";
import { TOKEN_LIST } from "../utility/data";
import PriceBoxItem from "./PriceBoxItem";
import { useState, useEffect } from "react";

interface PriceBoxProps {
  title: string;
  tokenList?: any;
}

const PriceBox: React.FC<PriceBoxProps> = (props) => {
  const { title, tokenList } = props;
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(tokenList.map((token) => token.order));
  }, [tokenList]);

  return (
    <div className="bg- w-full h-[350px] rounded-2xl shadow-md py-5 px-2">
      <h3 className="font-semibold text-xl mb-3">{title}</h3>
      <ul className="bg-gray-100 px-4   overflow-y-scroll overflow-hidden  border border-gray-300 rounded-lg shadow-lg w-full h-[85%] relative">
        <div className="flex flex-row w-full justify-between gap-2 py-2 sticky top-0 bg-white">
          <p className="w-full font-bold ml-1.5">Maker</p>
          <p className="w-full font-bold ml-1.5">Taker</p>
        </div>

        {orders.map((token) => {
          const makerP = TOKEN_LIST.find(
            (value) => token.takerToken === value.value
          );
          const takerP = TOKEN_LIST.find(
            (value) => token.makerToken === value.value
          );
          return (
            <PriceBoxItem
              key={token.id}
              makerToken={makerP?.label}
              makerAmount={token.takerAmount}
              makerlogoSrc={makerP?.logoSrc}
              takerToken={takerP?.label}
              takerAmount={token.makerAmount}
              takerlogoSrc={takerP?.logoSrc}
              decimalMaker={takerP?.decimals}
              decimalTaker={makerP?.decimals}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default PriceBox;
