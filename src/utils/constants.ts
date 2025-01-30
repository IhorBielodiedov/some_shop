import { Category, Favourite, Product, Review, User } from "./types";
import black from "../assets/img/product.png";
import black_side from "../assets/img/product1_1.png";
import red from "../assets/img/product2.png";
import red_side from "../assets/img/product2_1.png";
import prod4 from "../assets/img/product4.png";
import aliseModule from "../assets/img/product5.png";
import smartLamp from "../assets/img/smartLamp.png";

import white_1 from "../assets/img/lamp_e27_white/white_1.png";
import white_2 from "../assets/img/lamp_e27_white/white_2.png";
import white_3 from "../assets/img/lamp_e27_white/white_3.png";
import white_4 from "../assets/img/lamp_e27_white/white_4.png";

import colorful_1 from "../assets/img/lamp_e27_colorful/colorful_1.png";
import colorful_2 from "../assets/img/lamp_e27_colorful/colorful_2.png";

import rgb_1 from "../assets/img/lamp_e14_rgb/rgb_2.png";
import rgb_2 from "../assets/img/lamp_e14_rgb/rgb_1.png";

import colorful_gu10_1 from "../assets/img/lamp_gu10_colorful/colorful_1.png";

import zigbee_1 from "../assets/img/sensor_zigbee/zigbee_1.png";
import zigbee_2 from "../assets/img/sensor_zigbee/zigbee_2.png";
import zigbee_3 from "../assets/img/sensor_zigbee/zigbee_3.png";

import tv_station_55_1 from "../assets/img/tv_station_55/tv_station_55_1.png";
import tv_station_55_2 from "../assets/img/tv_station_55/tv_station_55_2.png";
import tv_station_55_3 from "../assets/img/tv_station_55/tv_station_55_3.png";

import tv_control_1 from "../assets/img/tv_control/tv_control_1.png";
import tv_control_2 from "../assets/img/tv_control/tv_control_2.png";
import tv_control_3 from "../assets/img/tv_control/tv_control_3.png";

import tv_station_65_1 from "../assets/img/tv_station_65/tv_station_65_1.png";
import tv_station_65_2 from "../assets/img/tv_station_65/tv_station_65_2.png";
import tv_station_65_3 from "../assets/img/tv_station_65/tv_station_65_3.png";

import tv_station_43_1 from "../assets/img/tv_station_43/tv_station_43_1.png";
import tv_station_43_2 from "../assets/img/tv_station_43/tv_station_43_2.png";
import tv_station_43_3 from "../assets/img/tv_station_43/tv_station_43_3.png";

import tv_station_50_1 from "../assets/img/tv_station_50/tv_station_50_1.png";
import tv_station_50_2 from "../assets/img/tv_station_50/tv_station_50_2.png";
import tv_station_50_3 from "../assets/img/tv_station_50/tv_station_50_3.png";

import beige_speaker_zigbee_60_1 from "../assets/img/speaker_zigbee_60/beige/beige_speaker_zigbee_60_1.png";
import beige_speaker_zigbee_60_2 from "../assets/img/speaker_zigbee_60/beige/beige_speaker_zigbee_60_2.png";
import beige_speaker_zigbee_60_3 from "../assets/img/speaker_zigbee_60/beige/beige_speaker_zigbee_60_3.png";
import beige_speaker_zigbee_60_4 from "../assets/img/speaker_zigbee_60/beige/beige_speaker_zigbee_60_4.png";
import beige_speaker_zigbee_60_5 from "../assets/img/speaker_zigbee_60/beige/beige_speaker_zigbee_60_5.png";

import black_speaker_zigbee_60_1 from "../assets/img/speaker_zigbee_60/black/black_speaker_zigbee_60_1.png";
import black_speaker_zigbee_60_2 from "../assets/img/speaker_zigbee_60/black/black_speaker_zigbee_60_2.png";
import black_speaker_zigbee_60_3 from "../assets/img/speaker_zigbee_60/black/black_speaker_zigbee_60_3.png";
import black_speaker_zigbee_60_4 from "../assets/img/speaker_zigbee_60/black/black_speaker_zigbee_60_4.png";

import green_speaker_zigbee_60_1 from "../assets/img/speaker_zigbee_60/green/green_speaker_zigbee_60_1.png";
import green_speaker_zigbee_60_2 from "../assets/img/speaker_zigbee_60/green/green_speaker_zigbee_60_2.png";
import green_speaker_zigbee_60_3 from "../assets/img/speaker_zigbee_60/green/green_speaker_zigbee_60_3.png";
import green_speaker_zigbee_60_4 from "../assets/img/speaker_zigbee_60/green/green_speaker_zigbee_60_4.png";
import green_speaker_zigbee_60_5 from "../assets/img/speaker_zigbee_60/green/green_speaker_zigbee_60_5.png";

import beige_speaker_zigbee_65_1 from "../assets/img/speaker_zigbee_65/beige/beige_speaker_zigbee_65_1.png";
import beige_speaker_zigbee_65_2 from "../assets/img/speaker_zigbee_65/beige/beige_speaker_zigbee_65_2.png";
import beige_speaker_zigbee_65_3 from "../assets/img/speaker_zigbee_65/beige/beige_speaker_zigbee_65_3.png";

import black_speaker_zigbee_65_1 from "../assets/img/speaker_zigbee_65/black/black_speaker_zigbee_65_1.png";
import black_speaker_zigbee_65_2 from "../assets/img/speaker_zigbee_65/black/black_speaker_zigbee_65_2.png";
import black_speaker_zigbee_65_3 from "../assets/img/speaker_zigbee_65/black/black_speaker_zigbee_65_3.png";

import green_speaker_zigbee_65_1 from "../assets/img/speaker_zigbee_65/green/green_speaker_zigbee_65_1.png";
import green_speaker_zigbee_65_2 from "../assets/img/speaker_zigbee_65/green/green_speaker_zigbee_65_2.png";
import green_speaker_zigbee_65_3 from "../assets/img/speaker_zigbee_65/green/green_speaker_zigbee_65_3.png";

import black_speaker_zigbee_24_1 from "../assets/img/speaker_zigbee_24/black/black_speaker_zigbee_24_1.png";
import black_speaker_zigbee_24_2 from "../assets/img/speaker_zigbee_24/black/black_speaker_zigbee_24_2.png";
import black_speaker_zigbee_24_3 from "../assets/img/speaker_zigbee_24/black/black_speaker_zigbee_24_3.png";

import gray_speaker_zigbee_24_1 from "../assets/img/speaker_zigbee_24/gray/gray_speaker_zigbee_24_1.png";
import gray_speaker_zigbee_24_2 from "../assets/img/speaker_zigbee_24/gray/gray_speaker_zigbee_24_2.png";
import gray_speaker_zigbee_24_3 from "../assets/img/speaker_zigbee_24/gray/gray_speaker_zigbee_24_3.png";

import green_speaker_zigbee_24_1 from "../assets/img/speaker_zigbee_24/green/green_speaker_zigbee_24_1.png";
import green_speaker_zigbee_24_2 from "../assets/img/speaker_zigbee_24/green/green_speaker_zigbee_24_2.png";
import green_speaker_zigbee_24_3 from "../assets/img/speaker_zigbee_24/green/green_speaker_zigbee_24_3.png";

import blue_speaker_light_2_1 from "../assets/img/speaker_light_2/blue/blue_speaker_light_2_1.png";
import blue_speaker_light_2_2 from "../assets/img/speaker_light_2/blue/blue_speaker_light_2_2.png";
import blue_speaker_light_2_3 from "../assets/img/speaker_light_2/blue/blue_speaker_light_2_3.png";

import pink_speaker_light_2_1 from "../assets/img/speaker_light_2/pink/pink_speaker_light_2_1.png";
import pink_speaker_light_2_2 from "../assets/img/speaker_light_2/pink/pink_speaker_light_2_2.png";
import pink_speaker_light_2_3 from "../assets/img/speaker_light_2/pink/pink_speaker_light_2_3.png";

import purple_speaker_light_2_1 from "../assets/img/speaker_light_2/purple/purple_speaker_light_2_1.png";
import purple_speaker_light_2_2 from "../assets/img/speaker_light_2/purple/purple_speaker_light_2_2.png";
import purple_speaker_light_2_3 from "../assets/img/speaker_light_2/purple/purple_speaker_light_2_3.png";

import black_speaker_2_1 from "../assets/img/speaker_2_30/black/black_speaker_2_1.png";
import black_speaker_2_2 from "../assets/img/speaker_2_30/black/black_speaker_2_2.png";
import black_speaker_2_3 from "../assets/img/speaker_2_30/black/black_speaker_2_3.png";
import black_speaker_2_4 from "../assets/img/speaker_2_30/black/black_speaker_2_4.png";
import black_speaker_2_5 from "../assets/img/speaker_2_30/black/black_speaker_2_4.png";

import blue_speaker_2_1 from "../assets/img/speaker_2_30/blue/blue_speaker_2_1.png";
import blue_speaker_2_2 from "../assets/img/speaker_2_30/blue/blue_speaker_2_2.png";
import blue_speaker_2_3 from "../assets/img/speaker_2_30/blue/blue_speaker_2_3.png";
import blue_speaker_2_4 from "../assets/img/speaker_2_30/blue/blue_speaker_2_4.png";
import blue_speaker_2_5 from "../assets/img/speaker_2_30/blue/blue_speaker_2_4.png";

import brown_speaker_2_1 from "../assets/img/speaker_2_30/brown/brown_speaker_2_1.png";
import brown_speaker_2_2 from "../assets/img/speaker_2_30/brown/brown_speaker_2_2.png";
import brown_speaker_2_3 from "../assets/img/speaker_2_30/brown/brown_speaker_2_3.png";
import brown_speaker_2_4 from "../assets/img/speaker_2_30/brown/brown_speaker_2_4.png";
import brown_speaker_2_5 from "../assets/img/speaker_2_30/brown/brown_speaker_2_4.png";

import black_speaker_mini_10_1 from "../assets/img/speaker_mini_10/black/black_speaker_mini_10_1.png";
import black_speaker_mini_10_2 from "../assets/img/speaker_mini_10/black/black_speaker_mini_10_2.png";
import black_speaker_mini_10_3 from "../assets/img/speaker_mini_10/black/black_speaker_mini_10_3.png";
import black_speaker_mini_10_4 from "../assets/img/speaker_mini_10/black/black_speaker_mini_10_4.png";
import black_speaker_mini_10_5 from "../assets/img/speaker_mini_10/black/black_speaker_mini_10_4.png";

import blue_speaker_mini_10_1 from "../assets/img/speaker_mini_10/blue/blue_speaker_mini_10_1.png";
import blue_speaker_mini_10_2 from "../assets/img/speaker_mini_10/blue/blue_speaker_mini_10_2.png";
import blue_speaker_mini_10_3 from "../assets/img/speaker_mini_10/blue/blue_speaker_mini_10_3.png";
import blue_speaker_mini_10_4 from "../assets/img/speaker_mini_10/blue/blue_speaker_mini_10_4.png";
import blue_speaker_mini_10_5 from "../assets/img/speaker_mini_10/blue/blue_speaker_mini_10_4.png";

import gray_speaker_mini_10_1 from "../assets/img/speaker_mini_10/gray/gray_speaker_mini_10_1.png";
import gray_speaker_mini_10_2 from "../assets/img/speaker_mini_10/gray/gray_speaker_mini_10_2.png";
import gray_speaker_mini_10_3 from "../assets/img/speaker_mini_10/gray/gray_speaker_mini_10_3.png";
import gray_speaker_mini_10_4 from "../assets/img/speaker_mini_10/gray/gray_speaker_mini_10_4.png";
import gray_speaker_mini_10_5 from "../assets/img/speaker_mini_10/gray/gray_speaker_mini_10_4.png";

import red_speaker_mini_10_1 from "../assets/img/speaker_mini_10/red/red_speaker_mini_10_1.png";
import red_speaker_mini_10_2 from "../assets/img/speaker_mini_10/red/red_speaker_mini_10_2.png";
import red_speaker_mini_10_3 from "../assets/img/speaker_mini_10/red/red_speaker_mini_10_3.png";
import red_speaker_mini_10_4 from "../assets/img/speaker_mini_10/red/red_speaker_mini_10_4.png";
import red_speaker_mini_10_5 from "../assets/img/speaker_mini_10/red/red_speaker_mini_10_4.png";

import sensor_white_1 from "../assets/img/sensor_temp/white_1.png";
import sensor_white_2 from "../assets/img/sensor_temp/white_2.png";
import sensor_white_3 from "../assets/img/sensor_temp/white_3.png";

import hub_yandex_1 from "../assets/img/hub_yandex/hub_yandex_1.png";
import hub_yandex_2 from "../assets/img/hub_yandex/hub_yandex_2.png";

import plug_black_1 from "../assets/img/plug/black/plug_black_1.png";
import plug_black_2 from "../assets/img/plug/black/plug_black_2.png";
import plug_black_3 from "../assets/img/plug/black/plug_black_3.png";

import plug_white_1 from "../assets/img/plug/white/plug_white_1.png";
import plug_white_2 from "../assets/img/plug/white/plug_white_2.png";
import plug_white_3 from "../assets/img/plug/white/plug_white_3.png";

import button_white_1 from "../assets/img/button/button_white_1.png";
import button_white_2 from "../assets/img/button/button_white_2.png";

import led_strip_1 from "../assets/img/led_strip/led_strip_1.png";
import led_strip_2 from "../assets/img/led_strip/led_strip_2.png";

import red_speaker_zigbee_60_1 from "../assets/img/speaker_zigbee_60/red/red_speaker_zigbee_60_1.png";
import red_speaker_zigbee_60_2 from "../assets/img/speaker_zigbee_60/red/red_speaker_zigbee_60_2.png";
import red_speaker_zigbee_60_3 from "../assets/img/speaker_zigbee_60/red/red_speaker_zigbee_60_3.png";
import red_speaker_zigbee_60_4 from "../assets/img/speaker_zigbee_60/red/red_speaker_zigbee_60_4.png";
import red_speaker_zigbee_60_5 from "../assets/img/speaker_zigbee_60/red/red_speaker_zigbee_60_5.png";

import turquoise_speaker_zigbee_65_1 from "../assets/img/speaker_zigbee_65/turquoise/turquoise_speaker_zigbee_65_1.png";
import turquoise_speaker_zigbee_65_2 from "../assets/img/speaker_zigbee_65/turquoise/turquoise_speaker_zigbee_65_2.png";

import red_speaker_zigbee_24_1 from "../assets/img/speaker_zigbee_24/red/red_speaker_zigbee_24_1.png";
import red_speaker_zigbee_24_2 from "../assets/img/speaker_zigbee_24/red/red_speaker_zigbee_24_2.png";
import red_speaker_zigbee_24_3 from "../assets/img/speaker_zigbee_24/red/red_speaker_zigbee_24_3.png";

import yellow_speaker_zigbee_24_1 from "../assets/img/speaker_zigbee_24/yellow/yellow_speaker_zigbee_24_1.png";
import yellow_speaker_zigbee_24_2 from "../assets/img/speaker_zigbee_24/yellow/yellow_speaker_zigbee_24_2.png";
import yellow_speaker_zigbee_24_3 from "../assets/img/speaker_zigbee_24/yellow/yellow_speaker_zigbee_24_3.png";

import sandy_speaker_2_1 from "../assets/img/speaker_2_30/sandy/sandy_speaker_2_1.png";
import sandy_speaker_2_2 from "../assets/img/speaker_2_30/sandy/sandy_speaker_2_2.png";
import sandy_speaker_2_3 from "../assets/img/speaker_2_30/sandy/sandy_speaker_2_3.png";
import sandy_speaker_2_4 from "../assets/img/speaker_2_30/sandy/sandy_speaker_2_4.png";
import sandy_speaker_2_5 from "../assets/img/speaker_2_30/sandy/sandy_speaker_2_4.png";

import movement_sensor_white_1 from "../assets/img/movement_sensor/movement_sensor_white_1.png";
import movement_sensor_white_2 from "../assets/img/movement_sensor/movement_sensor_white_2.png";
import movement_sensor_white_3 from "../assets/img/movement_sensor/movement_sensor_white_3.png";

export const TELEGRAM = window.Telegram.WebApp;

export const PRODUCTS: Product[] = [
  // {
  //   name: "Датчик движения",
  //   description: "Датчик движения и освещения, Яндекс, Zigbee ",
  //   category_id: 1,
  //   discount: 0,
  //   variants: [
  //     {
  //       color: "Белый",
  //       price: 2490,
  //       photos: [
  //         movement_sensor_white_1,
  //         movement_sensor_white_2,
  //         movement_sensor_white_3,
  //       ],
  //       stock_quantity: 10,
  //       id: 0,
  //       is_favorite: false,
  //       description:
  //         "Улавливает движение и запускает удобные сценарии освещения. Или передаёт, что в помещении кто-то есть.\n" +
  //         "Беспроводной компактный датчик можно установить где угодно, в квартире или на даче: в прихожей, ванной, комнатах и даже на лоджии. \n",
  //       specifications: [
  //         {
  //           id: 0,
  //           title: "Общие",
  //           rows: [
  //             { id: 0, name: "Тип", value: "датчик движения" },
  //             {
  //               id: 1,
  //               name: "Дополнительная информация",
  //               value:
  //                 "масса нетто (без батарейки): 18г; беспроводная связь: Zigbee 3.0; батарейка: CR2450, 3 В; измеряемые параметры: движение, освещение (только одновременно с движением); температура эксплуатации: -10˚ - +45˚С; допустимая влажность: 0 – 95% относительной влажности, без конденсации; рабочая частота: 2400 – 2483,5 МГц; комплектация: датчик движения и освещения, поворотное крепление, руководство пользователя, стикер для монтажа",
  //             },
  //             { id: 2, name: "Работает в системе 'умный дом'", value: "есть" },
  //             {
  //               id: 3,
  //               name: "Тип соединения устройств",
  //               value: "беспроводное",
  //             },
  //             { id: 4, name: "Ширина", value: "30 мм" },
  //             { id: 5, name: "Высота", value: "72 мм" },
  //             { id: 6, name: "Глубина", value: "30 мм" },
  //             { id: 7, name: "Автономный", value: "есть" },
  //             { id: 8, name: "Тип зоны обнаружения", value: "точечные" },
  //             {
  //               id: 9,
  //               name: "Способ монтажа",
  //               value: "накладн. на поверхность",
  //             },
  //             { id: 10, name: "Степень защиты (IP)", value: "IP30" },
  //             { id: 11, name: "Цвет", value: "белый" },
  //             { id: 12, name: "Протокол связи", value: "Zigbee™" },
  //             { id: 13, name: "Диаметр", value: "30 мм" },
  //             { id: 14, name: "Экосистема", value: "Умный дом Яндекса" },
  //             { id: 15, name: "Радиус обнаружения", value: "170 °" },
  //             { id: 16, name: "Дальность обнаружения", value: "7 м" },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  //   id: 27,
  //   count_variants: 1,
  // },
  // // 21-25
  // {
  //   name: "Умная светодиодная лента",
  //   description: "Умная светодиодная лента Яндекса, Matter™, 3м ",
  //   category_id: 1,
  //   discount: 0,
  //   variants: [
  //     {
  //       color: "RGB цветная",
  //       price: 3990,
  //       photos: [led_strip_1, led_strip_2],
  //       stock_quantity: 10,
  //       id: 1001,
  //       is_favorite: false,
  //       description:
  //         "Умная светодиодная лента Яндекса — с ней легко создавать дома атмосферное\n" +
  //         "освещение и управлять им голосом с помощью Алисы через устройство Яндекс\n" +
  //         "Станцию или приложение «Дом с Алисой».\n" +
  //         "Работает на современном универсальном протоколе связи Matter™1 — легко подключается к умному дому, а настроенные сценарии с лентой могут работать, даже если отключится интернет2.\n",
  //       specifications: [
  //         {
  //           id: 0,
  //           title: "Общие",
  //           rows: [
  //             {
  //               id: 0,
  //               name: "Беспроводная связь",
  //               value:
  //                 "Wi-Fi® 802.11 b/g/n (2,4 ГГц), Bluetooth® 5 (LE), Matter™",
  //             },
  //             { id: 1, name: "Срок службы", value: "2 года" },
  //             { id: 2, name: "Индекс цветопередачи", value: "Ra> 80" },
  //             {
  //               id: 3,
  //               name: "Коэффициент пульсации",
  //               value: "< 1% (при максимальной яркости)",
  //             },
  //             { id: 4, name: "Гарантия", value: "1 год" },
  //             { id: 5, name: "Масса нетто", value: "0,3 кг" },
  //             { id: 6, name: "Страна", value: "Китай" },
  //             {
  //               id: 7,
  //               name: "Степень защиты",
  //               value:
  //                 "Светодиодная лента - IP65 / Блок питания и контроллер - IP20",
  //             },
  //             {
  //               id: 8,
  //               name: "Что в коробке",
  //               value:
  //                 "Умная светодиодная лента Яндекса, адаптер питания, инструкция",
  //             },
  //             { id: 9, name: "Габариты (длина х ширина)", value: "3м x 10 мм" },
  //             {
  //               id: 10,
  //               name: "Максимальная длина с удлинителями",
  //               value: "10м",
  //             },
  //             {
  //               id: 11,
  //               name: "Максимальная потребляемая мощность (3 м)",
  //               value: "8,2 Вт",
  //             },
  //             { id: 12, name: "Световой поток (3м)", value: "до 750 лм" },
  //             {
  //               id: 13,
  //               name: "Цвета свечения",
  //               value: "белый и цветной (RGB)",
  //             },
  //             { id: 14, name: "Количество цветов", value: "xx млн цветов" },
  //             { id: 15, name: "Номинальный срок службы", value: "25 000ч" },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  //   id: 26,
  //   count_variants: 1,
  // },
  // {
  //   name: "Беспроводная кнопка",
  //   description: "Беспроводная кнопка, Яндекс, Zigbee™ ",
  //   category_id: 1,
  //   discount: 0,
  //   variants: [
  //     {
  //       color: "Белый",
  //       price: 2490,
  //       photos: [button_white_1, button_white_2],
  //       stock_quantity: 10,
  //       id: 100,
  //       is_favorite: false,
  //       description:
  //         "Работает от батареек и может стать удобным дверным звонком или единственной кнопкой для запуска и выключения разных устройств. Компактную кнопку легко установить где угодно, будь то дверной косяк или прикроватный столик.",
  //       specifications: [
  //         {
  //           id: 0,
  //           title: "Общие",
  //           rows: [
  //             { id: 0, name: "Тип", value: "кнопочный выключатель (кнопка)" },
  //             {
  //               id: 1,
  //               name: "Экосистема Умного дома",
  //               value: "Умный дом Яндекса",
  //             },
  //             {
  //               id: 2,
  //               name: "Дополнительная информация",
  //               value:
  //                 "габариты: 12 x 45 x 45 мм; масса нетто (без батарейки): 18г; беспроводная связь: Zigbee 3.0; батарейка: CR2032, 3 В; температура эксплуатации: -10˚ - +55˚С; допустимая влажность: 5 – 95% относительной влажности, без конденсации; рабочая частота: 2400 – 2483,5 МГц",
  //             },
  //             { id: 3, name: "Особенности", value: "подключение к смартфону" },
  //             {
  //               id: 4,
  //               name: "Тип соединения устройств",
  //               value: "беспроводное",
  //             },
  //             { id: 5, name: "Протокол связи Умного дома", value: "Zigbee™" },
  //             { id: 6, name: "Для подключения требуется шлюз", value: "есть" },
  //             { id: 7, name: "Работает в системе Умный дом", value: "есть" },
  //             {
  //               id: 8,
  //               name: "Комплектация",
  //               value:
  //                 "беспроводная кнопка, руководство пользователя, стикер для монтажа, кабель USB - micro USB",
  //             },
  //             { id: 9, name: "Линейка", value: "Алиса" },
  //             { id: 10, name: "Монтаж", value: "открытый" },
  //             {
  //               id: 11,
  //               name: "Ориентация монтажа",
  //               value: "горизонтальная и вертикальная",
  //             },
  //             { id: 12, name: "Тип крепления", value: "приклеивание" },
  //             { id: 13, name: "Управление", value: "нажимная кнопка" },
  //             { id: 14, name: "Материал", value: "металл, пластик" },
  //             { id: 15, name: "Класс защиты (IP)", value: "IP30" },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  //   id: 25,
  //   count_variants: 1,
  // },
  // {
  //   name: "Умная розетка",
  //   description: "Умная розетка Яндекса, Matter™ ",
  //   category_id: 1,
  //   discount: 0,
  //   variants: [
  //     {
  //       color: "Белый",
  //       price: 1790,
  //       photos: [plug_white_1, plug_white_2, plug_white_3],
  //       stock_quantity: 10,
  //       id: 100,
  //       is_favorite: false,
  //       description:
  //         "Умная розетка Яндекса с обновлённым дизайном сделает обычную домашнюю\n" +
  //         "технику умной — и вы сможете управлять ей с помощью Алисы голосом через Яндекс\n" +
  //         "Станцию или приложение “Дом с Алисой”1. Работает на современном универсальном протоколе связи Matter™— легко подключается к умному дому, а настроенные сценарии с розеткой могут работать, даже если отключится интернет2.\n",
  //       specifications: [
  //         {
  //           id: 0,
  //           title: "Общие",
  //           rows: [
  //             {
  //               id: 0,
  //               name: "Беспроводная связь",
  //               value:
  //                 "WiFi® 802.11 b/g/n (2,4 ГГц), Bluetooth® 5 (LE)*, Matter™",
  //             },
  //             { id: 1, name: "Срок службы", value: "2 года" },
  //             { id: 2, name: "Класс защиты", value: "2" },
  //             { id: 3, name: "Гарантия", value: "1 год" },
  //             { id: 4, name: "Масса нетто", value: "95 г" },
  //             { id: 5, name: "Номинальное напряжение", value: "220-240 В" },
  //             { id: 6, name: "Страна", value: "Китай" },
  //             {
  //               id: 7,
  //               name: "Габариты (длина х ширина х высота)",
  //               value: "50 x 50 х 85 мм",
  //             },
  //             {
  //               id: 8,
  //               name: "Максимальная нагрузка",
  //               value: "16А ~ 3680Вт (резистивный тип)",
  //             },
  //             { id: 9, name: "Степень защиты", value: "IP 20" },
  //             { id: 10, name: "Номинальная частота", value: "50 Гц" },
  //             {
  //               id: 11,
  //               name: "Что в коробке",
  //               value: "Умная розетка Яндекса, инструкция",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       color: "Черный",
  //       price: 1790,
  //       photos: [plug_black_1, plug_black_2, plug_black_3],
  //       stock_quantity: 10,
  //       id: 2,
  //       is_favorite: false,
  //       description:
  //         "Умная розетка Яндекса с обновлённым дизайном сделает обычную домашнюю\n" +
  //         "технику умной — и вы сможете управлять ей с помощью Алисы голосом через Яндекс\n" +
  //         "Станцию или приложение “Дом с Алисой”1. Работает на современном универсальном протоколе связи Matter™— легко подключается к умному дому, а настроенные сценарии с розеткой могут работать, даже если отключится интернет2.\n",
  //       specifications: [
  //         {
  //           id: 0,
  //           title: "Общие",
  //           rows: [
  //             {
  //               id: 0,
  //               name: "Беспроводная связь",
  //               value:
  //                 "WiFi® 802.11 b/g/n (2,4 ГГц), Bluetooth® 5 (LE)*, Matter™",
  //             },
  //             { id: 1, name: "Срок службы", value: "2 года" },
  //             { id: 2, name: "Класс защиты", value: "2" },
  //             { id: 3, name: "Гарантия", value: "1 год" },
  //             { id: 4, name: "Масса нетто", value: "95 г" },
  //             { id: 5, name: "Номинальное напряжение", value: "220-240 В" },
  //             { id: 6, name: "Страна", value: "Китай" },
  //             {
  //               id: 7,
  //               name: "Габариты (длина х ширина х высота)",
  //               value: "50 x 50 х 85 мм",
  //             },
  //             {
  //               id: 8,
  //               name: "Максимальная нагрузка",
  //               value: "16А ~ 3680Вт (резистивный тип)",
  //             },
  //             { id: 9, name: "Степень защиты", value: "IP 20" },
  //             { id: 10, name: "Номинальная частота", value: "50 Гц" },
  //             {
  //               id: 11,
  //               name: "Что в коробке",
  //               value: "Умная розетка Яндекса, инструкция",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  //   id: 24,
  //   count_variants: 1,
  // },
  // {
  //   name: "Хаб Яндекса",
  //   description: "Хаб Яндекса для устройств ",
  //   category_id: 1,
  //   discount: 0,
  //   variants: [
  //     {
  //       color: "Белый",
  //       price: 4990,
  //       photos: [hub_yandex_1, hub_yandex_2],
  //       stock_quantity: 10,
  //       id: 100,
  //       is_favorite: false,
  //       description:
  //         "Универсальный Хаб Яндекса для простого и быстрого подключения разных приборов к умному дому с Алисой1. И единая точка управления всеми устройствами.\n" +
  //         "С Хабом умный дом сможет больше. Наполните его датчиками и множеством других Zigbee™-устройств. Хаб соединит их с Яндекс Станцией, и вы будете управлять умным домом через приложение или голосом2.\n",
  //       specifications: [
  //         {
  //           id: 0,
  //           title: "Общие",
  //           rows: [
  //             { id: 0, name: "Тип", value: "шлюз Умного дома" },
  //             {
  //               id: 1,
  //               name: "Беспроводная связь",
  //               value:
  //                 "Wi-Fi® IEEE 802.11b/g/n/ac (2,4 ГГц, 5 ГГц), Bluetooth® 5.0, BLE, Zigbee™ 3.0",
  //             },
  //             {
  //               id: 2,
  //               name: "Разъемы и интерфейсы",
  //               value: "Ethernet - RJ-45, USB-C (только питание)",
  //             },
  //             {
  //               id: 3,
  //               name: "Экосистема Умного дома",
  //               value: "Умный дом Яндекса",
  //             },
  //             { id: 4, name: "Особенности", value: "инфракрасный пульт ДУ" },
  //             {
  //               id: 5,
  //               name: "Габариты (диаметр x высота)",
  //               value: "90 x 26,5 мм",
  //             },
  //             { id: 6, name: "Масса нетто", value: "135г" },
  //             { id: 7, name: "Питание", value: "5 В c разъемом USB Type-C" },
  //             {
  //               id: 8,
  //               name: "Входные характеристики",
  //               value:
  //                 "номинальное напряжение: 100-240 В; номинальная частота: 50-60 Гц, максимальный ток: 500 мА;",
  //             },
  //             {
  //               id: 9,
  //               name: "Инфракрасный передатчик и приемник",
  //               value: "есть",
  //             },
  //             { id: 10, name: "Порт Ethernet 10/100M", value: "есть" },
  //             { id: 11, name: "Адаптер питания модель", value: "Y7.5-S2C" },
  //             {
  //               id: 12,
  //               name: "Выходные характеристики",
  //               value: "номинальное напряжение: 5 В, номинальный ток: 1,5 А",
  //             },
  //             { id: 13, name: "Класс защиты", value: "2" },
  //             {
  //               id: 14,
  //               name: "Температура эксплуатации",
  //               value: "+10˚ - +35˚С",
  //             },
  //             {
  //               id: 15,
  //               name: "Допустимая влажность",
  //               value: "20 – 80% относительной влажности, без конденсации",
  //             },
  //             {
  //               id: 16,
  //               name: "Комплектация",
  //               value:
  //                 "хаб для устройств, адаптер питания и провод, руководство пользователя",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  //   id: 23,
  //   count_variants: 1,
  // },
  // {
  //   name: "Датчик температуры и влажности",
  //   description: "Датчик температуры и влажности, Яндекс, Zigbee™ ",
  //   category_id: 1,
  //   discount: 0,
  //   variants: [
  //     {
  //       color: "Белый",
  //       price: 2490,
  //       photos: [sensor_white_1, sensor_white_2, sensor_white_3],
  //       stock_quantity: 10,
  //       id: 100,
  //       is_favorite: false,
  //       description:
  //         "Для комфортного и здорового микроклимата. Измеряет температуру и влажность в комнате и включает устройства умного дома, когда нужно. Беспроводной компактный датчик легко установить практически где угодно1. \n",
  //       specifications: [
  //         {
  //           id: 0,
  //           title: "Общие",
  //           rows: [
  //             {
  //               id: 0,
  //               name: "Тип",
  //               value: "комнатный датчик температуры и влажности",
  //             },
  //             {
  //               id: 1,
  //               name: "Экосистема Умного дома",
  //               value: "Zigbee™, Алиса",
  //             },
  //             {
  //               id: 2,
  //               name: "Дополнительная информация",
  //               value:
  //                 "масса нетто (без батарейки): 11г; беспроводная связь: Zigbee 3.0; батарейка: CR2032, 3 В; диапазон температуры и точность показаний: -10 … +50˚С, ±0,3˚С; диапазон влажности и точность показаний: 0-100% RH, ±3%; диапазон атмосферного давления и точность показаний: 30-110 кПа, ±12 кПа; температура эксплуатации: -20˚ - +50˚С; допустимая влажность: 0 – 100% относительной влажности; рабочая частота: 2400 – 2483,5 МГц; комплектация: датчик температуры и влажности, руководство пользователя, стикер для монтажа",
  //             },
  //             {
  //               id: 3,
  //               name: "Тип соединения устройств",
  //               value: "беспроводное",
  //             },
  //             { id: 4, name: "Протокол связи Умного дома", value: "Zigbee™" },
  //             { id: 5, name: "Ширина", value: "36 мм" },
  //             { id: 6, name: "Высота", value: "36 мм" },
  //             { id: 7, name: "Глубина", value: "9 мм" },
  //             {
  //               id: 8,
  //               name: "Тип датчика",
  //               value: "датчик температуры и влажности",
  //             },
  //             {
  //               id: 9,
  //               name: "Минимальное значение диапазона измерения (температура)",
  //               value: "-10 °C",
  //             },
  //             {
  //               id: 10,
  //               name: "Максимальное значение диапазона измерения (температура)",
  //               value: "50 °C",
  //             },
  //             {
  //               id: 11,
  //               name: "Диапазон измерения максимального значения влажности",
  //               value: "100",
  //             },
  //             { id: 12, name: "Напряжение питания", value: "3 В" },
  //             { id: 13, name: "Работает в системе Умный дом", value: "есть" },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  //   id: 22,
  //   count_variants: 1,
  // },
  // {
  //   name: "Умная колонка",
  //   description:
  //     "Умная колонка Яндекс Станция Мини с часами с Алисой на YaGPT, 10Вт ",
  //   category_id: 3,
  //   discount: 1500,
  //   variants: [
  //     {
  //       color: "Синий сапфир",
  //       price: 9990,
  //       photos: [
  //         blue_speaker_mini_10_1,
  //         blue_speaker_mini_10_2,
  //         blue_speaker_mini_10_3,
  //         blue_speaker_mini_10_4,
  //         blue_speaker_mini_10_5,
  //       ],
  //       stock_quantity: 20,
  //       id: 36,
  //       is_favorite: false,
  //       description:
  //         "Обновленная версия умной колонки с голосовым ассистентом Алисой.\n" +
  //         "Теперь Алиса работает с нейросетью YandexGPT, которая позволила улучшить сценарии работы виртуального ассистента №1*\n" +
  //         "Помогает вам придумывать идеи, объясняет сложное простыми словами, общается\n" +
  //         "как интересный собеседник - теперь Алиса лучше удерживает контекст разговора и задаёт вопросы, когда хочет что-то уточнить.\n" +
  //         "Модель получила более громкий звук — мощностью 10 Вт.",
  //       specifications: [
  //         {
  //           id: 0,
  //           title: "Общие",
  //           rows: [
  //             {
  //               id: 0,
  //               name: "Беспроводная связь",
  //               value: "Wi-Fi® 802.11b/g/n/ac (2,4 ГГц, 5 ГГц)",
  //             },
  //             {
  //               id: 1,
  //               name: "Беспроводные интерфейсы",
  //               value: "Bluetooth® 5.0, BLE",
  //             },
  //             { id: 2, name: "Динамик", value: "широкополосный, 10 Вт, 1 шт." },
  //             { id: 3, name: "Микрофоны", value: "4 шт" },
  //             {
  //               id: 4,
  //               name: "Адаптер питания",
  //               value:
  //                 "Номинальное напряжение 100–240 В, Номинальная частота 50–60 Гц, Максимальный ток 500 мА, номинальное напряжение 15 В, номинальный ток 1,2 А, Класс защиты 2",
  //             },
  //             { id: 5, name: "Сенсорные кнопки", value: "3" },
  //             { id: 6, name: "Аудиовыход", value: "3.5 мм" },
  //             { id: 7, name: "Разъём питания", value: "(DC jack) 4 мм" },
  //             {
  //               id: 8,
  //               name: "Габариты и производство",
  //               value:
  //                 "Гарантия: 1 год, Производство: Китай, Габариты (диаметр × высота): 97 × 54 мм, Масса нетто: 260 г.",
  //             },
  //             { id: 9, name: "LED-экран с часами", value: "есть" },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       color: "Красный гранат",
  //       price: 9990,
  //       photos: [
  //         red_speaker_mini_10_1,
  //         red_speaker_mini_10_2,
  //         red_speaker_mini_10_3,
  //         red_speaker_mini_10_4,
  //         red_speaker_mini_10_5,
  //       ],
  //       stock_quantity: 20,
  //       id: 0,
  //       is_favorite: false,
  //       description:
  //         "Обновленная версия умной колонки с голосовым ассистентом Алисой.\n" +
  //         "Теперь Алиса работает с нейросетью YandexGPT, которая позволила улучшить сценарии работы виртуального ассистента №1*\n" +
  //         "Помогает вам придумывать идеи, объясняет сложное простыми словами, общается\n" +
  //         "как интересный собеседник - теперь Алиса лучше удерживает контекст разговора и задаёт вопросы, когда хочет что-то уточнить.\n" +
  //         "Модель получила более громкий звук — мощностью 10 Вт.",
  //       specifications: [
  //         {
  //           id: 0,
  //           title: "Общие",
  //           rows: [
  //             {
  //               id: 0,
  //               name: "Беспроводная связь",
  //               value: "Wi-Fi® 802.11b/g/n/ac (2,4 ГГц, 5 ГГц)",
  //             },
  //             {
  //               id: 1,
  //               name: "Беспроводные интерфейсы",
  //               value: "Bluetooth® 5.0, BLE",
  //             },
  //             { id: 2, name: "Динамик", value: "широкополосный, 10 Вт, 1 шт." },
  //             { id: 3, name: "Микрофоны", value: "4 шт" },
  //             {
  //               id: 4,
  //               name: "Адаптер питания",
  //               value:
  //                 "Номинальное напряжение 100–240 В, Номинальная частота 50–60 Гц, Максимальный ток 500 мА, номинальное напряжение 15 В, номинальный ток 1,2 А, Класс защиты 2",
  //             },
  //             { id: 5, name: "Сенсорные кнопки", value: "3" },
  //             { id: 6, name: "Аудиовыход", value: "3.5 мм" },
  //             { id: 7, name: "Разъём питания", value: "(DC jack) 4 мм" },
  //             {
  //               id: 8,
  //               name: "Габариты и производство",
  //               value:
  //                 "Гарантия: 1 год, Производство: Китай, Габариты (диаметр × высота): 97 × 54 мм, Масса нетто: 260 г.",
  //             },
  //             { id: 9, name: "LED-экран с часами", value: "есть" },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       color: "Cерый опал",
  //       price: 9990,
  //       photos: [
  //         gray_speaker_mini_10_1,
  //         gray_speaker_mini_10_2,
  //         gray_speaker_mini_10_3,
  //         gray_speaker_mini_10_4,
  //         gray_speaker_mini_10_5,
  //       ],
  //       stock_quantity: 20,
  //       id: 20,
  //       is_favorite: false,
  //       description:
  //         "Обновленная версия умной колонки с голосовым ассистентом Алисой.\n" +
  //         "Теперь Алиса работает с нейросетью YandexGPT, которая позволила улучшить сценарии работы виртуального ассистента №1*\n" +
  //         "Помогает вам придумывать идеи, объясняет сложное простыми словами, общается\n" +
  //         "как интересный собеседник - теперь Алиса лучше удерживает контекст разговора и задаёт вопросы, когда хочет что-то уточнить.\n" +
  //         "Модель получила более громкий звук — мощностью 10 Вт.",
  //       specifications: [
  //         {
  //           id: 0,
  //           title: "Общие",
  //           rows: [
  //             {
  //               id: 0,
  //               name: "Беспроводная связь",
  //               value: "Wi-Fi® 802.11b/g/n/ac (2,4 ГГц, 5 ГГц)",
  //             },
  //             {
  //               id: 1,
  //               name: "Беспроводные интерфейсы",
  //               value: "Bluetooth® 5.0, BLE",
  //             },
  //             { id: 2, name: "Динамик", value: "широкополосный, 10 Вт, 1 шт." },
  //             { id: 3, name: "Микрофоны", value: "4 шт" },
  //             {
  //               id: 4,
  //               name: "Адаптер питания",
  //               value:
  //                 "Номинальное напряжение 100–240 В, Номинальная частота 50–60 Гц, Максимальный ток 500 мА, номинальное напряжение 15 В, номинальный ток 1,2 А, Класс защиты 2",
  //             },
  //             { id: 5, name: "Сенсорные кнопки", value: "3" },
  //             { id: 6, name: "Аудиовыход", value: "3.5 мм" },
  //             { id: 7, name: "Разъём питания", value: "(DC jack) 4 мм" },
  //             {
  //               id: 8,
  //               name: "Габариты и производство",
  //               value:
  //                 "Гарантия: 1 год, Производство: Китай, Габариты (диаметр × высота): 97 × 54 мм, Масса нетто: 260 г.",
  //             },
  //             { id: 9, name: "LED-экран с часами", value: "есть" },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       color: "Черный оникс",
  //       price: 9990,
  //       photos: [
  //         black_speaker_mini_10_1,
  //         black_speaker_mini_10_2,
  //         black_speaker_mini_10_3,
  //         black_speaker_mini_10_4,
  //         black_speaker_mini_10_5,
  //       ],
  //       stock_quantity: 10,
  //       id: 2,
  //       is_favorite: false,
  //       description:
  //         "Обновленная версия умной колонки с голосовым ассистентом Алисой.\n" +
  //         "Теперь Алиса работает с нейросетью YandexGPT, которая позволила улучшить сценарии работы виртуального ассистента №1*\n" +
  //         "Помогает вам придумывать идеи, объясняет сложное простыми словами, общается\n" +
  //         "как интересный собеседник - теперь Алиса лучше удерживает контекст разговора и задаёт вопросы, когда хочет что-то уточнить.\n" +
  //         "Модель получила более громкий звук — мощностью 10 Вт.",
  //       specifications: [
  //         {
  //           id: 0,
  //           title: "Общие",
  //           rows: [
  //             {
  //               id: 0,
  //               name: "Беспроводная связь",
  //               value: "Wi-Fi® 802.11b/g/n/ac (2,4 ГГц, 5 ГГц)",
  //             },
  //             {
  //               id: 1,
  //               name: "Беспроводные интерфейсы",
  //               value: "Bluetooth® 5.0, BLE",
  //             },
  //             { id: 2, name: "Динамик", value: "широкополосный, 10 Вт, 1 шт." },
  //             { id: 3, name: "Микрофоны", value: "4 шт" },
  //             {
  //               id: 4,
  //               name: "Адаптер питания",
  //               value:
  //                 "Номинальное напряжение 100–240 В, Номинальная частота 50–60 Гц, Максимальный ток 500 мА, номинальное напряжение 15 В, номинальный ток 1,2 А, Класс защиты 2",
  //             },
  //             { id: 5, name: "Сенсорные кнопки", value: "3" },
  //             { id: 6, name: "Аудиовыход", value: "3.5 мм" },
  //             { id: 7, name: "Разъём питания", value: "(DC jack) 4 мм" },
  //             {
  //               id: 8,
  //               name: "Габариты и производство",
  //               value:
  //                 "Гарантия: 1 год, Производство: Китай, Габариты (диаметр × высота): 97 × 54 мм, Масса нетто: 260 г.",
  //             },
  //             { id: 9, name: "LED-экран с часами", value: "есть" },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  //   id: 21,
  //   count_variants: 1,
  // },
  // {
  //   name: "Умная колонка",
  //   description: "Умная колонка Яндекс Станция 2 с Алисой на YaGPT, 30Вт ",
  //   category_id: 3,
  //   discount: 3000,
  //   variants: [
  //     {
  //       color: "Кобальт",
  //       price: 17990,
  //       photos: [
  //         blue_speaker_2_1,
  //         blue_speaker_2_2,
  //         blue_speaker_2_3,
  //         blue_speaker_2_4,
  //         blue_speaker_2_5,
  //       ],
  //       stock_quantity: 10,
  //       id: 36,
  //       is_favorite: false,
  //       description:
  //         "Умная колонка второго поколения — новый дизайн, звук, центр управления умным домом и Алиса.\n" +
  //         "Теперь Алиса работает с нейросетью YandexGPT, которая позволила улучшить сценарии работы виртуального ассистента №1*.\n" +
  //         "Помогает вам придумывать идеи, объясняет сложное простыми словами, общается как интересный собеседник -  теперь Алиса лучше удерживает контекст разговора и задаёт вопросы, когда хочет что-то уточнить.\n" +
  //         "\n",
  //       specifications: [
  //         {
  //           id: 0,
  //           title: "Общие",
  //           rows: [
  //             { id: 0, name: "Страна производства", value: "Китай" },
  //             {
  //               id: 1,
  //               name: "Беспроводная связь",
  //               value:
  //                 "Wi-Fi® IEEE 802.11b/g/n/ac (2,4 ГГц, 5 ГГц), Bluetooth® 5.0, BLE, Zigbee™ 3.0",
  //             },
  //             { id: 2, name: "Срок службы", value: "2 года" },
  //             { id: 3, name: "Гарантия", value: "1 год" },
  //             { id: 4, name: "Масса нетто", value: "1,3 – 1,5 кг" },
  //             { id: 5, name: "Питание", value: "15 В с разъемом USB Type-C" },
  //             { id: 6, name: "Габариты", value: "(ДxШxВ): 99 x 123 x 199мм" },
  //             { id: 7, name: "Микрофоны", value: "4 шт" },
  //             {
  //               id: 8,
  //               name: "Адаптер питания",
  //               value:
  //                 "Входные характеристики: номинальное напряжение 100-240 В, номинальная частота 50-60 Гц, максимальный ток 0,9 А при 100 В, Выходные характеристики: 5 В / 3А, 9 В / 3A, 12 В / 2,92 А, 15 В / 2,33 А, Поддержка USB PD, Класс защиты: 2",
  //             },
  //             {
  //               id: 9,
  //               name: "Верхняя панель",
  //               value:
  //                 "99 x 123 мм, градиентная подсветка, 16 млн цветов, сенсорное управление",
  //             },
  //             {
  //               id: 10,
  //               name: "Динамики",
  //               value:
  //                 "2 широкополосных динамика по 63,5 мм, каждый мощностью 15 Вт, Суммарная акустическая мощность: 30 Вт, Диапазон частот: 65 Гц – 20 кГц",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       color: "Антрацит",
  //       price: 17990,
  //       photos: [
  //         black_speaker_2_1,
  //         black_speaker_2_2,
  //         black_speaker_2_3,
  //         black_speaker_2_4,
  //         black_speaker_2_5,
  //       ],
  //       stock_quantity: 10,
  //       id: 2,
  //       is_favorite: false,
  //       description:
  //         "Умная колонка второго поколения — новый дизайн, звук, центр управления умным домом и Алиса.\n" +
  //         "Теперь Алиса работает с нейросетью YandexGPT, которая позволила улучшить сценарии работы виртуального ассистента №1*.\n" +
  //         "Помогает вам придумывать идеи, объясняет сложное простыми словами, общается как интересный собеседник -  теперь Алиса лучше удерживает контекст разговора и задаёт вопросы, когда хочет что-то уточнить.\n" +
  //         "\n",
  //       specifications: [
  //         {
  //           id: 0,
  //           title: "Общие",
  //           rows: [
  //             { id: 0, name: "Страна производства", value: "Китай" },
  //             {
  //               id: 1,
  //               name: "Беспроводная связь",
  //               value:
  //                 "Wi-Fi® IEEE 802.11b/g/n/ac (2,4 ГГц, 5 ГГц), Bluetooth® 5.0, BLE, Zigbee™ 3.0",
  //             },
  //             { id: 2, name: "Срок службы", value: "2 года" },
  //             { id: 3, name: "Гарантия", value: "1 год" },
  //             { id: 4, name: "Масса нетто", value: "1,3 – 1,5 кг" },
  //             { id: 5, name: "Питание", value: "15 В с разъемом USB Type-C" },
  //             { id: 6, name: "Габариты", value: "(ДxШxВ): 99 x 123 x 199мм" },
  //             { id: 7, name: "Микрофоны", value: "4 шт" },
  //             {
  //               id: 8,
  //               name: "Адаптер питания",
  //               value:
  //                 "Входные характеристики: номинальное напряжение 100-240 В, номинальная частота 50-60 Гц, максимальный ток 0,9 А при 100 В, Выходные характеристики: 5 В / 3А, 9 В / 3A, 12 В / 2,92 А, 15 В / 2,33 А, Поддержка USB PD, Класс защиты: 2",
  //             },
  //             {
  //               id: 9,
  //               name: "Верхняя панель",
  //               value:
  //                 "99 x 123 мм, градиентная подсветка, 16 млн цветов, сенсорное управление",
  //             },
  //             {
  //               id: 10,
  //               name: "Динамики",
  //               value:
  //                 "2 широкополосных динамика по 63,5 мм, каждый мощностью 15 Вт, Суммарная акустическая мощность: 30 Вт, Диапазон частот: 65 Гц – 20 кГц",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       color: "Медный",
  //       price: 17990,
  //       photos: [
  //         brown_speaker_2_1,
  //         brown_speaker_2_2,
  //         brown_speaker_2_3,
  //         brown_speaker_2_4,
  //         brown_speaker_2_5,
  //       ],
  //       stock_quantity: 10,
  //       id: 50,
  //       is_favorite: false,
  //       description:
  //         "Умная колонка второго поколения — новый дизайн, звук, центр управления умным домом и Алиса.\n" +
  //         "Теперь Алиса работает с нейросетью YandexGPT, которая позволила улучшить сценарии работы виртуального ассистента №1*.\n" +
  //         "Помогает вам придумывать идеи, объясняет сложное простыми словами, общается как интересный собеседник -  теперь Алиса лучше удерживает контекст разговора и задаёт вопросы, когда хочет что-то уточнить.\n" +
  //         "\n",
  //       specifications: [
  //         {
  //           id: 0,
  //           title: "Общие",
  //           rows: [
  //             { id: 0, name: "Страна производства", value: "Китай" },
  //             {
  //               id: 1,
  //               name: "Беспроводная связь",
  //               value:
  //                 "Wi-Fi® IEEE 802.11b/g/n/ac (2,4 ГГц, 5 ГГц), Bluetooth® 5.0, BLE, Zigbee™ 3.0",
  //             },
  //             { id: 2, name: "Срок службы", value: "2 года" },
  //             { id: 3, name: "Гарантия", value: "1 год" },
  //             { id: 4, name: "Масса нетто", value: "1,3 – 1,5 кг" },
  //             { id: 5, name: "Питание", value: "15 В с разъемом USB Type-C" },
  //             { id: 6, name: "Габариты", value: "(ДxШxВ): 99 x 123 x 199мм" },
  //             { id: 7, name: "Микрофоны", value: "4 шт" },
  //             {
  //               id: 8,
  //               name: "Адаптер питания",
  //               value:
  //                 "Входные характеристики: номинальное напряжение 100-240 В, номинальная частота 50-60 Гц, максимальный ток 0,9 А при 100 В, Выходные характеристики: 5 В / 3А, 9 В / 3A, 12 В / 2,92 А, 15 В / 2,33 А, Поддержка USB PD, Класс защиты: 2",
  //             },
  //             {
  //               id: 9,
  //               name: "Верхняя панель",
  //               value:
  //                 "99 x 123 мм, градиентная подсветка, 16 млн цветов, сенсорное управление",
  //             },
  //             {
  //               id: 10,
  //               name: "Динамики",
  //               value:
  //                 "2 широкополосных динамика по 63,5 мм, каждый мощностью 15 Вт, Суммарная акустическая мощность: 30 Вт, Диапазон частот: 65 Гц – 20 кГц",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       color: "Песочный",
  //       price: 17990,
  //       photos: [
  //         sandy_speaker_2_1,
  //         sandy_speaker_2_2,
  //         sandy_speaker_2_3,
  //         sandy_speaker_2_4,
  //         sandy_speaker_2_5,
  //       ],
  //       stock_quantity: 10,
  //       id: 51,
  //       is_favorite: false,
  //       description:
  //         "Умная колонка второго поколения — новый дизайн, звук, центр управления умным домом и Алиса.\n" +
  //         "Теперь Алиса работает с нейросетью YandexGPT, которая позволила улучшить сценарии работы виртуального ассистента №1*.\n" +
  //         "Помогает вам придумывать идеи, объясняет сложное простыми словами, общается как интересный собеседник -  теперь Алиса лучше удерживает контекст разговора и задаёт вопросы, когда хочет что-то уточнить.\n" +
  //         "\n",
  //       specifications: [
  //         {
  //           id: 0,
  //           title: "Общие",
  //           rows: [
  //             { id: 0, name: "Страна производства", value: "Китай" },
  //             {
  //               id: 1,
  //               name: "Беспроводная связь",
  //               value:
  //                 "Wi-Fi® IEEE 802.11b/g/n/ac (2,4 ГГц, 5 ГГц), Bluetooth® 5.0, BLE, Zigbee™ 3.0",
  //             },
  //             { id: 2, name: "Срок службы", value: "2 года" },
  //             { id: 3, name: "Гарантия", value: "1 год" },
  //             { id: 4, name: "Масса нетто", value: "1,3 – 1,5 кг" },
  //             { id: 5, name: "Питание", value: "15 В с разъемом USB Type-C" },
  //             { id: 6, name: "Габариты", value: "(ДxШxВ): 99 x 123 x 199мм" },
  //             { id: 7, name: "Микрофоны", value: "4 шт" },
  //             {
  //               id: 8,
  //               name: "Адаптер питания",
  //               value:
  //                 "Входные характеристики: номинальное напряжение 100-240 В, номинальная частота 50-60 Гц, максимальный ток 0,9 А при 100 В, Выходные характеристики: 5 В / 3А, 9 В / 3A, 12 В / 2,92 А, 15 В / 2,33 А, Поддержка USB PD, Класс защиты: 2",
  //             },
  //             {
  //               id: 9,
  //               name: "Верхняя панель",
  //               value:
  //                 "99 x 123 мм, градиентная подсветка, 16 млн цветов, сенсорное управление",
  //             },
  //             {
  //               id: 10,
  //               name: "Динамики",
  //               value:
  //                 "2 широкополосных динамика по 63,5 мм, каждый мощностью 15 Вт, Суммарная акустическая мощность: 30 Вт, Диапазон частот: 65 Гц – 20 кГц",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  //   id: 1,
  //   count_variants: 1,
  // },
  // {
  //   name: "Умная колонка",
  //   description: "Умная колонка Новая Яндекс Станция Лайт 2 с Алисой на YaGPT ",
  //   category_id: 3,
  //   discount: 0,
  //   variants: [
  //     {
  //       color: "Фиолетовый",
  //       price: 5990,
  //       photos: [
  //         purple_speaker_light_2_1,
  //         purple_speaker_light_2_2,
  //         purple_speaker_light_2_3,
  //       ],
  //       stock_quantity: 10,
  //       id: 30,
  //       is_favorite: false,
  //       description:
  //         "Яндекс Станция Лайт 2 — новая умная колонка для детей и тех, кто не перестаёт ими быть. Внутри живёт более эмоциональная и функциональная Алиса, с которой никогда не бывает скучно: с ней можно веселиться, делиться секретами, играть и общаться дни напролёт — она найдет ответы на миллионы вопросов, придумает идеи, предложит классные игры, включит любимую музыку. Теперь виртуальный ассистент №1⁵ подстраивает интонацию под ваше настроение и показывает свои эмоции с помощью глазок на LED-экране Станции. В наборе — классные стикеры и маски, чтобы у ребёнка было пространство для творчества.",
  //       specifications: [
  //         {
  //           id: 0,
  //           title: "Общие",
  //           rows: [
  //             { id: 0, name: "Количество динамиков", value: "1" },
  //             { id: 1, name: "Материал корпуса", value: "пластик" },
  //             {
  //               id: 2,
  //               name: "Беспроводные интерфейсы",
  //               value: "Bluetooth®, Wi-Fi®",
  //             },
  //             {
  //               id: 3,
  //               name: "Комплектация",
  //               value: "Яндекс Станция Лайт 2, адаптер питания, инструкция",
  //             },
  //             { id: 4, name: "Максимальная мощность, Вт", value: "6" },
  //             { id: 5, name: "Макс. частота, Гц", value: "20000" },
  //             { id: 6, name: "Входные интерфейсы", value: "USB Type-C" },
  //             { id: 7, name: "Модуль связи Bluetooth", value: "5.0" },
  //             { id: 8, name: "Наличие микрофона", value: "Да" },
  //             { id: 9, name: "Мин. частота, Гц", value: "50" },
  //             { id: 10, name: "Размеры, мм", value: "97х66" },
  //             { id: 11, name: "Срок службы, лет", value: "2" },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       color: "Голубой",
  //       price: 5990,
  //       photos: [
  //         blue_speaker_light_2_1,
  //         blue_speaker_light_2_2,
  //         blue_speaker_light_2_3,
  //       ],
  //       stock_quantity: 10,
  //       id: 35,
  //       is_favorite: false,
  //       description:
  //         "Яндекс Станция Лайт 2 — новая умная колонка для детей и тех, кто не перестаёт ими быть. Внутри живёт более эмоциональная и функциональная Алиса, с которой никогда не бывает скучно: с ней можно веселиться, делиться секретами, играть и общаться дни напролёт — она найдет ответы на миллионы вопросов, придумает идеи, предложит классные игры, включит любимую музыку. Теперь виртуальный ассистент №1⁵ подстраивает интонацию под ваше настроение и показывает свои эмоции с помощью глазок на LED-экране Станции. В наборе — классные стикеры и маски, чтобы у ребёнка было пространство для творчества.",
  //       specifications: [
  //         {
  //           id: 0,
  //           title: "Общие",
  //           rows: [
  //             { id: 0, name: "Количество динамиков", value: "1" },
  //             { id: 1, name: "Материал корпуса", value: "пластик" },
  //             {
  //               id: 2,
  //               name: "Беспроводные интерфейсы",
  //               value: "Bluetooth®, Wi-Fi®",
  //             },
  //             {
  //               id: 3,
  //               name: "Комплектация",
  //               value: "Яндекс Станция Лайт 2, адаптер питания, инструкция",
  //             },
  //             { id: 4, name: "Максимальная мощность, Вт", value: "6" },
  //             { id: 5, name: "Макс. частота, Гц", value: "20000" },
  //             { id: 6, name: "Входные интерфейсы", value: "USB Type-C" },
  //             { id: 7, name: "Модуль связи Bluetooth", value: "5.0" },
  //             { id: 8, name: "Наличие микрофона", value: "Да" },
  //             { id: 9, name: "Мин. частота, Гц", value: "50" },
  //             { id: 10, name: "Размеры, мм", value: "97х66" },
  //             { id: 11, name: "Срок службы, лет", value: "2" },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       color: "Розовый",
  //       price: 5990,
  //       photos: [
  //         pink_speaker_light_2_1,
  //         pink_speaker_light_2_2,
  //         pink_speaker_light_2_3,
  //       ],
  //       stock_quantity: 10,
  //       id: 40,
  //       is_favorite: false,
  //       description:
  //         "Яндекс Станция Лайт 2 — новая умная колонка для детей и тех, кто не перестаёт ими быть. Внутри живёт более эмоциональная и функциональная Алиса, с которой никогда не бывает скучно: с ней можно веселиться, делиться секретами, играть и общаться дни напролёт — она найдет ответы на миллионы вопросов, придумает идеи, предложит классные игры, включит любимую музыку. Теперь виртуальный ассистент №1⁵ подстраивает интонацию под ваше настроение и показывает свои эмоции с помощью глазок на LED-экране Станции. В наборе — классные стикеры и маски, чтобы у ребёнка было пространство для творчества.",
  //       specifications: [
  //         {
  //           id: 0,
  //           title: "Общие",
  //           rows: [
  //             { id: 0, name: "Количество динамиков", value: "1" },
  //             { id: 1, name: "Материал корпуса", value: "пластик" },
  //             {
  //               id: 2,
  //               name: "Беспроводные интерфейсы",
  //               value: "Bluetooth®, Wi-Fi®",
  //             },
  //             {
  //               id: 3,
  //               name: "Комплектация",
  //               value: "Яндекс Станция Лайт 2, адаптер питания, инструкция",
  //             },
  //             { id: 4, name: "Максимальная мощность, Вт", value: "6" },
  //             { id: 5, name: "Макс. частота, Гц", value: "20000" },
  //             { id: 6, name: "Входные интерфейсы", value: "USB Type-C" },
  //             { id: 7, name: "Модуль связи Bluetooth", value: "5.0" },
  //             { id: 8, name: "Наличие микрофона", value: "Да" },
  //             { id: 9, name: "Мин. частота, Гц", value: "50" },
  //             { id: 10, name: "Размеры, мм", value: "97х66" },
  //             { id: 11, name: "Срок службы, лет", value: "2" },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  //   id: 2,
  //   count_variants: 3,
  // },
  // {
  //   name: "Умная колонка",
  //   description:
  //     "Умная колонка Яндекс Станция Миди с Алисой на YaGPT, с Zigbee™, 24Вт ",
  //   category_id: 3,
  //   discount: 0,
  //   variants: [
  //     {
  //       color: "Серая",
  //       price: 16990,
  //       photos: [
  //         gray_speaker_zigbee_24_1,
  //         gray_speaker_zigbee_24_2,
  //         gray_speaker_zigbee_24_3,
  //       ],
  //       stock_quantity: 10,
  //       id: 20,
  //       is_favorite: false,
  //       description:
  //         "Яндекс Станция Миди — новая умная колонка с виртуальным ассистентом Алисой. Мощное звучание 24 Вт в таком компактном корпусе. Благодаря переходу на нейронный процессор Станция Миди быстрее обрабатывает ваши запросы. А значит, Алиса лучше откликается на команды и точнее узнаёт людей по голосу. LED-дисплей, который показывает время, погоду и реакции Алисы, а также активная контурная LED-подсветка. Встроенный хаб управления Zigbee™ и голосовое управление умным домом даже без интернета1. Беспроводная связь Wi-Fi (2,4–5 ГГц) и Bluetooth 5.0.\n" +
  //         "\n" +
  //         "Новый размер и узнаваемый дизайн — Станция Миди впишется в любое пространство вашего дома.\n" +
  //         "\n",
  //       specifications: [
  //         {
  //           id: 0,
  //           title: "Общие",
  //           rows: [
  //             { id: 0, name: "Тип", value: "Умная колонка" },
  //             { id: 1, name: "Суммарная мощность", value: "24 Вт" },
  //             {
  //               id: 2,
  //               name: "Минимальная воспроизводимая частота",
  //               value: "70 Гц",
  //             },
  //             {
  //               id: 3,
  //               name: "Максимальная воспроизводимая частота",
  //               value: "20 кГц",
  //             },
  //             {
  //               id: 4,
  //               name: "Количество динамиков",
  //               value: "ВЧ x 2, НЧ x 1, пассивн. излучатель x 2",
  //             },
  //             { id: 5, name: "Диаметр НЧ-динамика", value: "63 мм" },
  //             { id: 6, name: "Количество микрофонов", value: "4" },
  //             {
  //               id: 7,
  //               name: "Беспроводная связь",
  //               value: "Bluetooth®, Wi-Fi®, Zigbee™",
  //             },
  //             {
  //               id: 8,
  //               name: "Стандарт Wi-Fi",
  //               value: "IEEE 802.11 a/b/g/n/ac",
  //             },
  //             {
  //               id: 9,
  //               name: "Частотный диапазон Wi-Fi",
  //               value: "2.4 ГГц / 5 ГГц",
  //             },
  //             { id: 10, name: "Стандарт Bluetooth", value: "5.0" },
  //             { id: 11, name: "Тип питания", value: "от сети, От сети 220 В" },
  //             { id: 12, name: "Материал корпуса", value: "пластик, ткань" },
  //             {
  //               id: 13,
  //               name: "Экосистема Умного дома",
  //               value: "Умный дом Яндекса",
  //             },
  //             {
  //               id: 14,
  //               name: "Дополнительная информация",
  //               value:
  //                 "монохромный LED-дисплей, 45 сегментов, круговая LED-подсветка, 16 млн цветов, сенсорная модель управления, NPU-процессор производительностью 1.2 TOPS, поддержка USB PD",
  //             },
  //             {
  //               id: 15,
  //               name: "Особенности",
  //               value: "поддержка потоковых аудиосервисов",
  //             },
  //             { id: 16, name: "Голосовой помощник", value: "Алиса" },
  //             { id: 17, name: "Язык голосового помощника", value: "русский" },
  //             { id: 18, name: "Протокол связи Умного дома", value: "Zigbee™" },
  //             { id: 19, name: "Ширина", value: "96 мм" },
  //             { id: 20, name: "Высота", value: "110 мм" },
  //             { id: 21, name: "Глубина", value: "96 мм" },
  //             { id: 22, name: "Вес", value: "0.9 кг" },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       color: "Черный",
  //       price: 16990,
  //       photos: [
  //         black_speaker_zigbee_24_1,
  //         black_speaker_zigbee_24_2,
  //         black_speaker_zigbee_24_3,
  //       ],
  //       stock_quantity: 10,
  //       id: 2,
  //       is_favorite: false,
  //       description:
  //         "Яндекс Станция Миди — новая умная колонка с виртуальным ассистентом Алисой. Мощное звучание 24 Вт в таком компактном корпусе. Благодаря переходу на нейронный процессор Станция Миди быстрее обрабатывает ваши запросы. А значит, Алиса лучше откликается на команды и точнее узнаёт людей по голосу. LED-дисплей, который показывает время, погоду и реакции Алисы, а также активная контурная LED-подсветка. Встроенный хаб управления Zigbee™ и голосовое управление умным домом даже без интернета1. Беспроводная связь Wi-Fi (2,4–5 ГГц) и Bluetooth 5.0.\n" +
  //         "\n" +
  //         "Новый размер и узнаваемый дизайн — Станция Миди впишется в любое пространство вашего дома.\n" +
  //         "\n",
  //       specifications: [
  //         {
  //           id: 0,
  //           title: "Общие",
  //           rows: [
  //             { id: 0, name: "Тип", value: "Умная колонка" },
  //             { id: 1, name: "Суммарная мощность", value: "24 Вт" },
  //             {
  //               id: 2,
  //               name: "Минимальная воспроизводимая частота",
  //               value: "70 Гц",
  //             },
  //             {
  //               id: 3,
  //               name: "Максимальная воспроизводимая частота",
  //               value: "20 кГц",
  //             },
  //             {
  //               id: 4,
  //               name: "Количество динамиков",
  //               value: "ВЧ x 2, НЧ x 1, пассивн. излучатель x 2",
  //             },
  //             { id: 5, name: "Диаметр НЧ-динамика", value: "63 мм" },
  //             { id: 6, name: "Количество микрофонов", value: "4" },
  //             {
  //               id: 7,
  //               name: "Беспроводная связь",
  //               value: "Bluetooth®, Wi-Fi®, Zigbee™",
  //             },
  //             {
  //               id: 8,
  //               name: "Стандарт Wi-Fi",
  //               value: "IEEE 802.11 a/b/g/n/ac",
  //             },
  //             {
  //               id: 9,
  //               name: "Частотный диапазон Wi-Fi",
  //               value: "2.4 ГГц / 5 ГГц",
  //             },
  //             { id: 10, name: "Стандарт Bluetooth", value: "5.0" },
  //             { id: 11, name: "Тип питания", value: "от сети, От сети 220 В" },
  //             { id: 12, name: "Материал корпуса", value: "пластик, ткань" },
  //             {
  //               id: 13,
  //               name: "Экосистема Умного дома",
  //               value: "Умный дом Яндекса",
  //             },
  //             {
  //               id: 14,
  //               name: "Дополнительная информация",
  //               value:
  //                 "монохромный LED-дисплей, 45 сегментов, круговая LED-подсветка, 16 млн цветов, сенсорная модель управления, NPU-процессор производительностью 1.2 TOPS, поддержка USB PD",
  //             },
  //             {
  //               id: 15,
  //               name: "Особенности",
  //               value: "поддержка потоковых аудиосервисов",
  //             },
  //             { id: 16, name: "Голосовой помощник", value: "Алиса" },
  //             { id: 17, name: "Язык голосового помощника", value: "русский" },
  //             { id: 18, name: "Протокол связи Умного дома", value: "Zigbee™" },
  //             { id: 19, name: "Ширина", value: "96 мм" },
  //             { id: 20, name: "Высота", value: "110 мм" },
  //             { id: 21, name: "Глубина", value: "96 мм" },
  //             { id: 22, name: "Вес", value: "0.9 кг" },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       color: "Изумрудная",
  //       price: 16990,
  //       photos: [
  //         green_speaker_zigbee_24_1,
  //         green_speaker_zigbee_24_2,
  //         green_speaker_zigbee_24_3,
  //       ],
  //       stock_quantity: 10,
  //       id: 25,
  //       is_favorite: false,
  //       description:
  //         "Яндекс Станция Миди — новая умная колонка с виртуальным ассистентом Алисой. Мощное звучание 24 Вт в таком компактном корпусе. Благодаря переходу на нейронный процессор Станция Миди быстрее обрабатывает ваши запросы. А значит, Алиса лучше откликается на команды и точнее узнаёт людей по голосу. LED-дисплей, который показывает время, погоду и реакции Алисы, а также активная контурная LED-подсветка. Встроенный хаб управления Zigbee™ и голосовое управление умным домом даже без интернета1. Беспроводная связь Wi-Fi (2,4–5 ГГц) и Bluetooth 5.0.\n" +
  //         "\n" +
  //         "Новый размер и узнаваемый дизайн — Станция Миди впишется в любое пространство вашего дома.\n" +
  //         "\n",
  //       specifications: [
  //         {
  //           id: 0,
  //           title: "Общие",
  //           rows: [
  //             { id: 0, name: "Тип", value: "Умная колонка" },
  //             { id: 1, name: "Суммарная мощность", value: "24 Вт" },
  //             {
  //               id: 2,
  //               name: "Минимальная воспроизводимая частота",
  //               value: "70 Гц",
  //             },
  //             {
  //               id: 3,
  //               name: "Максимальная воспроизводимая частота",
  //               value: "20 кГц",
  //             },
  //             {
  //               id: 4,
  //               name: "Количество динамиков",
  //               value: "ВЧ x 2, НЧ x 1, пассивн. излучатель x 2",
  //             },
  //             { id: 5, name: "Диаметр НЧ-динамика", value: "63 мм" },
  //             { id: 6, name: "Количество микрофонов", value: "4" },
  //             {
  //               id: 7,
  //               name: "Беспроводная связь",
  //               value: "Bluetooth®, Wi-Fi®, Zigbee™",
  //             },
  //             {
  //               id: 8,
  //               name: "Стандарт Wi-Fi",
  //               value: "IEEE 802.11 a/b/g/n/ac",
  //             },
  //             {
  //               id: 9,
  //               name: "Частотный диапазон Wi-Fi",
  //               value: "2.4 ГГц / 5 ГГц",
  //             },
  //             { id: 10, name: "Стандарт Bluetooth", value: "5.0" },
  //             { id: 11, name: "Тип питания", value: "от сети, От сети 220 В" },
  //             { id: 12, name: "Материал корпуса", value: "пластик, ткань" },
  //             {
  //               id: 13,
  //               name: "Экосистема Умного дома",
  //               value: "Умный дом Яндекса",
  //             },
  //             {
  //               id: 14,
  //               name: "Дополнительная информация",
  //               value:
  //                 "монохромный LED-дисплей, 45 сегментов, круговая LED-подсветка, 16 млн цветов, сенсорная модель управления, NPU-процессор производительностью 1.2 TOPS, поддержка USB PD",
  //             },
  //             {
  //               id: 15,
  //               name: "Особенности",
  //               value: "поддержка потоковых аудиосервисов",
  //             },
  //             { id: 16, name: "Голосовой помощник", value: "Алиса" },
  //             { id: 17, name: "Язык голосового помощника", value: "русский" },
  //             { id: 18, name: "Протокол связи Умного дома", value: "Zigbee™" },
  //             { id: 19, name: "Ширина", value: "96 мм" },
  //             { id: 20, name: "Высота", value: "110 мм" },
  //             { id: 21, name: "Глубина", value: "96 мм" },
  //             { id: 22, name: "Вес", value: "0.9 кг" },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       color: "Красная",
  //       price: 16990,
  //       photos: [
  //         red_speaker_zigbee_24_1,
  //         red_speaker_zigbee_24_2,
  //         red_speaker_zigbee_24_3,
  //       ],
  //       stock_quantity: 10,
  //       id: 0,
  //       is_favorite: false,
  //       description:
  //         "Яндекс Станция Миди — новая умная колонка с виртуальным ассистентом Алисой. Мощное звучание 24 Вт в таком компактном корпусе. Благодаря переходу на нейронный процессор Станция Миди быстрее обрабатывает ваши запросы. А значит, Алиса лучше откликается на команды и точнее узнаёт людей по голосу. LED-дисплей, который показывает время, погоду и реакции Алисы, а также активная контурная LED-подсветка. Встроенный хаб управления Zigbee™ и голосовое управление умным домом даже без интернета1. Беспроводная связь Wi-Fi (2,4–5 ГГц) и Bluetooth 5.0.\n" +
  //         "\n" +
  //         "Новый размер и узнаваемый дизайн — Станция Миди впишется в любое пространство вашего дома.\n" +
  //         "\n",
  //       specifications: [
  //         {
  //           id: 0,
  //           title: "Общие",
  //           rows: [
  //             { id: 0, name: "Тип", value: "Умная колонка" },
  //             { id: 1, name: "Суммарная мощность", value: "24 Вт" },
  //             {
  //               id: 2,
  //               name: "Минимальная воспроизводимая частота",
  //               value: "70 Гц",
  //             },
  //             {
  //               id: 3,
  //               name: "Максимальная воспроизводимая частота",
  //               value: "20 кГц",
  //             },
  //             {
  //               id: 4,
  //               name: "Количество динамиков",
  //               value: "ВЧ x 2, НЧ x 1, пассивн. излучатель x 2",
  //             },
  //             { id: 5, name: "Диаметр НЧ-динамика", value: "63 мм" },
  //             { id: 6, name: "Количество микрофонов", value: "4" },
  //             {
  //               id: 7,
  //               name: "Беспроводная связь",
  //               value: "Bluetooth®, Wi-Fi®, Zigbee™",
  //             },
  //             {
  //               id: 8,
  //               name: "Стандарт Wi-Fi",
  //               value: "IEEE 802.11 a/b/g/n/ac",
  //             },
  //             {
  //               id: 9,
  //               name: "Частотный диапазон Wi-Fi",
  //               value: "2.4 ГГц / 5 ГГц",
  //             },
  //             { id: 10, name: "Стандарт Bluetooth", value: "5.0" },
  //             { id: 11, name: "Тип питания", value: "от сети, От сети 220 В" },
  //             { id: 12, name: "Материал корпуса", value: "пластик, ткань" },
  //             {
  //               id: 13,
  //               name: "Экосистема Умного дома",
  //               value: "Умный дом Яндекса",
  //             },
  //             {
  //               id: 14,
  //               name: "Дополнительная информация",
  //               value:
  //                 "монохромный LED-дисплей, 45 сегментов, круговая LED-подсветка, 16 млн цветов, сенсорная модель управления, NPU-процессор производительностью 1.2 TOPS, поддержка USB PD",
  //             },
  //             {
  //               id: 15,
  //               name: "Особенности",
  //               value: "поддержка потоковых аудиосервисов",
  //             },
  //             { id: 16, name: "Голосовой помощник", value: "Алиса" },
  //             { id: 17, name: "Язык голосового помощника", value: "русский" },
  //             { id: 18, name: "Протокол связи Умного дома", value: "Zigbee™" },
  //             { id: 19, name: "Ширина", value: "96 мм" },
  //             { id: 20, name: "Высота", value: "110 мм" },
  //             { id: 21, name: "Глубина", value: "96 мм" },
  //             { id: 22, name: "Вес", value: "0.9 кг" },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       color: "Желтая",
  //       price: 16990,
  //       photos: [
  //         yellow_speaker_zigbee_24_1,
  //         yellow_speaker_zigbee_24_2,
  //         yellow_speaker_zigbee_24_3,
  //       ],
  //       stock_quantity: 10,
  //       id: 99,
  //       is_favorite: false,
  //       description:
  //         "Яндекс Станция Миди — новая умная колонка с виртуальным ассистентом Алисой. Мощное звучание 24 Вт в таком компактном корпусе. Благодаря переходу на нейронный процессор Станция Миди быстрее обрабатывает ваши запросы. А значит, Алиса лучше откликается на команды и точнее узнаёт людей по голосу. LED-дисплей, который показывает время, погоду и реакции Алисы, а также активная контурная LED-подсветка. Встроенный хаб управления Zigbee™ и голосовое управление умным домом даже без интернета1. Беспроводная связь Wi-Fi (2,4–5 ГГц) и Bluetooth 5.0.\n" +
  //         "\n" +
  //         "Новый размер и узнаваемый дизайн — Станция Миди впишется в любое пространство вашего дома.\n" +
  //         "\n",
  //       specifications: [
  //         {
  //           id: 0,
  //           title: "Общие",
  //           rows: [
  //             { id: 0, name: "Тип", value: "Умная колонка" },
  //             { id: 1, name: "Суммарная мощность", value: "24 Вт" },
  //             {
  //               id: 2,
  //               name: "Минимальная воспроизводимая частота",
  //               value: "70 Гц",
  //             },
  //             {
  //               id: 3,
  //               name: "Максимальная воспроизводимая частота",
  //               value: "20 кГц",
  //             },
  //             {
  //               id: 4,
  //               name: "Количество динамиков",
  //               value: "ВЧ x 2, НЧ x 1, пассивн. излучатель x 2",
  //             },
  //             { id: 5, name: "Диаметр НЧ-динамика", value: "63 мм" },
  //             { id: 6, name: "Количество микрофонов", value: "4" },
  //             {
  //               id: 7,
  //               name: "Беспроводная связь",
  //               value: "Bluetooth®, Wi-Fi®, Zigbee™",
  //             },
  //             {
  //               id: 8,
  //               name: "Стандарт Wi-Fi",
  //               value: "IEEE 802.11 a/b/g/n/ac",
  //             },
  //             {
  //               id: 9,
  //               name: "Частотный диапазон Wi-Fi",
  //               value: "2.4 ГГц / 5 ГГц",
  //             },
  //             { id: 10, name: "Стандарт Bluetooth", value: "5.0" },
  //             { id: 11, name: "Тип питания", value: "от сети, От сети 220 В" },
  //             { id: 12, name: "Материал корпуса", value: "пластик, ткань" },
  //             {
  //               id: 13,
  //               name: "Экосистема Умного дома",
  //               value: "Умный дом Яндекса",
  //             },
  //             {
  //               id: 14,
  //               name: "Дополнительная информация",
  //               value:
  //                 "монохромный LED-дисплей, 45 сегментов, круговая LED-подсветка, 16 млн цветов, сенсорная модель управления, NPU-процессор производительностью 1.2 TOPS, поддержка USB PD",
  //             },
  //             {
  //               id: 15,
  //               name: "Особенности",
  //               value: "поддержка потоковых аудиосервисов",
  //             },
  //             { id: 16, name: "Голосовой помощник", value: "Алиса" },
  //             { id: 17, name: "Язык голосового помощника", value: "русский" },
  //             { id: 18, name: "Протокол связи Умного дома", value: "Zigbee™" },
  //             { id: 19, name: "Ширина", value: "96 мм" },
  //             { id: 20, name: "Высота", value: "110 мм" },
  //             { id: 21, name: "Глубина", value: "96 мм" },
  //             { id: 22, name: "Вес", value: "0.9 кг" },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  //   id: 3,
  //   count_variants: 1,
  // },
  // {
  //   name: "Умная колонка",
  //   description:
  //     "Умная колонка Яндекс Станция Макс с Алисой на YaGPT, с Zigbee™, 65Вт ",
  //   category_id: 3,
  //   discount: 0,
  //   variants: [
  //     {
  //       color: "Зеленый",
  //       price: 34990,
  //       photos: [
  //         green_speaker_zigbee_65_1,
  //         green_speaker_zigbee_65_2,
  //         green_speaker_zigbee_65_3,
  //       ],
  //       stock_quantity: 10,
  //       id: 15,
  //       is_favorite: false,
  //       description:
  //         "Умная колонка Яндекс Станция Макс с виртуальным ассистентом Алисой, мощным звучанием и встроенным хабом управления Zigbee, мощностью звучания 65 Вт, встроенным хабом управления Zigbee, беспроводной связью Wi-Fi (2,4–5 ГГц) и Bluetooth 5.0, с возможностью встраивания в экосистему умного дома — от официального поставщика с гарантией от производителя.\n" +
  //         "Теперь Алиса работает с нейросетью YandexGPT, которая позволила улучшить сценарии работы виртуального ассистента №1*.\n" +
  //         "Помогает вам придумывать идеи, объясняет сложное простыми словами, общается как интересный собеседник -  теперь Алиса лучше удерживает контекст разговора и задаёт вопросы, когда хочет что-то уточнить.\n" +
  //         "\n",
  //       specifications: [
  //         {
  //           id: 0,
  //           title: "Общие",
  //           rows: [
  //             { id: 0, name: "Отношение сигнал/шум", value: "108дБ при 10 Вт" },
  //             {
  //               id: 1,
  //               name: "Мощность",
  //               value: "65 Вт, 2 Hi-Fi усилителя класса D",
  //             },
  //             { id: 2, name: "Гарантия", value: "1 год" },
  //             {
  //               id: 3,
  //               name: "Масса нетто",
  //               value:
  //                 "2,6 – 3 кг (4,175кг в коробке с аксессуарами. Устройство без аксессуаров – 2,65кг)",
  //             },
  //             {
  //               id: 4,
  //               name: "Комплектация",
  //               value:
  //                 "Яндекс Станция Макс, адаптер питания, пульт, кабель HDMI, кабель Ethernet, инструкция",
  //             },
  //             {
  //               id: 5,
  //               name: "Входные характеристики",
  //               value:
  //                 "Номинальное напряжение 100-240 В, Номинальная частота 50-60 Гц, максимальный ток 1,8 А",
  //             },
  //             {
  //               id: 6,
  //               name: "Выходные характеристики",
  //               value: "номинальное напряжение 20 В, номинальный ток 3,25 А",
  //             },
  //             { id: 7, name: "Производство", value: "Китай" },
  //             {
  //               id: 8,
  //               name: "Трёхполосный звук",
  //               value:
  //                 "Низкие, средние и высокие частоты играют разные динамики, чтобы слышать каждый инструмент",
  //             },
  //             {
  //               id: 9,
  //               name: "5 динамиков + 1 пассивный излучатель",
  //               value:
  //                 "НЧ: 1 шт., до 40 Вт, 88 мм (направлен в сторону), СЧ: 2 шт., до 10 Вт, 38 мм (направлены в сторону, фазоинвертеры направлены вперед), ВЧ: 2 шт., до 15 Вт, 20 мм (на фронтальной поверхности), ПИ: 1 шт., 120*95 мм (направлен в сторону)",
  //             },
  //             { id: 10, name: "Технология Dolby Audio", value: "есть" },
  //             { id: 11, name: "Диапазон частот", value: "45 – 20 000 Гц" },
  //             {
  //               id: 12,
  //               name: "Подключение к ТВ",
  //               value:
  //                 "4K (поддержка потоковых видеосервисов), HDMI 2 (кабель в комплекте), Пульт ДУ (в комплекте): - Bluetooth 4.2 - BLE - 2 батарейки ААА - дальность действия – до 10м",
  //             },
  //             {
  //               id: 13,
  //               name: "Другие характеристики",
  //               value:
  //                 "7 микрофонов, Встроенный голосовой помощник Алиса, LED-экран монохромный, белый (25x16 пикселей), Аудиовыход AUX 3,5 мм – для подключения к внешней акустике, Питание от сети, Адаптер питания (в комплекте)",
  //             },
  //             {
  //               id: 14,
  //               name: "Мультирум",
  //               value:
  //                 "Поставьте по колонке с Алисой в каждой комнате, и все они будут играть в унисон – и маленькие, и большие – и Станция Макс",
  //             },
  //             {
  //               id: 15,
  //               name: "Wi-Fi 802.11 b/g/n/ac (2,4 и 5 ГГц)",
  //               value: "да",
  //             },
  //             { id: 16, name: "Zigbee", value: "да" },
  //             {
  //               id: 17,
  //               name: "Gigabit Ethernet (кабель в комплекте)",
  //               value: "да",
  //             },
  //             {
  //               id: 18,
  //               name: "Габариты устройства (Г x Ш x В)",
  //               value: "141 x 141 x 231 мм",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       color: "Бежевый",
  //       price: 34990,
  //       photos: [
  //         beige_speaker_zigbee_65_1,
  //         beige_speaker_zigbee_65_2,
  //         beige_speaker_zigbee_65_3,
  //       ],
  //       stock_quantity: 10,
  //       id: 10,
  //       is_favorite: false,
  //       description:
  //         "Умная колонка Яндекс Станция Макс с виртуальным ассистентом Алисой, мощным звучанием и встроенным хабом управления Zigbee, мощностью звучания 65 Вт, встроенным хабом управления Zigbee, беспроводной связью Wi-Fi (2,4–5 ГГц) и Bluetooth 5.0, с возможностью встраивания в экосистему умного дома — от официального поставщика с гарантией от производителя.\n" +
  //         "Теперь Алиса работает с нейросетью YandexGPT, которая позволила улучшить сценарии работы виртуального ассистента №1*.\n" +
  //         "Помогает вам придумывать идеи, объясняет сложное простыми словами, общается как интересный собеседник -  теперь Алиса лучше удерживает контекст разговора и задаёт вопросы, когда хочет что-то уточнить.\n" +
  //         "\n",
  //       specifications: [
  //         {
  //           id: 0,
  //           title: "Общие",
  //           rows: [
  //             { id: 0, name: "Отношение сигнал/шум", value: "108дБ при 10 Вт" },
  //             {
  //               id: 1,
  //               name: "Мощность",
  //               value: "65 Вт, 2 Hi-Fi усилителя класса D",
  //             },
  //             { id: 2, name: "Гарантия", value: "1 год" },
  //             {
  //               id: 3,
  //               name: "Масса нетто",
  //               value:
  //                 "2,6 – 3 кг (4,175кг в коробке с аксессуарами. Устройство без аксессуаров – 2,65кг)",
  //             },
  //             {
  //               id: 4,
  //               name: "Комплектация",
  //               value:
  //                 "Яндекс Станция Макс, адаптер питания, пульт, кабель HDMI, кабель Ethernet, инструкция",
  //             },
  //             {
  //               id: 5,
  //               name: "Входные характеристики",
  //               value:
  //                 "Номинальное напряжение 100-240 В, Номинальная частота 50-60 Гц, максимальный ток 1,8 А",
  //             },
  //             {
  //               id: 6,
  //               name: "Выходные характеристики",
  //               value: "номинальное напряжение 20 В, номинальный ток 3,25 А",
  //             },
  //             { id: 7, name: "Производство", value: "Китай" },
  //             {
  //               id: 8,
  //               name: "Трёхполосный звук",
  //               value:
  //                 "Низкие, средние и высокие частоты играют разные динамики, чтобы слышать каждый инструмент",
  //             },
  //             {
  //               id: 9,
  //               name: "5 динамиков + 1 пассивный излучатель",
  //               value:
  //                 "НЧ: 1 шт., до 40 Вт, 88 мм (направлен в сторону), СЧ: 2 шт., до 10 Вт, 38 мм (направлены в сторону, фазоинвертеры направлены вперед), ВЧ: 2 шт., до 15 Вт, 20 мм (на фронтальной поверхности), ПИ: 1 шт., 120*95 мм (направлен в сторону)",
  //             },
  //             { id: 10, name: "Технология Dolby Audio", value: "есть" },
  //             { id: 11, name: "Диапазон частот", value: "45 – 20 000 Гц" },
  //             {
  //               id: 12,
  //               name: "Подключение к ТВ",
  //               value:
  //                 "4K (поддержка потоковых видеосервисов), HDMI 2 (кабель в комплекте), Пульт ДУ (в комплекте): - Bluetooth 4.2 - BLE - 2 батарейки ААА - дальность действия – до 10м",
  //             },
  //             {
  //               id: 13,
  //               name: "Другие характеристики",
  //               value:
  //                 "7 микрофонов, Встроенный голосовой помощник Алиса, LED-экран монохромный, белый (25x16 пикселей), Аудиовыход AUX 3,5 мм – для подключения к внешней акустике, Питание от сети, Адаптер питания (в комплекте)",
  //             },
  //             {
  //               id: 14,
  //               name: "Мультирум",
  //               value:
  //                 "Поставьте по колонке с Алисой в каждой комнате, и все они будут играть в унисон – и маленькие, и большие – и Станция Макс",
  //             },
  //             {
  //               id: 15,
  //               name: "Wi-Fi 802.11 b/g/n/ac (2,4 и 5 ГГц)",
  //               value: "да",
  //             },
  //             { id: 16, name: "Zigbee", value: "да" },
  //             {
  //               id: 17,
  //               name: "Gigabit Ethernet (кабель в комплекте)",
  //               value: "да",
  //             },
  //             {
  //               id: 18,
  //               name: "Габариты устройства (Г x Ш x В)",
  //               value: "141 x 141 x 231 мм",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       color: "Черный",
  //       price: 34990,
  //       photos: [
  //         black_speaker_zigbee_65_1,
  //         black_speaker_zigbee_65_2,
  //         black_speaker_zigbee_65_3,
  //       ],
  //       stock_quantity: 10,
  //       id: 2,
  //       is_favorite: false,
  //       description:
  //         "Умная колонка Яндекс Станция Макс с виртуальным ассистентом Алисой, мощным звучанием и встроенным хабом управления Zigbee, мощностью звучания 65 Вт, встроенным хабом управления Zigbee, беспроводной связью Wi-Fi (2,4–5 ГГц) и Bluetooth 5.0, с возможностью встраивания в экосистему умного дома — от официального поставщика с гарантией от производителя.\n" +
  //         "Теперь Алиса работает с нейросетью YandexGPT, которая позволила улучшить сценарии работы виртуального ассистента №1*.\n" +
  //         "Помогает вам придумывать идеи, объясняет сложное простыми словами, общается как интересный собеседник -  теперь Алиса лучше удерживает контекст разговора и задаёт вопросы, когда хочет что-то уточнить.\n" +
  //         "\n",
  //       specifications: [
  //         {
  //           id: 0,
  //           title: "Общие",
  //           rows: [
  //             { id: 0, name: "Отношение сигнал/шум", value: "108дБ при 10 Вт" },
  //             {
  //               id: 1,
  //               name: "Мощность",
  //               value: "65 Вт, 2 Hi-Fi усилителя класса D",
  //             },
  //             { id: 2, name: "Гарантия", value: "1 год" },
  //             {
  //               id: 3,
  //               name: "Масса нетто",
  //               value:
  //                 "2,6 – 3 кг (4,175кг в коробке с аксессуарами. Устройство без аксессуаров – 2,65кг)",
  //             },
  //             {
  //               id: 4,
  //               name: "Комплектация",
  //               value:
  //                 "Яндекс Станция Макс, адаптер питания, пульт, кабель HDMI, кабель Ethernet, инструкция",
  //             },
  //             {
  //               id: 5,
  //               name: "Входные характеристики",
  //               value:
  //                 "Номинальное напряжение 100-240 В, Номинальная частота 50-60 Гц, максимальный ток 1,8 А",
  //             },
  //             {
  //               id: 6,
  //               name: "Выходные характеристики",
  //               value: "номинальное напряжение 20 В, номинальный ток 3,25 А",
  //             },
  //             { id: 7, name: "Производство", value: "Китай" },
  //             {
  //               id: 8,
  //               name: "Трёхполосный звук",
  //               value:
  //                 "Низкие, средние и высокие частоты играют разные динамики, чтобы слышать каждый инструмент",
  //             },
  //             {
  //               id: 9,
  //               name: "5 динамиков + 1 пассивный излучатель",
  //               value:
  //                 "НЧ: 1 шт., до 40 Вт, 88 мм (направлен в сторону), СЧ: 2 шт., до 10 Вт, 38 мм (направлены в сторону, фазоинвертеры направлены вперед), ВЧ: 2 шт., до 15 Вт, 20 мм (на фронтальной поверхности), ПИ: 1 шт., 120*95 мм (направлен в сторону)",
  //             },
  //             { id: 10, name: "Технология Dolby Audio", value: "есть" },
  //             { id: 11, name: "Диапазон частот", value: "45 – 20 000 Гц" },
  //             {
  //               id: 12,
  //               name: "Подключение к ТВ",
  //               value:
  //                 "4K (поддержка потоковых видеосервисов), HDMI 2 (кабель в комплекте), Пульт ДУ (в комплекте): - Bluetooth 4.2 - BLE - 2 батарейки ААА - дальность действия – до 10м",
  //             },
  //             {
  //               id: 13,
  //               name: "Другие характеристики",
  //               value:
  //                 "7 микрофонов, Встроенный голосовой помощник Алиса, LED-экран монохромный, белый (25x16 пикселей), Аудиовыход AUX 3,5 мм – для подключения к внешней акустике, Питание от сети, Адаптер питания (в комплекте)",
  //             },
  //             {
  //               id: 14,
  //               name: "Мультирум",
  //               value:
  //                 "Поставьте по колонке с Алисой в каждой комнате, и все они будут играть в унисон – и маленькие, и большие – и Станция Макс",
  //             },
  //             {
  //               id: 15,
  //               name: "Wi-Fi 802.11 b/g/n/ac (2,4 и 5 ГГц)",
  //               value: "да",
  //             },
  //             { id: 16, name: "Zigbee", value: "да" },
  //             {
  //               id: 17,
  //               name: "Gigabit Ethernet (кабель в комплекте)",
  //               value: "да",
  //             },
  //             {
  //               id: 18,
  //               name: "Габариты устройства (Г x Ш x В)",
  //               value: "141 x 141 x 231 мм",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       color: "Бирюзовый",
  //       price: 34990,
  //       photos: [turquoise_speaker_zigbee_65_1, turquoise_speaker_zigbee_65_2],
  //       stock_quantity: 10,
  //       id: 16,
  //       is_favorite: false,
  //       description:
  //         "Умная колонка Яндекс Станция Макс с виртуальным ассистентом Алисой, мощным звучанием и встроенным хабом управления Zigbee, мощностью звучания 65 Вт, встроенным хабом управления Zigbee, беспроводной связью Wi-Fi (2,4–5 ГГц) и Bluetooth 5.0, с возможностью встраивания в экосистему умного дома — от официального поставщика с гарантией от производителя.\n" +
  //         "Теперь Алиса работает с нейросетью YandexGPT, которая позволила улучшить сценарии работы виртуального ассистента №1*.\n" +
  //         "Помогает вам придумывать идеи, объясняет сложное простыми словами, общается как интересный собеседник -  теперь Алиса лучше удерживает контекст разговора и задаёт вопросы, когда хочет что-то уточнить.\n" +
  //         "\n",
  //       specifications: [
  //         {
  //           id: 0,
  //           title: "Общие",
  //           rows: [
  //             { id: 0, name: "Отношение сигнал/шум", value: "108дБ при 10 Вт" },
  //             {
  //               id: 1,
  //               name: "Мощность",
  //               value: "65 Вт, 2 Hi-Fi усилителя класса D",
  //             },
  //             { id: 2, name: "Гарантия", value: "1 год" },
  //             {
  //               id: 3,
  //               name: "Масса нетто",
  //               value:
  //                 "2,6 – 3 кг (4,175кг в коробке с аксессуарами. Устройство без аксессуаров – 2,65кг)",
  //             },
  //             {
  //               id: 4,
  //               name: "Комплектация",
  //               value:
  //                 "Яндекс Станция Макс, адаптер питания, пульт, кабель HDMI, кабель Ethernet, инструкция",
  //             },
  //             {
  //               id: 5,
  //               name: "Входные характеристики",
  //               value:
  //                 "Номинальное напряжение 100-240 В, Номинальная частота 50-60 Гц, максимальный ток 1,8 А",
  //             },
  //             {
  //               id: 6,
  //               name: "Выходные характеристики",
  //               value: "номинальное напряжение 20 В, номинальный ток 3,25 А",
  //             },
  //             { id: 7, name: "Производство", value: "Китай" },
  //             {
  //               id: 8,
  //               name: "Трёхполосный звук",
  //               value:
  //                 "Низкие, средние и высокие частоты играют разные динамики, чтобы слышать каждый инструмент",
  //             },
  //             {
  //               id: 9,
  //               name: "5 динамиков + 1 пассивный излучатель",
  //               value:
  //                 "НЧ: 1 шт., до 40 Вт, 88 мм (направлен в сторону), СЧ: 2 шт., до 10 Вт, 38 мм (направлены в сторону, фазоинвертеры направлены вперед), ВЧ: 2 шт., до 15 Вт, 20 мм (на фронтальной поверхности), ПИ: 1 шт., 120*95 мм (направлен в сторону)",
  //             },
  //             { id: 10, name: "Технология Dolby Audio", value: "есть" },
  //             { id: 11, name: "Диапазон частот", value: "45 – 20 000 Гц" },
  //             {
  //               id: 12,
  //               name: "Подключение к ТВ",
  //               value:
  //                 "4K (поддержка потоковых видеосервисов), HDMI 2 (кабель в комплекте), Пульт ДУ (в комплекте): - Bluetooth 4.2 - BLE - 2 батарейки ААА - дальность действия – до 10м",
  //             },
  //             {
  //               id: 13,
  //               name: "Другие характеристики",
  //               value:
  //                 "7 микрофонов, Встроенный голосовой помощник Алиса, LED-экран монохромный, белый (25x16 пикселей), Аудиовыход AUX 3,5 мм – для подключения к внешней акустике, Питание от сети, Адаптер питания (в комплекте)",
  //             },
  //             {
  //               id: 14,
  //               name: "Мультирум",
  //               value:
  //                 "Поставьте по колонке с Алисой в каждой комнате, и все они будут играть в унисон – и маленькие, и большие – и Станция Макс",
  //             },
  //             {
  //               id: 15,
  //               name: "Wi-Fi 802.11 b/g/n/ac (2,4 и 5 ГГц)",
  //               value: "да",
  //             },
  //             { id: 16, name: "Zigbee", value: "да" },
  //             {
  //               id: 17,
  //               name: "Gigabit Ethernet (кабель в комплекте)",
  //               value: "да",
  //             },
  //             {
  //               id: 18,
  //               name: "Габариты устройства (Г x Ш x В)",
  //               value: "141 x 141 x 231 мм",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  //   id: 4,
  //   count_variants: 1,
  // },
  // {
  //   name: "Умная колонка",
  //   description:
  //     "Умная колонка Яндекс Станция Дуо Макс с Алисой на YaGPT, с Zigbee™, 60Вт ",
  //   category_id: 4,
  //   discount: 0,
  //   variants: [
  //     {
  //       color: "черный",
  //       price: 44990,
  //       photos: [
  //         black_speaker_zigbee_60_1,
  //         black_speaker_zigbee_60_2,
  //         black_speaker_zigbee_60_3,
  //         black_speaker_zigbee_60_4,
  //       ],
  //       stock_quantity: 10,
  //       id: 2,
  //       is_favorite: false,
  //       description:
  //         "Яндекс Станция Дуо Макс с Алисой — новая флагманская умная колонка с экраном. Большой поворотный Full HD touch-экран с камерой, чтобы смотреть фильмы¹, общаться с близкими по видеосвязи, видеть ответы Алисы и управлять умным домом касаниями. Мощные динамики и сабвуфер — для чистого и сбалансированного звучания любимой музыки¹. Контурная анимированная LED-подсветка. Встроенный хаб управления Zigbee™². Продуманный до деталей дизайн, чтобы вы получали удовольствие каждый раз, когда взаимодействуете с колонкой или просто на неё смотрите.\n",
  //       specifications: [
  //         {
  //           id: 0,
  //           title: "Общие",
  //           rows: [
  //             { id: 0, name: "Тип", value: "Умная колонка" },
  //             { id: 1, name: "Суммарная мощность", value: "60 Вт" },
  //             {
  //               id: 2,
  //               name: "Минимальная воспроизводимая частота",
  //               value: "60 Гц",
  //             },
  //             {
  //               id: 3,
  //               name: "Максимальная воспроизводимая частота",
  //               value: "20 кГц",
  //             },
  //             {
  //               id: 4,
  //               name: "Количество динамиков",
  //               value: "НЧ x 1, широкополосн. x 2",
  //             },
  //             { id: 5, name: "Диаметр НЧ-динамика", value: "100 мм" },
  //             { id: 6, name: "Количество микрофонов", value: "8" },
  //             {
  //               id: 7,
  //               name: "Беспроводная связь",
  //               value: "Bluetooth®, Wi-Fi®, Zigbee™",
  //             },
  //             {
  //               id: 8,
  //               name: "Стандарт Wi-Fi",
  //               value: "IEEE 802.11 b/g/n/ac/ax",
  //             },
  //             {
  //               id: 9,
  //               name: "Частотный диапазон Wi-Fi",
  //               value: "2.4 ГГц / 5 ГГц",
  //             },
  //             { id: 10, name: "Стандарт Bluetooth", value: "5.2/BLE" },
  //             { id: 11, name: "Тип питания", value: "от сети, От сети 220 В" },
  //             { id: 12, name: "Материал корпуса", value: "пластик, ткань" },
  //             {
  //               id: 13,
  //               name: "Экосистема Умного дома",
  //               value: "Умный дом Яндекса",
  //             },
  //             {
  //               id: 14,
  //               name: "Особенности",
  //               value:
  //                 "поддержка потоковых аудиосервисов, поддержка потоковых видеосервисов",
  //             },
  //             { id: 15, name: "Голосовой помощник", value: "Алиса" },
  //             { id: 16, name: "Язык голосового помощника", value: "русский" },
  //             { id: 17, name: "Протокол связи Умного дома", value: "Zigbee™" },
  //             { id: 18, name: "Ширина", value: "118 мм" },
  //             { id: 19, name: "Высота", value: "240 мм" },
  //             { id: 20, name: "Глубина", value: "256 мм" },
  //             { id: 21, name: "Вес", value: "3.3 кг" },
  //             { id: 22, name: "Размер экрана", value: '10.5 "' },
  //             {
  //               id: 23,
  //               name: "Входные характеристики",
  //               value:
  //                 "номинальное напряжение 100–240 В, номинальная частота 50–60 Гц, максимальный ток 1,8 А",
  //             },
  //             {
  //               id: 24,
  //               name: "выходные характеристики",
  //               value:
  //                 "5 B / 3 A; 9 B / 3 A; 15 B / 3 A; 20 B / 3,25 A, поддержка USB PD 3.0",
  //             },
  //             { id: 25, name: "класс защиты", value: "2" },
  //             { id: 26, name: "поворотный сенсорный экран", value: "есть" },
  //             { id: 27, name: "видеокамера", value: "3 Мп с углом обзора 120" },
  //             { id: 28, name: "LED подсветка", value: "есть" },
  //             { id: 29, name: "разъем USB", value: "Type-C" },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       color: "Зеленый",
  //       price: 44990,
  //       photos: [
  //         green_speaker_zigbee_60_1,
  //         green_speaker_zigbee_60_2,
  //         green_speaker_zigbee_60_3,
  //         green_speaker_zigbee_60_4,
  //         green_speaker_zigbee_60_5,
  //       ],
  //       stock_quantity: 10,
  //       id: 15,
  //       is_favorite: false,
  //       description:
  //         "Яндекс Станция Дуо Макс с Алисой — новая флагманская умная колонка с экраном. Большой поворотный Full HD touch-экран с камерой, чтобы смотреть фильмы¹, общаться с близкими по видеосвязи, видеть ответы Алисы и управлять умным домом касаниями. Мощные динамики и сабвуфер — для чистого и сбалансированного звучания любимой музыки¹. Контурная анимированная LED-подсветка. Встроенный хаб управления Zigbee™². Продуманный до деталей дизайн, чтобы вы получали удовольствие каждый раз, когда взаимодействуете с колонкой или просто на неё смотрите.\n",
  //       specifications: [
  //         {
  //           id: 0,
  //           title: "Общие",
  //           rows: [
  //             { id: 0, name: "Тип", value: "Умная колонка" },
  //             { id: 1, name: "Суммарная мощность", value: "60 Вт" },
  //             {
  //               id: 2,
  //               name: "Минимальная воспроизводимая частота",
  //               value: "60 Гц",
  //             },
  //             {
  //               id: 3,
  //               name: "Максимальная воспроизводимая частота",
  //               value: "20 кГц",
  //             },
  //             {
  //               id: 4,
  //               name: "Количество динамиков",
  //               value: "НЧ x 1, широкополосн. x 2",
  //             },
  //             { id: 5, name: "Диаметр НЧ-динамика", value: "100 мм" },
  //             { id: 6, name: "Количество микрофонов", value: "8" },
  //             {
  //               id: 7,
  //               name: "Беспроводная связь",
  //               value: "Bluetooth®, Wi-Fi®, Zigbee™",
  //             },
  //             {
  //               id: 8,
  //               name: "Стандарт Wi-Fi",
  //               value: "IEEE 802.11 b/g/n/ac/ax",
  //             },
  //             {
  //               id: 9,
  //               name: "Частотный диапазон Wi-Fi",
  //               value: "2.4 ГГц / 5 ГГц",
  //             },
  //             { id: 10, name: "Стандарт Bluetooth", value: "5.2/BLE" },
  //             { id: 11, name: "Тип питания", value: "от сети, От сети 220 В" },
  //             { id: 12, name: "Материал корпуса", value: "пластик, ткань" },
  //             {
  //               id: 13,
  //               name: "Экосистема Умного дома",
  //               value: "Умный дом Яндекса",
  //             },
  //             {
  //               id: 14,
  //               name: "Особенности",
  //               value:
  //                 "поддержка потоковых аудиосервисов, поддержка потоковых видеосервисов",
  //             },
  //             { id: 15, name: "Голосовой помощник", value: "Алиса" },
  //             { id: 16, name: "Язык голосового помощника", value: "русский" },
  //             { id: 17, name: "Протокол связи Умного дома", value: "Zigbee™" },
  //             { id: 18, name: "Ширина", value: "118 мм" },
  //             { id: 19, name: "Высота", value: "240 мм" },
  //             { id: 20, name: "Глубина", value: "256 мм" },
  //             { id: 21, name: "Вес", value: "3.3 кг" },
  //             { id: 22, name: "Размер экрана", value: '10.5 "' },
  //             {
  //               id: 23,
  //               name: "Входные характеристики",
  //               value:
  //                 "номинальное напряжение 100–240 В, номинальная частота 50–60 Гц, максимальный ток 1,8 А",
  //             },
  //             {
  //               id: 24,
  //               name: "выходные характеристики",
  //               value:
  //                 "5 B / 3 A; 9 B / 3 A; 15 B / 3 A; 20 B / 3,25 A, поддержка USB PD 3.0",
  //             },
  //             { id: 25, name: "класс защиты", value: "2" },
  //             { id: 26, name: "поворотный сенсорный экран", value: "есть" },
  //             { id: 27, name: "видеокамера", value: "3 Мп с углом обзора 120" },
  //             { id: 28, name: "LED подсветка", value: "есть" },
  //             { id: 29, name: "разъем USB", value: "Type-C" },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       color: "бежевый",
  //       price: 44990,
  //       photos: [
  //         beige_speaker_zigbee_60_1,
  //         beige_speaker_zigbee_60_2,
  //         beige_speaker_zigbee_60_3,
  //         beige_speaker_zigbee_60_4,
  //         beige_speaker_zigbee_60_5,
  //       ],
  //       stock_quantity: 10,
  //       id: 10,
  //       is_favorite: false,
  //       description:
  //         "Яндекс Станция Дуо Макс с Алисой — новая флагманская умная колонка с экраном. Большой поворотный Full HD touch-экран с камерой, чтобы смотреть фильмы¹, общаться с близкими по видеосвязи, видеть ответы Алисы и управлять умным домом касаниями. Мощные динамики и сабвуфер — для чистого и сбалансированного звучания любимой музыки¹. Контурная анимированная LED-подсветка. Встроенный хаб управления Zigbee™². Продуманный до деталей дизайн, чтобы вы получали удовольствие каждый раз, когда взаимодействуете с колонкой или просто на неё смотрите.\n",
  //       specifications: [
  //         {
  //           id: 0,
  //           title: "Общие",
  //           rows: [
  //             { id: 0, name: "Тип", value: "Умная колонка" },
  //             { id: 1, name: "Суммарная мощность", value: "60 Вт" },
  //             {
  //               id: 2,
  //               name: "Минимальная воспроизводимая частота",
  //               value: "60 Гц",
  //             },
  //             {
  //               id: 3,
  //               name: "Максимальная воспроизводимая частота",
  //               value: "20 кГц",
  //             },
  //             {
  //               id: 4,
  //               name: "Количество динамиков",
  //               value: "НЧ x 1, широкополосн. x 2",
  //             },
  //             { id: 5, name: "Диаметр НЧ-динамика", value: "100 мм" },
  //             { id: 6, name: "Количество микрофонов", value: "8" },
  //             {
  //               id: 7,
  //               name: "Беспроводная связь",
  //               value: "Bluetooth®, Wi-Fi®, Zigbee™",
  //             },
  //             {
  //               id: 8,
  //               name: "Стандарт Wi-Fi",
  //               value: "IEEE 802.11 b/g/n/ac/ax",
  //             },
  //             {
  //               id: 9,
  //               name: "Частотный диапазон Wi-Fi",
  //               value: "2.4 ГГц / 5 ГГц",
  //             },
  //             { id: 10, name: "Стандарт Bluetooth", value: "5.2/BLE" },
  //             { id: 11, name: "Тип питания", value: "от сети, От сети 220 В" },
  //             { id: 12, name: "Материал корпуса", value: "пластик, ткань" },
  //             {
  //               id: 13,
  //               name: "Экосистема Умного дома",
  //               value: "Умный дом Яндекса",
  //             },
  //             {
  //               id: 14,
  //               name: "Особенности",
  //               value:
  //                 "поддержка потоковых аудиосервисов, поддержка потоковых видеосервисов",
  //             },
  //             { id: 15, name: "Голосовой помощник", value: "Алиса" },
  //             { id: 16, name: "Язык голосового помощника", value: "русский" },
  //             { id: 17, name: "Протокол связи Умного дома", value: "Zigbee™" },
  //             { id: 18, name: "Ширина", value: "118 мм" },
  //             { id: 19, name: "Высота", value: "240 мм" },
  //             { id: 20, name: "Глубина", value: "256 мм" },
  //             { id: 21, name: "Вес", value: "3.3 кг" },
  //             { id: 22, name: "Размер экрана", value: '10.5 "' },
  //             {
  //               id: 23,
  //               name: "Входные характеристики",
  //               value:
  //                 "номинальное напряжение 100–240 В, номинальная частота 50–60 Гц, максимальный ток 1,8 А",
  //             },
  //             {
  //               id: 24,
  //               name: "выходные характеристики",
  //               value:
  //                 "5 B / 3 A; 9 B / 3 A; 15 B / 3 A; 20 B / 3,25 A, поддержка USB PD 3.0",
  //             },
  //             { id: 25, name: "класс защиты", value: "2" },
  //             { id: 26, name: "поворотный сенсорный экран", value: "есть" },
  //             { id: 27, name: "видеокамера", value: "3 Мп с углом обзора 120" },
  //             { id: 28, name: "LED подсветка", value: "есть" },
  //             { id: 29, name: "разъем USB", value: "Type-C" },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       color: "Красный",
  //       price: 44990,
  //       photos: [
  //         red_speaker_zigbee_60_1,
  //         red_speaker_zigbee_60_2,
  //         red_speaker_zigbee_60_3,
  //         red_speaker_zigbee_60_4,
  //         red_speaker_zigbee_60_5,
  //       ],
  //       stock_quantity: 10,
  //       id: 0,
  //       is_favorite: false,
  //       description:
  //         "Яндекс Станция Дуо Макс с Алисой — новая флагманская умная колонка с экраном. Большой поворотный Full HD touch-экран с камерой, чтобы смотреть фильмы¹, общаться с близкими по видеосвязи, видеть ответы Алисы и управлять умным домом касаниями. Мощные динамики и сабвуфер — для чистого и сбалансированного звучания любимой музыки¹. Контурная анимированная LED-подсветка. Встроенный хаб управления Zigbee™². Продуманный до деталей дизайн, чтобы вы получали удовольствие каждый раз, когда взаимодействуете с колонкой или просто на неё смотрите.\n",
  //       specifications: [
  //         {
  //           id: 0,
  //           title: "Общие",
  //           rows: [
  //             { id: 0, name: "Тип", value: "Умная колонка" },
  //             { id: 1, name: "Суммарная мощность", value: "60 Вт" },
  //             {
  //               id: 2,
  //               name: "Минимальная воспроизводимая частота",
  //               value: "60 Гц",
  //             },
  //             {
  //               id: 3,
  //               name: "Максимальная воспроизводимая частота",
  //               value: "20 кГц",
  //             },
  //             {
  //               id: 4,
  //               name: "Количество динамиков",
  //               value: "НЧ x 1, широкополосн. x 2",
  //             },
  //             { id: 5, name: "Диаметр НЧ-динамика", value: "100 мм" },
  //             { id: 6, name: "Количество микрофонов", value: "8" },
  //             {
  //               id: 7,
  //               name: "Беспроводная связь",
  //               value: "Bluetooth®, Wi-Fi®, Zigbee™",
  //             },
  //             {
  //               id: 8,
  //               name: "Стандарт Wi-Fi",
  //               value: "IEEE 802.11 b/g/n/ac/ax",
  //             },
  //             {
  //               id: 9,
  //               name: "Частотный диапазон Wi-Fi",
  //               value: "2.4 ГГц / 5 ГГц",
  //             },
  //             { id: 10, name: "Стандарт Bluetooth", value: "5.2/BLE" },
  //             { id: 11, name: "Тип питания", value: "от сети, От сети 220 В" },
  //             { id: 12, name: "Материал корпуса", value: "пластик, ткань" },
  //             {
  //               id: 13,
  //               name: "Экосистема Умного дома",
  //               value: "Умный дом Яндекса",
  //             },
  //             {
  //               id: 14,
  //               name: "Особенности",
  //               value:
  //                 "поддержка потоковых аудиосервисов, поддержка потоковых видеосервисов",
  //             },
  //             { id: 15, name: "Голосовой помощник", value: "Алиса" },
  //             { id: 16, name: "Язык голосового помощника", value: "русский" },
  //             { id: 17, name: "Протокол связи Умного дома", value: "Zigbee™" },
  //             { id: 18, name: "Ширина", value: "118 мм" },
  //             { id: 19, name: "Высота", value: "240 мм" },
  //             { id: 20, name: "Глубина", value: "256 мм" },
  //             { id: 21, name: "Вес", value: "3.3 кг" },
  //             { id: 22, name: "Размер экрана", value: '10.5 "' },
  //             {
  //               id: 23,
  //               name: "Входные характеристики",
  //               value:
  //                 "номинальное напряжение 100–240 В, номинальная частота 50–60 Гц, максимальный ток 1,8 А",
  //             },
  //             {
  //               id: 24,
  //               name: "выходные характеристики",
  //               value:
  //                 "5 B / 3 A; 9 B / 3 A; 15 B / 3 A; 20 B / 3,25 A, поддержка USB PD 3.0",
  //             },
  //             { id: 25, name: "класс защиты", value: "2" },
  //             { id: 26, name: "поворотный сенсорный экран", value: "есть" },
  //             { id: 27, name: "видеокамера", value: "3 Мп с углом обзора 120" },
  //             { id: 28, name: "LED подсветка", value: "есть" },
  //             { id: 29, name: "разъем USB", value: "Type-C" },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  //   id: 5,
  //   count_variants: 1,
  // },
  // {
  //   name: "Яндекс ТВ Станция",
  //   description: "Яндекс ТВ Станция с Алисой на YaGPT, 50“ 4K UHD, ",
  //   category_id: 2,
  //   discount: 0,
  //   variants: [
  //     {
  //       color: "черный",
  //       price: 49990,
  //       photos: [tv_station_50_1, tv_station_50_2, tv_station_50_3],
  //       stock_quantity: 10,
  //       id: 2,
  //       is_favorite: false,
  //       description:
  //         "ТВ Станция — новый умный телевизор Яндекса, объединивший в себе лучшие технологии телевизоров и умных колонок с Алисой.\n" +
  //         "Характеристики VA-матрицы и технология Local Dimming дают глубокие и насыщенные черные оттенки.\n" +
  //         "\n",
  //       specifications: [
  //         {
  //           id: 0,
  //           title: "Общие",
  //           rows: [
  //             { id: 0, name: "Тип", value: "ЖК" },
  //             { id: 1, name: "Количество динамиков", value: "4" },
  //             {
  //               id: 2,
  //               name: "Разъемы и интерфейсы",
  //               value:
  //                 "Ethernet - RJ-45, USB Type-A x 2, вход HDMI x 3, выход аудио цифровой оптический, композитный видеовход",
  //             },
  //             {
  //               id: 3,
  //               name: "Экосистема Умного дома",
  //               value: "Умный дом Яндекса",
  //             },
  //             {
  //               id: 4,
  //               name: "Дополнительная информация",
  //               value:
  //                 "Пульт в комплекте, Поддержка Apple HomeKit - нет, Запись с ТВ на USB устройство - нет, Аналоговый тюнер PAL/SECAM - нет, Стандарты DVB-C, DVB-C2, DVB-S, DVB-S2, DVB-T, DVB-T2 - нет",
  //             },
  //             { id: 5, name: "Диагональ", value: '50"' },
  //             { id: 6, name: "Разрешение HD", value: "4K UHD" },
  //             { id: 7, name: "Разрешение", value: "3840x2160" },
  //             { id: 8, name: "Форматы HDR", value: "HDR10" },
  //             { id: 9, name: "Формат телевизора", value: "16:9" },
  //             { id: 10, name: "Тип матрицы экрана", value: "VA" },
  //             { id: 11, name: "Яркость", value: "450 кд/м2" },
  //             { id: 12, name: "Контрастность", value: "5000:1" },
  //             { id: 13, name: "Угол обзора", value: "178 градусов" },
  //             { id: 14, name: "Частота обновления экрана", value: "60 Гц" },
  //             { id: 15, name: "Функции звука", value: "Dolby Audio" },
  //             { id: 16, name: "Суммарная мощность звука", value: "34 Вт" },
  //             { id: 17, name: "Версия интерфейса HDMI", value: "2.1" },
  //             {
  //               id: 18,
  //               name: "Беспроводные интерфейсы",
  //               value: "Bluetooth®, Wi-Fi®",
  //             },
  //             { id: 19, name: "Платформа Smart TV", value: "YaOS X" },
  //             {
  //               id: 20,
  //               name: "Особенности",
  //               value:
  //                 "Local Dimming, Time Shift, голосовое управление, запись ТВ программ, защита от детей, таймер сна, телетекст, электронный Телегид, hdr, ТВ-тюнер отсутствует",
  //             },
  //             { id: 21, name: "Стандарт крепления VESA", value: "200x200 мм" },
  //             { id: 22, name: "Голосовой помощник", value: "Алиса" },
  //             { id: 23, name: "Оперативная память", value: "3 ГБ" },
  //             { id: 24, name: "Размер встроенной памяти", value: "32 ГБ" },
  //             { id: 25, name: "Потребляемая мощность", value: "125 Вт" },
  //             { id: 26, name: "Год создания модели", value: "2023" },
  //             { id: 27, name: "Работает в системе 'умный дом'", value: "есть" },
  //             {
  //               id: 28,
  //               name: "Тип соединения устройств",
  //               value: "беспроводное",
  //             },
  //             {
  //               id: 29,
  //               name: "Размеры с подставкой (ШxВxГ)",
  //               value: "966x638x311 мм",
  //             },
  //             { id: 30, name: "Вес с подставкой", value: "8.8 кг" },
  //             {
  //               id: 31,
  //               name: "Размеры без подставки (ШxВxГ)",
  //               value: "966x578x84 мм",
  //             },
  //             { id: 32, name: "Вес без подставки", value: "8.4 кг" },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  //   id: 6,
  //   count_variants: 1,
  // },
  // {
  //   name: "Яндекс ТВ Станция",
  //   description: "Яндекс ТВ Станция с Алисой на YaGPT, 43“ 4K UHD, ",
  //   category_id: 2,
  //   discount: 12000,
  //   variants: [
  //     {
  //       color: "черный",
  //       price: 44990,
  //       photos: [tv_station_43_1, tv_station_43_2, tv_station_43_3],
  //       stock_quantity: 10,
  //       id: 2,
  //       is_favorite: false,
  //       description:
  //         "ТВ Станция — новый умный телевизор Яндекса, объединивший в себе лучшие технологии телевизоров и умных колонок с Алисой.\n" +
  //         "Характеристики VA-матрицы и технология Local Dimming дают глубокие и насыщенные черные оттенки.\n" +
  //         "\n",
  //       specifications: [
  //         {
  //           id: 0,
  //           title: "Общие",
  //           rows: [
  //             { id: 0, name: "Тип", value: "ЖК" },
  //             { id: 1, name: "Количество динамиков", value: "4" },
  //             {
  //               id: 2,
  //               name: "Разъемы и интерфейсы",
  //               value:
  //                 "Ethernet - RJ-45, USB Type-A x 2, вход HDMI x 3, выход аудио цифровой оптический, композитный видеовход",
  //             },
  //             {
  //               id: 3,
  //               name: "Экосистема Умного дома",
  //               value: "Умный дом Яндекса",
  //             },
  //             {
  //               id: 4,
  //               name: "Дополнительная информация",
  //               value:
  //                 "Пульт в комплекте, Поддержка Apple HomeKit - нет, Запись с ТВ на USB устройство - нет, Аналоговый тюнер PAL/SECAM - нет, Стандарты DVB-C, DVB-C2, DVB-S, DVB-S2, DVB-T, DVB-T2 - нет",
  //             },
  //             { id: 5, name: "Диагональ", value: '43"' },
  //             { id: 6, name: "Разрешение HD", value: "4K UHD" },
  //             { id: 7, name: "Разрешение", value: "3840x2160" },
  //             { id: 8, name: "Форматы HDR", value: "HDR10" },
  //             { id: 9, name: "Формат телевизора", value: "16:9" },
  //             { id: 10, name: "Тип матрицы экрана", value: "VA" },
  //             { id: 11, name: "Яркость", value: "450 кд/м2" },
  //             { id: 12, name: "Контрастность", value: "5000:1" },
  //             { id: 13, name: "Угол обзора", value: "178 градусов" },
  //             { id: 14, name: "Частота обновления экрана", value: "60 Гц" },
  //             { id: 15, name: "Функции звука", value: "Dolby Audio" },
  //             { id: 16, name: "Суммарная мощность звука", value: "34 Вт" },
  //             { id: 17, name: "Версия интерфейса HDMI", value: "2.1" },
  //             {
  //               id: 18,
  //               name: "Беспроводные интерфейсы",
  //               value: "Bluetooth®, Wi-Fi®",
  //             },
  //             { id: 19, name: "Платформа Smart TV", value: "YaOS X" },
  //             {
  //               id: 20,
  //               name: "Особенности",
  //               value:
  //                 "Local Dimming, Time Shift, голосовое управление, запись ТВ программ, защита от детей, таймер сна, телетекст, электронный Телегид, hdr, ТВ-тюнер отсутствует",
  //             },
  //             { id: 21, name: "Стандарт крепления VESA", value: "200x200 мм" },
  //             { id: 22, name: "Голосовой помощник", value: "Алиса" },
  //             { id: 23, name: "Оперативная память", value: "3 ГБ" },
  //             { id: 24, name: "Размер встроенной памяти", value: "32 ГБ" },
  //             { id: 25, name: "Потребляемая мощность", value: "125 Вт" },
  //             { id: 26, name: "Год создания модели", value: "2023" },
  //             { id: 27, name: "Работает в системе 'умный дом'", value: "есть" },
  //             {
  //               id: 28,
  //               name: "Тип соединения устройств",
  //               value: "беспроводное",
  //             },
  //             {
  //               id: 29,
  //               name: "Размеры с подставкой (ШxВxГ)",
  //               value: "966x638x311 мм",
  //             },
  //             { id: 30, name: "Вес с подставкой", value: "8.8 кг" },
  //             {
  //               id: 31,
  //               name: "Размеры без подставки (ШxВxГ)",
  //               value: "966x578x84 мм",
  //             },
  //             { id: 32, name: "Вес без подставки", value: "8.4 кг" },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  //   id: 20,
  //   count_variants: 1,
  // },
  // {
  //   name: "Яндекс ТВ Станция",
  //   description: "Яндекс ТВ Станция Про с Алисой на YaGPT, 65“ 4K UHD, ",
  //   category_id: 2,
  //   discount: 0,
  //   variants: [
  //     {
  //       color: "черный",
  //       price: 99990,
  //       photos: [tv_station_65_1, tv_station_65_2, tv_station_65_3],
  //       stock_quantity: 10,
  //       id: 2,
  //       is_favorite: false,
  //       description:
  //         "ТВ Станция Про — новый умный телевизор Яндекса, объединивший в себе лучшие технологии телевизоров и умных колонок с Алисой.\n" +
  //         "Технические характеристики делают этот продукт флагманом ТВ-линейки Яндекса. Матовый QLED-экран — 1,07 млрд цветов без бликов и искажений.\n" +
  //         "\n",
  //       specifications: [
  //         {
  //           id: 0,
  //           title: "Общие",
  //           rows: [
  //             { id: 0, name: "Тип", value: "ЖК" },
  //             { id: 1, name: "Количество динамиков", value: "6" },
  //             {
  //               id: 2,
  //               name: "Разъемы и интерфейсы",
  //               value:
  //                 "Ethernet - RJ-45, USB Type-A x 2, вход HDMI x 3, выход аудио цифровой оптический",
  //             },
  //             {
  //               id: 3,
  //               name: "Экосистема Умного дома",
  //               value: "Умный дом Яндекса",
  //             },
  //             {
  //               id: 4,
  //               name: "Дополнительная информация",
  //               value:
  //                 "Кронштейн в комплекте, Пульт в комплекте, Поддержка Apple HomeKit - нет, Запись с ТВ на USB устройство - нет, Аналоговый тюнер PAL/SECAM - нет, Стандарты DVB-C, DVB-C2, DVB-S, DVB-S2, DVB-T, DVB-T2 - нет",
  //             },
  //             { id: 5, name: "Диагональ", value: "65" },
  //             { id: 6, name: "Разрешение HD", value: "4K UHD" },
  //             { id: 7, name: "Разрешение", value: "3840x2160" },
  //             { id: 8, name: "Форматы HDR", value: "HDR10" },
  //             { id: 9, name: "Формат телевизора", value: "16:9" },
  //             { id: 10, name: "Тип матрицы экрана", value: "VA" },
  //             { id: 11, name: "Яркость", value: "550 кд/м2" },
  //             { id: 12, name: "Контрастность", value: "4000:1" },
  //             { id: 13, name: "Угол обзора", value: "178 градусов" },
  //             { id: 14, name: "Частота обновления экрана", value: "60 Гц" },
  //             { id: 15, name: "Функции звука", value: "Dolby Audio" },
  //             { id: 16, name: "Суммарная мощность звука", value: "44 Вт" },
  //             { id: 17, name: "Версия интерфейса HDMI", value: "2.1" },
  //             {
  //               id: 18,
  //               name: "Беспроводные интерфейсы",
  //               value: "Bluetooth®, Wi-Fi®",
  //             },
  //             { id: 19, name: "Платформа Smart TV", value: "YaOS X" },
  //             { id: 20, name: "Особенности", value: "голосовое управление" },
  //             { id: 21, name: "Стандарт крепления VESA", value: "400×400 мм" },
  //             { id: 22, name: "Голосовой помощник", value: "Алиса" },
  //             { id: 23, name: "Оперативная память", value: "3 ГБ" },
  //             { id: 24, name: "Размер встроенной памяти", value: "32 ГБ" },
  //             { id: 25, name: "Потребляемая мощность", value: "175 Вт" },
  //             { id: 26, name: "Год создания модели", value: "2023" },
  //             { id: 27, name: "Работает в системе 'умный дом'", value: "есть" },
  //             {
  //               id: 28,
  //               name: "Тип соединения устройств",
  //               value: "беспроводное",
  //             },
  //             {
  //               id: 29,
  //               name: "Размеры с подставкой (ШxВxГ)",
  //               value: "1449x909x328 мм",
  //             },
  //             { id: 30, name: "Вес с подставкой", value: "19.1 кг" },
  //             {
  //               id: 31,
  //               name: "Размеры без подставки (ШxВxГ)",
  //               value: "1449x848x40 мм",
  //             },
  //             { id: 32, name: "Вес без подставки", value: "25.9 кг" },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  //   id: 7,
  //   count_variants: 1,
  // },
  // {
  //   name: "Умный пульт",
  //   description: "Умный пульт Яндекс,  ",
  //   category_id: 2,
  //   discount: 0,
  //   variants: [
  //     {
  //       color: "черный",
  //       price: 1490,
  //       photos: [tv_control_1, tv_control_2, tv_control_3],
  //       stock_quantity: 10,
  //       id: 2,
  //       is_favorite: false,
  //       description:
  //         "Автоматизировать бытовую технику при помощи умного пульта Yandex SmartControl YNDX-0006 проще, чем может показаться.\n" +
  //         "С его помощью можно управлять техникой, например телевизором или кондиционером, а также любым другим устройством, которое поддерживает ИК-соединение1.\n" +
  //         "\n",
  //       specifications: [
  //         {
  //           id: 0,
  //           title: "Общие",
  //           rows: [
  //             { id: 0, name: "Тип", value: "пульт ДУ" },
  //             {
  //               id: 1,
  //               name: "Экосистема Умного дома",
  //               value: "Умный дом Яндекса",
  //             },
  //             {
  //               id: 2,
  //               name: "Дополнительная информация",
  //               value:
  //                 "беспроводная связь: Wi-Fi 802.11b/g/n (2,4 ГГц); инфракрасные приёмопередатчики: 7 шт., 38 кГц; сетевой адаптер не входит в комплект; функции - дистанционное управление техникой, включение/отключение приборов по расписанию; возможность одновременного подключения до 301 устройства",
  //             },
  //             { id: 3, name: "Беспроводные интерфейсы", value: "Wi-Fi®, ИК" },
  //             {
  //               id: 4,
  //               name: "Тип соединения устройств",
  //               value: "беспроводное",
  //             },
  //             {
  //               id: 5,
  //               name: "Протокол связи Умного дома",
  //               value: "Wi-Fi®, ИК-порт",
  //             },
  //             { id: 6, name: "Ширина", value: "65 мм" },
  //             { id: 7, name: "Высота", value: "25 мм" },
  //             { id: 8, name: "Вес", value: "100 г" },
  //             { id: 9, name: "Тип пульта", value: "умный" },
  //             {
  //               id: 10,
  //               name: "Настройка пульта ДУ",
  //               value: "мобильное приложение",
  //             },
  //             { id: 11, name: "Питание", value: "разъем micro USB (5 В)" },
  //             {
  //               id: 12,
  //               name: "Опции и комплект",
  //               value: "голосовое управление",
  //             },
  //             { id: 13, name: "Толщина", value: "65 мм" },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  //   id: 8,
  //   count_variants: 1,
  // },
  // {
  //   name: "Яндекс ТВ Станция",
  //   description: "Яндекс ТВ Станция Про с Алисой на YaGPT, 55“ 4K UHD, ",
  //   category_id: 2,
  //   discount: 10000,
  //   variants: [
  //     {
  //       color: "Черный",
  //       price: 74990,
  //       photos: [tv_station_55_1, tv_station_55_2, tv_station_55_3],
  //       stock_quantity: 10,
  //       id: 2,
  //       is_favorite: false,
  //       description:
  //         "ТВ Станция Про — новый умный телевизор Яндекса, объединивший в себе лучшие технологии телевизоров и умных колонок с Алисой.\n" +
  //         "Технические характеристики делают этот продукт флагманом ТВ-линейки Яндекса. Матовый QLED-экран — 1,07 млрд цветов без бликов и искажений.\n" +
  //         "\n",
  //       specifications: [
  //         {
  //           id: 0,
  //           title: "Общие",
  //           rows: [
  //             { id: 0, name: "Тип", value: "ЖК" },
  //             { id: 1, name: "Количество динамиков", value: "6" },
  //             {
  //               id: 2,
  //               name: "Разъемы и интерфейсы",
  //               value:
  //                 "Ethernet - RJ-45, USB Type-A x 2, вход HDMI x 3, выход аудио цифровой оптический",
  //             },
  //             {
  //               id: 3,
  //               name: "Экосистема Умного дома",
  //               value: "Умный дом Яндекса",
  //             },
  //             { id: 4, name: "Диагональ", value: "55" },
  //             { id: 5, name: "Разрешение HD", value: "4K UHD" },
  //             { id: 6, name: "Разрешение", value: "3840x2160" },
  //             { id: 7, name: "Форматы HDR", value: "HDR10" },
  //             { id: 8, name: "Формат телевизора", value: "16:9" },
  //             { id: 9, name: "Тип матрицы экрана", value: "VA" },
  //             { id: 10, name: "Яркость", value: "550 кд/м2" },
  //             { id: 11, name: "Контрастность", value: "4000:1" },
  //             { id: 12, name: "Угол обзора", value: "178 градусов" },
  //             { id: 13, name: "Частота обновления экрана", value: "60 Гц" },
  //             { id: 14, name: "Функции звука", value: "Dolby Audio" },
  //             { id: 15, name: "Суммарная мощность звука", value: "44 Вт" },
  //             { id: 16, name: "Версия интерфейса HDMI", value: "2.1" },
  //             {
  //               id: 17,
  //               name: "Беспроводные интерфейсы",
  //               value: "Bluetooth®, Wi-Fi®",
  //             },
  //             { id: 18, name: "Платформа Smart TV", value: "YaOS X" },
  //             { id: 19, name: "Особенности", value: "голосовое управление" },
  //             { id: 20, name: "Стандарт крепления VESA", value: "400×300 мм" },
  //             { id: 21, name: "Голосовой помощник", value: "Алиса" },
  //             { id: 22, name: "Оперативная память", value: "3 ГБ" },
  //             { id: 23, name: "Размер встроенной памяти", value: "32 ГБ" },
  //             { id: 24, name: "Потребляемая мощность", value: "165 Вт" },
  //             { id: 25, name: "Год создания модели", value: "2023" },
  //             { id: 26, name: "Работает в системе 'умный дом'", value: "есть" },
  //             {
  //               id: 27,
  //               name: "Тип соединения устройств",
  //               value: "беспроводное",
  //             },
  //             {
  //               id: 28,
  //               name: "Размеры с подставкой (ШxВxГ)",
  //               value: "1228x784x328 мм",
  //             },
  //             { id: 29, name: "Вес с подставкой", value: "19.1 кг" },
  //             {
  //               id: 30,
  //               name: "Размеры без подставки (ШxВxГ)",
  //               value: "1228x722x40 мм",
  //             },
  //             { id: 31, name: "Вес без подставки", value: "18.1 кг" },
  //             { id: 32, name: "Кронштейн", value: "в комплекте" },
  //             { id: 33, name: "Пульт", value: "в комплекте" },
  //             { id: 34, name: "Поддержка Apple HomeKit", value: "нет" },
  //             { id: 35, name: "Запись с ТВ на USB устройство", value: "нет" },
  //             { id: 36, name: "Аналоговый тюнер PAL/SECAM", value: "нет" },
  //             { id: 37, name: "Стандарт DVB-C", value: "нет" },
  //             { id: 38, name: "Стандарт DVB-C2", value: "нет" },
  //             { id: 39, name: "Стандарт DVB-S", value: "нет" },
  //             { id: 40, name: "Стандарт DVB-S2", value: "нет" },
  //             { id: 41, name: "Стандарт DVB-T", value: "нет" },
  //             { id: 42, name: "Стандарт DVB-T2", value: "нет" },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  //   id: 9,
  //   count_variants: 1,
  // },
  // {
  //   name: "Умная лампочка Яндекс",
  //   description: "Умная лампочка Яндекс, цоколь Е14, 4.8 Вт, RGB цветная",
  //   category_id: 1,
  //   discount: 500,
  //   variants: [
  //     {
  //       color: "Цветная",
  //       price: 990,
  //       photos: [rgb_1, rgb_2],
  //       stock_quantity: 10,
  //       id: 2,
  //       is_favorite: false,
  //       description:
  //         "Лампа подключается по Wi-Fi через приложение Яндекс и может управляться с помощью голосового помощника Алисы, поэтому каждый со смартфоном или планшетом в руках сможет удаленно управлять цветовой температурой от 2700 до 6500 К, и настраивать сценарии работы при определенных условиях1.\n" +
  //         "\n" +
  //         "Светодиодная лампа также может работать с другими устройствами умного дома Яндекс, такими как, «умная» розетка или «умная» колонка. Лампочка потребляет всего 4.8 Вт и вкручивается в стандартный цоколь E14.\n" +
  //         "\n",
  //       specifications: [
  //         {
  //           id: 0,
  //           title: "Общие",
  //           rows: [
  //             {
  //               id: 0,
  //               name: "Беспроводная связь",
  //               value: "Wi-Fi® 802.11b/g/n (2,4 ГГц)",
  //             },
  //             { id: 1, name: "Энергосберегающая", value: "да" },
  //             { id: 2, name: "Тип цоколя", value: "E14" },
  //             { id: 3, name: "Напряжение", value: "220-240 В" },
  //             { id: 4, name: "Степень пылевлагозащиты", value: "IP40" },
  //             { id: 5, name: "Световая отдача", value: "89,5 лм/Вт" },
  //             { id: 6, name: "Гарантия", value: "1 год" },
  //             { id: 7, name: "Масса нетто", value: "40г" },
  //             { id: 8, name: "Производство", value: "Китай" },
  //             { id: 9, name: "Коэффициент мощности", value: "0,5" },
  //             { id: 10, name: "Тип лампы", value: "светодиодная" },
  //             { id: 11, name: "Форма колбы", value: "свеча" },
  //             { id: 12, name: "Мощность", value: "4.8 Вт" },
  //             { id: 13, name: "Цвет свечения", value: "RGB" },
  //             { id: 14, name: "Световой поток", value: "ждо 430 лм" },
  //             {
  //               id: 15,
  //               name: "Цветовая температура",
  //               value: "2700-6500К, RGB+W",
  //             },
  //             {
  //               id: 16,
  //               name: "Габариты (диаметр x высота)",
  //               value: "39 x 118 мм",
  //             },
  //             {
  //               id: 17,
  //               name: "Питание",
  //               value: "220-240 В, 50-60 Гц, 0,0,4 А",
  //             },
  //             { id: 18, name: "Эквивалент лампы накаливания", value: "40 Вт" },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  //   id: 10,
  //   count_variants: 1,
  // },
  // {
  //   name: "Датчик открытия дверей и окон",
  //   description: "Датчик открытия дверей и окон, Яндекс, Zigbee™",
  //   category_id: 1,
  //   discount: 0,
  //   variants: [
  //     {
  //       color: "Обычный",
  //       price: 2490,
  //       photos: [zigbee_1, zigbee_2, zigbee_3],
  //       stock_quantity: 10,
  //       id: 2,
  //       is_favorite: false,
  //       description:
  //         "Компактный беспроводный датчик реагирует на открытие дверей и окон. Свяжите датчик с разными устройствами и создавайте сценарии в приложении Дом с Алисой1. Проверяйте в приложении, закрыты ли дома окна. А ещё можно связать датчик с кондиционером — и он будет сам выключаться, когда вы проветриваете комнату.",
  //       specifications: [
  //         {
  //           id: 0,
  //           title: "Общие",
  //           rows: [
  //             { id: 0, name: "Тип", value: "датчик открытия" },
  //             { id: 1, name: "Беспроводная связь", value: "Zigbee™ 3.0" },
  //             {
  //               id: 2,
  //               name: "Экосистема Умного дома",
  //               value: "Умный дом Яндекса",
  //             },
  //             {
  //               id: 3,
  //               name: "Тип соединения устройств",
  //               value: "беспроводное",
  //             },
  //             { id: 4, name: "Ширина", value: "22 мм" },
  //             { id: 5, name: "Высота", value: "11 мм" },
  //             { id: 6, name: "Глубина", value: "41 мм" },
  //             { id: 7, name: "Автономный", value: "есть" },
  //             { id: 8, name: "Принцип работы", value: "магнитоконтактный" },
  //             { id: 9, name: "Тип зоны обнаружения", value: "точечные" },
  //             {
  //               id: 10,
  //               name: "Способ монтажа",
  //               value: "накладн. на поверхность",
  //             },
  //             { id: 11, name: "Степень защиты (IP)", value: "IP30" },
  //             { id: 12, name: "Количество блоков", value: "двухблочный" },
  //             { id: 13, name: "Цвет", value: "белый" },
  //             { id: 14, name: "Протокол связи", value: "Zigbee™" },
  //             {
  //               id: 15,
  //               name: "Комплектация",
  //               value:
  //                 "датчик открытия дверей и окон, руководство пользователя, стикеры для монтажа",
  //             },
  //             {
  //               id: 16,
  //               name: "температура эксплуатации",
  //               value: "-10˚ - +50˚С",
  //             },
  //             {
  //               id: 17,
  //               name: "допустимая влажность",
  //               value: "0 – 95% относительной влажности, без конденсации",
  //             },
  //             { id: 18, name: "масса нетто (без батарейки)", value: "15,5 г" },
  //             { id: 19, name: "батарейка", value: "CR1632, 3 В" },
  //             {
  //               id: 20,
  //               name: "тип сенсора",
  //               value: "герметизированный контакт (геркон)",
  //             },
  //             {
  //               id: 21,
  //               name: "максимальная дистанция сработки сенсора",
  //               value: "22 мм",
  //             },
  //             { id: 22, name: "рабочая частота", value: "2400 – 2483,5 МГц" },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  //   id: 11,
  //   count_variants: 1,
  // },
  // {
  //   name: "Умная лампочка Яндекс Цветная",
  //   description: "Умная лампочка Яндекс, цоколь GU10, 4.9 Вт, RGB цветная\n",
  //   category_id: 1,
  //   discount: 0,
  //   variants: [
  //     {
  //       color: "Цветная",
  //       price: 1490,
  //       photos: [colorful_gu10_1],
  //       stock_quantity: 10,
  //       id: 2,
  //       is_favorite: false,
  //       description:
  //         "Можно одной фразой включить, выключить свет или удалённо настроить освещение Яндекс1.\n" +
  //         "\n" +
  //         "К тому же есть возможность настройки работы лампы в рамках запланированных сценариев, включая и выключая свет по таймеру или сигналу включённых в систему датчиков.\n" +
  //         "\n" +
  //         "Стандартный цоколь Яндекс Лампочки GU10 обеспечивает широкий спектр применения и стандартную установку. Номинальной мощности в 4.9 Вт и светового потока в 400 люмен достаточно для яркого и приятного глазу освещения комнаты, а возможность регулировать цветовую температуру от 2700 до 6500 К позволит создать тёплое мягкое освещение для романтичного вечера или холодный свет для продуктивной работы.\n" +
  //         "\n",
  //       specifications: [
  //         {
  //           id: 0,
  //           title: "Общие",
  //           rows: [
  //             {
  //               id: 0,
  //               name: "Беспроводная связь",
  //               value: "Wi-Fi® 802.11b/g/n (2,4 ГГц)",
  //             },
  //             { id: 1, name: "Тип цоколя", value: "GU10" },
  //             { id: 2, name: "Мощность", value: "8 Вт" },
  //             {
  //               id: 3,
  //               name: "Напряжение",
  //               value: "220-240 В, 50-60 Гц, 0,07 А",
  //             },
  //             { id: 4, name: "Световой поток", value: "до 400 лм" },
  //             { id: 5, name: "Световая отдача", value: "81,6 лм/Вт" },
  //             {
  //               id: 6,
  //               name: "Цветовая температура",
  //               value: "2700-6500К, RGB+W",
  //             },
  //             { id: 7, name: "Индекс цветопередачи", value: "Ra > 80" },
  //             { id: 8, name: "Коэффициент пульсации", value: "<1%" },
  //             { id: 9, name: "Класс защиты", value: "2" },
  //             { id: 10, name: "Диммер", value: "Недиммируемая" },
  //             { id: 11, name: "Гарантия", value: "1 год" },
  //             { id: 12, name: "Страна-изготовитель", value: "Китай" },
  //             { id: 13, name: "Масса нетто", value: "50г, 40г" },
  //             { id: 14, name: "Беспроводное управление", value: "Wi-Fi" },
  //             {
  //               id: 15,
  //               name: "Возможность дистанционного управления",
  //               value: "есть",
  //             },
  //             { id: 16, name: "Питание", value: "220-240 В, 50-60 Гц, 0,04 А" },
  //             { id: 17, name: "Коэффициент мощности", value: "0,5" },
  //             { id: 18, name: "Номинальная мощность", value: "4,9 Вт" },
  //             { id: 19, name: "Недиммируемая", value: "да" },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  //   id: 12,
  //   count_variants: 1,
  // },
  // {
  //   name: "Умная лампочка Яндекс RGB",
  //   description: "Умная лампочка Яндекс, цоколь E27, RGB, 9 Вт",
  //   category_id: 1,
  //   discount: 500,
  //   variants: [
  //     {
  //       color: "Цветная",
  //       price: 990,
  //       photos: [colorful_1, colorful_2],
  //       stock_quantity: 10,
  //       id: 2,
  //       is_favorite: false,
  //       description:
  //         "Умная Яндекс. Лампа позволяет дистанционно управлять освещением в комнате или доме. Поддержка Wi-Fi позволяет лампе работать в системе «умный дом» Яндекса и реагировать на команды, отданные по мобильному приложению или напрямую голосовому помощнику Алисе.",
  //       specifications: [
  //         {
  //           id: 0,
  //           title: "Общие",
  //           rows: [
  //             {
  //               id: 0,
  //               name: "Беспроводная связь",
  //               value: "Wi-Fi® 802.11b/g/n (2,4 ГГц)",
  //             },
  //             { id: 1, name: "Тип лампы", value: "светодиодная" },
  //             { id: 2, name: "Тип цоколя", value: "E27" },
  //             { id: 3, name: "Мощность", value: "9 Вт" },
  //             { id: 4, name: "Световой поток", value: "900 лм" },
  //             { id: 5, name: "Цветовая температура", value: "1700-6500 К" },
  //             { id: 6, name: "Энергосберегающая", value: "да" },
  //             { id: 7, name: "Экосистема", value: "Умный дом с Алисой" },
  //             { id: 8, name: "Работает в системе «умный дом»", value: "да" },
  //             { id: 9, name: "Эквивалент лампы накаливания", value: "69 Вт" },
  //             { id: 10, name: "Гарантия", value: "1 год" },
  //             { id: 11, name: "Страна-изготовитель", value: "Китай" },
  //             { id: 12, name: "Масса нетто", value: "190 г" },
  //             {
  //               id: 13,
  //               name: "Габариты (диаметр x высота)",
  //               value: "55x120 мм",
  //             },
  //             {
  //               id: 14,
  //               name: "Максимальная выходная мощность",
  //               value: "17,41 дБм",
  //             },
  //             { id: 15, name: "Питание", value: "220-240 В, 50-60 Гц, 0,08 А" },
  //             {
  //               id: 16,
  //               name: "Рабочий диапазон частот",
  //               value: "2412-2472 МГц",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  //   id: 13,
  //   count_variants: 1,
  // },
  // {
  //   name: "Умная лампочка",
  //   description: "Умная лампочка Яндекс, цоколь E27, 8 Вт, ",
  //   category_id: 1,
  //   discount: 300,
  //   variants: [
  //     {
  //       color: "Белая",
  //       price: 790,
  //       photos: [white_1, white_2, white_3, white_4],
  //       stock_quantity: 10,
  //       id: 0,
  //       is_favorite: false,
  //       description:
  //         "Умная светодиодная лампа Яндекс с цоколем E27 и привычной формой шара подходит для большинства люстр. \n Светодиоды сохраняют работоспособность в течение 15000 ч работы и экономично потребляют электроэнергию. По яркости устройство заменяет лампу накаливания мощностью 75 Вт.",
  //       specifications: [
  //         {
  //           id: 0,
  //           title: "Общие",
  //           rows: [
  //             {
  //               id: 0,
  //               name: "Беспроводная связь",
  //               value: "Wi-Fi® 802.11b/g/n (2,4 ГГц)",
  //             },
  //             { id: 1, name: "Тип цоколя", value: "E27" },
  //             { id: 3, name: "Мощность", value: "8 Вт" },
  //             {
  //               id: 4,
  //               name: "Напряжение",
  //               value: "220-240 В, 50-60 Гц, 0,07 А",
  //             },
  //             { id: 5, name: "Цвет свечения", value: "RGB" },
  //             { id: 6, name: "Световой поток", value: "до 806 лм" },
  //             { id: 7, name: "Световая отдача", value: "101 лм/Вт" },
  //             { id: 8, name: "Цветовая температура", value: "2700-6500 К" },
  //             { id: 9, name: "Индекс цветопередачи", value: "Ra> 80" },
  //             { id: 10, name: "Коэффициент пульсации", value: "<1%" },
  //             { id: 11, name: "Класс защиты", value: "2" },
  //             { id: 12, name: "Диммер", value: "Недиммируемая" },
  //             { id: 13, name: "Работает с Алисой", value: "да" },
  //             { id: 14, name: "Гарантия", value: "да" },
  //             { id: 15, name: "Страна-изготовитель", value: "Китай" },
  //             {
  //               id: 16,
  //               name: "Габариты (диаметр x высота)",
  //               value: "60x110 мм",
  //             },
  //             { id: 17, name: "Масса нетто", value: "50г" },
  //             { id: 18, name: "Коэффициент мощности", value: "0,5" },
  //             { id: 19, name: "Недиммируемая", value: "да" },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  //   id: 14,
  //   count_variants: 1,
  // },
  // {
  //   name: "Станция 2",
  //   description:
  //     "Умная колонка Яндекс Станция 2 с Алисой  на YaGPT, 30 Вт. Умная колонка второго поколения — новый дизайн, звук, центр управления умным домом и Алиса.",
  //   category_id: 3,
  //   discount: 1000,
  //   variants: [
  //     {
  //       color: "Красный рубин",
  //       price: 13999,
  //       photos: [red, red_side],
  //       stock_quantity: 10,
  //       id: 0,
  //       is_favorite: false,
  //       description:
  //         "Умная колонка Яндекс Станция 2 с Алисой на YaGPT, 30 Вт. Умная\n" +
  //         "                  колонка второго поколения — новый дизайн, звук, центр управления\n" +
  //         "                  умным домом и Алиса.",
  //       specifications: [
  //         {
  //           id: 0,
  //           title: "Звук",
  //           rows: [
  //             { id: 0, name: "Максимальная мощность, Вт", value: "30" },
  //             { id: 1, name: "Количество полос", value: "1" },
  //             { id: 2, name: "Мин. частота, Гц", value: "65" },
  //             { id: 2, name: "Мин. частота, Гц", value: "20000" },
  //           ],
  //         },
  //         {
  //           id: 0,
  //           title: "Подключение",
  //           rows: [
  //             {
  //               id: 0,
  //               name: "Беспроводные интерфейсы:",
  //               value: "Bluetooth, Wi-Fi, Zigbee",
  //             },
  //             { id: 1, name: "Модуль связи Bluetooth:", value: "5,0" },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       color: "Антрацит",
  //       price: 13497,
  //       photos: [black, black_side],
  //       stock_quantity: 10,
  //       id: 1,
  //       is_favorite: false,
  //       description:
  //         "Умная колонка Яндекс Станция 2 с Алисой на YaGPT, 30 Вт. Умная\n" +
  //         "                  колонка второго поколения — новый дизайн, звук, центр управления\n" +
  //         "                  умным домом и Алиса.",
  //       specifications: [
  //         {
  //           id: 0,
  //           title: "Звук",
  //           rows: [
  //             { id: 0, name: "Максимальная мощность, Вт", value: "30" },
  //             { id: 1, name: "Количество полос", value: "1" },
  //             { id: 2, name: "Мин. частота, Гц", value: "65" },
  //             { id: 2, name: "Мин. частота, Гц", value: "20000" },
  //           ],
  //         },
  //         {
  //           id: 0,
  //           title: "Подключение",
  //           rows: [
  //             {
  //               id: 0,
  //               name: "Беспроводные интерфейсы:",
  //               value: "Bluetooth, Wi-Fi, Zigbee",
  //             },
  //             { id: 1, name: "Модуль связи Bluetooth:", value: "5,0" },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  //   id: 15,
  //   count_variants: 1,
  // },
  // // OLD
  // {
  //   name: "Станция Лайт",
  //   description:
  //     "Умная колонка Яндекс Станция 2 с Алисой  на YaGPT, 30 Вт. Умная колонка второго поколения — новый дизайн, звук, центр управления умным домом и Алиса.",
  //   category_id: 3,
  //   discount: 1235,
  //   variants: [
  //     {
  //       color: "Белый",
  //       price: 13445,
  //       photos: [prod4],
  //       stock_quantity: 10,
  //       id: 0,
  //       is_favorite: false,
  //       description:
  //         "Умная колонка Яндекс Станция 2 с Алисой на YaGPT, 30 Вт. Умная\n" +
  //         "                  колонка второго поколения — новый дизайн, звук, центр управления\n" +
  //         "                  умным домом и Алиса.",
  //       specifications: [
  //         {
  //           id: 0,
  //           title: "Звук",
  //           rows: [
  //             { id: 0, name: "Максимальная мощность, Вт", value: "30" },
  //             { id: 1, name: "Количество полос", value: "1" },
  //             { id: 2, name: "Мин. частота, Гц", value: "65" },
  //             { id: 2, name: "Мин. частота, Гц", value: "20000" },
  //           ],
  //         },
  //         {
  //           id: 0,
  //           title: "Подключение",
  //           rows: [
  //             {
  //               id: 0,
  //               name: "Беспроводные интерфейсы:",
  //               value: "Bluetooth, Wi-Fi, Zigbee",
  //             },
  //             { id: 1, name: "Модуль связи Bluetooth:", value: "5,0" },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  //   id: 16,
  //   count_variants: 1,
  // },
  // {
  //   name: "Умная лампочка",
  //   description:
  //     "Умная колонка Яндекс Станция 2 с Алисой  на YaGPT, 30 Вт. Умная колонка второго поколения — новый дизайн, звук, центр управления умным домом и Алиса.",
  //   category_id: 1,
  //   discount: 981,
  //   variants: [
  //     {
  //       color: "Белый",
  //       price: 1465,
  //       photos: [smartLamp],
  //       stock_quantity: 10,
  //       id: 0,
  //       is_favorite: false,
  //       description:
  //         "Умная колонка Яндекс Станция 2 с Алисой на YaGPT, 30 Вт. Умная\n" +
  //         "                  колонка второго поколения — новый дизайн, звук, центр управления\n" +
  //         "                  умным домом и Алиса.",
  //       specifications: [
  //         {
  //           id: 0,
  //           title: "Звук",
  //           rows: [
  //             { id: 0, name: "Максимальная мощность, Вт", value: "30" },
  //             { id: 1, name: "Количество полос", value: "1" },
  //             { id: 2, name: "Мин. частота, Гц", value: "65" },
  //             { id: 2, name: "Мин. частота, Гц", value: "20000" },
  //           ],
  //         },
  //         {
  //           id: 0,
  //           title: "Подключение",
  //           rows: [
  //             {
  //               id: 0,
  //               name: "Беспроводные интерфейсы:",
  //               value: "Bluetooth, Wi-Fi, Zigbee",
  //             },
  //             { id: 1, name: "Модуль связи Bluetooth:", value: "5,0" },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  //   id: 17,
  //   count_variants: 1,
  // },
  // {
  //   name: "Модуль с Алисой",
  //   description:
  //     "Умная колонка Яндекс Станция 2 с Алисой  на YaGPT, 30 Вт. Умная колонка второго поколения — новый дизайн, звук, центр управления умным домом и Алиса.",
  //   category_id: 1,
  //   discount: 123,
  //   variants: [
  //     {
  //       color: "Белый",
  //       price: 7299,
  //       photos: [aliseModule],
  //       stock_quantity: 10,
  //       id: 0,
  //       is_favorite: false,
  //       description:
  //         "Умная колонка Яндекс Станция 2 с Алисой на YaGPT, 30 Вт. Умная\n" +
  //         "                  колонка второго поколения — новый дизайн, звук, центр управления\n" +
  //         "                  умным домом и Алиса.",
  //       specifications: [
  //         {
  //           id: 0,
  //           title: "Звук",
  //           rows: [
  //             { id: 0, name: "Максимальная мощность, Вт", value: "30" },
  //             { id: 1, name: "Количество полос", value: "1" },
  //             { id: 2, name: "Мин. частота, Гц", value: "65" },
  //             { id: 2, name: "Мин. частота, Гц", value: "20000" },
  //           ],
  //         },
  //         {
  //           id: 0,
  //           title: "Подключение",
  //           rows: [
  //             {
  //               id: 0,
  //               name: "Беспроводные интерфейсы:",
  //               value: "Bluetooth, Wi-Fi, Zigbee",
  //             },
  //             { id: 1, name: "Модуль связи Bluetooth:", value: "5,0" },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  //   id: 18,
  //   count_variants: 1,
  // },
  // {
  //   name: "Станция 2",
  //   description:
  //     "Умная колонка Яндекс Станция 2 с Алисой  на YaGPT, 30 Вт. Умная колонка второго поколения — новый дизайн, звук, центр управления умным домом и Алиса.",
  //   category_id: 3,
  //   discount: 891,
  //   variants: [
  //     {
  //       color: "Антрацит",
  //       price: 13497,
  //       photos: [black, black_side],
  //       stock_quantity: 10,
  //       id: 1,
  //       is_favorite: false,
  //       description:
  //         "Умная колонка Яндекс Станция 2 с Алисой на YaGPT, 30 Вт. Умная\n" +
  //         "                  колонка второго поколения — новый дизайн, звук, центр управления\n" +
  //         "                  умным домом и Алиса.",
  //       specifications: [
  //         {
  //           id: 0,
  //           title: "Звук",
  //           rows: [
  //             { id: 0, name: "Максимальная мощность, Вт", value: "30" },
  //             { id: 1, name: "Количество полос", value: "1" },
  //             { id: 2, name: "Мин. частота, Гц", value: "65" },
  //             { id: 2, name: "Мин. частота, Гц", value: "20000" },
  //           ],
  //         },
  //         {
  //           id: 0,
  //           title: "Подключение",
  //           rows: [
  //             {
  //               id: 0,
  //               name: "Беспроводные интерфейсы:",
  //               value: "Bluetooth, Wi-Fi, Zigbee",
  //             },
  //             { id: 1, name: "Модуль связи Bluetooth:", value: "5,0" },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       color: "Красный рубин",
  //       price: 13999,
  //       photos: [red, red_side],
  //       stock_quantity: 10,
  //       id: 0,
  //       is_favorite: false,
  //       description:
  //         "Умная колонка Яндекс Станция 2 с Алисой на YaGPT, 30 Вт. Умная\n" +
  //         "                  колонка второго поколения — новый дизайн, звук, центр управления\n" +
  //         "                  умным домом и Алиса.",
  //       specifications: [
  //         {
  //           id: 0,
  //           title: "Звук",
  //           rows: [
  //             { id: 0, name: "Максимальная мощность, Вт", value: "30" },
  //             { id: 1, name: "Количество полос", value: "1" },
  //             { id: 2, name: "Мин. частота, Гц", value: "65" },
  //             { id: 2, name: "Мин. частота, Гц", value: "20000" },
  //           ],
  //         },
  //         {
  //           id: 0,
  //           title: "Подключение",
  //           rows: [
  //             {
  //               id: 0,
  //               name: "Беспроводные интерфейсы:",
  //               value: "Bluetooth, Wi-Fi, Zigbee",
  //             },
  //             { id: 1, name: "Модуль связи Bluetooth:", value: "5,0" },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  //   id: 19,
  //   count_variants: 1,
  // },
];
export const CATEGORIES: Category[] = [
  { name: "Весь каталог устройств", description: "Все", id: 0, photo: "" },
  { name: "Умный дом", id: 1, description: "", photo: "" },
  { name: "ТВ", id: 2, description: "", photo: "" },
  { name: "Станции", id: 3, description: "", photo: "" },
  { name: "Станция Дуо Макс", id: 4, description: "", photo: "" },
  { name: "Новинки", id: 5, description: "", photo: "" },
];
export const FAVOURITES: Favourite[] = [
  {
    id: 5,
    product_id: 5,
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
];
export const USER: User = { id: 1, created_at: "", updated_at: "", cart: [] };
export const REVIEWS: Review[] = [
  {
    user: USER,
    product_variant_id: 1,
    rating: 5,
    description:
      "Отличная колонка. Подключилась легко, работает без проблем. Много возможностей. Все оригинальное с логотипом яндекса.",
    created_at: "15.03.2023",
  },
  {
    user: USER,
    product_variant_id: 1,
    rating: 5,
    description:
      "Отличная колонка. Подключилась легко, работает без проблем. Много возможностей. Все оригинальное с логотипом яндекса.Отличная колонка. Подключилась легко, работает без проблем. Много возможностей. Все оригинальное с логотипом яндекса.Отличная колонка. Подключилась легко, работает без проблем. Много возможностей. Все оригинальное с логотипом яндекса.",
    created_at: "15.03.2023",
  },
  {
    user: USER,
    product_variant_id: 1,
    rating: 5,
    description:
      "Отличная колонка. Подключилась легко, работает без проблем. Много возможностей. Все оригинальное с логотипом яндекса.",
    created_at: "15.03.2023",
  },
];
