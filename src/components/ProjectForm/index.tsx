import styles from "./styles.module.scss";

import ignewsImg from "../../assets/projects/ignews.png";
import closeSvg from "../../assets/close.svg";

interface ProjectFormProps {
	setIsOpen: (value: boolean) => void;
}

function ProjectForm({ setIsOpen }: ProjectFormProps) {
	return (
		<div className={styles.container}>
			<div className={styles.backgroungToClick} onClick={() => setIsOpen(false)} />

			<div className={styles.content}>
				<h3>IgNews</h3>

				<img className={styles.closeIcon} src={closeSvg} alt="closeSvg" onClick={() => setIsOpen(false)} />
	
				<img className={styles.mainImage} src={ignewsImg} alt="ignewsImg" />

				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sed aliquet ex, non dictum quam. Vestibulum eleifend varius turpis sit amet molestie. Proin at leo neque. Nullam pellentesque dapibus massa, posuere egestas erat varius imperdiet. Suspendisse ut dapibus leo. Duis ornare sapien vitae dui iaculis egestas. Nam suscipit enim ut elit dictum mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum lorem erat, porttitor ac vulputate consectetur, porttitor ac felis. Morbi vel placerat massa, sit amet pharetra purus. Sed at pretium arcu.</p>
			</div>
		</div>
	)
}

export { ProjectForm }
