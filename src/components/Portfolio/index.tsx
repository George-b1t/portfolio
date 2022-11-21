import { ProjectItem } from "../ProjectItem";

import projects from "../../utils/projects.json";

import igNewsPng from "../../assets/projects/ignews.png";

import styles from "./styles.module.scss";

interface PortfolioProps {
	setIsOpen: (value: boolean) => void;
}

function Portfolio({ setIsOpen }: PortfolioProps) {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.toPaddingScroll}>
          {projects.map((item, index) => (
            <ProjectItem setIsOpen={setIsOpen} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export { Portfolio };
