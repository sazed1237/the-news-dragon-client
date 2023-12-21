import React from 'react';
import { Link } from 'react-router-dom';

const TermsConditions = () => {
    return (
        <div>
            <h3>Our Terms and Conditions</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia vitae nemo repudiandae nesciunt assumenda quia beatae veniam sunt in tempora! Vitae ad asperiores mollitia nihil debitis. Aspernatur at provident rerum!</p>
            <Link to={"/register"}>Go Back to Register</Link>
        </div>
    );
};

export default TermsConditions;