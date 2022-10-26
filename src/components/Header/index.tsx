import styles from "./styles.module.scss";

import logo from "../../assets/logo.svg";

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: number) => void;
  backgroundCard: boolean;
}

function Header({ currentPage, setCurrentPage, backgroundCard }: HeaderProps) {
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
            className={currentPage === "About" ? styles.active : ""}
          >
            About
          </a>
          <a
            href="#"
            onClick={() => setCurrentPage(1)}
            className={currentPage === "Tech" ? styles.active : ""}
          >
            Tech
          </a>
          <a
            href="#"
            onClick={() => setCurrentPage(2)}
            className={currentPage === "Portfolio" ? styles.active : ""}
          >
            Portfolio
          </a>
          <a
            href="#"
            onClick={() => setCurrentPage(3)}
            className={currentPage === "Contact" ? styles.active : ""}
          >
            Contact
          </a>
          <div className={`${styles.animation} ${styles[currentPage]}`} />
        </ul>
      </nav>
    </div>
  );
}

export { Header };
