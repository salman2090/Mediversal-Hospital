import React from 'react';
import './Service.css';
import { Button, Card } from 'react-bootstrap';


const Service = ({service}) => {
    const { title, img, description} = service;
    return (
        <div >
        <div className="service-container">
        <Card border="light" className="card-body mx-3 mt-3 shadow p-3 mb-5 bg-body rounded-3" >
            <Card.Img className="pt-3 mb-3" variant="top" src={img}/>
            <Card.Body>
                <h2 className="fs-4 pb-2 fw-bold">{title}</h2>
                <p>{description}</p>
                
                {/* <Link to={`/purchase/${_id}`}><Button className="text-dark mt-3" variant="outline-info">Order Now</Button>{' '}</Link> */}
               
            </Card.Body>
        </Card> 
        </div>

        
    </div>
    );
};

export default Service;