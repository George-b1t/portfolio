import styles from "./styles.module.scss";

import logo from "../../assets/logo.svg";
import { TextProviderProps } from "../../App";

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: number) => void;
  backgroundCard: boolean;
  textProvider: TextProviderProps;
}

function Header({ currentPage, setCurrentPage, backgroundCard, textProvider }: HeaderProps) {
  return (
    <div className={styles.container}>
      <div className={styles.leftHeader}>
        <div
          className={`${styles.fieldLogo} ${
            backgroundCard ? {} : styles.hasShadow
          }`}
        >
          <img src={logo} />
        </div>
        <h1
          className={
            backgroundCard ? styles.currentPage : styles.currentPageDark
          }
        >
          {currentPage}
        </h1>
      </div>
      <nav className={styles.rightHeader}>
        <ul
          className={`${styles.navList} ${backgroundCard ? {} : styles.noCard}`}
        >
          <a
            href="#"
            onClick={() => setCurrentPage(0)}
            className={currentPage === textProvider.pages[0] ? styles.active : ""}
          >
            {textProvider.pages[0]}
          </a>
          <a
            href="#"
            onClick={() => setCurrentPage(1)}
            className={currentPage === textProvider.pages[1] ? styles.active : ""}
          >
            {textProvider.pages[1]}
          </a>
          <a
            href="#"
            onClick={() => setCurrentPage(2)}
            className={currentPage === textProvider.pages[2] ? styles.active : ""}
          >
            {textProvider.pages[2]}
          </a>
          <a
            href="#"
            onClick={() => setCurrentPage(3)}
            className={currentPage === textProvider.pages[3] ? styles.active : ""}
          >
            {textProvider.pages[3]}
          </a>
          <div className={`${styles.animation} ${styles[currentPage]}`} />
        </ul>
      </nav>
    </div>
  );
}

export { Header };
