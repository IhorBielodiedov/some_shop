export type Product = {
  id: number;
  name: string;
  description: string;
  category_id: number;
  discount: number;
  variants: Variant[];
  count_variants: number;
};
export type Variant = {
  color: string;
  price: number;
  photos: string[];
  stock_quantity: number;
  id: number;
  description: string;
  in_favorite: boolean;
  vendor_code: number;
  external_shops: Array<{ shop_id: number; link: string }>;
  specifications: Specification[];
  reviews: any[];
};

export type Specification = {
  id: number;
  title: string;
  rows: SpecificationRow[];
};
export type SpecificationRow = {
  id: number;
  name: string;
  value: string;
};
export type Category = {
  id: number;
  name: string;
  description: string;
  photo: string;
};
export type Favourite = {
  id: number;
  variant_id: number;
  quantity: number;
  in_stock: number;
  price: number;
};
export type Review = {
  user: User;
  product_variant_id: number;
  rating: number;
  description: string;
  created_at: string;
};

export interface CartItem {
  id: number;
  variant_id: number;
  product_id: number;
  quantity: number;
  in_stock: number;
  price: number;
}

export type User = {
  id: number;
  created_at: string;
  updated_at: string;
  cart: any[];
};

interface Button {
  text: string;
  url: string;
}

export interface StorySliderProps {
  imageSrc: string;
  title: string;
  description: string;
  button?: Button;
}

export interface OrderInitialState {
  client: {
    firstName: string | null;
    lastName: string | null;
    phone: string | null;
    email: string | null;
    paymentMethod: PaymentMethod | null;
    city: ProviderCity | null;
    promocode: string | null;
    point: ProviderPoint | null;
    deliveryCost: DeliveryDataType | null;
    deliveryInterval: any | null;
  };
  loadingStates: {
    mapLoadingState: boolean;
  };
  providerCities: ProviderCitiesDataType | null;
  paymentMethods: Array<PaymentMethod> | null;
  points: ProviderPointsDataType | null;
}

export type PaymentMethod = {
  id: number;
  name: string;
  description: string;
};

export type ProviderCity = {
  fullName: string;
  cityUuid: string;
  cdekId: string;
  cityName: string;
  oblName: string;
  cityGuid?: string;
  fiasGuid?: string | null;
  countryCode: string;
  codCostLimit: string;
};

type Meta = {
  total: number;
  offset: number;
  limit: number;
};

export type ProviderCitiesDataType = {
  rows: Array<ProviderCity>;
  meta: Meta;
};

interface Worktime {
  [day: string]: string;
}

interface Extra {
  key: string;
  value: string;
}

interface Limits {
  maxSizeA: number | null;
  maxSizeB: number | null;
  maxSizeC: number | null;
  maxSizeSum: number | null;
  minWeight: number | null;
  maxWeight: number | null;
  maxCod: number | null;
}

export type ProviderPoint = Pick<
  ProviderPointFull,
  | "countryCode"
  | "postIndex"
  | "region"
  | "city"
  | "cityGuid"
  | "address"
  | "code"
  | "name"
  | "timetable"
  | "id"
  | "lat"
  | "lng"
>;

export interface ProviderPointFull {
  id: number;
  providerKey: string;
  type: number;
  availableOperation: number;
  cod: number;
  paymentCash: number | null;
  paymentCard: number | null;
  name: string;
  lat: number;
  lng: number;
  code: string;
  postIndex: string;
  countryCode: string;
  region: string;
  regionType: string;
  area: string | null;
  city: string;
  cityType: string;
  cityGuid: string;
  community: string | null;
  communityType: string | null;
  communityGuid: string | null;
  street: string;
  streetType: string;
  house: string;
  address: string;
  block: string | null;
  office: string | null;
  url: string | null;
  email: string | null;
  phone: string;
  timetable: string;
  worktime: Worktime;
  photos: string | null;
  fittingRoom: number;
  description: string | null;
  metro: string | null;
  multiplaceDeliveryAllowed: string | null;
  extra: Extra[];
  limits: Limits;
}

export interface ProviderPointsDataType {
  rows: Array<ProviderPoint>;
  meta: Meta;
}

// <=== Стоимость доставки ===>
export interface DeliveryTariff {
  tariffProviderId: number;
  tariffId: number;
  tariffName: string;
  from: string;
  deliveryCost: number;
  deliveryCostOriginal: number;
  feesIncluded: boolean;
  insuranceFee: number;
  cashServiceFee: number;
  daysMin: number;
  daysMax: number;
  pickupTypes: number[];
  deliveryTypes: number[];
}

export interface DeliveryProvider {
  providerKey: string;
  tariffs: DeliveryTariff[];
}

export interface DeliveryDataType {
  deliveryToDoor: DeliveryProvider[];
  deliveryToPoint: DeliveryProvider[];
}

export interface Address {
  countryCode: string;
  index: string;
  addressString: string;
  region: string;
  city: string;
  cityGuid: string;
  lat: number;
  lng: number;
}

export interface Place {
  height: number;
  length: number;
  width: number;
  weight: number;
}

export interface CalculateRequestData {
  from: Address;
  to: Address;
  places: Place[];
  pickupDate?: string;
  pickupTypes?: number[];
  deliveryTypes?: number[];
  providerKeys?: string[];
  assessedCost: number;
  codCost?: number;
  includeFees?: boolean;
  timeout?: number;
  skipTariffRules?: boolean;
  tariffIds: number[];
  pointInId?: number;
  pointOutId?: number;
  extraParams?: Record<string, string>;
  promoCode?: string;
  customCode?: string;
}

export interface GetProductsParams {
  min_price?: number;
  max_price?: number;
  min_quantity?: number;
  max_quantity?: number;
  min_stock_quantity?: number;
  max_stock_quantity?: number;
}
