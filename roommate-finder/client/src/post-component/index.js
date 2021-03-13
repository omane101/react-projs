// Post Creation Component
import React, { useState } from 'react';
//import Modal from 'react-modal';
import Feed from '../feed-component/index';
import data from '../feed-component/data';
/// Bootstrap
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import './post.module.scss';

function Posts() {
  // setup consts and vars
  const [modalOpen, setModal] = useState(false);
  const [posts, setPosts] = useState(data);
  const [name, setName] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { name, text };
    setPosts([newPost, ...posts]);
    setName('');
    setText('');
    setModal(false);
  };

  const handleClose = () => setModal(false);

  return (
    <div>
      <Container>
        <Navbar>
          <ButtonGroup className='mr-2' aria-label='First group'>
            <Button variant='primary' onClick={() => setModal(true)}>
              Create Post
            </Button>
          </ButtonGroup>
          <Form inline>
            <Form.Control
              type='text'
              placeholder='Search'
              className='mr-sm-2'
            />
            <Button variant='outline-primary'>Search</Button>
          </Form>
        </Navbar>
      </Container>
      <Feed posts={posts}></Feed>
      <Modal show={modalOpen} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title> Create Post </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Control
              placeholder='Name'
              type='text'
              id='name'
              onChange={(e) => setName(e.target.value)}
              size='sm'
              value={name}
            ></Form.Control>
            <br />

            <Form.Control
              type='text'
              placeholder='Your Post'
              size='lg'
              id='comment'
              onChange={(e) => setText(e.target.value)}
              value={text}
            ></Form.Control>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={() => setModal(false)}>
            Close
          </Button>
          <Button variant='primary' onClick={handleSubmit}>
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Posts;
