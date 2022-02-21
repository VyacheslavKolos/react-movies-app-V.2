import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {getAllMovies} from "../../store/slices/movie.slice";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import './MoviesList.css'
import {PaginationMovies} from "../Layout/PaginationMovies/PaginationMovies";

const MoviesList: FC = () => {
    const {moviesResponse,moviesPage} = useAppSelector(state => state.movieReducer)
    let dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllMovies(moviesPage))
    }, [moviesPage])

    return (

        <div className={'moviesList'}>
            {moviesResponse.results.map(movie =>

                <MoviesListCard key={movie.id} movie={movie}/>
            )}
            <div className={'pagination'}>
                <PaginationMovies/>
            </div>
        </div>

    );
};

export {MoviesList};