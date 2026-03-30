import React from "react";
import type { Bookmark } from "../../types/bookmark";
import styles from "./Sidebar.module.css";
import mainLogoLight from "../../assets/images/logo-light-theme.svg";
import iconHome from "../../assets/images/icon-home.svg";
import iconArchive from "../../assets/images/icon-archive.svg";

type SideBarProps = {
  allTags: string[];
  toggleTag: (tag: string) => void;
  selectedTags: string[];
};
const Sidebar = ({ allTags, toggleTag, selectedTags }: SideBarProps) => {
  return (
    <aside>
      <div className={styles.mainLogo}>
        <img src={mainLogoLight} alt="" />
      </div>
      <div className={styles.pageNavContainer}>
        <div className={styles.pageNav}>
          <img src={iconHome} alt="" />
          <p>Home</p>
        </div>
        <div className={styles.pageNav}>
          <img src={iconArchive} alt="" />
          <p>Archived</p>
        </div>
      </div>

      <div className={styles.tagsColumn}>
        <p className={styles.tagsTitle}>TAGS</p>
        {allTags.map((tag) => (
          <div className={styles.tagline} key={tag}>
            <input
              type="checkbox"
              checked={selectedTags.includes(tag)}
              onChange={() => toggleTag(tag)}
            />
            <p className={styles.tag}>{tag}</p>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
