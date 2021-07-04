import React from 'react';
import { Card } from 'react-bootstrap';

const CardObj = ({
  id,
  name,
  number,
  limit
}) => {
  return (
    <Card style={{ width: '18rem' }} className="card">
      <Card.Body>
        <Card.Title className="card-title">{name}</Card.Title>
        <div className="card-details">
           <div>Name: {name}</div>
          <div>Number: {number}</div>
          <div>Limit: {limit} </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardObj;