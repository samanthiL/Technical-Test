import React, { useEffect, useState } from 'react';
import orders from '../data/orders.json';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

var data = orders;

export const OrdersBoard = () => {
 
const[active,SetActive] = useState("");

const Change_state =(name)=>{

  data = data
  .map((info) => {
    var result= info;
    if (result.id == name.ids) {
            result.status = name.name;
    }
   
    return result;
});
console.log("dd",name, data);
SetActive(name)

}

  return (
    <span style={{ margin: 24 }}>
 

 <div style={{ display: 'block', 
                  width: 700, padding: 30 }}>

<Row style={{ width: '18rem' ,display:'inline-flex'}}>
        
        
<Col>
<h1>New</h1>

        {data.filter(name => name.status == 'New').map(user => (
   
   <Row key={user.id}>
    <div class="shadow p-3 mb-5 bg-white rounded">
   <Card style={{ width: '18rem' ,padding: '2px',boxshadow: '6px 12px',width: '18rem',border: '5px solid',backgroundColor:'#f3f4f7'}}>
 <Card.Body>
   <Card.Title>order #{user.id}</Card.Title>
   <Card.Text>
  
    {user.items.quantity}
   </Card.Text>
 <div style={{display:'flex'}}>
  <p>{user.location}</p>
  <Button variant="primary" onClick={() => Change_state({name:'New',ids:user.id})}>Approve</Button>

 </div>
 </Card.Body>
</Card>      
     </div>
   </Row>
    ))} 
            </Col>
        
        
        <Col>
<h1>Active</h1>
     {data.filter(name => name.status == 'Active').map(user => (
   
        <Row key={user.id}>
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{user.id}</Card.Title>
        <Card.Text>
           {user.status}
         
        </Card.Text>
   
       

        <Button variant="primary" onClick={() => Change_state({name:'New',ids:user.id})}>Ready</Button>
      </Card.Body>
    </Card>      
          
        </Row>
         ))} 
         </Col>


        <Col>
        <h1>Ready</h1>

        {data.filter(name => name.status == 'Ready').map(user => (
   
   <Row key={user.id}>
   <Card style={{ width: '18rem' }}>
 <Card.Img variant="top" src="holder.js/100px180" />
 <Card.Body>
   <Card.Title>{user.id}</Card.Title>
   <Card.Text>
    {user.status}
   </Card.Text>
   <Button variant="primary" onClick={() => Change_state({name:'New',ids:user.id})}>Complete</Button>
 </Card.Body>
</Card>      
     
   </Row>
    ))} 
       </Col>
        
      </Row>


 </div>
    </span>
  );
};
