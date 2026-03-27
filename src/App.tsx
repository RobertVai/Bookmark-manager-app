import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { bookmarksData } from "./data/data";
import type { Bookmark } from "./types/bookmark";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Archived from "./pages/Archived";

function App() {
  const [search, setSearch] = useState("");
  const [bookmarks, setBookmarks] = useState<Bookmark[]>(bookmarksData);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [tagsInput, setTagsInput] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

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

    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.some((tag) => bookmark.tags.includes(tag));

    return matchesSearch && matchesTags;
  });

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const allTags: string[] = [];
  for (const bookmark of bookmarks) {
    for (const tag of bookmark.tags) {
      if (!allTags.includes(tag)) {
        allTags.push(tag);
      }
    }
  }

  return (
    <BrowserRouter>
      <Layout
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
        allTags={allTags}
        selectedTags={selectedTags}
        toggleTag={toggleTag}
      >
        <Routes>
          <Route
            path="/"
            element={<Home filteredBookmarks={filteredBookmarks} />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
