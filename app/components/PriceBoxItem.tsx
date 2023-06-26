"use client";

import Image from "next/image";
import React from "react";
import { FormatTokenValues } from "../utility/actions";

interface PriceBoxItemProps {
  makerToken: string;
  makerAmount: number;
  makerlogoSrc: string;
  takerToken: string;
  takerAmount: string;
  takerlogoSrc: string;
  decimalMaker: number;
  decimalTaker: number;
}

const PriceBoxItem: React.FC<PriceBoxItemProps> = (props) => {
  const {
    makerToken,
    makerAmount,
    makerlogoSrc,
    takerToken,
    takerAmount,
    takerlogoSrc,
    decimalMaker,
    decimalTaker,
  } = props;

  return (
    <>
      <li className="border-b-[1px]  border-b-gray-400 py-2 flex flex-row gap-2 justify-between w-full">
        <div className="flex flex-row items-center w-full">
          <div>
            <Image alt="logo" width={30} height={30} src={makerlogoSrc} />
          </div>
          <div className=" flex flex-col ml-1.5">
            <span className="font-bold text-[10px]">{makerToken}</span>
            <span className=" font-semibold text-[12px] text-gray-500">
              {FormatTokenValues(decimalTaker, makerAmount.toString())}
            </span>
          </div>
        </div>
        <div className="flex flex-row items-center w-full">
          <div>
            <Image alt="logo" width={30} height={30} src={takerlogoSrc} />
          </div>
          <div className=" flex flex-col ml-1.5">
            <span className="font-bold text-[10px]">{takerToken}</span>
            <span className=" font-semibold text-[12px] text-gray-500">
              {FormatTokenValues(decimalMaker, takerAmount)}
            </span>
          </div>
        </div>
      </li>
    </>
  );
};

export default PriceBoxItem;
