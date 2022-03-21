import React from 'react';
import { Card } from 'react-bootstrap';

const Doctor = ({doctor}) => {
    const {name, img, designation, speciality} = doctor;
    return (
        <div >
            <div className="doctor-container">
            <Card border="light" className="card-body mx-3 mt-3 shadow p-3 mb-5 bg-body rounded-3" >
                <Card.Img className="pt-3 mb-3" variant="top" src={img}/>
                <Card.Body>
                    <h3 className="fs-4 pb-2 fw-bold">{name}</h3>
                    <p>{designation}</p>
                    <h5 className='fs-5'>{speciality}</h5>
                    {/* <Link to={`/purchase/${_id}`}><Button className="text-dark mt-3" variant="outline-info">Order Now</Button>{' '}</Link> */}
                </Card.Body>
            </Card> 
            </div>

            
        </div>
    );
};

export default Doctor;