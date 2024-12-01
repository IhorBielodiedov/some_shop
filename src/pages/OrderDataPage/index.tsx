import { useNavigate } from "react-router-dom";
import styles from "./orderDataPage.module.scss";
import { useEffect } from "react";
import { YMapZoomControl } from "@yandex/ymaps3-default-ui-theme";
import {
  YMap,
  YMapControls,
  YMapDefaultFeaturesLayer,
  YMapDefaultSchemeLayer,
} from "../../lib/ymaps";
import { YMapLocationRequest } from "@yandex/ymaps3-types";
import { TELEGRAM } from "../../utils/constants";

export const OrderDataPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
    if (window.history.length > 1) {
      TELEGRAM.BackButton.show();
      TELEGRAM.BackButton.onClick(goBack);
    } else {
      TELEGRAM.BackButton.hide();
    }
    return () => {
      TELEGRAM.BackButton.offClick(goBack);
    };
  }, []);

  const LOCATION: YMapLocationRequest = {
    center: [37.53, 55.703], // starting position [lng, lat]
    zoom: 17, // starting zoom
  };

  return (
    <div className={styles.container}>
      <YMap location={LOCATION} showScaleInCopyrights={true}>
        <YMapDefaultSchemeLayer />
        <YMapDefaultFeaturesLayer />

        <YMapControls position="right">
          <YMapZoomControl />
        </YMapControls>
      </YMap>
    </div>
  );
};
