"use client";

import Image from "next/image";

interface PriceBoxItemProps {
  makerToken: string;
  makerAmount: number;
  makerlogoSrc: string;
  takerToken: string;
  takerAmount: string;
  takerlogoSrc: string;
}

const PriceBoxItem = () => {
  return (
    <>
      <li className="border-b-[1px]  border-b-gray-400 py-2 flex flex-row gap-2 justify-between w-full">
        <div className="flex flex-row items-center w-full">
          <div>
            <Image
              alt="logo"
              width={30}
              height={30}
              src={
                "https://cdn.moralis.io/eth/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png"
              }
            />
          </div>
          <div className=" flex flex-col ml-1.5">
            <span className="font-bold text-[10px]">WETH</span>
            <span className=" font-semibold text-[12px] text-gray-500">
              123122.2
            </span>
          </div>
        </div>
        <div className="flex flex-row items-center w-full">
          <div>
            <Image
              alt="logo"
              width={30}
              height={30}
              src={
                "https://cdn.moralis.io/eth/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png"
              }
            />
          </div>
          <div className=" flex flex-col ml-1.5">
            <span className="font-bold text-[10px]">WETH</span>
            <span className=" font-semibold text-[12px] text-gray-500">
              123122.2
            </span>
          </div>
        </div>
      </li>
    </>
  );
};

export default PriceBoxItem;
