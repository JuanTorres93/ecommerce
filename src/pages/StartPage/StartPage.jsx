import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { createuser } from "../../features/user/userSlice";

import Button from "../../ui/Button/Button";
import Input from "../../ui/Input/Input";
import styles from "./StartPage.module.scss";

function StartPage() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleCreateUser(event) {
    event.preventDefault();
    dispatch(createuser(username));
    setUsername("");

    navigate("/app");
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.StartPage}>
        <div className={styles.box}>
          <h3>What's your name?</h3>
          <form className={styles.form}>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Your name"
            />

            <Button
              onClick={handleCreateUser}
              type="primary"
              disabled={!username}
            >
              Go to the app
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default StartPage;
