import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';

import { addBook } from '../redux/Books/Books';

const InputForm = () => {
  const dispatch = useDispatch();

  const submitBook = (e) => {
    e.preventDefault();

    const { title, author } = e.target.elements;

    const newBook = {
      id: uuid(),
      title: title.value,
      author: author.value,
    };
    e.target.reset();

    dispatch(addBook(newBook));
  };

  return (
    <form onSubmit={submitBook} className="form-add-book">
      <input type="text" name="title" id="book-title" placeholder="title" required />
      <input type="text" name="author" id="book-author" placeholder="author" required />
      <input type="submit" value="Add Book" />
    </form>
  );
};

export default InputForm;
