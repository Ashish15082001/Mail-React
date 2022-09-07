import React from "react";
import { inbox } from "../../1_inbox ";
import styles from "./Mails.module.css";

function Mails() {
  return (
    <ul className={styles["mails"]}>
      {inbox.map((mail) => (
        <li key={mail.mId} className={styles["mail"]} data-unread={mail.unread}>
          <p className={styles["mail-subject"]}>{mail.subject}</p>
          <div className={styles["mail-content-date-container"]}>
            <p className={styles["mail-content"]}>
              {mail.content.slice(0, 30)}
            </p>
            <p className={styles["mail-date"]}>12:58</p>
          </div>
          <p className={styles["mail-content"]}>
            {" "}
            {mail.content.slice(0, 50)}...
          </p>
        </li>
      ))}
    </ul>
  );
}

export default Mails;
