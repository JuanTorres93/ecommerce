import styles from "./Loader.module.scss";

function Loader({ type = "spinner" }) {
  // type can be "spinner", "dots", "bars", "dualRing" or "ellipsis"
  if (type === "dots")
    return (
      <div className={styles.dots}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );

  if (type === "bars")
    return (
      <div className={styles.bars}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );

  if (type === "ellipsis")
    return (
      <div className={styles.ellipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );

  return <div className={styles[type]} />;
}

export default Loader;
