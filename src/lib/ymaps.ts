import React from "react";
import ReactDOM from "react-dom";

const [ymaps3React] = await Promise.all([
  ymaps3.import("@yandex/ymaps3-reactify"),
  ymaps3.ready,
]);

// Корректно привязываем reactify к React и ReactDOM
const reactify = ymaps3React.reactify.bindTo(React, ReactDOM);

export const {
  YMap,
  YMapDefaultSchemeLayer,
  YMapDefaultFeaturesLayer,
  YMapControls,
} = reactify.module(ymaps3);

// вот так тоже пробовал, это ведет к ошибке
// No overload matches this call.
//   The last overload gave the following error.
//     Argument of type '"@yandex/ymaps3-default-ui-theme"' is not assignable to parameter of type '"@yandex/ymaps3-vuefy"'.ts(2769)
// export const { YMapZoomControl } = reactify.module(
//   await ymaps3.import("@yandex/ymaps3-default-ui-theme")
// );
