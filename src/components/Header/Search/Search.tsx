import React, {createRef, useEffect, useState} from 'react';

import SearchIcon from "@mui/icons-material/Search";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {useNavigate} from "react-router-dom";
import {getMoviesByName} from "../../../store/slices/movie.slice";


const Search = () => {

    const filmName = createRef<any>();
    const dispatch = useAppDispatch();
    const navigation = useNavigate();

    const {moviesPage} = useAppSelector(state => state.movieReducer)
    const [nameFilm, setNameFilm] = useState<string>("");


    const send = (e: any) => {
        e.preventDefault();
        if (filmName.current.value != "") {
            setNameFilm(filmName.current.value.toLowerCase());
            navigation("/byFilmName")
        }
    }

    useEffect(() => {
        if (nameFilm !== "") {
            dispatch(getMoviesByName({page: moviesPage, name: nameFilm}))
        }
    }, [nameFilm, moviesPage])

    return (
        <form onSubmit={send}>
            <div className='searchInputAndButton'>
                <input type="text" name={'filmName'} ref={filmName}/>
                <button>
                    <SearchIcon/>
                </button>
            </div>
        </form>
    );
};

export default Search;



