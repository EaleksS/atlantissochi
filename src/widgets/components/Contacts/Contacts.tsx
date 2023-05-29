import { FC } from "react";
import styles from "./Contacts.module.scss";
import { Text } from "../../../shared";
import { MapYan } from "../Map/Map";

export const Contacts: FC = (): JSX.Element => {
  return (
    <div className={styles.contacts}>
      <Text type="h2" mt="60px" fw="500">
        Контакты <br />
        ЖК "АТЛАНТИС"
      </Text>
      <Text type="h4" mt="2rem" fw="300">
        <span>ЖК «Атлантис» находится по адресу ул. Бытха, 4 в микрорайоне Бытха г. Сочи.</span>
      </Text>
      <div style={{ marginTop: "3rem" }}></div>
      <MapYan />
    </div>
  );
};
