import Main from "../components/Main/Main";
import type { Bookmark } from "../types/bookmark";

type ArchivedProps = {
  filteredBookmarks: Bookmark[];
  handleVisit: (id: number) => void;
};

function Archived({ filteredBookmarks }: ArchivedProps) {
  return (
    <div></div>
  );
}

export default Archived;
