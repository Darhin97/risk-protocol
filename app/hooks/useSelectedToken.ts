import { create } from "zustand";

type Token = {
  baseToken: string;
  quoteToken: string;
};

type Store = {
  token: Token;
  setToken: (updatedToken: any) => void;
  resetToken: () => void;
};

const useSelectedToken = create<Store>((set) => ({
  token: {
    baseToken: "",
    quoteToken: "",
  },
  //   setToken: (updatedToken) => set((state) => ({ token:updatedToken  })),
  setToken: (updatedToken) => {
    set(() => ({
      token: updatedToken,
    }));
  },
  resetToken: () => set(() => ({ token: { baseToken: "", quoteToken: "" } })),
}));

export default useSelectedToken;
