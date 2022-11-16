import { ProjectItem } from "../ProjectItem";
import styles from "./styles.module.scss";

interface PortfolioProps {
	setIsOpen: (value: boolean) => void;
}

function Portfolio({ setIsOpen }: PortfolioProps) {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.toPaddingScroll}>
          <ProjectItem setIsOpen={setIsOpen} />
          <ProjectItem setIsOpen={setIsOpen} />
          <ProjectItem setIsOpen={setIsOpen} />
          <ProjectItem setIsOpen={setIsOpen} />
        </div>
      </div>
    </div>
  );
}

export { Portfolio };
