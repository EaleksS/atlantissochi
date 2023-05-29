import { FC } from "react";
import styles from "./Plans.module.scss";
import { useStore } from "../../store/nav.store";
import { Button, Text } from "../../../shared";
import { TbMessageCircle2Filled } from "react-icons/tb";

export const Plans: FC = (): JSX.Element => {
  const { setIsActive } = useStore();

  return (
    <div className={styles.plans} id="plans">
      <Text type="h2" mt="60px" fw="500">
        Планировки ЖК "Атлантис"
      </Text>

      <img src="/img/11.jpg" alt="img" />

      <div className={styles.btn}>
        <Button type="primary" onClick={setIsActive}>
          <TbMessageCircle2Filled />
          <Text fw="500">Получить больше информации на WhatsApp</Text>
        </Button>
      </div>
    </div>
  );
};
