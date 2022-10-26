import styles from "./styles.module.scss";

import profileImg from "../../assets/profile.png";

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.fieldAboutMe}>
        <h1 className={styles.aboutMeHello}>Hey, I'm George!</h1>

        <div className={styles.fieldAboutMeDescription}>
          <div className={styles.encapulateDescription}>
            <span className={styles.const}>const</span>{" "}
            <span className={styles.cosntName}>aboutMe =</span>{" "}
            <span className={styles.constValue}>
              `{"\n"}
              <div className={styles.toPadding}>
                <strong>Developer</strong>, <strong>curious</strong>,{" "}
                <strong>self-taught</strong> and <strong>passionate</strong>{" "}
                about what I do.{"\n\n"}Know that I am the best at what I do, I
                dedicate myself a lot, I have no doubt about that!
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
