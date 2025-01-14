import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import ArrowDownIcon from "../../icons/ArrowDownIcon";
import DeleteIcon from "../../icons/DeleteIcon";
import FolderIcon from "../../icons/FolderIcon";
import InboxIcon from "../../icons/InboxIcon";
import SearchIcon from "../../icons/SearchIcon";
import SpamIcon from "../../icons/SpamIcon";
import styles from "./LeftPanel.module.css";

function LeftPanel() {
  const { folder } = useParams();
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
              data-active={folder === "inbox"}
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
              data-active={folder === "spam"}
            >
              <div className={styles["folder-container"]}>
                <span className={styles["icon-container"]}>
                  <SpamIcon />
                </span>
                <p className={styles["folder-name"]}>Spam</p>
              </div>
            </li>
            <li
              className={styles["folder"]}
              onClick={() => navigate("/deleted-items")}
              data-active={folder === "deleted-items"}
            >
              <div className={styles["folder-container"]}>
                <span className={styles["icon-container"]}>
                  <DeleteIcon />
                </span>
                <p className={styles["folder-name"]}>Deleted Items</p>
              </div>
            </li>
            <li
              className={styles["folder"]}
              // onClick={() => navigate("/custom-folder")}
              // data-active={folder === "custom-folder"}
            >
              <div className={styles["folder-container"]}>
                <span className={styles["icon-container"]}>
                  <FolderIcon />
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
