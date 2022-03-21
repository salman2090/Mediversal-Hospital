import React, { useEffect, useState } from 'react';
import './Specialists.css';
import { Card } from 'react-bootstrap';

const Specialists = () => {
    const [doctors, setDoctors] = useState([]);

    // load data
    useEffect(() => {
        fetch("https://young-taiga-05523.herokuapp.com/doctors")
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div className="specialists-container">
            {
                doctors.map((doctor) => (
                <div className="specialist">
                    <Card border="light" className="card-body mx-3 mt-5 shadow p-3 mb-5 bg-body rounded-3" >
                        <Card.Img className="pt-3" variant="top" src={doctor.img}/>
                        <Card.Body>
                            <h3 className='fs-4'>{doctor.name}</h3>
                            <p>{doctor.designation}</p>
                            <h5 className='fs-5'>{doctor.speciality}</h5>
                            {/* <Link to={`/purchase/${doctor._id}`}><Button className="text-dark mt-3" variant="outline-info">Purchase</Button>{' '}</Link> */}
                        </Card.Body>
                    </Card> 
                </div>
                ))
            }
        </div>
    );
};

export default Specialists;