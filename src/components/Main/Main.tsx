import React from "react";
import { useState } from "react";
import { bookmarksData } from "../../data/data";
import type { Bookmark } from "../../types/bookmark";
import styles from "./Main.module.css";
import sortIcon from "../../assets/images/icon-sort.svg";
import editIcon from "../../assets/images/icon-menu-bookmark.svg";
import visitIcon from "../../assets/images/icon-visit-count.svg";
import createdIcon from "../../assets/images/icon-created.svg";
import lastVisitedIcon from "../../assets/images/icon-last-visited.svg";
import BookmarkAdvanced from "../BookmarkAdvanced/BookmarkAdvanced";

type mainProps = {
  filteredBookmarks: Bookmark[];
  handleVisit: (id: number) => void;
  formatShortDate: (date: string | null) => string;
};
const Main = ({
  filteredBookmarks,
  handleVisit,
  formatShortDate,
}: mainProps) => {
  const [advanced, setAdvanced] = useState<number | null>(null);
  return (
    <div>
      <div className={styles.mainLine}>
        <h3>All bookmarks</h3>
        <button className={styles.sort}>
          <img src={sortIcon} alt="" />
          Sort by
        </button>
      </div>
      <div className={styles.cards}>
        {filteredBookmarks.map((b) => (
          <div className={styles.card} key={b.id}>
            <div className={styles.cardTop}>
              <div className={styles.titleContainer}>
                <div className={styles.faviconContainer}>
                  <img src={b.favicon} alt="" />
                </div>

                <div>
                  <h4>{b.title}</h4>
                  <a
                    className={styles.url}
                    href={b.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleVisit(b.id)}
                  >
                    {b.url}
                  </a>
                </div>
              </div>

              <button
                onClick={() => setAdvanced(advanced === b.id ? null : b.id)}
                className={styles.editIcon}
              >
                <img src={editIcon} alt="" />
              </button>
            </div>
            {advanced === b.id && <BookmarkAdvanced />}
            <div className={styles.description}>
              <p>{b.description}</p>
            </div>
            <div className={styles.tags}>
              {b.tags.map((tag) => (
                <div key={tag} className={styles.tag}>
                  {tag}
                </div>
              ))}
            </div>
            <div className={styles.cardFooter}>
              <div className={styles.dateElement}>
                <img src={visitIcon} alt="" />
                <p>{b.visitCount}</p>
              </div>
              <div className={styles.dateElement}>
                <img src={createdIcon} alt="" />
                <p>{formatShortDate(b.createdAt)}</p>
              </div>
              <div className={styles.dateElement}>
                <img src={lastVisitedIcon} alt="" />
                <p>{formatShortDate(b.lastVisited)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
