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
      <Header search={search} setSearch={setSearch} />
      <Main filteredBookmarks={filteredBookmarks} />
      <Sidebar allTags={allTags} />
    </>
  );
}

export default App;
