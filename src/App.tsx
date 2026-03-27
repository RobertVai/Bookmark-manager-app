import "./App.css";
import { useState, type FormEvent } from "react";
import { bookmarksData } from "./data/data";
import type { Bookmark } from "./types/bookmark";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [search, setSearch] = useState("");
  const [bookmarks, setBookmarks] = useState<Bookmark[]>(bookmarksData);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [tagsInput, setTagsInput] = useState("");

  const handleAddBookmark = (e: React.FormEvent) => {
    e.preventDefault();

    const newBookmark: Bookmark = {
      id: Math.random(),
      title,
      description,
      url,
      tags: tagsInput.split(","),
    };

    setBookmarks((prev) => [...prev, newBookmark]);
    setTitle("");
    setDescription("");
    setUrl("");
    setTagsInput("");
  };

  const filteredBookmarks = bookmarks.filter((bookmark) => {
    const matchesSearch = bookmark.title
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesSearch;
  });

  const allTags: string[] = [];
  for (const bookmark of bookmarks) {
    for (const tag of bookmark.tags) {
      if (!allTags.includes(tag)) {
        allTags.push(tag);
      }
    }
  }
  return (
    <>
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
      <Main filteredBookmarks={filteredBookmarks} />
      <Sidebar allTags={allTags} />
    </>
  );
}

export default App;
