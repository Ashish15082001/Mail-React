import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { markRead } from "../../store/slices/mailSlice";
import styles from "./MailItem.module.css";

function MailItem({ mailId }) {
  const dispatch = useDispatch();
  const { subject, content, unread } = useSelector(
    (state) => state.mails.mailEntities[mailId]
  );
  return (
    <li
      className={styles["mail"]}
      data-unread={unread}
      onClick={() => dispatch(markRead({ mailId }))}
    >
      <p className={styles["mail-subject"]}>{subject}</p>
      <div className={styles["mail-content-date-container"]}>
        <p className={styles["mail-content"]}>{content.slice(0, 30)}</p>
        <p className={styles["mail-date"]}>12:58</p>
      </div>
      <p className={styles["mail-content"]}> {content.slice(0, 50)}...</p>
    </li>
  );
}

export default MailItem;
