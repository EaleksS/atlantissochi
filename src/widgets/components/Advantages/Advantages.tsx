import { FC } from "react";
import styles from "./Advantages.module.scss";
import { Button, Text } from "../../../shared";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { useStore } from "../../store/nav.store";

export const Advantages: FC = (): JSX.Element => {
  const { setIsActive } = useStore();

  return (
    <div className={styles.advantages} id="advantages">
      <Text type="h2" mt="60px" fw="500">
        Преимущества ЖК "Атлантис"
      </Text>
      <div className={styles.items}>
        <div className={styles.item}>
          <img src="/about/5.svg" alt="svg" />
          <Text fw="300" fz="16px">
            ЖК "Атлантис"сейчас находится на предсдаче
          </Text>
        </div>
        <div className={styles.item}>
          <img src="/about/6.svg" alt="svg" />
          <Text fw="300" fz="16px">
            ЖК "Атлантис" находится в элитном р-не г. Сочи
          </Text>
        </div>
        <div className={styles.item}>
          <img src="/about/7.svg" alt="svg" />
          <Text fw="300" fz="16px">
            От ЖК "Атлантис" всего 520 метров до моря
          </Text>
        </div>
        <div className={styles.item}>
          <img src="/adv/4.svg" alt="svg" />
          <Text fw="300" fz="16px">
            Проходит ипотека Совкомбанк!
          </Text>
        </div>
      </div>

      <div className={styles.btn}>
        <Button type="primary" onClick={setIsActive}>
          <TbMessageCircle2Filled />
          <Text fw="500">Получить больше информации на WhatsApp</Text>
        </Button>
      </div>
    </div>
  );
};
