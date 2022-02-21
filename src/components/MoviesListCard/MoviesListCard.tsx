import React, {FC} from 'react';
import {Link} from "react-router-dom";

import {IMovie} from "../../interfaces";
import './MovieCard.css'
import Stars from "./Stars/Stars";
import {urls} from "../../constants";


const MoviesListCard: FC<{ movie: IMovie }> = ({movie}) => {
    const {title, id, vote_average, release_date, overview, poster_path} = movie

    return (
        <Link to={`/movie/${movie.id.toString()}`}>
            <div className={'movieCard'}>
                <img src={`${urls.image}${poster_path}`} alt="sd"/>
                <div className={"description"}>
                    <p style={{fontSize: 19, fontFamily: "sans-serif"}}>{title}</p>
                    <Stars vote_average={vote_average}/>
                    <p className={"overview"}>{overview}</p>
                    <p className={'date'}>{release_date}</p>
                </div>
            </div>
        </Link>
    );
};

export {MoviesListCard};