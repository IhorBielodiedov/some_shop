import { Product } from "./types";
import black from "../assets/img/product.png";
import black_side from "../assets/img/product1_1.png";
import red from "../assets/img/product2.png";
import red_side from "../assets/img/product2_1.png";
import prod3 from "../assets/img/product3.png";
import prod4 from "../assets/img/product4.png";
import prod5 from "../assets/img/product5.png";
import prod6 from "../assets/img/product6.png";

export const TELEGRAM = window.Telegram.WebApp;

export const PRODUCTS: Product[] = [
  {
    name: "Станция 2",
    description:
      "Умная колонка Яндекс Станция 2 с Алисой  на YaGPT, 30 Вт. Умная колонка второго поколения — новый дизайн, звук, центр управления умным домом и Алиса.",
    category_id: 1,
    variants: [
      {
        color: "Красный рубин",
        price: 132.99,
        photos: [red, red_side],
        stock_quantity: 10,
        id: 0,
      },
      {
        color: "Антрацит",
        price: 100.99,
        photos: [black, black_side],
        stock_quantity: 10,
        id: 1,
      },
    ],
    id: 1,
    count_variants: 1,
  },
  {
    name: "Станция 2",
    description:
      "Умная колонка Яндекс Станция 2 с Алисой  на YaGPT, 30 Вт. Умная колонка второго поколения — новый дизайн, звук, центр управления умным домом и Алиса.",
    category_id: 1,
    variants: [
      {
        color: "black",
        price: 132.99,
        photos: ["photo1", "photo2", "photo3"],
        stock_quantity: 10,
        id: 0,
      },
      {
        color: "red",
        price: 100.99,
        photos: ["photo1", "photo2", "photo3"],
        stock_quantity: 10,
        id: 1,
      },
    ],
    id: 2,
    count_variants: 1,
  },
];
export const CATEGORIES = ["Умный дом", "ТВ", "Станции Алисы", "Что-то еще"];
