import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import DeleteIcon from "../../icons/DeleteIcon";
import { deleteMail, markRead } from "../../store/slices/mailSlice";
import styles from "./MailItem.module.css";

function MailItem({ mailId }) {
  const navigate = useNavigate();
  const { folder, mailId: mailIdParam } = useParams();
  const dispatch = useDispatch();
  const { subject, content, unread } = useSelector(
    (state) => state.mails.mailEntities[mailId]
  );
  return (
    <li
      className={styles["mail"]}
      data-unread={unread}
      data-active={mailIdParam === mailId}
      onClick={() => {
        dispatch(markRead({ mailId }));
        navigate(`/${folder}/${mailId}`);
      }}
    >
      <span
        className={styles["delete-icon-container"]}
        onClick={() => dispatch(deleteMail({ mailId, folder }))}
      >
        <DeleteIcon />
      </span>
      <p className={styles["mail-subject"]}>
        {subject.slice(0, 35)}
        {subject.length > 35 ? "..." : ""}
      </p>
      <div className={styles["mail-content-date-container"]}>
        <p className={styles["mail-content"]}>
          {content.slice(0, 35)} {content.length > 35 ? "..." : ""}
        </p>
        <p className={styles["mail-date"]}>12:58</p>
      </div>
      <p className={styles["mail-content"]}>
        {content.slice(0, 45)}
        {content.length > 45 ? "..." : ""}
      </p>
    </li>
  );
}

export default MailItem;
