import Main from "../components/Main/Main";
import type { Bookmark } from "../types/bookmark";

type HomeProps = {
  filteredBookmarks: Bookmark[];
  handleVisit: (id: number) => void;
  formatShortDate: (date: string | null) => string;
  deleteBookmark: (id: number) => void;
  handleCopyUrl: (url: string) => void;
  sortBy: string;
  setSortBy: (value: any) => void;
  handleEditBookmark: (bookmark: Bookmark) => void;
  toggleArchiveBookmark: (id: number) => void;
};

function Home({
  filteredBookmarks,
  toggleArchiveBookmark,
  handleVisit,
  formatShortDate,
  deleteBookmark,
  handleCopyUrl,
  sortBy,
  setSortBy,
  handleEditBookmark
}: HomeProps) {
  return (
    <Main
      filteredBookmarks={filteredBookmarks}
      handleVisit={handleVisit}
      formatShortDate={formatShortDate}
      deleteBookmark={deleteBookmark}
      handleCopyUrl={handleCopyUrl}
      sortBy={sortBy}
      setSortBy={setSortBy}
      handleEditBookmark={handleEditBookmark}
      toggleArchiveBookmark={toggleArchiveBookmark}
    />
  );
}

export default Home;
