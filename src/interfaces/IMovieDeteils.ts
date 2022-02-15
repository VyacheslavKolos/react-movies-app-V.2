export interface IMovieDetails {
    id: number;
    adult: boolean;
    budget: number;
    original_title: string;
    release_date: string;
    vote_average: number;
    runtime: number;
    poster_path: string;
    overview: string;
    production_companies: [
        { name: string, logo_path: string, id: number }
    ];
    genres: [{ id: number, name: string }]
}