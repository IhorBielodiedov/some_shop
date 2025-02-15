import { create } from "zustand";
import { ReactNode } from "react";

type PopupType = {
  children: ReactNode;
};
type PopupStore = {
  /**
   * Параметры всплывающего окна
   */
  popup?: PopupType;
  showPopup: (children: ReactNode) => void;

  /**
   * Демонтирует всплывающее окно
   */
  //eslint-disable-next-line @typescript-eslint/ban-types
  removePopup: () => void;
};

export const usePopupStore = create<PopupStore>()((set, get) => ({
  popup: undefined,
  showPopup(children) {
    set((state) => ({
      ...state,
      popup: { children },
    }));
  },
  removePopup() {
    set((state) => ({
      ...state,
      popup: undefined,
    }));
  },
}));
