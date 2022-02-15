import {axiosService} from "./axios.service";

import {IMovie, IMovieDetails, IMovieResponse} from "../interfaces";

export const moviesService = {
    getAll: () => axiosService.get<IMovieResponse>('/discover/movie'),
    getMovieById: (movie_id: number) => axiosService.get<IMovieDetails>(`movie/${movie_id}`),
    getMoviesByGenreId: (genreId: number) => axiosService.get<{ results: IMovie[] }>(`/discover/movie?with_genres=${genreId}`).then(value => value.data.results)
}