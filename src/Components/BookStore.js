import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../redux/Books/Books';
import Book from './Book';

const BookStore = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(fetchBooks());
  }, [books, dispatch]);

  return (
    <div className="book-list">
      <h2>BooksList</h2>
      { books?.map((book) => <Book key={book.id} book={book} />)}
    </div>
  );
};

export default BookStore;
