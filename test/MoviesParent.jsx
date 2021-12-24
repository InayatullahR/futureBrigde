import React,{useState,useReducer, useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import axios from 'axios';
import { Movies } from './Movies';
import "./movie.css"

export const MoviesParent = () => {
    const dispatch=useDispatch()
    const [movies,setMovies]=useState([])
    const getApi= async()=>{
        const allMovies= await axios.get ("http://fakestoreapi.com/products")
        setMovies(allMovies.data)
        movies.length<=0 && dispatch({type:"add-movies", data:allMovies.data})
    }
    useEffect(()=>{
        getApi()
    },[])
    return (
        <div className="card">
            {movies.map((item)=>{
                return  <Movies item={item} />
            })}
           
        </div>
    );
};

