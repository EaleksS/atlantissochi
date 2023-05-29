import { FC } from "react";
import { Map, YMaps, Placemark } from "@pbe/react-yandex-maps";

export const MapYan: FC = (): JSX.Element => {
  return (
    <YMaps>
      <Map
        defaultState={{ center: [43.566252, 39.756093], zoom: 15 }}
        width="100%"
        height="300px"
      >
        <Placemark geometry={[43.566252, 39.756093]} />
      </Map>
    </YMaps>
  );
};
