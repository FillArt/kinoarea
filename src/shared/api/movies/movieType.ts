export type MovieType = {
    adult?: false
    backdrop_path?: string
    genre_ids?: number[]
    genres?: string[]
    id?: number
    original_language?: string
    original_title?: string
    overview?: number
    popularity?: number
    poster_path?: string
    release_date?: string
    title: string
    video?: boolean
    vote_average: number
    vote_count?: number
}

export type MoviesResponseType = {
    page: number;
    results: MovieType[];
    total_pages: number;
    total_results: number;
};

export type GenreType = Record<number, string>;

export type GenresResponseType = {
    genres: { id: number, name: string }[]
}


export type TrailerResponseType = {
    id: string
    iso_639_1: string
    iso_3166_1: string
    key: string
    name: string
    official: boolean
    published_at: string
    site: string
    size: number
    type: string
}


export type TrailerType = {
    id: number,
    posterUrl: string,
    trailer: {
        name: string,
        url: string,
    }
}

export type BoxOfficeType = {
    title: string,
    revenue: string,
    img: string,
    budget: string,
    backdrop_path?: string
}


type GenreInfoMovieType = {
    id: number;
    name: string;
};

type ProductionCompany = {
    id: number;
    name: string;
    logo_path: string | null;
    origin_country: string;
};

type ProductionCountry = {
    iso_3166_1: string;
    name: string;
};

type SpokenLanguage = {
    english_name: string;
    iso_639_1: string;
    name: string;
};

export type MovieMainInfo = {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: null | any; // Можно уточнить, если коллекция будет использоваться
    budget: number;
    genres: GenreInfoMovieType[];
    homepage: string;
    id: number;
    imdb_id: string | null;
    origin_country: string[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};
