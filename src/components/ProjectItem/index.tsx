import styles from "./styles.module.scss";

import igNewsPng from "../../assets/projects/ignews.png";

function ProjectItem() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>IgNews</h3>
      <img src={igNewsPng} alt="IgNews" />
    </div>
  );
}

export { ProjectItem };
