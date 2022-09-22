import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBookFetch } from '../redux/Books/Books';
import 'react-circular-progressbar/dist/styles.css';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const progressValue = 56;

  const deleteBook = (e) => {
    const { id } = e.target;
    dispatch(removeBookFetch({ id }));
  };

  return (
    <div className="book">
      <div className="book-detail">
        <p className="book-categories">{book.categories}</p>
        <p className="book-title">{book.title}</p>
        <p className="book-author">{book.author || 'John Doe'}</p>
        <button className="btn-comments" type="button">Comments</button>
        <span className="line" />
        <button className="btn-remove" type="button" id={book.id} onClick={deleteBook}>Remove</button>
        <span className="line" />
        <button className="btn-edit" type="button">Edit</button>
      </div>
      <div className="progress-container">
        <div style={{ width: 70, height: 70 }} className="circle-wrap">
          <CircularProgressbar value={progressValue} />
        </div>
        <div className="progress-text">
          <p className="progress-percentage">
            {progressValue}
            %
          </p>
          <p className="progress-completed">completed</p>
        </div>
      </div>
      <hr className="vertical-separator" />
      <div className="current-chapter-container">
        <p className="current-chapter">CURRENT CHAPTER</p>
        <p className="current-lesson">Chapter-1</p>
        <button className="btn-update-progress" type="button">Update Progress</button>
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
