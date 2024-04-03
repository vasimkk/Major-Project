import React from 'react';
import { Card, Button } from 'react-bootstrap';

const products = [
  {
    id: 1,
    name: 'Product 1',
    image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    price: 10.99,
    brand: 'Brand A',
    size: 'Large',
    condition: 'New'
  },
  {
    id: 2,
    name: 'Product 2',
    image: 'https://via.placeholder.com/150',
    price: 20.99,
    brand: 'Brand B',
    size: 'Medium',
    condition: 'Used'
  },
  // Add more products here...
];

const ProductList = () => {
  return (
    
      <div className="container">
        <h2 className="mt-4 mb-4">Product List</h2>
        <div className="row">
          {products.map(product => (
            <div key={product.id} className="col-md-4 mb-4">
              <Card>
                <Card.Img variant="top" src={product.image} alt={product.name} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>
                    <strong>Price:</strong> ${product.price}<br />
                    <strong>Brand:</strong> {product.brand}<br />
                    <strong>Size:</strong> {product.size}<br />
                    <strong>Condition:</strong> {product.condition}
                  </Card.Text>
                  <Button variant="primary">Buy Now</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    
  );
};

export default ProductList;
