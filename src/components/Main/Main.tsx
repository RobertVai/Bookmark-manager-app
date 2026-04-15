import { useState } from "react";
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
  deleteBookmark: (id: number) => void;
  handleCopyUrl: (url: string) => void;
  sortBy: string;
  setSortBy: (value: any) => void;
  handleEditBookmark: (bookmark: Bookmark) => void;
  toggleArchiveBookmark: (id: number) => void;
  title: string;
};

const Main = ({
  filteredBookmarks,
  handleVisit,
  formatShortDate,
  deleteBookmark,
  handleCopyUrl,
  sortBy,
  setSortBy,
  handleEditBookmark,
  toggleArchiveBookmark,
  title,
}: mainProps) => {
  const [advanced, setAdvanced] = useState<number | null>(null);
  const [sortMenu, setSortMenu] = useState(false);

  const handleSortMenu = () => {
    setSortMenu(!sortMenu);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainLine}>
        <h3>{title}</h3>
        <div className={styles.sortWrapper}>
          <button onClick={handleSortMenu} className={styles.sort}>
            <img src={sortIcon} alt="" />
            Sort by
          </button>

          {sortMenu && (
            <div className={styles.sortMenu}>
              <button
                className={sortBy === "created" ? styles.activeSort : ""}
                onClick={() => {
                  setSortBy("created");
                  setSortMenu(false);
                }}
              >
                <span>Recently added</span>
                {sortBy === "created" && <span>✓</span>}
              </button>

              <button
                className={sortBy === "visited" ? styles.activeSort : ""}
                onClick={() => {
                  setSortBy("visited");
                  setSortMenu(false);
                }}
              >
                <span>Recently visited</span>
                {sortBy === "visited" && <span>✓</span>}
              </button>

              <button
                className={sortBy === "views" ? styles.activeSort : ""}
                onClick={() => {
                  setSortBy("views");
                  setSortMenu(false);
                }}
              >
                <span>Most visited</span>
                {sortBy === "views" && <span>✓</span>}
              </button>
            </div>
          )}
        </div>
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

            {advanced === b.id && (
              <BookmarkAdvanced
                handleVisit={handleVisit}
                b={b}
                deleteBookmark={deleteBookmark}
                handleCopyUrl={handleCopyUrl}
                handleEditBookmark={handleEditBookmark}
                toggleArchiveBookmark={toggleArchiveBookmark}
              />
            )}

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
