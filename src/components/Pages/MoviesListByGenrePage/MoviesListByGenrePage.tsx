import React, {FC, useEffect} from 'react';
import {useParams} from "react-router-dom";

import {getMoviesByGenreId} from "../../../store/slices/movie.slice";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {MovieCardPageByGenre} from "../MovieCardPageByGenre/MovieCardPageByGenre";
import {PaginationMovies} from "../../Layout/PaginationMovies/PaginationMovies";

const MoviesListByGenrePage: FC = () => {

    const {id} = useParams<{ id: string }>()


    let dispatch = useAppDispatch();
    useEffect(() => {
        if (id) {
            dispatch(getMoviesByGenreId(+id))
        }
    }, [id])

    const {moviesByGenreId} = useAppSelector(state => state.movieReducer)


    return (
        <div className={'moviesList'}>
            {moviesByGenreId.map(movie => <MovieCardPageByGenre key={movie.id} movie={movie}/>)}'
            <div className={'pagination'}>
                <PaginationMovies/>
            </div>
        </div>
    );
};

export {MoviesListByGenrePage};