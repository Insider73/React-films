import React from 'react'
import {Link} from 'react-router-dom'
import './MovieCard.scss'

const MovieCard = ({movie}) => (
  <div className='movie-card'>
    <div className='movie-card_poster'>
      <div className='movie-card_backdrop'></div>
      <img className='movie-card_img' src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt={movie.original_title}/>
    </div>
    <div className='movie-card_text'>
      <Link className='movie-card_link' to={`/movie/${movie.id}`}>{movie.original_title}</Link>
    </div>
  </div>
)

export default MovieCard