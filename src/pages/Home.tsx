import Main from "../components/Main/Main";
import type { Bookmark } from "../types/bookmark";

type HomeProps = {
  filteredBookmarks: Bookmark[];
  handleVisit: (id: number) => void;
  formatShortDate: (date: string | null) => string;
};

function Home({ filteredBookmarks, handleVisit, formatShortDate }: HomeProps) {
  return (
    <Main
      filteredBookmarks={filteredBookmarks}
      handleVisit={handleVisit}
      formatShortDate={formatShortDate}
    />
  );
}

export default Home;
