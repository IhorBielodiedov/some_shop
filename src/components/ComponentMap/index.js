import React, { useEffect, useState } from "react";
import { YMaps, Map, Placemark, ZoomControl } from "@pbe/react-yandex-maps";
import styles from "./componentMap.module.scss";
import "./balloon.scss";

const ComponentMap = (props) => {
  const {
    data: initialData,
    setPoint,
    indxesVisiblePlacemark,
    setVisiblePlacemark,
  } = props;

  const [mapCenter, setMapCenter] = useState([
    initialData[0]?.lat,
    initialData[0]?.lng,
  ]);

  const repeatIds = [];
  const data = [...initialData].sort((c) => c.id);

  useEffect(() => {
    if (data.length > 0) {
      const newCenter = [data[0]?.lat, data[0]?.lng];
      setMapCenter(newCenter);
    }
  }, [data]);

  return (
    <div className={styles.container}>
      <YMaps>
        <Map
          key={JSON.stringify(data)} // Используем key, чтобы пересоздавать компонент
          defaultState={{
            center: mapCenter,
            zoom: 13,
          }}
          className={styles.componentMap}
        >
          <ZoomControl options={{ float: "right" }} />
          {data.map((c) => {
            let repeatPoints = data
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
                      ...repeatPoints.map((el) => el.id),
                    ]);
                  });

                  ref.balloon.events.add("close", () => {
                    setVisiblePlacemark(
                      indxesVisiblePlacemark.filter(
                        (id) => !repeatPoints.some((el) => el.id === id)
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
