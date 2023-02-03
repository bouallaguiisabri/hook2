import React from 'react'
import { ListGroup } from 'react-bootstrap';
import Moviecard from './Moviecard'


function MovieList ({movies}) {
    return(
        <ListGroup>
        {movies.map((movie) => (
          <Moviecard
            key={movie.title}
            title={movie.title}
            description={movie.description}
            posterURL={movie.posterURL}
            Rate={movie.rating}/>
        ))}
        
      </ListGroup>
    );
}

export default MovieList