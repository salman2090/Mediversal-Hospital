import React, { useEffect, useState } from 'react';
import './ExploreDepartments.css';
import { Card } from 'react-bootstrap';

const ExploreDepartments = () => {
    const [departments, setDepartments] = useState([]);

    // load data
    useEffect(() => {
        fetch("https://young-taiga-05523.herokuapp.com/departments")
            .then(res => res.json())
            .then(data => setDepartments(data))
    }, [])
    return (
        <div className="departments-container">
            {
                departments.map((department) => (
                <div className="department">
                    <Card border="light" className="card-body mx-3 mt-5 shadow p-3 mb-5 bg-body rounded-3" >
                        <Card.Img className="pt-3 img-fluid" variant="top" src={department.img}/>
                        <Card.Body>
                            <h3 className='fs-4 mb-5'>{department.name}</h3>
                            <p>{department.description}</p>                      
                        </Card.Body>
                    </Card> 
                </div>
                ))
            }
        </div>
    );
};

export default ExploreDepartments;