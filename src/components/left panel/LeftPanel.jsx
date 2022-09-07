import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import ArrowDownIcon from "../../icons/ArrowDownIcon";
import InboxIcon from "../../icons/InboxIcon";
import SearchIcon from "../../icons/SearchIcon";
import styles from "./LeftPanel.module.css";

function LeftPanel() {
  const { pathname } = useLocation();
  const [isFoldersVisible, setIsFolderVisible] = useState(true);
  const navigate = useNavigate();

  function toggleFoldersVisibility() {
    setIsFolderVisible((currentVisibility) => !currentVisibility);
  }

  return (
    <div className={styles["left-panel"]}>
      <div className={styles["search-bar"]}>
        <input placeholder="Search Mail and People" />
        <span>
          <SearchIcon />
        </span>
      </div>

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
            <li
              className={styles["folder"]}
              onClick={() => navigate("/inbox")}
              data-active={pathname === "/inbox"}
            >
              <div className={styles["folder-container"]}>
                <span className={styles["icon-container"]}>
                  <InboxIcon />
                </span>
                <p className={styles["folder-name"]}>Inbox</p>
              </div>
            </li>
            <li
              className={styles["folder"]}
              onClick={() => navigate("/spam")}
              data-active={pathname === "/spam"}
            >
              <div className={styles["folder-container"]}>
                <span className={styles["icon-container"]}>
                  <InboxIcon />
                </span>
                <p className={styles["folder-name"]}>Spam</p>
              </div>
            </li>
            <li
              className={styles["folder"]}
              onClick={() => navigate("/deleted-items")}
              data-active={pathname === "/inbox"}
            >
              <div className={styles["folder-container"]}>
                <span className={styles["icon-container"]}>
                  <InboxIcon />
                </span>
                <p className={styles["folder-name"]}>Deleted Items</p>
              </div>
            </li>
            <li className={styles["folder"]}>
              <div className={styles["folder-container"]}>
                <span className={styles["icon-container"]}>
                  <InboxIcon />
                </span>
                <p className={styles["folder-name"]}>Custom Folder</p>
              </div>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default LeftPanel;
