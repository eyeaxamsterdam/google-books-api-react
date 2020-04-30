import React from "react";
import BookCard from "./BookCard";

export default function BookList(props) {
  return (
    <div className="List">
      {props.books.map((book, i) => {
        return (
          <BookCard
            key={i}
            image={
              book.volumeInfo.imageLinks === undefined
                ? ""
                : book.volumeInfo.imageLinks.thumbnail
            }
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors}
            publishedDate={new Date(
              book.volumeInfo.publishedDate
            ).getFullYear()}
            link={book.volumeInfo.infoLink}
          />
        );
      })}
    </div>
  );
}
