import styles from "./styles.module.scss";

import profileImg from "../../assets/profile.png";
import { TextProviderProps } from "../../App";

interface AboutProps {
  textProvider: TextProviderProps;
}

function About({ textProvider }: AboutProps) {
  return (
    <div className={styles.container}>
      <div className={styles.fieldAboutMe}>
        <h1 className={styles.aboutMeHello}>{textProvider.pageOne.helloText}</h1>

        <div className={styles.fieldAboutMeDescription}>
          <div className={styles.encapulateDescription}>
            <span className={styles.const}>const</span>{" "}
            <span className={styles.cosntName}>aboutMe =</span>{" "}
            <span className={styles.constValue}>
              `{"\n"}
              <div className={styles.toPadding}>
                <strong>{textProvider.pageOne.description[0]}</strong>, <strong>{textProvider.pageOne.description[1]}</strong>,{" "}
                <strong>{textProvider.pageOne.description[2]}</strong> {textProvider.pageOne.description[3]} <strong>{textProvider.pageOne.description[4]}</strong>{" "}
                {textProvider.pageOne.description[5]}{"\n\n"}{textProvider.pageOne.description[6]}
              </div>
              `
            </span>
          </div>
        </div>
      </div>

      <div className={styles.fieldProfileImage}>
        <img src={profileImg} alt="Eu, sentado numa cadeira" />
      </div>
    </div>
  );
}

export { About };
