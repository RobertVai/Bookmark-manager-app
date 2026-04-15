import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { bookmarksData } from "./data/data";
import type { Bookmark } from "./types/bookmark";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Archived from "./pages/Archived";
import AddBookmark from "./components/AddBookmark/AddBookmark";
import Toast from "./components/Toast/Toast";

function App() {
  const [search, setSearch] = useState("");
  const [bookmarks, setBookmarks] = useState<Bookmark[]>(bookmarksData);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [tagsInput, setTagsInput] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [addProductModal, setAddProductModal] = useState(false);
  const [sortBy, setSortBy] = useState<"created" | "visited" | "views">(
    "visited",
  );
  const [editBookmarkId, setEditBookmarkId] = useState<number | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = (message: string) => {
    setToastMessage(message);
    setToastVisible(true);

    setTimeout(() => {
      setToastVisible(false);
    }, 2500);
  };

  const handleEditBookmark = (bookmark: Bookmark) => {
    setTitle(bookmark.title);
    setDescription(bookmark.description);
    setUrl(bookmark.url);
    setTagsInput(bookmark.tags.join(", "));
    setEditBookmarkId(bookmark.id);
    setAddProductModal(true);
  };

  const handleAddBookmark = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !url.trim()) {
      return;
    }

    if (editBookmarkId !== null) {
      setBookmarks((prev) =>
        prev.map((bookmark) =>
          bookmark.id === editBookmarkId
            ? {
                ...bookmark,
                title,
                url,
                description,
                tags: tagsInput
                  .split(",")
                  .map((t) => t.trim())
                  .filter(Boolean),
              }
            : bookmark,
        ),
      );

      showToast("Changes saved.");
    } else {
      const newBookmark: Bookmark = {
        id: Date.now(),
        title,
        description,
        url,
        tags: tagsInput
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),
        visitCount: 0,
        createdAt: new Date().toISOString(),
        lastVisited: null,
        isArchived: false,
      };

      setBookmarks((prev) => [...prev, newBookmark]);
      showToast("Bookmark added successfully.");
    }

    setTitle("");
    setDescription("");
    setUrl("");
    setTagsInput("");
    setAddProductModal(false);
    setEditBookmarkId(null);
  };

  const activeBookmarks = bookmarks.filter((b) => !b.isArchived);
  const archivedBookmarks = bookmarks.filter((b) => b.isArchived);

  const filteredBookmarks = activeBookmarks.filter((bookmark) => {
    const matchesSearch = bookmark.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.some((tag) => bookmark.tags.includes(tag));

    return matchesSearch && matchesTags;
  });

  const filteredArchivedBookmarks = archivedBookmarks.filter((bookmark) => {
    const matchesSearch = bookmark.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.some((tag) => bookmark.tags.includes(tag));

    return matchesSearch && matchesTags;
  });

  const sortBookmarks = (items: Bookmark[]) => {
    return [...items].sort((a, b) => {
      if (sortBy === "visited") {
        const aTime = a.lastVisited ? new Date(a.lastVisited).getTime() : 0;
        const bTime = b.lastVisited ? new Date(b.lastVisited).getTime() : 0;
        return bTime - aTime;
      }

      if (sortBy === "created") {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      }

      if (sortBy === "views") {
        return b.visitCount - a.visitCount;
      }

      return 0;
    });
  };

  const sortedBookmarks = sortBookmarks(filteredBookmarks);
  const sortedArchivedBookmarks = sortBookmarks(filteredArchivedBookmarks);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const deleteBookmark = (id: number) => {
    setBookmarks((prev) => prev.filter((b) => b.id !== id));
    showToast("Bookmark deleted.");
  };

  const toggleArchiveBookmark = (id: number) => {
    const target = bookmarks.find((b) => b.id === id);

    setBookmarks((prev) =>
      prev.map((b) => (b.id === id ? { ...b, isArchived: !b.isArchived } : b)),
    );

    if (target?.isArchived) {
      showToast("Bookmark restored.");
    } else {
      showToast("Bookmark archived.");
    }
  };

  const handleVisit = (id: number) => {
    setBookmarks((prev) =>
      prev.map((b) =>
        b.id === id
          ? {
              ...b,
              visitCount: b.visitCount + 1,
              lastVisited: new Date().toISOString(),
            }
          : b,
      ),
    );
  };

  const handleCopyUrl = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      showToast("Link copied to clipboard.");
    } catch (error) {
      showToast("Error copying link.");
    }
  };

  const onClose = () => {
    setAddProductModal(false);
    setTitle("");
    setDescription("");
    setUrl("");
    setTagsInput("");
    setEditBookmarkId(null);
  };

  const formatShortDate = (date: string | null) => {
    if (!date) return "Never";

    return new Date(date).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
    });
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
    <div className={theme === "light" ? "light" : "dark"}>
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
          setAddProductModal={setAddProductModal}
          handleVisit={handleVisit}
          theme={theme}
          setTheme={setTheme}
        >
          {addProductModal && (
            <AddBookmark
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
              onClose={onClose}
              editBookmarkId={editBookmarkId}
            />
          )}

          <Toast
            toastMessage={toastMessage}
            toastVisible={toastVisible}
            setToastVisible={setToastVisible}
          />

          <Routes>
            <Route
              path="/"
              element={
                <Home
                  filteredBookmarks={sortedBookmarks}
                  handleVisit={handleVisit}
                  formatShortDate={formatShortDate}
                  deleteBookmark={deleteBookmark}
                  handleCopyUrl={handleCopyUrl}
                  sortBy={sortBy}
                  setSortBy={setSortBy}
                  handleEditBookmark={handleEditBookmark}
                  toggleArchiveBookmark={toggleArchiveBookmark}
                />
              }
            />
            <Route
              path="/archived"
              element={
                <Archived
                  filteredBookmarks={sortedArchivedBookmarks}
                  toggleArchiveBookmark={toggleArchiveBookmark}
                  handleVisit={handleVisit}
                  formatShortDate={formatShortDate}
                  deleteBookmark={deleteBookmark}
                  handleCopyUrl={handleCopyUrl}
                  sortBy={sortBy}
                  setSortBy={setSortBy}
                  handleEditBookmark={handleEditBookmark}
                />
              }
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
