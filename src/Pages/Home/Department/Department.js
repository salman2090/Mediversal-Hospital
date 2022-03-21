import React from 'react';
import { Card } from 'react-bootstrap';

const Department = ({department}) => {
    const {name, img, description} = department;
    return (
        <div >
            <div className="doctor-container">
            <Card border="light" className="card-body mx-3 mt-3 shadow p-3 mb-5 bg-body rounded-3" >
                <Card.Img className="pt-3 mb-3 w-25 img-fluid" variant="top" src={img}/>
                <Card.Body>
                    <h3 className="fs-4 pb-2 mb-3 fw-bold">{name}</h3>
                    <p>{description}</p>
                    
                </Card.Body>
            </Card> 
            </div>

            
        </div>
    );
};

export default Department;