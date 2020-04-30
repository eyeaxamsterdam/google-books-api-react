import React from "react";
import Filter from "./Filter";
import Header from "./Header";
import Search from "./Search";
import BookList from "./BookList";
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      printType: "",
      bookType: "",
      searchBox: "",
    };
  }

  bookSearch = (e) => {
    e.preventDefault();
    const searchBox = e.target.previousSibling.value;
    const apiKey = "&key=AIzaSyDilmuIYT9dvyT6absEnpcpKd1IpcxJBrU";
    // build that url to include the query
    // build the url to include the filters
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchBox}&${apiKey}`;

    fetch(url + apiKey)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ books: [...data.items] });
        this.state.books.map((i) => console.log(i));
      });
  };

  // method to update the filters
  // method per filter, or 1 method that can be provided
  // a filter key and value
  // ('printType','ebook')

  render() {
    return (
      <div className="App">
        <Header />
        <Search bookSearch={this.bookSearch} />
        <Filter />
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default App;
