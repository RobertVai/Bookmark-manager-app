import React from "react";
import visitIcon from "../../assets/images/icon-last-visited.svg";
import copyIcon from "../../assets/images/icon-last-visited.svg";
import unarchiveIcon from "../../assets/images/icon-unarchive.svg";
import deleteIcon from "../../assets/images/icon-last-visited.svg";
import styles from "./BookmarkAdvanced.module.css";

const BookmarkAdvanced = () => {
  return (
    <div className={styles.advancedContainer}>
      <ul>
        <li>Visit</li>
        <li>Copy URL</li>
        <li>Unarchive</li>
        <li>Delete Permanently</li>
      </ul>
    </div>
  );
};

export default BookmarkAdvanced;
