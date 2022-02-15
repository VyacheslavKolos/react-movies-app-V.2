import {axiosService} from "./axios.service";

import {IGenre} from "../interfaces";

export const genresService = {
    getAll: () => axiosService.get<{ genres: IGenre[] }>('/genre/movie/list').then(value => value.data.genres)
}