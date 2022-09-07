import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import MailItem from "../mail item/MailItem";
import styles from "./Mails.module.css";

function Mails() {
  const { pathname } = useLocation();
  const mailIds = useSelector((state) => {
    if (pathname === "/inbox") return state.mails.inboxMailsIds;
    if (pathname === "/spam") return state.mails.spamMailsIds;
    if (pathname === "/deleted-items") return state.mails.deletedMailsIds;
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
