import React from 'react';
import "../../../App.css";

function Scholarships() {
    return (
        <div className="scholarships-section">
            <h3>The Latest Scholarships</h3>
            <div className="scholarships-container">
                <div className="scholarship-card">
                    <img src="/images/users/BIT.jpg" alt="BIT Scholarship" />
                    <h4>BIT Scholarship</h4>
                    <p>Nepal College</p>
                    <p>BIT</p>
                    <p>20%</p>
                </div>
                <div className="scholarship-card">
                    <img src="/images/users/BBA.jpg" alt="BBA Scholarship" />
                    <h4>BBA Scholarship</h4>
                    <p>Nepal College</p>
                    <p>BBA</p>
                    <p>50% </p>
                </div>
                <div className="scholarship-card">
                    <img src="/images/users/BHM.jpg" alt="BHA Scholarship" />
                    <h4>BHA Scholarship</h4>
                    <p>Nepal College</p>
                    <p>BHA</p>
                    <p>50%</p>
                </div>
            </div>
            <a href='/scholarships' className="read-more">Read more</a>
        </div>
    );
}

export default Scholarships;
