import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/vFAUZGx5x4z5msHtqnDH/books';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const FETCH_BOOK = 'bookstore/books/FETCH_BOOK';

// state
const initialState = [];
// Action creator
export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});
// reducer
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.payload,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    case FETCH_BOOK:
      return [...action.payload];
    default:
      return state;
  }
};

export const fetchBooks = createAsyncThunk(FETCH_BOOK, async () => {
  await fetch(BASE_URL)
    .then((res) => res.json())
    .then((books) => {
      const bookList = [];
      Object.keys(books).forEach((key) => {
        bookList.push({
          item_id: key,
          author: books[key][0].author,
          title: books[key][0].title,
          categories: books[key][0].categories,
        });
      });
    });
});

export const addBookFetch = ({ id, title, categories }) => async (dispatch) => {
  const newBook = {
    item_id: id,
    title,
    categories,
  };
  await fetch(BASE_URL, {
    method: 'POST',
    body: JSON.stringify(newBook),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  dispatch(addBook({ id, title, categories }));
};

export const removeBookFetch = (id) => async (dispatch) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(() => dispatch({ type: REMOVE_BOOK, payload: id }));
};

export default booksReducer;
