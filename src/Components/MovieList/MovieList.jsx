import React,{useState} from 'react';
import{Movies} from '../Movies/Movies';
import Movie from '../Movie/Movie';
 const MovieList = () => {
    const[movies,setMovies]=useState(Movies)
    console.log(movies);
  return <div>
      <Movie movies={movies}/>
  </div>;
};
export default MovieList;