import { useState } from 'react'
import './App.css'
import BookList from '../BookList'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import AddBookForm from './AddBookForm'
import BookData from '../BookData'
//All of the necessary imports


function App() {
  //Set up state for books and for modal
  const [books, setBooks] = useState(BookData);
   /* creates state for whether the modal is open or closed */
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
 

  /* Create function */
  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  /* Update function */
  const selectFavorite = (id) => {
    setBooks(
      books.map((book) => book.id === id ? {...book, isFavorite: !book.isFavorite } : book)
    ) /* this is saying that for the book whose id matches the selected, switch the isFavorite state to the opposite */
  };

  /* Delete function */
  const deleteBook = (idToDelete) => {
    setBooks ( books.filter(b => b.id !== idToDelete)) /* updating state to create a new array with filter */
  }

  return (
    <div className='container'>
    <h1 className='my-4'>Book Wish List</h1>
    <Button variant='secondary' onClick={() => setIsAddModalOpen(true)}>
      Add Book
    </Button>
    <div>
      <BookList /* Booklist component with relevant props */
        books={books} 
        onSelectFavorite={selectFavorite} 
        deleteBook={deleteBook}
      />
    </div>
    <AddBookForm
      show={isAddModalOpen}
      onHide={() => setIsAddModalOpen(false)}
      onAddBook={handleAddBook}
    />
  </div>
  );
};

export default App
