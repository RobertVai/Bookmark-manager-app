import Main from "../components/Main/Main";
import type { Bookmark } from "../types/bookmark";

type ArchivedProps = {
  filteredBookmarks: Bookmark[];
  toggleArchiveBookmark: (id: number) => void;
  handleVisit: (id: number) => void;
  formatShortDate: (date: string | null) => string;
  deleteBookmark: (id: number) => void;
  handleCopyUrl: (url: string) => void;
  sortBy: string;
  setSortBy: (value: any) => void;
  handleEditBookmark: (bookmark: Bookmark) => void;
};

function Archived({
  filteredBookmarks,
  toggleArchiveBookmark,
  handleVisit,
  formatShortDate,
  deleteBookmark,
  handleCopyUrl,
  sortBy,
  setSortBy,
  handleEditBookmark,
}: ArchivedProps) {
  return (
    <Main
      filteredBookmarks={filteredBookmarks}
      toggleArchiveBookmark={toggleArchiveBookmark}
      handleVisit={handleVisit}
      formatShortDate={formatShortDate}
      deleteBookmark={deleteBookmark}
      handleCopyUrl={handleCopyUrl}
      sortBy={sortBy}
      setSortBy={setSortBy}
      handleEditBookmark={handleEditBookmark}
      title="Archived bookmarks"
    />
  );
}

export default Archived;
