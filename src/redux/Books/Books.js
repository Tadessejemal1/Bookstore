const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

// state
const initialState = [
  {
    id: 1,
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    category: 'Action',
    progress: 85,
    chapter: 'Chapter 17: The Hunger Games',
  },
  {
    id: 2,
    title: 'Dune',
    author: 'Frank Herbert',
    category: 'Sci-Fi',
    progress: 10,
    chapter: 'Chapter 1: Arrakis',
  },
  {
    id: 3,
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    category: 'Learning',
    progress: 70,
    chapter: 'Chapter-5',
  },
];
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
    default:
      return state;
  }
};

export default booksReducer;
