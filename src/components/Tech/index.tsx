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
            Initially, it didn't make sense to waste time "typing" the code, but it was just starting to use it to see the power that this tool has and how much it is necessary.
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
            Passionate about this framework, both for the structure and facilities it brings, and for the community around it, which makes it evolve a lot.
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
            I love backend, even more when talking about node, which has a very good response time in addition to having great libraries that make development a lot easier.
          </p>
        </div>
      </div>
    </div>
  );
}

export { Tech };
