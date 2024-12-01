import React from "react";

import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import styles from "./componentMap.module.scss";
import "./balloon.scss";

const ComponentMap = (props) => {
  const data = props.data.sort((c) => c.id);
  const indxesVisiblePlacemark = props.indxesVisiblePlacemark;
  const setVisiblePlacemark = props.setVisiblePlacemark;
  const repeatIds = [];

  return (
    <div className={styles.container}>
      <YMaps>
        <Map
          defaultState={{ center: [56.3286537, 37.5211701], zoom: 13 }}
          className={styles.componentMap}
        >
          {data.map((c) => {
            let repeatPonts = data
              .filter((x) => x.lat === c.lat && x.lng === c.lng)
              .sort((x) => x.id);
            if (repeatIds.includes(c.id)) {
              return null;
            }
            return (
              <Placemark
                instanceRef={(ref) => {
                  let flag = true;
                  for (let i = 0; i < repeatPonts.length; i++) {
                    if (indxesVisiblePlacemark.includes(repeatPonts[i].id)) {
                      flag = false;
                      ref && ref.balloon.open();
                      return;
                    }
                  }
                  if (flag && ref && ref.balloon.isOpen()) {
                    ref && ref.balloon.close();
                  }
                  ref &&
                    ref.events.add("click", () => {
                      setVisiblePlacemark([
                        ...indxesVisiblePlacemark,
                        ...repeatPonts.map((el) => el.id),
                      ]);
                    });
                  ref &&
                    ref.balloon.events.add("close", () => {
                      setVisiblePlacemark(
                        indxesVisiblePlacemark.filter(
                          (c) => !repeatPonts.some((el) => el.id == c)
                        )
                      );
                    });
                }}
                modules={["geoObject.addon.balloon"]}
                key={c.id}
                defaultGeometry={[c.lat, c.lng]}
                properties={{
                  balloonContentBody: `<div>
                    <div class="balloon-title">${c.name}</div>
                    <div class="balloon-name">${c.address}</div>
                    <div class="balloon-timetable">${c.timetable}</div>
                    <button class="balloon-button" onclick="(function() {
                      props.setPoint(${c})
                    })()">Заберу отсюда</button>
                  </div>`,
                }}
              ></Placemark>
            );
          })}
        </Map>
      </YMaps>
    </div>
  );
};
export default ComponentMap;
