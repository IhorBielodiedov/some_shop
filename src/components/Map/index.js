import React from "react";
import {
  YMap,
  YMapDefaultFeaturesLayer,
  YMapDefaultSchemeLayer,
} from "../../lib/ymaps";

const Map = ({ location, children }) => {
  return (
    <YMap location={location} showScaleInCopyrights={true}>
      <YMapDefaultSchemeLayer />
      <YMapDefaultFeaturesLayer />
      {children}
    </YMap>
  );
};

export default Map;
