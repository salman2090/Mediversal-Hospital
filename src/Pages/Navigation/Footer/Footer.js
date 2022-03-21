import { faLocationArrow, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {

        // icon info    
        const locationIcon = <FontAwesomeIcon icon={faLocationArrow} />
        const phoneIcon = <FontAwesomeIcon icon={faPhone} />
        const emailIcon = <FontAwesomeIcon icon={faMailBulk} />

    return (
        <div className="bg-footer p-3">
        <div className="p-5 footer-container ">
            <div >
                <h5 className="text-light mb-5">Contact Us</h5>
                <p className="text-light fs-5"><span>{phoneIcon}</span> {' '}&emsp;(+880) 1234567890</p>
                <p className="text-light fs-6"><span>{locationIcon}</span> {' '}&emsp; 202/1, Jatrabari, Dhaka-1204.</p>
                <p className="text-light fs-6"><span>{emailIcon}</span> {' '}&emsp; mediversalhospitalsltd@gmail.com</p>
            </div>
            <div >
                <h5 className="text-light mb-3">Policy</h5>
                <p><Link className="fw-bold" to="/">Terms</Link></p>
                <p><Link className="fw-bold" to="/">License</Link></p>
                <p><Link className="fw-bold" to="/">Disclaimer</Link></p>

            </div>
            <div>
            <h5 className="text-light mb-3">Our Community</h5>               
                <p><Link className="fw-bold" to="/">Blog</Link></p>
                <p><Link className="fw-bold" to="/">Forums</Link></p>
            </div>
            <div>
            <h5 className="text-light mb-3">Help</h5>               
                <p><Link className="fw-bold" to="/">Help Center</Link></p>
                <p><Link className="fw-bold" to="/">Authors</Link></p>
            </div>
        </div>
        <p className="footer-text fs-5">© 2021 Mediversal Hospitals Ltd. All Right Reserved.</p>
    </div>
    );
};

export default Footer;