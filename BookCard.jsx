import React from 'react'

/* Props for what a book card needs to contain */
function BookCard({ id, title, author, isFavorite, selectFavorite, deleteBook}) {
  return (
    <div className='card m-3 border shadow-sm' style={{ width: '18rem' }}>
      <div>
        <h5 className='card-title'>{title}</h5>
        <h6 className='card-subtitle text-muted'>{author}</h6>
      </div>

      <div className='buttonContainer d-flex mt-4 justify-content-between'>
        <button className='btn btn-outline-danger' onClick={() => selectFavorite(id)}>
            {/* Defines appearance for favorite/unfavorite with ternary operator */}
            {isFavorite ? '❤️' : '🖤'}

        </button>
        <button className='btn btn-outline-danger' onClick={() => deleteBook(id)}>❌</button>
      </div>
    </div>
  )
}

export default BookCard;
