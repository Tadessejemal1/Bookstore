const initialState = [];
// Actions
const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

// Action creators
export function checkStatus() {
  return {
    type: CHECK_STATUS,
  };
}

// Reducer
export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
}
