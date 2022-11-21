import styles from "./styles.module.scss";

import igNewsPng from "../../assets/projects/ignews.png";

interface ProjectProps {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface ProjectItem {
	setIsOpen: (value: boolean) => void;
  index: number;
  item: ProjectProps;
}

function ProjectItem({ setIsOpen, index, item }: ProjectItem) {
  return (
    <div className={styles.container} style={{ animationDelay: `${index*100}ms` }} onClick={() => setIsOpen(true)}>
      <h3 className={styles.title}>{item.name}</h3>
      <img src={`./projects/${item.image}`} alt={item.name} />
    </div>
  );
}

export { ProjectItem };
