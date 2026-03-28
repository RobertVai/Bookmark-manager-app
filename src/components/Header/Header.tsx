import React from "react";

type headerProps = {
  search: string;
  setSearch: (v: string) => void;
  title: string;
  setTitle: (v: string) => void;
  url: string;
  setUrl: (v: string) => void;
  description: string;
  setDescription: (v: string) => void;
  tagsInput: string;
  setTagsInput: (v: string) => void;
  handleAddBookmark: (e: React.FormEvent) => void;
  setAddProductModal: (value: boolean) => void;
};
const Header = ({
  search,
  setSearch,
  title,
  setTitle,
  url,
  setUrl,
  description,
  setDescription,
  tagsInput,
  setTagsInput,
  handleAddBookmark,
  setAddProductModal,
}: headerProps) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => setAddProductModal(true)}>Add Bookmark</button>
    </div>
  );
};

export default Header;
