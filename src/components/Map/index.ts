import React from "react";
import {
  YMap,
  YMapDefaultFeaturesLayer,
  YMapDefaultSchemeLayer,
} from "../../lib/ymaps";
import { YMapZoomControl } from "@yandex/ymaps3-default-ui-theme";

const Map = ({ location, children }) => {
  return (
    <YMap location={location} showScaleInCopyrights={true}>
      <YMapDefaultSchemeLayer />
      <YMapDefaultFeaturesLayer />
      <YMapZoomControl />
      {children}
    </YMap>
  );
};

export default Map;
