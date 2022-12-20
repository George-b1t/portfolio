import { useEffect, useState } from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Portfolio } from "./components/Portfolio";
import { Tech } from "./components/Tech";
import styles from "./Home.module.scss";

import texts from "./utils/texts.json";

export interface TextProviderProps {
  pages: string[];
  footerButtons: {
    prev: string;
    next: string;
  };
  pageOne: {
    helloText: string;
    description: string[];
  };
  pageTwo: {
    typescript: string;
    react: string;
    node: string;
  }
}

function App() {
  const [indexPage, setIndexPage] = useState<number>(0);

  const [language, setLanguage] = useState(true);

  const [textProvider, setTextProvider] = useState<TextProviderProps>(texts.english);

  const [mousePosition, setMousePosition] = useState<number[]>([0, 0]);

  const pages = textProvider.pages;

  useEffect(() => {
    setTextProvider(language ? texts.english : texts.portuguese)
  }, [language]);

  function handleSetCurrentPage(page: number) {
    setIndexPage(page);
  }

  function isBackgroundCard() {
    return false;
  }

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      setMousePosition([e.clientX - 30, e.clientY - 30]);
    });
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <div
          className={styles.hoverMouse}
          style={{ left: mousePosition[0], top: mousePosition[1] }}
        />
        <div
          className={`${styles.subContainer} ${styles.card}`}
        >
          <div className={styles.fieldSwitch}>
            <img src="br.svg" alt="brazil" />
            <label className={styles.switch}>
              <input type="checkbox" checked={language} onClick={() => setLanguage(o => !o)} />
              <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
            <img src="us.svg" alt="usa" />
          </div>

          <Header
            backgroundCard={isBackgroundCard()}
            currentPage={pages[indexPage]}
            setCurrentPage={handleSetCurrentPage}
            textProvider={textProvider}
          />
          {indexPage === 0 && <About textProvider={textProvider} />}
          {indexPage === 1 && <Tech textProvider={textProvider} />}
          {indexPage === 2 && <Portfolio />}
          {indexPage === 3 && <Contact />}
          <Footer
            next={indexPage < 3 ? () => setIndexPage((i) => i + 1) : null}
            prev={indexPage > 0 ? () => setIndexPage((i) => i - 1) : null}
            backgroundCard={isBackgroundCard()}
            textProvider={textProvider}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
