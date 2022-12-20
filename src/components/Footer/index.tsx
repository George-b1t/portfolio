import { TextProviderProps } from "../../App";
import styles from "./styles.module.scss";

interface FooterProps {
  next?: (() => void) | null;
  prev?: (() => void) | null;
  backgroundCard: boolean;
  textProvider: TextProviderProps;
}

function Footer({ next, prev, backgroundCard, textProvider }: FooterProps) {
  return (
    <div
      className={`${styles.container} ${backgroundCard ? {} : styles.noCard}`}
    >
      {prev ? (
        <button onClick={() => prev()}>
          <span>{textProvider.footerButtons.prev}</span>
        </button>
      ) : (
        <br />
      )}
      {next ? (
        <button onClick={() => next()}>
          <span>{textProvider.footerButtons.next}</span>
        </button>
      ) : (
        <br />
      )}
    </div>
  );
}

export { Footer };
