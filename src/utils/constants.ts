import { Category, Favourite, Product } from "./types";
import black from "../assets/img/product.png";
import black_side from "../assets/img/product1_1.png";
import red from "../assets/img/product2.png";
import red_side from "../assets/img/product2_1.png";
import prod3 from "../assets/img/product3.png";
import prod4 from "../assets/img/product4.png";
import aliseModule from "../assets/img/product5.png";
import smartLamp from "../assets/img/smartLamp.png";

export const TELEGRAM = window.Telegram.WebApp;

export const PRODUCTS: Product[] = [
  {
    name: "Станция 2",
    description:
      "Умная колонка Яндекс Станция 2 с Алисой  на YaGPT, 30 Вт. Умная колонка второго поколения — новый дизайн, звук, центр управления умным домом и Алиса.",
    category_id: 3,
    variants: [
      {
        color: "Красный рубин",
        price: 13999,
        photos: [red, red_side],
        stock_quantity: 10,
        id: 0,
        is_favorite: false,
      },
      {
        color: "Антрацит",
        price: 13497,
        photos: [black, black_side],
        stock_quantity: 10,
        id: 1,
        is_favorite: false,
      },
    ],
    id: 1,
    count_variants: 1,
  },
  {
    name: "Станция Лайт",
    description:
      "Умная колонка Яндекс Станция 2 с Алисой  на YaGPT, 30 Вт. Умная колонка второго поколения — новый дизайн, звук, центр управления умным домом и Алиса.",
    category_id: 3,
    variants: [
      {
        color: "Белый",
        price: 13445,
        photos: [prod4],
        stock_quantity: 10,
        id: 0,
        is_favorite: false,
      },
    ],
    id: 2,
    count_variants: 1,
  },
  {
    name: "Умная лампочка",
    description:
      "Умная колонка Яндекс Станция 2 с Алисой  на YaGPT, 30 Вт. Умная колонка второго поколения — новый дизайн, звук, центр управления умным домом и Алиса.",
    category_id: 1,
    variants: [
      {
        color: "Белый",
        price: 1465,
        photos: [smartLamp],
        stock_quantity: 10,
        id: 0,
        is_favorite: false,
      },
    ],
    id: 3,
    count_variants: 1,
  },
  {
    name: "Модуль с Алисой",
    description:
      "Умная колонка Яндекс Станция 2 с Алисой  на YaGPT, 30 Вт. Умная колонка второго поколения — новый дизайн, звук, центр управления умным домом и Алиса.",
    category_id: 1,
    variants: [
      {
        color: "Белый",
        price: 7299,
        photos: [aliseModule],
        stock_quantity: 10,
        id: 0,
        is_favorite: false,
      },
    ],
    id: 4,
    count_variants: 1,
  },
  {
    name: "Станция 2",
    description:
      "Умная колонка Яндекс Станция 2 с Алисой  на YaGPT, 30 Вт. Умная колонка второго поколения — новый дизайн, звук, центр управления умным домом и Алиса.",
    category_id: 3,
    variants: [
      {
        color: "Антрацит",
        price: 13497,
        photos: [black, black_side],
        stock_quantity: 10,
        id: 1,
        is_favorite: false,
      },
      {
        color: "Красный рубин",
        price: 13999,
        photos: [red, red_side],
        stock_quantity: 10,
        id: 0,
        is_favorite: false,
      },
    ],
    id: 5,
    count_variants: 1,
  },
];
export const CATEGORIES: Category[] = [
  { name: "Весь каталог устройств", alias: "Все", id: 0 },
  { name: "Умный дом", id: 1 },
  { name: "ТВ", id: 2 },
  { name: "Станции Алисы", id: 3 },
  { name: "Станция Дуо Макс", id: 4 },
  { name: "Новинки", id: 5 },
];
export const FAVOURITES: Favourite[] = [
  {
    id: 1,
    product_id: 1,
    variant_id: 1,
    quantity: 1,
    in_stock: 10,
    price: 1999,
  },
  {
    id: 2,
    product_id: 2,
    variant_id: 0,
    quantity: 1,
    in_stock: 10,
    price: 1999,
  },
  {
    id: 3,
    product_id: 3,
    variant_id: 0,
    quantity: 0,
    in_stock: 10,
    price: 1999,
  },
  {
    id: 4,
    product_id: 1,
    variant_id: 0,
    quantity: 1,
    in_stock: 10,
    price: 1999,
  },
];
