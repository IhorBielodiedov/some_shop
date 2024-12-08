import axios from "axios";
import {
  CalculateRequestData,
  DeliveryDataType,
  ProviderCitiesDataType,
  ProviderPointsDataType,
} from "../utils/types";

export const apiShip = axios.create({
  baseURL: process.env.REACT_APP_API_SHIP_BASE_URL,
  headers: { Authorization: `7ceb04a536610a4084b9e4326ab700b0` },
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
