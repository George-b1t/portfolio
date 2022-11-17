import newTab from "../../assets/new_tab.svg";

import styles from "./styles.module.scss";

interface ContactItemProps {
	svg: string;
	title: string;
	info: string;
	index: number;
	link: string;
}

function ContactItem({ svg, title, info, index, link }: ContactItemProps) {
	return (
		<div className={styles.container} style={{ animationDelay: `${index*100}ms` }}>
			<img src={svg} alt="contactItem" />

			<div>
				<p className={styles.itemTitle}>{title}</p>
				<a href={link} target="_blank"><p className={styles.itemInfo}>{info}</p><img src={newTab} alt="newTab" /></a>
			</div>
		</div>
	)
}

export { ContactItem }
