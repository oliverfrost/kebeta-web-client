import BookListItem from "../book-list-item/BookListItem";
import React from "react";
import { Link } from 'react-router-dom'

class BooksList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          id: 1,
          title: "Refactoring: Improving the Design of Existing Code",
          author: "Martin Fowler",
        },
        {
          id: 2,
          title: "JavaScript Everywhere: Building Cross-Platform Applications with GraphQL, React, React Native, and Electron",
          author: "Adam Scott",
        },
        {
          id: 3,
          title: "Essential TypeScript: From Beginner to Pro",
          author: "Adam Freeman",
        },
        {
          id: 4,
          title: "Ethan Brown",
          author: "Web Development with Node and Express: Leveraging the JavaScript Stack",
        },
        {
          id: 5,
          title: "Pro Angular 6",
          author: "Adam Freeman",
        },
      ],
    };
  }

  render() {
    return (
      <ul>
        {this.state.books.map((book) => {
          return (
            <li key={book.id}>
              <Link to={`/books/${book.id}`}>
                <BookListItem title={book.title} author={book.author}></BookListItem>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BooksList;
