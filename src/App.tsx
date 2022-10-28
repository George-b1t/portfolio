import { useEffect, useState } from "react";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Portfolio } from "./components/Portfolio";
import { Tech } from "./components/Tech";
import styles from "./Home.module.scss";

function App() {
  const [indexPage, setIndexPage] = useState<number>(0);
  const pages = ["About", "Tech", "Portfolio", "Contact"];

  const [mousePosition, setMousePosition] = useState<number[]>([0, 0]);

  function handleSetCurrentPage(page: number) {
    setIndexPage(page);
  }

  function isBackgroundCard() {
    return indexPage % 2 === 0;
  }

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      setMousePosition([e.clientX - 30, e.clientY - 30]);
    });
  });

  return (
    <div className={styles.container}>
      <div
        className={styles.hoverMouse}
        style={{ left: mousePosition[0], top: mousePosition[1] }}
      />
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
        {indexPage === 2 && <Portfolio />}
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
