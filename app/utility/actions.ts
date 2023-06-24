"use client";

import { v4 as uuidv4 } from "uuid";

export const createObject = function (data: any) {
  const { order } = data;
  return {
    id: uuidv4(),
    makerToken: order.makerToken,
    makerAmount: order.makerAmount,
    takerToken: order.takerToken,
    takerAmount: order.takerAmount,
  };
};
