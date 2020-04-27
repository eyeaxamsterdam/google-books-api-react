import React, { Component } from "react";
import Book from "./Book";

export default class BookList extends Component {
  render() {
    return (
      <div>
        <Book />
        <Book />
      </div>
    );
  }
}
