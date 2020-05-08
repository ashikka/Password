import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';

import '../assets/css/Home.css';

import API from '../API';
import Heading from './Heading';

function Home() {
  const [username, setUsername] = useState('');

  const handleChange = ({ target }) => {
    setUsername(target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post('/room/create', { username });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container className="card-holder">
      <Heading />
      <Row className="home-cards">
        <Col md className="d-flex flex-column justify-content-between">
          <Card className="display-card card-top mb-3">
            <Card.Body className="d-flex flex-column justify-content-between">
              <div className="text-center">
                <FontAwesomeIcon icon={faUserCircle} size="5x" />
                <div className="subtitle">Choose your Avatar!</div>
              </div>
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Control type="text" placeholder="Username" onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                  <Form.Control as="select">
                    <option>English</option>
                  </Form.Control>
                </Form.Group>
                <div className="text-center"><Button type="submit" variant="success">PLAY!</Button></div>
              </Form>
            </Card.Body>
          </Card>
          <Card className="display-card card-bottom">
            <Card.Body>
              left
            </Card.Body>
          </Card>
        </Col>
        <Col className="">
          <Card className="display-card card-right">
            <Card.Body>
              right
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
