export interface MovieType {
  title: string
  backdrop_path: string
  media_type?: string
  release_date?: string
  first_air_date: string
  genre_ids: number[]
  id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  vote_average: number
  vote_count: number
}

export interface CastType {
  adult: boolean
  gender: number
  id: number
  known_for_department: 'Acting'
  name: string
  original_name: string
  popularity: number
  profile_path: string
  cast_id: number
  character: string
  credit_id: string
  order: number
}

export interface VideoTrailler {
  iso_639_1: string
  iso_3166_1: string
  name: string
  key: string
  site: string
  size: number
  type: string
  official: boolean
  published_at: Date
  id: string
}

export interface VideoTraillerType {
  iso_639_1: string
  iso_3166_1: string
  name: string
  key: string
  site: string
  size: number
  type: string
  official: boolean
  published_at: Date
  id: string
}

export interface Props {
  movieTrending: MovieType[]
  moviePopular: MovieType[]
  movieCommingSoon: MovieType[]
  movieStreamming: MovieType[]
  casts: CastType[]
  videoTrailers: VideoTrailler[]
}
