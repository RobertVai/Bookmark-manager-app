import React from "react";
import styles from "./BookmarkAdvanced.module.css";
import type { Bookmark } from "../../types/bookmark";

type BookmarkAdvancedProps = {
  handleVisit: (id: number) => void;
  b: Bookmark;
  deleteBookmark: (id: number) => void;
  handleCopyUrl: (url: string) => void;
  handleEditBookmark: (bookmark: Bookmark) => void;
  toggleArchiveBookmark: (id: number) => void;
};

const BookmarkAdvanced = ({
  handleVisit,
  b,
  deleteBookmark,
  handleCopyUrl,
  handleEditBookmark,
  toggleArchiveBookmark,
}: BookmarkAdvancedProps) => {
  return (
    <div className={styles.advancedContainer}>
      <ul className={styles.menuList}>
        <li onClick={() => handleVisit(b.id)}>
          <a href={b.url} target="_blank" rel="noopener noreferrer">
            <span className={styles.icon}>↗</span>
            Visit
          </a>
        </li>

        <li onClick={() => handleEditBookmark(b)}>
          <span className={styles.icon}>✎</span>
          Edit
        </li>

        <li onClick={() => handleCopyUrl(b.url)}>
          <span className={styles.icon}>⧉</span>
          Copy URL
        </li>

        <li onClick={() => toggleArchiveBookmark(b.id)}>
          <span className={styles.icon}>↺</span>
          {b.isArchived ? "Unarchive" : "Archive"}
        </li>

        <li onClick={() => deleteBookmark(b.id)}>
          <span className={styles.icon}>🗑</span>
          Delete Permanently
        </li>
      </ul>
    </div>
  );
};

export default BookmarkAdvanced;
