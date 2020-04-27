import React from "react";

export default function Search(props) {
  return (
    <div className="search">
      <h2>Search</h2>
      <form>
        <input type="search" placeholder="henry" required />
        <button onClick={props.bookSearch}>Search</button>
      </form>
    </div>
  );
}
