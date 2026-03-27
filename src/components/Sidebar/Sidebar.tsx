import React from "react";
import type { Bookmark } from "../../types/bookmark";
import styles from "./Sidebar.module.css";

type SideBarProps = {
  allTags: string[];
};
const Sidebar = ({ allTags }: SideBarProps) => {
  return (
    <aside>
      {allTags.map((tag) => (
        <div className={styles.tagline} key={tag}>
          <p>{tag}</p>
          <input type="checkbox" />
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
