import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    // load data
    useEffect(() => {
        fetch("https://young-taiga-05523.herokuapp.com/doctors")
            .then(res => res.json())
            .then(data => setDoctors(data.slice(0,3)))
    }, [])
    return (
        <div id="doctors">
           
            <h2 className="fw-bold mt-5 mb-3 fs-3">Our Doctors</h2>
            <div className="services-container">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor._id}
                        doctor={doctor}
                    ></Doctor>                
                    )
                }                
            </div>  
            <Link to="/specialists"><Button variant="outline-success" className="mb-5">See more of our Specialists</Button></Link>
        </div>
    );
};

export default Doctors;