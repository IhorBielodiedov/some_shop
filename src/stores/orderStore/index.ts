import { create } from "zustand";
import * as api from "../../api";
import { OrderInitialState, ProviderCity } from "../../utils/types";

const initialState: OrderInitialState = {
  client: {
    firstName: null,
    lastName: null,
    phone: null,
    email: null,
    paymentMethod: null,
    city: null,
  },
  providerCities: null,
};

interface Actions {
  getCitiesList: (
    provider: string,
    countryCode: string,
    cityName: string
  ) => Promise<void>;
  setCity: (city: ProviderCity) => void;
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
        const cities = await api.getCities(provider, countryCode, cityName);
        set(() => ({ providerCities: cities.data }));
      } catch (e) {}
    },
    setCity: (city: ProviderCity) => {
      set((state) => ({ client: { ...state.client, city } }));
    },
  })
);
