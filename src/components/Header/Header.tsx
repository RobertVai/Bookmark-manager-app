import React from "react";
import styles from "./Header.module.css";
import profileAvatar from "../../assets/images/image-avatar.webp";
import searchIcon from "../../assets/images/icon-search.svg";

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
}: headerProps) => {
  return (
    <div className={styles.topNav}>
      <div>
        <input
          type="text"
          placeholder="🔍︎Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className={styles.topRightNav}>
        <button onClick={() => setAddProductModal(true)}>
          <p className={styles.plus}>+</p>
          Add Bookmark
        </button>
        <img src={profileAvatar} alt="" />
      </div>
    </div>
  );
};

export default Header;
