import { FC } from "react";
import styles from "./Advantages2.module.scss";
import { Text } from "../../../shared";

export const Advantages2: FC = (): JSX.Element => {
  return (
    <div className={styles.advantages} id="advantages">
      <Text type="h2" mt="60px" fw="500">
        Преимущества <br /> ЖК "Атлантис"
      </Text>
      <div className={styles.items}>
        <div className={styles.item}>
          <img src="/about/4.svg" alt="svg" />
          <Text fw="300" fz="16px">
            <b style={{ fontWeight: "700" }}>Всё в шаговой доступности</b>
            <br />
            <br />
            Один из лучших районов г. Сочи, в шаговой доступности Дендрарий,
            Морпорт, Набережная
          </Text>
        </div>
        <div className={styles.item}>
          <img src="/about/3.svg" alt="svg" />
          <Text fw="300" fz="16px">
            <b style={{ fontWeight: "700" }}>Пассивный доход</b>
            <br />
            <br />
            Цены на сдачу квартир начинаются от 7000 рублей в сутки
          </Text>
        </div>
        <div className={styles.item}>
          <img src="/about/2.svg" alt="svg" />
          <Text fw="300" fz="16px">
            <b style={{ fontWeight: "700" }}>Инвесторские предложения</b>
            <br />
            <br />В наличии предложения от инвесторов с ценой ниже рынка
          </Text>
        </div>
        <div className={styles.item}>
          <img src="/about/1.svg" alt="svg" />
          <Text fw="300" fz="16px">
            <b style={{ fontWeight: "700" }}>Наличие рассрочки</b>
            <br />
            <br />
            Согласуем рассрочку на индивидуальных условиях
          </Text>
        </div>
      </div>
    </div>
  );
};
