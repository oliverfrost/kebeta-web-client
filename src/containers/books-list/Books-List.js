import BookListItem from "../../components/book-list-item/BookListItem";
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addBook, removeBook } from "../../store/books/actions";
import PropTypes from "prop-types";

class BooksList extends React.Component {
  constructor() {
    super();
    this.state = { title: "", author: "" };
  }

  onAddButtonClicked = () => {
    this.props.addBook({
      id: Math.round(Math.random(1, 100) * 100),
      title: "Random title",
      author: "Random author",
    });
  };

  onRemoveButtonClicked = (id) => {
    this.props.removeBook(id);
  };

  handleSubmit = (event) => {
    this.props.addBook({
      id: Math.round(Math.random(1, 100) * 100),
      title: this.state.title,
      author: this.state.author,
    });
    this.setState({title: '', author: ''});
    event.preventDefault();
  };

  handleTitleChange = (event) => {
    this.setState({ ...this.state, title: event.target.value });
  };

  handleAuthorChange = (event) => {
    this.setState({ ...this.state, author: event.target.value });
  };

  render() {
    return (
      <div>
        <form>
          <label htmlFor="book-title"></label>
          <input id="book-title" type="text" value={this.state.title} onChange={this.handleTitleChange}></input>

          <label htmlFor="book-author"></label>
          <input id="book-author" type="text" value={this.state.author} onChange={this.handleAuthorChange}></input>

          <button type="button" onClick={this.handleSubmit}>
            Add Book
          </button>
        </form>

        <ul>
          {this.props.books.map((book) => {
            return (
              <li key={book.id}>
                <Link to={`/books/${book.id}`}>
                  <BookListItem title={book.title} author={book.author}></BookListItem>
                </Link>

                <span onClick={() => this.onRemoveButtonClicked(book.id)}>XXX</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    books: store,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBook: (book) => dispatch(addBook(book)),
    removeBook: (id) => dispatch(removeBook(id)),
  };
};

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
