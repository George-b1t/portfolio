import styles from "./styles.module.scss";

import igNewsPng from "../../assets/projects/ignews.png";

interface ProjectItem {
	setIsOpen: (value: boolean) => void;
}

function ProjectItem({ setIsOpen }: ProjectItem) {
  return (
    <div className={styles.container} onClick={() => setIsOpen(true)}>
      <h3 className={styles.title}>IgNews</h3>
      <img src={igNewsPng} alt="IgNews" />
    </div>
  );
}

export { ProjectItem };
