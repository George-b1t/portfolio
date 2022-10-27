import styles from "./styles.module.scss";

import reactSvg from "../../assets/react.svg";
import typescriptSvg from "../../assets/typescript.svg";
import nodeSvg from "../../assets/node.svg";

function Tech() {
  return (
    <div className={styles.container}>
      <div className={styles.techCard}>
        <div className={styles.cardHeader}>
          <img src={typescriptSvg} alt="typescript" />
          <div className={styles.cardHeaderSeparator} />
          <h2 className={styles.cardTitle}>TypeScript</h2>
        </div>
        <div className={styles.cardMain}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui magni
            quibusdam deserunt non cum commodi tempore doloribus quia laborum
            voluptate quisquam.
          </p>
        </div>
      </div>
      <div className={styles.techCard}>
        <div className={styles.cardHeader}>
          <img src={reactSvg} alt="react" />
          <div className={styles.cardHeaderSeparator} />
          <h2 className={styles.cardTitle}>React</h2>
        </div>
        <div className={styles.cardMain}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui magni
            quibusdam deserunt non cum commodi tempore doloribus quia laborum
            voluptate quisquam.
          </p>
        </div>
      </div>
      <div className={styles.techCard}>
        <div className={styles.cardHeader}>
          <img src={nodeSvg} alt="node" />
          <div className={styles.cardHeaderSeparator} />
          <h2 className={styles.cardTitle}>Node</h2>
        </div>
        <div className={styles.cardMain}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui magni
            quibusdam deserunt non cum commodi tempore doloribus quia laborum
            voluptate quisquam.
          </p>
        </div>
      </div>
    </div>
  );
}

export { Tech };
