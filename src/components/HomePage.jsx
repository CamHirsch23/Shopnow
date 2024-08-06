// src/components/HomePage.jsx
import React from 'react';
import { Button, Card, Container, Row, Col, Image } from 'react-bootstrap';
import welcomeImage from '../assets/welcome-image.jpg';

const products = [
  { id: 1, name: 'Product 1', description: 'Description for product 1', price: '\$10', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', description: 'Description for product 2', price: '\$20', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', description: 'Description for product 3', price: '\$30', image: 'https://via.placeholder.com/150' },
];

const HomePage = () => {
  return (
    <Container className="mt-5 p-3" style={{ backgroundColor: '#f8f9fa', color: '#343a40', border: '1px solid #ddd', borderRadius: '5px' }}>
      <Row className="mb-4">
        <Col>
          <Image src={welcomeImage} fluid rounded />
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="shadow-sm mb-4">
            <Card.Body>
              <Card.Title>Welcome to Our Shop</Card.Title>
              <Card.Text>
                Discover our amazing products and enjoy a seamless shopping experience.
              </Card.Text>
              <Button variant="primary" className="shadow-sm">Shop Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        {products.map(product => (
          <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
            <Card className="shadow-sm">
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text><strong>{product.price}</strong></Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomePage;