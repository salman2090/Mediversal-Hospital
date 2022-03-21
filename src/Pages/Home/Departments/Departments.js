import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Department from '../Department/Department';

const Departments = () => {
    const [departments, setDepartments] = useState([]);

    // load data
    useEffect(() => {
        fetch("https://young-taiga-05523.herokuapp.com/departments")
            .then(res => res.json())
            .then(data => setDepartments(data.slice(0,3)))
    }, [])
    return (
    <div id="departments">
           
        <h2 className="fw-bold mt-5 mb-3 fs-3">Departments</h2>
        <div className="services-container">
            {
                departments.map(department => <Department
                    key={department._id}
                    department={department}
                ></Department>    
                )
            }                
        </div>  
        <Link to="/exploreDepartments"><Button variant="outline-success" className="mb-5">Explore the Departments</Button></Link>
    </div>
    );
};

export default Departments;