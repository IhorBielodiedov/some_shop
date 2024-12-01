import { create } from "zustand";
import * as api from "../../api";
import {
  OrderInitialState,
  PaymentMethod,
  ProviderCity,
} from "../../utils/types";

const initialState: OrderInitialState = {
  client: {
    firstName: null,
    lastName: null,
    phone: null,
    email: null,
    paymentMethod: null,
    city: null,
    promocode: null,
  },
  providerCities: null,
  paymentMethods: null,
};

interface Actions {
  getCitiesList: (
    provider: string,
    countryCode: string,
    cityName: string
  ) => Promise<void>;
  getPaymentMethods: () => Promise<void>;
  updateClientProperty: <K extends keyof OrderInitialState["client"]>(
    key: K,
    value: OrderInitialState["client"][K]
  ) => void;
}

export const useOrderStore = create<OrderInitialState & Actions>()(
  (set, get) => ({
    // ** state */
    ...initialState,
    getCitiesList: async (
      provider: string,
      countryCode: string,
      cityName: string
    ) => {
      try {
        const { data: providerCities } = await api.getCities(
          provider,
          countryCode,
          cityName
        );
        set(() => ({ providerCities }));
      } catch (e) {}
    },
    getPaymentMethods: async () => {
      try {
        const { data: paymentMethods } = await api.getPaymentMethods();
        set((state) => ({
          paymentMethods,
          client: { ...state.client, paymentMethod: paymentMethods[0] },
        }));
      } catch (e) {}
    },
    updateClientProperty: <K extends keyof OrderInitialState["client"]>(
      key: K,
      value: OrderInitialState["client"][K]
    ) => {
      set((state) => ({
        client: { ...state.client, [key]: value },
      }));
    },
  })
);
