import React, {FC, useEffect} from 'react';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {getMovieDetails} from "../../store/slices/movie.slice";
import './MovieDetailsPage.css'
import {urls} from "../../constants";
import {Company} from "./Company/Company";

const MovieDetailsPage: FC = () => {

    let dispatch = useAppDispatch();
    const {movieDetails} = useAppSelector(state => state.movieReducer)

    const url = document.location.href
    const id = url.split('movie/')[1]

    useEffect(() => {
        dispatch(getMovieDetails(parseInt(id)))
    }, [])
    const {
        original_title,
        release_date,
        vote_average,
        runtime,
        poster_path,
        overview,
        production_companies,
        genres
    } = movieDetails;

    return (
        <div>
            <div className={'content-section'}>
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'movie-info-box'}>
                            <h2 className={'name'}>{original_title}</h2>
                            <div className={'features'}>
                                <div className={'rate'}>
                                    <p>average rating: {vote_average}</p>
                                    <img
                                        src="http://digiflex.themezinho.net/wp-content/themes/digiflex/images/imdb-logo.svg"
                                        alt="rate"/>
                                    <p>Score</p>
                                </div>
                                <div className={'year'}>{release_date}</div>
                                <div className={'range'}>runtime: {runtime} min</div>
                                <div className={'category'}>{genres.map(genre => <p
                                    key={genre.id}>{genre.name}</p>)}</div>
                            </div>
                            <p className={'descriptionn'}>
                                {overview}
                            </p>
                            <div className={'companies'}>
                                <Company movieDetails={movieDetails}/>
                            </div>
                        </div>
                        <div className={'movie-side-box'}>
                            <img src={`${urls.image}${poster_path}`} alt={`${original_title}`}/>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export {MovieDetailsPage};