import React from "react";
import styles from "./Header.module.css";
import profileAvatar from "../../assets/images/image-avatar.webp";
import ProfileDropdown from "../ProfileDropdown/ProfileDropdown";
import { useState } from "react";

type headerProps = {
  search: string;
  setSearch: (v: string) => void;
  title: string;
  setTitle: (v: string) => void;
  url: string;
  setUrl: (v: string) => void;
  description: string;
  setDescription: (v: string) => void;
  tagsInput: string;
  setTagsInput: (v: string) => void;
  handleAddBookmark: (e: React.FormEvent) => void;
  setAddProductModal: (value: boolean) => void;
  theme: "light" | "dark";
  setTheme: (value: "light" | "dark") => void;
  setSidebarOpen: (value: boolean) => void;
};

const Header = ({
  search,
  setSearch,
  title,
  setTitle,
  url,
  setUrl,
  description,
  setDescription,
  tagsInput,
  setTagsInput,
  handleAddBookmark,
  setAddProductModal,
  theme,
  setTheme,
  setSidebarOpen,
}: headerProps) => {
  const [profileDropdown, setProfileDropdown] = useState(false);

  return (
    <div className={styles.topNav}>
      <div className={styles.leftSide}>
        <button
          type="button"
          className={styles.burgerButton}
          onClick={() => setSidebarOpen(true)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="Search by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.topRightNav}>
        <button onClick={() => setAddProductModal(true)}>
          <p className={styles.plus}>+</p>
          Add Bookmark
        </button>

        <img
          className={styles.avatar}
          onClick={() => setProfileDropdown((prev) => !prev)}
          src={profileAvatar}
          alt="Profile Avatar"
        />

        {profileDropdown && (
          <div className={styles.headerDropdown}>
            <ProfileDropdown theme={theme} setTheme={setTheme} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
