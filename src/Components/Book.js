import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBookFetch } from '../redux/Books/Books';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const deleteBook = (e) => {
    const { id } = e.target;
    dispatch(removeBookFetch({ id }));
  };

  return (
    <div className="book">
      <div className="book-detail">
        <p>category</p>
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <p>{book.categories}</p>
        <button type="button">Comments</button>
        <button type="button" id={book.id} onClick={deleteBook}>Remove</button>
        <button type="button">Edit</button>
      </div>
      <div className="progress-container">
        <p>PROGRESS %</p>
        <p>progress</p>
      </div>
      <div className="current-chapter">
        <p>CURRENT CHAPTER</p>
        <p>chapter</p>
        <button type="button">Update Progress</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    categories: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
