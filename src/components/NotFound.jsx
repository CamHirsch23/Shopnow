// src/components/NotFound.jsx
import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import notFoundImage from '../assets/not-found-image.jpg';

const NotFound = () => {
  return (
    <Container className="text-center mt-5">
      <Row>
        <Col>
          <Image src={notFoundImage} fluid rounded />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h1 className="display-4">404 - Not Found</h1>
          <p className="lead">Oops! The page you are looking for does not exist.</p>
          <Button as={NavLink} to="/" variant="primary">Go to Home</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;