import Main from "../components/Main/Main";
import type { Bookmark } from "../types/bookmark";

type HomeProps = {
  filteredBookmarks: Bookmark[];
};

function Home({ filteredBookmarks }: HomeProps) {
  return <Main filteredBookmarks={filteredBookmarks} />;
}

export default Home;
