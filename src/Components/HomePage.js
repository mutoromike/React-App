import React from 'react';
import { Link } from "react-router-dom";
function HomePage() {
    return (
        <div className="jumbotron">
            <h1> Machine Learning and IOT </h1>
            <p> Here we will talk about machine learning and IOT </p>
            <Link to="about" className="btn btn-primary">About</Link>
        </div>
    )
}

export default HomePage;