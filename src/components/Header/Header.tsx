import React from "react";

type headerProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};
const Header = ({ search, setSearch }: headerProps) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Header;
