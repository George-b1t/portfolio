import styles from "./styles.module.scss";

import igNewsPng from "../../assets/projects/ignews.png";

export interface ProjectProps {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface ProjectItem {
	setIsOpen: (value: boolean) => void;
  setProject: (value: ProjectProps) => void;
  index: number;
  item: ProjectProps;
}

function ProjectItem({ setIsOpen, setProject, index, item }: ProjectItem) {
  function openForm() {
    setProject(item);
    setIsOpen(true);
  }

  return (
    <div className={styles.container} style={{ animationDelay: `${index*100}ms` }} onClick={openForm}>
      <h3 className={styles.title}>{item.name}</h3>
      <img src={`./projects/${item.image}`} alt={item.name} />
    </div>
  );
}

export { ProjectItem };
