import React from "react";
import visitIcon from "../../assets/images/icon-last-visited.svg";
import copyIcon from "../../assets/images/icon-last-visited.svg";
import unarchiveIcon from "../../assets/images/icon-unarchive.svg";
import deleteIcon from "../../assets/images/icon-last-visited.svg";
import styles from "./BookmarkAdvanced.module.css";
import type { Bookmark } from "../../types/bookmark";

type BookmarkAdvancedProps = {
  handleVisit: (id: number) => void;
  b: Bookmark;
  deleteBookmark: (id: number) => void;
  handleCopyUrl: (url: string) => void;
};
const BookmarkAdvanced = ({
  handleVisit,
  b,
  deleteBookmark,
  handleCopyUrl,
}: BookmarkAdvancedProps) => {
  return (
    <div className={styles.advancedContainer}>
      <ul>
        <li onClick={() => handleVisit(b.id)}>
          <a href={b.url} target="_blank" rel="noopener noreferrer">
            Visit
          </a>
        </li>
        <li>Edit</li>
        <li onClick={() => handleCopyUrl(b.url)}>Copy URL</li>

        <li>Unarchive</li>
        <li onClick={() => deleteBookmark(b.id)}>Delete Permanently</li>
      </ul>
    </div>
  );
};

export default BookmarkAdvanced;
