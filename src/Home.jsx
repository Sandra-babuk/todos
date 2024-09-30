import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addTodo } from './redux/todoSlice'; 
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const [todo, setTodo] = useState(''); 
  const dispatch = useDispatch(); 
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo) {
      dispatch(addTodo(todo)); 
      setTodo(''); 
      navigate('/view'); 
    }
  };

  const handleCancel = () => {
    setTodo(''); 
  };

  return (
    <>
      <div style={{ backgroundColor: 'rgb(234, 127, 163)', height: '100vh', width: '100%' }} className="d-flex align-items-center justify-content-center">
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <Card style={{ backgroundColor: '#f5f5f5' }}>
                <Card.Header className="text-center">
                  <h4 className='text-danger'>Save a New ToDo</h4> 
                </Card.Header>
                <Card.Body>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formTodo">
                      <Form.Label style={{ color: '#555' }}>Add</Form.Label> 
                      <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <div className="d-flex justify-content-evenly mt-4"> 
                      <Button variant="success" type="submit" className="w-45" style={{ color: 'white' }}>
                        Save ToDo
                      </Button>
                      <Button variant="danger" className="w-45" style={{ color: 'white' }} onClick={handleCancel}>
                        Cancel
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
