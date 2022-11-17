import styles from "./styles.module.scss";

import igNewsPng from "../../assets/projects/ignews.png";

interface ProjectItem {
	setIsOpen: (value: boolean) => void;
  index: number;
}

function ProjectItem({ setIsOpen, index }: ProjectItem) {
  return (
    <div className={styles.container} style={{ animationDelay: `${index*100}ms` }} onClick={() => setIsOpen(true)}>
      <h3 className={styles.title}>IgNews</h3>
      <img src={igNewsPng} alt="IgNews" />
    </div>
  );
}

export { ProjectItem };
