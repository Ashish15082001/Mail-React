import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import styles from "./RightPanel.module.css";

function RightPanel() {
  const { mailId } = useParams();
  const mailData = useSelector((state) => state.mails.mailEntities[mailId]);

  console.log(mailId);

  return (
    <div className={styles["right-panel"]}>
      {mailId && (
        <>
          <p className={styles["mail-subject"]}>{mailData.subject}</p>
          <p className={styles["mail-content"]}>{mailData.content}</p>
        </>
      )}
    </div>
  );
}

export default RightPanel;
