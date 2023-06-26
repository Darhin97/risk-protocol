"use client";
import { CgArrowsExchangeV } from "react-icons/cg";
import TokenSelect from "./Select";
import { useTokenContext } from "../context/TokenContext";

interface CardProps {
  handleClick: () => void;
}

const Card: React.FC<CardProps> = (props) => {
  const { selectedToken, handleBaseToken, handleQouteToken } =
    useTokenContext();
  const { handleClick } = props;

  return (
    <div className="flex flex-col gap-2 rounded-lg  bg-white w-full min-h-[450px]:">
      <div className="p-5 font-semibold text-lg border-b-2">
        <h3>Choose Crypto</h3>
      </div>
      {/* body */}
      <div className="flex flex-col px-2 pb-5 w-full gap-3">
        <div className="flex flex-col gap-3 px-4">
          <h4>Quote Token</h4>
          <TokenSelect
            name="quoteToken"
            value={selectedToken?.quoteToken}
            action={handleQouteToken}
          />
        </div>
        <div className="flex items-center justify-center">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-500 shadow-md">
            <CgArrowsExchangeV className="text-2xl text-white" />
          </span>
        </div>
        <div className="flex flex-col gap-3 px-4">
          <h4>Base Token</h4>
          <TokenSelect
            name="baseToken"
            value={selectedToken?.baseToken}
            action={handleBaseToken}
          />
        </div>
        <div className="px-5 w-full">
          <button
            onClick={handleClick}
            className="bg-gray-400 w-full text-white px-3 py-1.5 rounded-full border-2 border-gray-400 hover:bg-gray-300 shadow-md active:bg-gray-400"
          >
            Get prices
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
