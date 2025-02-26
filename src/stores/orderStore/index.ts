import { create } from "zustand";
import * as api from "../../api";
import { CalculateRequestData, OrderInitialState } from "../../utils/types";

const initialState: OrderInitialState = {
  client: {
    firstName: null,
    lastName: null,
    phone: null,
    email: null,
    paymentMethod: null,
    city: null,
    promocode: null,
    point: null,
    deliveryCost: null,
    deliveryInterval: null,
  },
  loadingStates: {
    mapLoadingState: false,
  },
  providerCities: null,
  paymentMethods: null,
  points: null,
};

interface Actions {
  getCitiesList: (
    provider: string,
    countryCode: string,
    cityName: string
  ) => Promise<void>;
  getPaymentMethods: () => Promise<void>;
  getPointsList: (city: string) => Promise<void>;
  updateClientProperty: <K extends keyof OrderInitialState["client"]>(
    key: K,
    value: OrderInitialState["client"][K]
  ) => void;
  calculateDeliveryCost: (body: CalculateRequestData) => Promise<void>;
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
        set((state) => ({
          loadingStates: { ...state.loadingStates, mapLoadingState: true },
        }));
        const { data: providerCities } = await api.getCities(
          provider,
          countryCode,
          cityName
        );
        set(() => ({ providerCities }));
      } catch (e) {}
      set((state) => ({
        loadingStates: { ...state.loadingStates, mapLoadingState: false },
      }));
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
    getPointsList: async (city: string) => {
      try {
        set((state) => ({
          loadingStates: { ...state.loadingStates, mapLoadingState: true },
        }));
        const { data: points } = await api.getPoints(city);
        set(() => ({ points }));
      } catch (e) {}
      set((state) => ({
        loadingStates: { ...state.loadingStates, mapLoadingState: false },
      }));
    },
    updateClientProperty: <K extends keyof OrderInitialState["client"]>(
      key: K,
      value: OrderInitialState["client"][K]
    ) => {
      set((state) => ({
        client: { ...state.client, [key]: value },
      }));
    },
    calculateDeliveryCost: async (body: CalculateRequestData) => {
      const response = await api.calculate(body);
      const intervals = await api.calculate(body, true);

      set((state) => ({
        ...state,
        client: { ...state.client, deliveryCost: response.data },
      }));
    },
  })
);
