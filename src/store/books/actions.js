export const ADD_BOOK = "ADD_BOOK";
// export const UPDATE_BOOK = "UPDATE_BOOK";
export const REMOVE_BOOK = 'REMOVE_BOOK';

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (bookId) => ({
  type: REMOVE_BOOK,
  payload: bookId,
});
