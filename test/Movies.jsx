import React,{useState,useEffect} from 'react';

import { Card,Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';


export const Movies = ({item}) => {
    const dispatch= useDispatch()
    return (
        <div className="card" >

            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={item.image} />
  <Card.Body>
    <Card.Title>{item.title}</Card.Title>
    <Card.Text>
            {item.description}
    </Card.Text>
    <Button  variant="primary" onClick={()=>dispatch({type:"add-fav",data:item})}>Add to fav</Button>
  </Card.Body>
</Card>
        </div>
    );
};

