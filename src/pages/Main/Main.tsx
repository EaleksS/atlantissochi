import { FC } from "react";
import {
  About,
  Advantages,
  Advantages2,
  Book,
  Contacts,
  Gallery,
  Layout,
  Plans,
  Preview,
} from "../../widgets";
// import styles from "./Main.module.scss";

export const Main: FC = (): JSX.Element => {
  return (
    <Layout btn={true}>
      <Preview />
      <About />
      <Advantages />
      <Gallery />
      <Plans />
      <Advantages2 />
      <Book />
      <Contacts />
    </Layout>
  );
};
