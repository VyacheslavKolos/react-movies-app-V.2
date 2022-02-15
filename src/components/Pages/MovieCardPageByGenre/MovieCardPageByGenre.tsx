import React, {FC} from 'react';
import {Link} from "react-router-dom";

import {IMovie} from "../../../interfaces";
import {urls} from "../../../constants";
import Stars from "../../MoviesListCard/Stars/Stars";

const MovieCardPageByGenre: FC<{ movie: IMovie }> = ({movie}) => {
    const {title, id, vote_average, release_date, overview, poster_path} = movie
    return (
        <div>
            <Link to={`/movie/${movie.id.toString()}`}>
                <div className={'movieCard'}>
                    <img src={`${urls.image}${poster_path}`} alt="sd"/>
                    <div className={"description"}>
                        <p style={{fontSize: 19, fontFamily: "sans-serif"}}>{title}</p>
                        <Stars/>
                        <p className={"overview"}>{overview}</p>
                        <p className={'date'}>{release_date}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export {MovieCardPageByGenre};