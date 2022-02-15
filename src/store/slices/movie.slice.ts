import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IMovie, IMovieDetails, IMovieResponse} from "../../interfaces";
import {moviesService} from "../../services";

interface IMovieState {
    moviesResponse: IMovieResponse;
    status: null;
    errors: null;
    movieDetails: IMovieDetails;
    LinkOnClick: boolean;
    moviesByGenreId: IMovie[];
}

const initialState: IMovieState = {
    moviesResponse: {
        results: []
    },
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
    moviesByGenreId: []
}


export const getAllMovies = createAsyncThunk(
    'movieSlice/getAllMovies',
    async (_, {dispatch}) => {
        const {data} = await moviesService.getAll()
        dispatch(setMoviesResponse({moviesResponse: data}))
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


export const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setMoviesResponse: ((state, action: PayloadAction<{ moviesResponse: IMovieResponse }>) => {
            state.moviesResponse = action.payload.moviesResponse;
        }),
        setMovieDetails: ((state, action: PayloadAction<{ movieDetails: IMovieDetails }>) => {
            state.movieDetails = action.payload.movieDetails;
        }),
        setMoviesByGenreId: ((state, action: PayloadAction<IMovie[]>) => {
            state.moviesByGenreId = action.payload;
        })
    },
    extraReducers: {}
})

const movieReducer = movieSlice.reducer;
export default movieReducer;

export const {setMoviesResponse, setMovieDetails, setMoviesByGenreId} = movieSlice.actions;