import { create } from "zustand";

type Store = {
  Token: any[];
  addItem: (item: any) => void;
};

const useAskTokenStore = create<Store>((set) => ({
  Token: [],
  addItem: (item) => set((state) => ({ Token: [...state.Token, ...item] })),
}));

export default useAskTokenStore;
