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
      printType: "all",
      bookType: "",
      q: "",
    };
  }

  bookSearch = () => {
    if (this.state.q !== "") {
      const apiKey = "&key=AIzaSyDilmuIYT9dvyT6absEnpcpKd1IpcxJBrU";

      let url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.q}${apiKey}&maxResults=40&printType=${this.state.printType}`;
      if (this.state.bookType != "") {
        url += `&filter=${this.state.bookType}`;
      }

      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          /*let printTypes = data.items.map((i) => i.volumeInfo.printType).sort();
        console.log(printTypes);*/
          this.setState({ books: data.totalItems > 0 ? [...data.items] : [] });
        });
    }
  };

  filter = (key, value) => {
    this.setState(
      {
        [key]: value,
      },
      () => {
        this.bookSearch();
      }
    );
  };

  updateQuery = (q) => {
    this.setState({ q });
  };

  // method to update the filters
  // method per filter, or 1 method that can be provided
  // a filter key and value
  // ('printType','ebook')

  render() {
    return (
      <div className="App">
        <Header />
        <Search bookSearch={this.bookSearch} updateQuery={this.updateQuery} />
        <Filter {...this.state} filter={this.filter} />
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default App;
