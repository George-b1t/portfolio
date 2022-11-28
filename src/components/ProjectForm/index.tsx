import styles from "./styles.module.scss";

// import ignewsImg from "../../assets/projects/ignews.png";
import closeSvg from "../../assets/close.svg";
import { useState } from "react";
import { ProjectProps } from "../ProjectItem";

interface ProjectFormProps {
	setIsOpen: (value: boolean) => void;
	project: ProjectProps;
}

function ProjectForm({ setIsOpen, project }: ProjectFormProps) {
	const [isClosing, setIsClosing] = useState(false);

	function closeModal() {
		setIsClosing(true);

		setTimeout(() => {
			setIsOpen(false);
		}, 300)
	}

	return (
		<div className={styles.container}>
			<div className={`${styles.backgroungToClick} ${isClosing ? styles.closing : styles.openning}`} onClick={() => closeModal()} />

			<div className={`${styles.content} ${isClosing ? styles.closing : styles.openning}`}>
				<h3>{project.name}</h3>

				<img className={styles.closeIcon} src={closeSvg} alt="closeSvg" onClick={() => closeModal()} />

				<img className={styles.mainImage} src={`/projects/${project.image}`} alt="ProjectImage" />
	
				<p>{project.description}</p>
			</div>
		</div>
	)
}

export { ProjectForm }
