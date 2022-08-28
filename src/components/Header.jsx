import React from "react";

const Header = ({handleSubmit, setSearchTerm}) => {
  return (
    <div>
      <form
        className="search d-flex justify-content-center mt-3 gap-1"
        onSubmit={handleSubmit}
      >
        <input
          type="search"
          className="fs-4 px-2 rounded-2 searchMovie"
          placeholder="Search a movie..."
          autoFocus
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="btn bg-info">
          Search
        </button>
      </form>
    </div>
  );
};

export default Header;
