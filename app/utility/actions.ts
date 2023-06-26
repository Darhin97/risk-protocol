"use client";

import { v4 as uuidv4 } from "uuid";

export const createObject = function (data: any) {
  return {
    id: uuidv4(),
    makerToken: data.makerToken,
    makerAmount: data.makerAmount,
    takerToken: data.takerToken,
    takerAmount: data.takerAmount,
  };
};

export const FormatTokenValues = (decimal: number, input: string) => {
  const number = parseInt(input.trim());

  return (number / 10 ** decimal).toFixed(4);
};
