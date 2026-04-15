import { useState, type ReactNode, type FormEvent } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./Layout.module.css";

type LayoutProps = {
  children: ReactNode;
  search: string;
  setSearch: (value: string) => void;
  title: string;
  setTitle: (value: string) => void;
  url: string;
  setUrl: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  tagsInput: string;
  setTagsInput: (value: string) => void;
  handleVisit: (id: number) => void;
  handleAddBookmark: (e: FormEvent) => void;
  allTags: string[];
  selectedTags: string[];
  toggleTag: (tag: string) => void;
  setAddProductModal: (value: boolean) => void;
  theme: "light" | "dark";
  setTheme: (value: "light" | "dark") => void;
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
  handleVisit,
  handleAddBookmark,
  allTags,
  selectedTags,
  toggleTag,
  setAddProductModal,
  theme,
  setTheme,
}: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={styles.pageWrapper}>
      {sidebarOpen && (
        <div
          className={styles.overlay}
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      <div className={styles.sidebarWrapper}>
        <Sidebar
          allTags={allTags}
          selectedTags={selectedTags}
          toggleTag={toggleTag}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
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
          setAddProductModal={setAddProductModal}
          theme={theme}
          setTheme={setTheme}
          setSidebarOpen={setSidebarOpen}
        />

        <main>{children}</main>
      </div>
    </div>
  );
}

export default Layout;
