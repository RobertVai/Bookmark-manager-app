import React from "react";
import { bookmarksData } from "../../data/data";
import type { Bookmark } from "../../types/bookmark";
import styles from "./Main.module.css";
import sortIcon from "../../assets/images/icon-sort.svg";
import editIcon from "../../assets/images/icon-menu-bookmark.svg";

type mainProps = {
  filteredBookmarks: Bookmark[];
};
const Main = ({ filteredBookmarks }: mainProps) => {
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
                  >
                    {b.url}
                  </a>
                </div>
              </div>

              <button className={styles.editIcon}>
                <img src={editIcon} alt="" />
              </button>
            </div>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
