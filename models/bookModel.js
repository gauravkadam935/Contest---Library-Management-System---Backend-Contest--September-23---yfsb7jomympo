// Define the Book Schema
const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
  // 1)   {
  // // Define the 'title' field
  // // The data type of this field is a string
  // // This field is required
  // }
   title: {
    type: String,
    required: true,
  },
  // 2) {
  // // Define the 'author' field
  // // The data type of this field is a string
  // // This field is required
  // }
  author: {
    type: String,
    required: true,
  },
  // 3) {
  // // Define the 'ISBN' field
  // // The data type of this field is a string
  // // This field is required
  // // Each ISBN must be unique
  // }
  ISBN: {
    type: String,
    unique: true, // Ensures ISBN is unique for each book
    required: true,
  },
  // 4) {
  //   // Define the 'publishedYear' field
  //   // The data type of this field is a number
  //   // This field is required
  // }
   publishedYear: {
    type: Number,
    required: true,
  },
  // 5) Define the 'genre' field
  // The data type of this field is a string
  genre:{
    type:String,
    required:false,
  },
  // 6) {
  //   // Define the 'copiesAvailable' field
  //   // The data type of this field is a number
  //  // The default value is 1
  // }
  copiesAvailable: {
    type: Number,
    default: 1, // Default value is 1 copy available
  },

});

// Create and export the Book model
const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
