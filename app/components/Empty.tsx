"use client";

import { createObject } from "../utility/actions";
import PriceBoxItem from "./PriceBoxItem";
import { useState, useEffect } from "react";

interface PriceBoxProps {
  title: string;
}

const Empty: React.FC<PriceBoxProps> = (props) => {
  const { title } = props;

  return (
    <div className="bg- w-full h-[350px] rounded-2xl shadow-md py-5 px-2">
      <h3 className="font-semibold text-xl mb-3">{title}</h3>
      <ul className="bg-gray-100 px-4   overflow-y-scroll overflow-hidden  border border-gray-300 rounded-lg shadow-lg w-full h-[85%] relative">
        <div className="flex flex-row w-full justify-between gap-2 py-2 sticky top-0 bg-white">
          <p className="w-full font-bold ml-1.5">Maker</p>
          <p className="w-full font-bold ml-1.5">Taker</p>
        </div>
        <div className="text-sm text-gray-400">No matches found yet</div>
      </ul>
    </div>
  );
};

export default Empty;
