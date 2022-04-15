import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {getAllMovies} from "../../store/slices/movie.slice";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import './MoviesList.css'
import {PaginationMovies} from "../Layout/PaginationMovies/PaginationMovies";

const MoviesList: FC = () => {
    const {allMovies,moviesPage} = useAppSelector(state => state.movieReducer)
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllMovies(moviesPage))
    }, [moviesPage])

    return (

        <div className={'moviesList'}>
            {allMovies.map(movie =>

                <MoviesListCard key={movie.id} movie={movie}/>
            )}
            <div className={'pagination'}>
                <PaginationMovies/>
            </div>
        </div>

    );
};

export {MoviesList};