import Main from "../components/Main/Main";
import type { Bookmark } from "../types/bookmark";

type HomeProps = {
  filteredBookmarks: Bookmark[];
  handleVisit: (id: number) => void;
  formatShortDate: (date: string | null) => string;
  deleteBookmark: (id: number) => void;
  handleCopyUrl: (url: string) => void;
};

function Home({ filteredBookmarks, handleVisit, formatShortDate, deleteBookmark,handleCopyUrl }: HomeProps) {
  return (
    <Main
      filteredBookmarks={filteredBookmarks}
      handleVisit={handleVisit}
      formatShortDate={formatShortDate}
      deleteBookmark={deleteBookmark}
      handleCopyUrl={handleCopyUrl}
    />
  );
}

export default Home;
