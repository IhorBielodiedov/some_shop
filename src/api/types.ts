import { CartItem } from "../utils/types";

export interface GetCartsResponse {
  count: number;
  carts: CartItem[];
}
