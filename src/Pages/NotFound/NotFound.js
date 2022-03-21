import React from 'react';
import error from '../../Images/Error/error.png';

const NotFound = () => {
    return (
        <div>
            <img className="h-100 w-100" src={error} alt="" />
        </div>
    );
};

export default NotFound;