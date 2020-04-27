import React from "react";
import BookList from "./BookList";
import Filter from "./Filter";
import Header from "./Header";
import Search from "./Search";
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      printType: "",
      bookType: "",
    };
  }

  bookSearch = (e) => {
    e.preventDefault();
    const searchBox = e.target.previousSibling.value;
    console.log(searchBox);
    const apiKey = "&key=AIzaSyDilmuIYT9dvyT6absEnpcpKd1IpcxJBrU";
    // build that url to include the query
    // build the url to include the filters
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchBox}${apiKey}`;
    fetch(url + apiKey)
      .then((res) => res.json())
      .then((data) => console.log(data.items));
    // .then((books) => this.setState({ books }))
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
        <BookList />
      </div>
    );
  }
}

export default App;
