import React, { useState } from "react";
import ArrowDownIcon from "../../icons/ArrowDownIcon";
import InboxIcon from "../../icons/InboxIcon";
import styles from "./LeftPanel.module.css";

function LeftPanel() {
  const [folders] = useState([
    "Inbox",
    "Spam",
    "Deleted Items",
    "Custom Folder",
  ]);
  const [isFoldersVisible, setIsFolderVisible] = useState(true);

  function toggleFoldersVisibility() {
    setIsFolderVisible((currentVisibility) => !currentVisibility);
  }

  return (
    <div className={styles["left-panel"]}>
      <div className={styles["left-panel-title-container"]}>
        <span
          className={styles["arrow-icon-container"]}
          onClick={toggleFoldersVisibility}
          data-expand={isFoldersVisible}
        >
          <ArrowDownIcon />
        </span>
        <p className={styles["left-panel-title"]}>Folders</p>
      </div>
      <div className={styles["folders-container"]}>
        {isFoldersVisible && (
          <ul className={styles["folders"]}>
            {folders.map((folder) => (
              <li key={folder} className={styles["folder"]}>
                <div className={styles["folder-container"]}>
                  <span className={styles["icon-container"]}>
                    <InboxIcon />
                  </span>
                  <p className={styles["folder-name"]}>{folder}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default LeftPanel;
