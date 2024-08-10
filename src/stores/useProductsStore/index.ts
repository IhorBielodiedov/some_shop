import { create } from "zustand";
import { Category } from "../../utils/types";

interface State {
  activeCategory: Category | null;
}
interface Actions {
  setActiveCategory: (activeCategory: Category | null) => void;
}
const initialState: State = {
  activeCategory: null,
};
export const useProductsStore = create<State & Actions>()((set, get) => ({
  ...initialState,
  setActiveCategory: (activeCategory: Category | null) => {
    console.log(activeCategory);
    set((state) => ({ ...state, activeCategory }));
  },
}));
