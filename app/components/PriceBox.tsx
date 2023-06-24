"use client";

import Image from "next/image";
import PriceBoxItem from "./PriceBoxItem";

const PriceBox = () => {
  return (
    <div className="bg- w-full h-[350px] rounded-2xl shadow-md py-5 px-2">
      <h3 className="font-semibold text-xl mb-3">Asks Token</h3>
      <ul className="bg-gray-100 px-4 py-2  overflow-y-scroll overflow-hidden  border border-gray-300 rounded-lg shadow-lg w-full h-[85%]">
        <PriceBoxItem />
      </ul>
    </div>
  );
};

export default PriceBox;
