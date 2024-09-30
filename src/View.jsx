import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { deleteTodo } from './redux/todoSlice'; 

const View = () => {
  const todos = useSelector((state) => state.todo.todos); 
  const dispatch = useDispatch();

  const handleDelete = (index) => {
    dispatch(deleteTodo(index));
  };

  return (
    <div style={{ backgroundColor: ' rgb(186, 169, 175)', height: '100vh', width: '100%' }} className="d-flex align-items-center justify-content-center">
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Header className="text-center">
              <h4>Saved ToDos</h4>
            </Card.Header>
            <Card.Body>
              {todos.length > 0 ? (
                <ul className="list-group">
                  {todos.map((item, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                      {item}
                      <Button variant="danger" onClick={() => handleDelete(index)}>
                      <i class="fa-solid fa-trash"></i>
                       </Button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No ToDos available.</p>
              )}
              <Link to="/" className="btn btn-success mt-3">Go Back</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default View;
