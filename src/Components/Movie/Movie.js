function Movie(props) {
    const list=props.movies.map(movie =>{
        return <li key={movie.id}>{movie.name}</li>
    })
  return(
      <ul>{list}</ul>
  );
  
  }
export default Movie;
