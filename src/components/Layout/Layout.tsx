import type { ReactNode, FormEvent } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./Layout.module.css";

type LayoutProps = {
  children: ReactNode;

  // search
  search: string;
  setSearch: (value: string) => void;

  // form fields
  title: string;
  setTitle: (value: string) => void;

  url: string;
  setUrl: (value: string) => void;

  description: string;
  setDescription: (value: string) => void;

  tagsInput: string;
  setTagsInput: (value: string) => void;

  handleAddBookmark: (e: FormEvent) => void;

  // tags
  allTags: string[];
  selectedTags: string[];
  toggleTag: (tag: string) => void;
};

function Layout({
  children,
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
  allTags,
  selectedTags,
  toggleTag,
}: LayoutProps) {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.layout}>
        <Sidebar
          allTags={allTags}
          selectedTags={selectedTags}
          toggleTag={toggleTag}
        />
      </div>
      <div className={styles.content}>
        <Header
          search={search}
          setSearch={setSearch}
          title={title}
          setTitle={setTitle}
          url={url}
          setUrl={setUrl}
          description={description}
          setDescription={setDescription}
          tagsInput={tagsInput}
          setTagsInput={setTagsInput}
          handleAddBookmark={handleAddBookmark}
        />

        <main>{children}</main>
      </div>
    </div>
  );
}

export default Layout;
