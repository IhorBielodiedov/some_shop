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
