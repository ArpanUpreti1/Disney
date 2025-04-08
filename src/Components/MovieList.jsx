import React, { useEffect, useState } from 'react';
import GlobalApi from '../Services/GlobalApi';
import MovieCard from './MovieCard';

const MovieList = ({ genreid }) => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    getMovieByGenre(genreid);
  }, [genreid]);

  const getMovieByGenre = async (genreId) => {
    GlobalApi.getMovieByGenre(genreId).then((res) => {
      console.log(res.data.results);
      setMovieList(res.data.results);
    });
  };

  return (
    <div className='flex gap-8 scrollbar-hide scroll-sm\
        overflow-x-auto'>
      {movieList.map((item, index) => (
        <MovieCard key={index} movie={item} />
      ))}
    </div>
  );
};

export default MovieList;
