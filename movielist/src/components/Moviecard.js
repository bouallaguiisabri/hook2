import React from 'react'
import { Card } from 'react-bootstrap';
import Rating from './Rating'
function Moviecard({title,description,posterURL,Rate}){
  return(
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={posterURL}  style={{ height:'60min',alignItems: 'center' }} />
      <Card.Body >
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer style={{ color:'red'}}>
    <Rating Rate={Rate}  />
      </Card.Footer>
    </Card>
  );
}
export default Moviecard;