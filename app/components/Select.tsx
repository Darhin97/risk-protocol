"use client";

import Select from "react-select";
import { ITokenList, TOKEN_LIST } from "../utility/data";
import Image from "next/image";

interface SelectProps {
  name?: string;
  value: string | null;
  action: (value: ITokenList) => void;
}

const TokenSelect: React.FC<SelectProps> = (props) => {
  const { name, value, action } = props;
  const newValue = TOKEN_LIST.find((token) => token.address === value);

  return (
    <div>
      <Select
        isClearable={true}
        name={name}
        value={newValue ? newValue : null}
        onChange={(value) => action(value as ITokenList)}
        placeholder="Select Token"
        options={TOKEN_LIST}
        formatOptionLabel={(option: ITokenList) => (
          <div className="flex flex-row items-center gap-3">
            <div>
              <Image width={30} height={30} src={option.logoSrc} alt="logo" />
            </div>
            <div className="flex flex-col">
              <div>{option.name}</div>
              <div className="text-neutral-500 ml-1">{option.symbol}</div>
            </div>
          </div>
        )}
        classNames={{
          control: () => "p-1 border-2",
          input: () => "text-lg",
          option: () => "text-lg",
        }}
        theme={(theme) => ({
          ...theme,
          borderRadius: 6,
          colors: {
            ...theme.colors,
            primary25: "#e3dfdf",
            primary: "#fff",
          },
        })}
      />
    </div>
  );
};

export default TokenSelect;
