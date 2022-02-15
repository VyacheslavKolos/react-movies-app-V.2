import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IGenre} from "../../interfaces";

import {genresService} from "../../services/genresService";

interface IGenreState {
    genres: IGenre[],
    status: null;
    errors: null;

}

const initialState: IGenreState = {
    genres: [],
    status: null,
    errors: null,
}

export const getAllGenres = createAsyncThunk(
    'movieSlice/getAllMovies',
    async (_, {dispatch}) => {
        const genres = await genresService.getAll()
        dispatch(setGenresResponse(genres))
    }
)

export const genreSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setGenresResponse: ((state, action: PayloadAction<IGenre[]>) => {
            state.genres = action.payload;
        }),
    },
    extraReducers: {}
})

const genreReducer = genreSlice.reducer;
export default genreReducer;

export const {setGenresResponse} = genreSlice.actions;