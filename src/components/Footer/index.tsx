import styles from "./styles.module.scss";

interface FooterProps {
  next?: (() => void) | null;
  prev?: (() => void) | null;
  backgroundCard: boolean;
}

function Footer({ next, prev, backgroundCard }: FooterProps) {
  return (
    <div
      className={`${styles.container} ${backgroundCard ? {} : styles.noCard}`}
    >
      {prev ? (
        <button onClick={() => prev()}>
          <span>Prev</span>
        </button>
      ) : (
        <br />
      )}
      {next ? (
        <button onClick={() => next()}>
          <span>Next</span>
        </button>
      ) : (
        <br />
      )}
    </div>
  );
}

export { Footer };
