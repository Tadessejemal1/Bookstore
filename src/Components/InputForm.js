import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import genres from '../categoryGeneral/inputCategories';
import { addBookFetch } from '../redux/Books/Books';

const InputForm = () => {
  const dispatch = useDispatch();

  const submitBook = (e) => {
    e.preventDefault();

    const { title, categories } = e.target.elements;

    const newBook = {
      id: uuid(),
      title: title.value,
      categories: categories.value,
    };
    e.target.reset();

    dispatch(addBookFetch(newBook));
  };

  return (
    <div className="add-book-container">
      <hr className="add-book-separator" />
      <h2 className="add-book-section-title">Add New Book</h2>
      <form onSubmit={submitBook} className="form-add-book">
        <input type="text" name="title" id="book-title" placeholder="title" required />
        <select name="categories" id="category">
          <option className="select-placeholder" hidden>Categories</option>
          {
              genres.map((genre) => <option key={genre} value={genre}>{genre}</option>)
            }
        </select>
        <input type="submit" className="btn-submit" value="ADD BOOK" />
      </form>
    </div>
  );
};

export default InputForm;
