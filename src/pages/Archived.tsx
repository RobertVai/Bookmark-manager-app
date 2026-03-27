import Main from "../components/Main/Main";
import type { Bookmark } from "../types/bookmark";

type ArchivedProps = {
  filteredBookmarks: Bookmark[];
};

function Archived({ filteredBookmarks }: ArchivedProps) {
  return <Main filteredBookmarks={filteredBookmarks} />;
}

export default Archived;
