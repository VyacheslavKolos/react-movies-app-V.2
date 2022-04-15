import {axiosService} from "./axios.service";

import {IMovie, IMovieDetails} from "../interfaces";

export const moviesService = {
    getAll: (page:number) => axiosService.get<{ results: IMovie[] }>(`/discover/movie?&page=${page}`).then(value => value.data.results),
    getMovieById: (movie_id: number) => axiosService.get<IMovieDetails>(`movie/${movie_id}`),
    getMoviesByGenreId: (genreId: number) => axiosService.get<{ results: IMovie[] }>(`/discover/movie?with_genres=${genreId}`).then(value => value.data.results),
    getMoviesByName: (page:number, name:string) => axiosService.get<{ results: IMovie[] }>(`/search/movie?&query=${name}&page=${page}`).then(value => value.data.results)
}