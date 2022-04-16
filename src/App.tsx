import React, {FC} from 'react';
import {Layout, MovieDetailsPage, MoviesList, MoviesListByGenrePage, MoviesListCard} from "./components";
import {Route, Routes} from "react-router-dom";
import {MovieListByFilmNamePage} from "./components/Pages/MovieListByFilmNamePage/MovieListByFilmNamePage";


const App:FC= () => {
    return (
        <div>


            <Routes>
                <Route path={"/"} element={<Layout/>}>

                    <Route path={'/'} element={<MoviesList />}/>
                    <Route path={'/movie/:id'} element={<MovieDetailsPage/>}/>
                    <Route path={'/genre/:id'} element={<MoviesListByGenrePage/>}/>
                    <Route path={'/byFilmName'} element={<MovieListByFilmNamePage/>}/>

                </Route>
            </Routes>
        </div>
    );
};

export default App;