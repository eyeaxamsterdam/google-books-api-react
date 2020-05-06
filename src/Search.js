import React from "react";

export default function Search(props) {
  return (
    <div className="search">
      <h2>Search</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.bookSearch();
        }}
      >
        <input
          type="search"
          placeholder="On the Road"
          required
          name="search"
          onChange={(e) => props.updateQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
