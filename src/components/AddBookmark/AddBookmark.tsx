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
}: AddBookmarkProps) => {
  return (
    <div className={styles.bookmarkContainer}>
      <div className={styles.bookmarkContent}>
        <h3>Add a Bookmark</h3>
        <p>Save a link with details to keep your collection organized</p>
        <form onSubmit={handleAddBookmark}>
          <p>Title*</p>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <p>Description*</p>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <p>Website URL*</p>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <p>Tags*</p>
          <input
            type="text"
            value={tagsInput}
            onChange={(e) => setTagsInput(e.target.value)}
          />
          <div>
            <button onClick={() => onClose}>Cancel</button>
            <button type="submit">Add Bookmark</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBookmark;
