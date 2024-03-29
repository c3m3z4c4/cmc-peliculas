import { useState, useEffect } from 'react';

import MovieCard from './MovieCard';
import { get } from '../data/httpClient';

import './ContextMovieCard.css';

export const ContextMovieCard = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        get('/discover/movie')
            .then((data) => {
                setMovies(data.results);
                // console.log(movies);
            })
            .catch((err) => {
                console.error(err);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ul className="container">
            {movies.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </ul>
    );
};
