import { FC } from "react";
import styles from "./Preview.module.scss";
import { Button, Text } from "../../../shared";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { useStore } from "../../store/nav.store";

export const Preview: FC = (): JSX.Element => {
  const { setIsActive } = useStore();

  return (
    <div className={styles.preview}>
      <img className={styles.img_preview} src="/img/1.jpg" alt="preview" />
      <div className={styles.bg}></div>

      <Text type="h1" color="#fff" fw="600">
        ПРОДАЖА КВАРТИР В ЖК "АТЛАНТИС". СОЧИ. БЫТХА.
      </Text>
      <Text color="#fff" type="h4" fz="1.5rem" mt="3rem" fw="600">
        Бизнес класс <br />
        Дом на предсдаче <br />
        Ипотека Совкомбанка <br />
      </Text>
      <div className={styles.btn}>
        <Button type="primary" onClick={setIsActive}>
          <TbMessageCircle2Filled />
          <Text fw="500">Получить информацию на WhatsApp</Text>
        </Button>
      </div>
    </div>
  );
};
