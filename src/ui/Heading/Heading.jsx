import styles from "./Heading.module.scss";

function Heading({ children, type, styling }) {
  // NOTE: h1 is reserved for the main title of the page, so we don't use it here.
  if (type === "h2")
    return (
      <h2 className={`${styles.h2} ${styling ? styles[styling] : ""}`}>
        {children}
      </h2>
    );
  if (type === "h3")
    return (
      <h3 className={`${styles.h3} ${styling ? styles[styling] : ""}`}>
        {children}
      </h3>
    );
  if (type === "h4")
    return (
      <h4 className={`${styles.h4} ${styling ? styles[styling] : ""}`}>
        {children}
      </h4>
    );
  if (type === "h5")
    return (
      <h5 className={`${styles.h5} ${styling ? styles[styling] : ""}`}>
        {children}
      </h5>
    );
  if (type === "h6")
    return (
      <h6 className={`${styles.h6} ${styling ? styles[styling] : ""}`}>
        {children}
      </h6>
    );

  throw new Error(`Heading type "${type}" is not supported.`);
}

export default Heading;
