import React from "react";
import ReactDom from "react-dom";

const [ymaps3React] = await Promise.all([
  ymaps3.import("@yandex/ymaps3-reactify"),
  ymaps3.ready,
]);

export const reactify = ymaps3React.reactify.bindTo(React, ReactDom);

export const {
  YMap,
  YMapDefaultSchemeLayer,
  YMapDefaultFeaturesLayer,
  YMapControls,
  YMapControl,
} = reactify.module(ymaps3);

export const { YMapZoomControl } = reactify.module(
  //@ts-ignore
  await ymaps3.import("@yandex/ymaps3-default-ui-theme")
);
