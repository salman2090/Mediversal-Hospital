import React from 'react';
import Banner from '../Banner/Banner';
import Departments from '../Departments/Departments';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Departments></Departments>
            <Doctors></Doctors>
            
        </div>
    );
};

export default Home;