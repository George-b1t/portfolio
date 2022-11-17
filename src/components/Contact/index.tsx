import styles from "./styles.module.scss";

import emailSvg from "../../assets/email.svg";
import phoneSvg from "../../assets/phone.svg";
import githubSvg from "../../assets/github.svg";
import linkedinSvg from "../../assets/linkedin.svg";

import { ContactItem } from "../ContactItem"

function Contact() {
  return (
		<div className={styles.container}>
			<div className={styles.fieldTwoItems}>
				<ContactItem svg={emailSvg} title="Email" info="george.soares509@gmail.com" index={1} link="mailto:george.soares509@gmail.com" />
				<ContactItem svg={phoneSvg} title="Phone" info="(79) 99853-6329" index={2} link="https://wa.me/5579998536329" />
			</div>
			<div className={styles.fieldTwoItems}>
				<ContactItem svg={githubSvg} title="Github" info="George-b1t" index={3} link="https://github.com/George-b1t" />
				<ContactItem svg={linkedinSvg} title="Linkedin" info="george-soares-651b5519b" index={4} link="https://www.linkedin.com/in/george-soares-651b5519b/" />
			</div>
		</div>
	)
}

export { Contact }
