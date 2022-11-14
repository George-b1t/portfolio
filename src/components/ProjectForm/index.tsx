import styles from "./styles.module.scss";

interface ProjectFormProps {
	setIsOpen: (value: boolean) => void;
}

function ProjectForm({ setIsOpen }: ProjectFormProps) {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<h3>IgNews</h3>
			</div>
		</div>
	)
}

export { ProjectForm }
