import React from 'react'
import BookCard from './BookCard'

/* This component's job is to map over a book to render all of the cards */

/* Bringing in props */
function BookList({ books, onSelectFavorite, deleteBook }) {
  return (
    <div className='row'>
      {books.map((book) => (
        <div className='col-md-4 col-sm-6 col-12 mb-4' key={book.id}>
        <BookCard
        /* sets up what each part of the card is connected to from BookCard */
            id={book.id}
            title={book.title}
            author={book.author}
            isFavorite={book.isFavorite}
            selectFavorite={onSelectFavorite}
            deleteBook={deleteBook}
        />
        </div>
      ))}
    </div>
  )
}

export default BookList;
