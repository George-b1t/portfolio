import { Blurhash } from "react-blurhash";
import styles from "./styles.module.scss";

export interface ProjectProps {
  id: number;
  name: string;
  description: string;
  image: string;
  hashImage: string;
  starred: boolean;
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
      <Blurhash
        hash={item.hashImage}
        width={330}
        height={168}
        punch={10}
      />
      <img className={styles.projectImage} src={`./projects/${item.image}`} alt={item.name} />
      {item.starred && <img className={styles.star} src="star.svg" alt="starred-repo" />}
    </div>
  );
}

export { ProjectItem };
