import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';

import { addBook } from '../redux/Books/Books';

const InputForm = () => {
  const dispatch = useDispatch();

  const submitBook = (e) => {
    e.preventDefault();

    const {
      title, author, categories, progress, chapter,
    } = e.target.elements;

    const newBook = {
      id: uuid(),
      title: title.value,
      author: author.value,
      categories: categories.value,
      progress: progress.value,
      chapter: chapter.value,
    };
    e.target.reset();

    dispatch(addBook(newBook));
  };

  return (
    <form onSubmit={submitBook} className="form-add-book">
      <input type="text" name="title" id="book-title" placeholder="title" required />
      <input type="text" name="author" id="book-author" placeholder="author" required />
      <input type="text" name="categories" id="book-categories" placeholder="categories" required />
      <input type="text" name="progress" id="book-progress" placeholder="progress" required />
      <input type="text" name="chapter" id="book-chapter" placeholder="chapter" required />
      <input type="submit" value="ADD BOOK" />
    </form>
  );
};

export default InputForm;
