import React from 'react'
import {Modal, Form} from 'react-bootstrap'
import { useState } from 'react';

function AddBookForm({show, onHide, onAddBook}) {
//Setting up my pieces of state
const [title, setTitle] = useState('');
const [author, setAuthor] = useState('');
const [isFavorite, setIsFavorite] = useState(false);

const handleSubmit = (e) => {
    e.preventDefault();

    onAddBook({ title, author, isFavorite});
    setTitle('');
    setAuthor('');
    setIsFavorite(false);
};

  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
            <Modal.Title>Add Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit} style={{ marginBottom: '20px'}}>
                <Form.Group >
                    <Form.Label htmlFor='title' className='mr-3'>Title: </Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter book title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Group>
                <Form.Group >
                    <Form.Label htmlFor='author' className='mr-3'>Author: </Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter book author'
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </Form.Group>
                <Form.Group >
                    <Form.Label htmlFor='isFavorite' className='mr-3'>Favorite? </Form.Label>
                    <Form.Check
                        type='checkbox'
                        placeholder='Mark as Favorite'
                        value={isFavorite}
                        onChange={(e) => setIsFavorite(e.target.value)}
                    />
                </Form.Group>
                <button type='submit'>Add Book</button>
            </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddBookForm
