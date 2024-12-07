import React from "react";

import { YMaps, Map, Placemark, ZoomControl } from "@pbe/react-yandex-maps";
import styles from "./componentMap.module.scss";
import "./balloon.scss";

const ComponentMap = (props) => {
  const data = props.data.sort((c) => c.id);
  const setPoint = props.setPoint;
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
          <ZoomControl options={{ float: "right" }} />
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
                  if (!ref) return;

                  ref.events.add("click", () => {
                    setVisiblePlacemark([
                      ...indxesVisiblePlacemark,
                      ...repeatPonts.map((el) => el.id),
                    ]);
                  });

                  ref.balloon.events.add("close", () => {
                    setVisiblePlacemark(
                      indxesVisiblePlacemark.filter(
                        (id) => !repeatPonts.some((el) => el.id === id)
                      )
                    );
                  });

                  ref.balloon.events.add("open", () => {
                    setTimeout(() => {
                      const button = document.querySelector(
                        `.balloon-button[data-id="${c.id}"]`
                      );
                      if (button) {
                        button.addEventListener("click", () => {
                          setPoint("point", c);
                        });
                      }
                    }, 0);
                  });
                }}
                modules={["geoObject.addon.balloon"]}
                key={c.id}
                defaultGeometry={[c.lat, c.lng]}
                properties={{
                  balloonContentBody: `
                    <div>
                      <div class="balloon-title">${c.name}</div>
                      <div class="balloon-name">${c.address}</div>
                      <div class="balloon-timetable">${c.timetable}</div>
                      <button class="balloon-button" data-id="${c.id}">
                        Заберу отсюда
                      </button>
                    </div>
                  `,
                }}
              />
            );
          })}
        </Map>
      </YMaps>
    </div>
  );
};

export default ComponentMap;
