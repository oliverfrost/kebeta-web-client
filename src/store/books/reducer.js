import { ADD_BOOK, REMOVE_BOOK } from "./actions";

export const booksInitialState = [
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
];

export function booksReducer(state = booksInitialState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((b) => b.id !== action.payload);
    default:
      return state;
  }
}
