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

export type GenreType = { id: number; name: string };