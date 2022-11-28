import { ProjectItem, ProjectProps } from "../ProjectItem";

import projects from "../../utils/projects.json";

import igNewsPng from "../../assets/projects/ignews.png";

import styles from "./styles.module.scss";
import { useState } from "react";
import { ProjectForm } from "../ProjectForm";

function Portfolio() {
  const [formOpen, setFormOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<ProjectProps>({} as any);

  return (
    <div className={styles.container}>
      {formOpen && (
        <ProjectForm setIsOpen={setFormOpen} project={currentProject} />
      )}

      <div className={styles.subContainer}>
        <div className={styles.toPaddingScroll}>
          {projects.map((item, index) => (
            <ProjectItem setIsOpen={setFormOpen} setProject={setCurrentProject} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export { Portfolio };
