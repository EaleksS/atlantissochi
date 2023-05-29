import { FC } from "react";
import styles from "./Header.module.scss";
import { Text } from "../../../shared";
import { Link } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";

export const Header: FC = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <LinkRouter to="/">
        <div className={styles.logo}>
          <img src="/home.svg" alt="logo" />
          <Text type="h4">ЖК АТЛАНТИС</Text>
        </div>
      </LinkRouter>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="about" smooth={true}>
              <Text>Особенности</Text>
            </Link>
          </li>
          <li>
            <Link to="advantages" smooth={true}>
              <Text>Преимущества</Text>
            </Link>
          </li>
          <li>
            <Link to="gallery" smooth={true}>
              <Text>Фото ЖК</Text>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
