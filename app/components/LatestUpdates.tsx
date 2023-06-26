"use client";


import {ITokenList, TOKEN_LIST} from "../utility/data";
import PriceBoxItem from "./PriceBoxItem";
import { useState, useEffect } from "react";

interface LatestUpdatesProps {
  title: string;
  tokenList?: any;
}

const LatestUpdates: React.FC<LatestUpdatesProps> = (props) => {
  const { title, tokenList } = props;
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(tokenList);
  }, [tokenList]);

  return (
    <div className="bg- w-full h-[350px] rounded-2xl shadow-md py-5 px-2">
      <h3 className="font-semibold text-xl mb-3">{title}</h3>
      <ul className="bg-gray-100 px-4   overflow-y-scroll overflow-hidden  border border-gray-300 rounded-lg shadow-lg w-full h-[85%] relative">
        <div className="flex flex-row w-full justify-between gap-2 py-2 sticky top-0 bg-white">
          <p className="w-full font-bold ml-1.5">Maker</p>
          <p className="w-full font-bold ml-1.5">Taker</p>
        </div>

        {orders.map((token:any) => {
          const makerP:ITokenList | undefined = TOKEN_LIST.find(
            (value) => token.takerToken === value.value
          );
          const takerP:ITokenList | undefined = TOKEN_LIST.find(
            (value) => token.makerToken === value.value
          );
          return (
            <PriceBoxItem
              key={token.id}
              makerToken={ makerP?.label as string}
              makerAmount={token.takerAmount}
              makerlogoSrc={makerP?.logoSrc as string}
              takerToken={takerP?.label as string}
              takerAmount={token.makerAmount}
              takerlogoSrc={takerP?.logoSrc as string}
              decimalMaker={takerP?.decimals as number}
              decimalTaker={makerP?.decimals as number}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default LatestUpdates;
