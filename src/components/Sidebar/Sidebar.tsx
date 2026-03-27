import React from "react";
import type { Bookmark } from "../../types/bookmark";
import styles from "./Sidebar.module.css";

type SideBarProps = {
  allTags: string[];
  toggleTag: (tag: string) => void;
  selectedTags: string[];
};
const Sidebar = ({ allTags, toggleTag, selectedTags }: SideBarProps) => {
  return (
    <aside>
      {allTags.map((tag) => (
        <div className={styles.tagline} key={tag}>
          <p>{tag}</p>
          <input
            type="checkbox"
            checked={selectedTags.includes(tag)}
            onChange={() => toggleTag(tag)}
          />
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
