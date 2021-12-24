import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { Card,Button } from 'react-bootstrap';

const Fav = () => {
    const dispatch= useDispatch()
    // const FavMovies=useSelector((state)=>state.movieReducer.fav)4--
    // console.log(FavMovies)
    return (
        <div>
          <h1>fav</h1>
        </div>
    );
};

export default Fav;