import { FC } from "react";
import styles from "./About.module.scss";
import { Button, Text } from "../../../shared";
import { useStore } from "../../store/nav.store";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { GiParkBench } from "react-icons/gi";
import { FaCarSide } from "react-icons/fa";

export const About: FC = (): JSX.Element => {
  const { setIsActive } = useStore();

  return (
    <div className={styles.about} id="about">
      <Text type="h2" mt="60px" fw="500">
        Особенности ЖК "Атлантис"
      </Text>

      <div className={styles.items}>
        <div className={styles.item}>
          <img src="/about/8.svg" alt="svg" />
          <Text fw="300" fz="16px">
            ПРИВАТНАЯ ТЕРРИТОРИЯ
            <br />
            <br />
            Закрытая придомовая территория с охраной, КПП 24/7, видеонаблюдение
            и консьерж
          </Text>
        </div>
        <div className={styles.item}>
          <img src="/about/9.svg" alt="svg" />
          <Text fw="300" fz="16px">
            ПАНОРАМНОЕ ОСТЕКЛЕНИЕ
            <br />
            <br />
            Наслаждайтесь замечательными видами на море и горы
          </Text>
        </div>
        <div className={styles.item}>
          <FaCarSide className={styles.icon} />
          <Text fw="300" fz="16px">
            ДВУХУРОВНЕВЫЙ ПАРКИНГ
            <br />
            <br />
            Ваше собственное парковочное место с доступом на лифте
          </Text>
        </div>
        <div className={styles.item}>
          <GiParkBench className={styles.icon} />
          <Text fw="300" fz="16px">
            ФЗ-214
            <br />
            <br />
            Строительство по закону ФЗ-214
          </Text>
        </div>
      </div>

      <div className={styles.home}>
        <div className={styles.title}>
          <Text type="h1" color="#000" fz="3.5rem" fw="600">
            ДОМ БИЗНЕС КЛАССА В СОЧИ
          </Text>
          <Text mt="2rem">
            «Атлантис» — 12-этажный жилой дом с подземным паркингом. <br />
            Располагается по адресу ул. Бытха, 4 в микрорайоне Бытха в Сочи
            <br /> на расстоянии 520 метров от Черного моря.
          </Text>
          <Button type="primary" onClick={setIsActive} mt="2rem">
            <TbMessageCircle2Filled />
            <Text fw="500">Получить информацию на WhatsApp</Text>
          </Button>
        </div>
        <img src="/img/2.jpg" alt="img" />
      </div>
    </div>
  );
};
