import React from "react";
import { bookmarksData } from "../../data/data";
import type { Bookmark } from "../../types/bookmark";

type mainProps = {
  filteredBookmarks: Bookmark[];
};
const Main = ({ filteredBookmarks }: mainProps) => {
  return (
    <div>
      {filteredBookmarks.map((b) => (
        <div key={b.id}>
          <p>{b.title}</p>
          <p>{b.url}</p>
          <p>{b.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Main;
