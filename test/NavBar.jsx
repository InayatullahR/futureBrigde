import React from 'react';
import { Link } from 'react-router-dom';


export  const NavBar = () => {
    return (
        <div className='nav'>
            <Link className='app' to="/">Movies</Link>
            <input className='input' type="text" />
            <button>search</button>
            <Link className='add' to="/Fav">Favourite</Link>
        </div>
    );
};

