import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <p>Home Page</p>
            <p>Home description</p>
            <Link to="/search">Go to search</Link>
        </div>
    )
}

export default Home