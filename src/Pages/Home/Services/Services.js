import React, { useEffect, useState } from 'react';
import './Services.css';  
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    // load data
    useEffect(() => {
        fetch("https://young-taiga-05523.herokuapp.com/services")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id="services">
            <h3 className="text-center mt-5">Our Services</h3>
            <h2 className="fw-bold mt-3 mb-3 fs-3">We Care Our Patients</h2>
            <div className="services-container">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    >
                    </Service>                     
                    )
                }                
            </div>  
        </div>
    );
};

export default Services;