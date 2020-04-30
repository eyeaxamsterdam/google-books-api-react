import React from "react";

export default function BookCard(props) {
  return (
    <div className="book">
      <img src={props.image} alt="book image unavailable" />
      <div>
        <h2>{props.title}</h2>
        <h3>{props.authors}</h3>
        <p>{props.publishedDate}</p>
        <a href={props.link} target="_blank">
          Read More
        </a>
      </div>
    </div>
  );
}
