import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import MailItem from "../mail item/MailItem";
import styles from "./Mails.module.css";

function Mails() {
  const { folder } = useParams();
  console.log(folder);

  const mailIds = useSelector((state) => {
    if (folder === "inbox") return state.mails.inboxMailsIds;
    if (folder === "spam") return state.mails.spamMailsIds;
    if (folder === "deleted-items") return state.mails.deletedMailsIds;
  });

  return (
    <ul className={styles["mails"]}>
      {Object.keys(mailIds).map((mailId) => (
        <MailItem mailId={mailId} key={mailId} />
      ))}
    </ul>
  );
}

export default Mails;
