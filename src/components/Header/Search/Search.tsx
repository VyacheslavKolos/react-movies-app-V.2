// import React, {createRef} from 'react';
//
// import Paper from "@mui/material/Paper";
// import InputBase from "@mui/material/InputBase";
// import IconButton from "@mui/material/IconButton";
// import SearchIcon from "@mui/icons-material/Search";
//
//
// const Search = () => {
//
//     const filmName=createRef<any>();
//     const send = (e:any) => {
//         e.preventDefault();
//         console.log(filmName);
//     }
//
//
//     return (
//         <Paper
//             component="form"
//             onSubmit={send}
//             sx={{p: '2px 4px', display: 'flex', alignItems: 'center', width: 300}}
//         >
//             <InputBase
//                 name={'filmName'}
//                 type={'text'}
//                 ref={filmName}
//                 sx={{ml: 1, flex: 1}}
//                 placeholder="Search Movie"
//                 inputProps={{'aria-label': 'search movie'}}
//             />
//             <IconButton  type="submit" sx={{p: '10px'}} aria-label="search" >
//                 <SearchIcon/>
//             </IconButton>
//         </Paper>
//     );
// };
//
// export default Search;
//
//
//


import React, {createRef, useEffect} from 'react';


import SearchIcon from "@mui/icons-material/Search";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {getAllMovies, getMoviesByName} from "../../../store/slices/movie.slice";


const Search = () => {

    const filmName = createRef<any>();

    const {moviesResponse,arrFilmsByName} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    const send = (e: any) => {
        e.preventDefault();
        console.log(filmName.current.value.toLowerCase());
        console.log(moviesResponse.results.filter(film=>film.title.toLowerCase().includes(filmName.current.value.toLowerCase())));
        let arrFilmsByName=moviesResponse.results.filter(film=>film.title.toLowerCase().includes(filmName.current.value.toLowerCase()));

        // useEffect(() => {
        //     dispatch(getMoviesByName(arrFilmsByName))
        // }, [arrFilmsByName])
    }



    return (
        <form onSubmit={send}>
            <div>
                <input type="text" name={'filmName'} ref={filmName}/>
                <button>
                    <SearchIcon/>
                </button>

            </div>
        </form>
    );
};

export default Search;



