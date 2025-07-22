import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import styles from "./StartPage.module.scss";

function StartPage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.StartPage}>
        <div className={styles.box}>
          <h3>What's your name?</h3>
          <form className={styles.form}>
            <Input placeholder="Your name" />
            {/* TODO disable if no name is entered */}
            <Button to="/app" type="primary">
              Go to the app
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default StartPage;
