import axios from "axios";
import {
  CalculateRequestData,
  Category,
  DeliveryDataType,
  GetProductsParams,
  Product,
  ProviderCitiesDataType,
  ProviderPointsDataType,
} from "../utils/types";
import { GetCartsResponse } from "./types";

const token = localStorage.getItem("access");

export const apiShip = axios.create({
  baseURL: process.env.REACT_APP_API_SHIP_BASE_URL,
  headers: { Authorization: `7ceb04a536610a4084b9e4326ab700b0` },
});

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: { Authorization: `Bearer ${token}` },
});

/**
 * Получение списка городов
 */
export const getCities = (
  provider: string,
  countryCode: string,
  cityName: string
) =>
  apiShip.get<ProviderCitiesDataType>(
    `/lists/providerCities/${provider}?filter=countryCode=${countryCode};cityName%${cityName};oblName%${cityName}`
  );
export const getPaymentMethods = () => apiShip.get(`/lists/paymentMethods/`);

export const getPoints = (city: string) =>
  apiShip.get<ProviderPointsDataType>(
    `/lists/points?limit=523&filter=city=${city};providerKey=cdek;availableOperation=[2,3]&fields=countryCode,postIndex,region,city,cityGuid,address,code,name,timetable,id,lat,lng&enabledCheckOff=0`
  );

export const getTariffs = (city: string) =>
  apiShip.get(
    `/lists/points?limit=523&filter=city=${city};providerKey=cdek;availableOperation=[2,3]&fields=countryCode,postIndex,region,city,cityGuid,address,code,name,timetable,id,lat,lng&enabledCheckOff=0`
  );

export const calculate = (body: CalculateRequestData, intervals?: boolean) =>
  apiShip.post<DeliveryDataType>(
    `/calculator${intervals ? "/intervals" : ""}`,
    body
  );

/// API
type CategoriesResponse = { categories: Array<Category>; count: number };

export const getCategories = () => api.get<CategoriesResponse>(`/categories`);

export const getPhoto = (img: string) =>
  api.get(`/photos/${img}`, { responseType: "blob" });

export const getAllProducts = (
  params: GetProductsParams = {},
  x_init_data: any
) => {
  const query = new URLSearchParams(
    params as Record<string, string>
  ).toString();
  return api.get(`/products?${query}`, {
    headers: {
      "x-init-data": x_init_data,
    },
  });
};

export const getProductsByCategory = (category_id: number, x_init_data: any) =>
  api.get(`/categories/${category_id}/products`, {
    headers: {
      "x-init-data": x_init_data,
    },
  });

export const getProduct = (product_id: number, x_init_data: any) =>
  api.get<Product>(`/products/${product_id}`, {
    headers: {
      "x-init-data": x_init_data,
    },
  });

export const createFavorite = (product_variant_id: number, user_id: number) =>
  api.post(`/favorites`, { product_variant_id, user_id });

export const getFavorites = (user_id: number) =>
  api.get(`/favorites/${user_id}`);

export const deleteFavorite = (product_variant_id: number, user_id: number) =>
  api.delete(`/favorites/${product_variant_id}?user_id=${user_id}`);

export const getCarts = (user_id: number) =>
  api.get<GetCartsResponse>(`/carts/${user_id}`);

export const createCart = (cart: {
  variant_id: number;
  user_id: number;
  quantity: number;
}) => api.post(`/carts`, cart);

export const updateCart = (
  cartId: number,
  cart: {
    variant_id: number;
    user_id: number;
    quantity: number;
  }
) => api.put(`/carts/${cartId}`, cart);

export const deleteCart = (cart_id: number) => api.delete(`/carts/${cart_id}`);

export const getBanners = () => api.get("/banners");

export const getPromocode = (code: string) =>
  api.get(`/promocodes?code=${code}`);
