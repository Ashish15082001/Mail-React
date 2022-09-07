import React from "react";
import AddItemIcon from "../../icons/AddItemIcon";
import ArrowDownIcon from "../../icons/ArrowDownIcon";
import MailIcon from "../../icons/MailIcon";
import Mails from "../mails/Mails";
import styles from "./MidPanel.module.css";

function MidPanel() {
  return (
    <div className={styles["mid-panel"]}>
      <div className={styles["mid-panel-head"]}>
        <div className={styles["add-item-container"]}>
          <span>
            <AddItemIcon />
          </span>
          <p>New</p>
          <span>
            <ArrowDownIcon />
          </span>
        </div>
        <div className={styles["mark-all-container"]}>
          <span>
            <MailIcon />
          </span>
          <p>Mark all as read</p>
        </div>
      </div>
      <div className={styles["tab-filter-container"]}>
        <div className={styles["tab-container"]}>
          <p className={styles["tab"]} data-active={true}>
            Focused
          </p>
          <p className={styles["tab"]}>Other</p>
        </div>
        <div className={styles["filter-container"]}>
          <p>Filter</p>
          <span>
            <ArrowDownIcon />
          </span>
        </div>
      </div>
      <Mails />
    </div>
  );
}

export default MidPanel;
