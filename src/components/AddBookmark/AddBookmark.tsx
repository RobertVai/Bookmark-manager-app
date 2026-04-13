import React from "react";
import styles from "./AddBookmark.module.css";

type AddBookmarkProps = {
  title: string;
  setTitle: (value: string) => void;
  url: string;
  setUrl: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  tagsInput: string;
  setTagsInput: (value: string) => void;
  handleAddBookmark: (e: React.FormEvent) => void;
  onClose: () => void;
  setAddProductModal: (value: boolean) => void;
  editBookmarkId: number | null;
};
const AddBookmark = ({
  title,
  setTitle,
  url,
  setUrl,
  description,
  setDescription,
  tagsInput,
  setTagsInput,
  handleAddBookmark,
  onClose,
  setAddProductModal,
  editBookmarkId,
}: AddBookmarkProps) => {
  return (
    <div className={styles.bookmarkContainer}>
      <div className={styles.bookmarkContent}>
        <h3>{editBookmarkId !== null ? "Edit Bookmark" : "Add a Bookmark"}</h3>
        <p className={styles.faviconInfo}>
          Save a link with details to keep your collection organized. We extract
          the favicon automatically from the URL.
        </p>
        <form onSubmit={handleAddBookmark}>
          <div className={styles.bookmarkRow}>
            <p>Title*</p>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className={styles.bookmarkRow}>
            <p>Description*</p>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className={styles.bookmarkRow}>
            <p>Website URL*</p>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>

          <div className={styles.bookmarkRow}>
            <p>Tags*</p>
            <input
              type="text"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
            />
          </div>

          <div className={styles.bookmarkFooter}>
            <button className={styles.cancelBtn} onClick={onClose}>
              Cancel
            </button>
            <button type="submit">
              {editBookmarkId !== null ? "Save Changes" : "Add Bookmark"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBookmark;
