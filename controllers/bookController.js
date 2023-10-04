const Book = require('../models/bookModel');

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    if(books==null){
      return res.status(404).json({ message: 'No books found' });
    }
    
    return res.status(200).json(books);
    // TODO: Implement logic to fetch all books from the database
    // Example response when books are found:
    // res.status(200).json(books);
    // Example response when no books are found:
    // res.status(404).json({ message: 'No books found' });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Internal server error', error: error.message });
  }
  
};

const getBookById = async (req, res) => {
  const bookId = req.params.id;

  try {
    const book = Book.findById(bookId);
    if(!book){
      return res.status(404).json({ message: 'Book not found' });
    }
    const newBook = {_id:bookId,...book};
    return res.status(200).json(newBook);
    // TODO: Implement logic to fetch a book by ID from the database
    // Use Book.findById(bookId) to retrieve a book
    // Example response when book is found:
    // res.status(200).json(book);
    // Example response when book is not found:
    // res.status(404).json({ message: 'Book not found' });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Internal server error', error: error.message });
  }
};

const addBook = async (req, res) => {
  const { title, author, ISBN, publishedYear, genre, copiesAvailable } =
    req.body;
  
  try {
    const book = await Book.create(req.body);
    return res.status(201).json({ message: 'Book added successfully', book:book });
    // TODO: Implement logic to create and add a new book to the database
    // Use Book.create() to create a new book
    // Example response when book is added successfully:
    // res.status(201).json({ message: 'Book added successfully', book });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Internal server error', error: error.message });
  }
};

const updateBook = async (req, res) => {
  const bookId = req.params.id;
  const updateInfo = req.body;

  try {
    const updatedBook = await Book.findByIdAndUpdate(bookId, updateInfo, { new: true });
    if (!updatedBook) {
      return res.status(404).json({ error: 'Book not found.' });
    }
    return res.status(200).json({ message: 'Book updated successfully', book: updatedBook });
    // TODO: Implement logic to update a book by ID in the database
    // Use Book.findByIdAndUpdate(bookId, updateInfo, { new: true }) to update the book
    // Example response when book is updated successfully:
    // res.status(200).json({ message: 'Book updated successfully', book: updatedBook });
    // Example response when book is not found:
    // res.status(404).json({ message: 'Book not found' });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Internal server error', error: error.message });
  }
};

const deleteBook = async (req, res) => {
  const bookId = req.params.id;

  try {
    const deletedBook= Book.findByIdAndDelete(bookId);
    if(!deletedBook){
      return res.status(404).json({ message: 'Book not found' });
    }
    const book = {_id:bookId,...deletedBook}
    return res.status(200).json({ message: 'Book deleted successfully', book:book });
    // TODO: Implement logic to delete a book by ID from the database
    // Use Book.findByIdAndDelete(bookId) to delete the book
    // Example response when book is deleted successfully:
    // res.status(200).json({ message: 'Book deleted successfully', book: deletedBook });
    // Example response when book is not found:
    // res.status(404).json({ message: 'Book not found' });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Internal server error', error: error.message });
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
};
