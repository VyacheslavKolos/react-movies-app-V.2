import React, {FC} from 'react';
import { useAppSelector} from "../../../hooks";
import {MovieCardPageByGenre} from "../MovieCardPageByGenre/MovieCardPageByGenre";
import {PaginationMovies} from "../../Layout/PaginationMovies/PaginationMovies";

const MovieListByFilmNamePage: FC = () => {

    const {arrFilmsByName} = useAppSelector(state => state.movieReducer);

    return (
        <div className={'moviesList'}>
            {arrFilmsByName.map(movie => <MovieCardPageByGenre key={movie.id} movie={movie}/>)}'
            <div className={'pagination'}>
                <PaginationMovies/>
            </div>
        </div>
    );
};

export {MovieListByFilmNamePage};