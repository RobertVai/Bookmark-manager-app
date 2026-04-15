import React from "react";
import styles from "./Sidebar.module.css";
import mainLogoLight from "../../assets/images/logo-light-theme.svg";
import iconHome from "../../assets/images/icon-home.svg";
import iconArchive from "../../assets/images/icon-archive.svg";
import { NavLink } from "react-router-dom";

type SideBarProps = {
  allTags: string[];
  toggleTag: (tag: string) => void;
  selectedTags: string[];
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
};

const Sidebar = ({
  allTags,
  toggleTag,
  selectedTags,
  sidebarOpen,
  setSidebarOpen,
}: SideBarProps) => {
  return (
    <aside className={`${styles.sidebar} ${sidebarOpen ? styles.open : ""}`}>
      <div className={styles.mobileHeader}>
        <div className={styles.mainLogo}>
          <img src={mainLogoLight} alt="" />
        </div>

        <button
          type="button"
          className={styles.closeButton}
          onClick={() => setSidebarOpen(false)}
        >
          ×
        </button>
      </div>

      <div className={styles.desktopLogo}>
        <div className={styles.mainLogo}>
          <img src={mainLogoLight} alt="" />
        </div>
      </div>

      <div className={styles.pageNavContainer}>
        <NavLink
          to="/"
          className={styles.pageNav}
          onClick={() => setSidebarOpen(false)}
        >
          <img className={styles.navIcon} src={iconHome} alt="" />
          <p>Home</p>
        </NavLink>

        <NavLink
          to="/archived"
          className={styles.pageNav}
          onClick={() => setSidebarOpen(false)}
        >
          <img className={styles.navIcon} src={iconArchive} alt="" />
          <p>Archived</p>
        </NavLink>
      </div>

      <div className={styles.tagsColumn}>
        <p className={styles.tagsTitle}>TAGS</p>
        {allTags.map((tag) => (
          <div className={styles.tagline} key={tag}>
            <input
              className={styles.checkbox}
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
