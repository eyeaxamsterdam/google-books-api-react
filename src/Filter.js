import React from "react";

export default function Filter(props) {
  return (
    <div className="filter">
      <h2>Print Type: </h2>
      <div className="custom-select">
        <select
          onChange={(e) => props.filter("printType", e.target.value)}
          defaultValue={props.printType}
        >
          <option value="all">All</option>
          <option value="books">Books</option>
          <option value="magazines">Magazines</option>
        </select>
      </div>

      <h2>Book Type: </h2>
      <div className="custom-select">
        <select
          onChange={(e) => props.filter("bookType", e.target.value)}
          defaultValue={props.printType}
        >
          <option value="">All</option>
          <option value="free-ebooks">free e-books</option>
          <option value="paid-ebooks">paid e-books</option>
        </select>
      </div>
    </div>
  );
}
