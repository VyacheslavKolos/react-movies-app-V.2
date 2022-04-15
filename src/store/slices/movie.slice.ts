import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IMovie, IMovieDetails, IMovieResponse} from "../../interfaces";
import {moviesService} from "../../services";

interface IMovieState {
    allMovies: IMovie[];
    status: null;
    errors: null;
    movieDetails: IMovieDetails;
    LinkOnClick: boolean;
    moviesByGenreId: IMovie[];
    moviesPage:number;
    //
    arrFilmsByName:IMovie[];
    //
}

const initialState: IMovieState = {
    allMovies: [],
    status: null,
    errors: null,
    movieDetails: {
        id: 0,
        adult: false,
        budget: 0,
        original_title: '',
        release_date: '',
        vote_average: 0,
        runtime: 0,
        poster_path: '',
        overview: '',
        production_companies: [
            {name: '', logo_path: '', id: 0}
        ],
        genres: [{id: 0, name: ''}]
    },
    LinkOnClick: false,
    moviesByGenreId: [],
    moviesPage:1,
    //
    arrFilmsByName:[]
    //
}


export const getAllMovies = createAsyncThunk(
    'movieSlice/getAllMovies',
    async (page:number, {dispatch}) => {
        const data = await moviesService.getAll(page)
        dispatch(setAllMovies(data))
    }
)

export const getMovieDetails = createAsyncThunk(
    'movieSlice/getMovieDetails',
    async (id: number, {dispatch}) => {
        const {data} = await moviesService.getMovieById(id)
        dispatch(setMovieDetails({movieDetails: data}))
    }
)

export const getMoviesByGenreId = createAsyncThunk(
    'movieSlice/getMoviesByGenreId',
    async (id: number, {dispatch}) => {
        const movies = await moviesService.getMoviesByGenreId(id)
        // console.log(movies);
        dispatch(setMoviesByGenreId(movies))
    }
)

export const getMoviesPage = createAsyncThunk(
    'movieSlice/getMoviesByGenreId',
    async (page: number, {dispatch}) => {
       await dispatch(setPage(page))
    }
)

//
export const getMoviesByName = createAsyncThunk(
    'movieSlice/getMoviesByName',
    async ({ page, name } : { page: number, name: string }, { dispatch }) => {
        const data = await moviesService.getMoviesByName(page,name)
        dispatch(setMoviesByName(data))
    }
)
//

export const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setAllMovies: ((state,action: PayloadAction<IMovie[]>) => {
            state.allMovies = action.payload;
        }),
        setMovieDetails: ((state, action: PayloadAction<{ movieDetails: IMovieDetails }>) => {
            state.movieDetails = action.payload.movieDetails;
        }),
        setMoviesByGenreId: ((state, action: PayloadAction<IMovie[]>) => {
            state.moviesByGenreId = action.payload;
        }),
        setPage: ((state, action: PayloadAction<number>) => {
            state.moviesPage = action.payload;
        }),
//
        setMoviesByName: ((state, action: PayloadAction<IMovie[]>) => {
            state.arrFilmsByName = action.payload;
        })
//
    },
    extraReducers: {}
})

const movieReducer = movieSlice.reducer;
export default movieReducer;

export const {setAllMovies, setMovieDetails, setMoviesByGenreId,setPage,
    //
    setMoviesByName
//
} = movieSlice.actions;