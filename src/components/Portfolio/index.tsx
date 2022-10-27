import { ProjectItem } from "../ProjectItem";
import styles from "./styles.module.scss";

function Portfolio() {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.toPaddingScroll}>
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
        </div>
      </div>
    </div>
  );
}

export { Portfolio };
