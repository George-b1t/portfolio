import { useState } from "react";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Tech } from "./components/Tech";
import styles from "./Home.module.scss";

function App() {
  const [indexPage, setIndexPage] = useState<number>(0);
  const pages = ["About", "Tech", "Portfolio", "Contact"];

  function handleSetCurrentPage(page: number) {
    setIndexPage(page);
  }

  function isBackgroundCard() {
    return indexPage % 2 === 0;
  }

  return (
    <div className={styles.container}>
      <div
        className={`${styles.subContainer} ${
          isBackgroundCard() ? styles.card : styles.noCard
        }`}
      >
        <Header
          backgroundCard={isBackgroundCard()}
          currentPage={pages[indexPage]}
          setCurrentPage={handleSetCurrentPage}
        />
        {indexPage === 0 && <About />}
        {indexPage === 1 && <Tech />}
        <Footer
          next={indexPage < 3 ? () => setIndexPage((i) => i + 1) : null}
          prev={indexPage > 0 ? () => setIndexPage((i) => i - 1) : null}
          backgroundCard={isBackgroundCard()}
        />
      </div>
    </div>
  );
}

export default App;
