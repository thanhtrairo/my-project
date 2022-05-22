// import axios from 'axios'
import { axiosInstance } from './setup'

export default class MovieServices {
  static async getPopularMovies() {
    return axiosInstance.get('/movie/popular')
  }

  static async getTrendingMovies() {
    return axiosInstance.get('/trending/all/weeks')
  }

  static async getComingSoonMovies() {
    return axiosInstance.get('/movie/upcoming')
  }

  static async getStreamingMovies() {
    return axiosInstance.get('/movie/now_playing')
  }

  static async getMovieCasts(movieId: string | string[] | undefined) {
    return axiosInstance.get(`/movie/${movieId}/casts`)
  }

  static async getMovieDetails(movieId: string | string[] | undefined) {
    return axiosInstance.get(`/movie/${movieId}`)
  }

  static async getMovieVideos(movieId: string | string[] | undefined) {
    return axiosInstance.get(`/movie/${movieId}/videos`)
  }

  static async getPopularPerson() {
    return axiosInstance.get('/person/popular')
  }

  static async getPersonDetail(personId: string | string[] | undefined) {
    return axiosInstance.get(`/person/${personId}`)
  }

  static async getPersonMovies(personId: string | string[] | undefined) {
    return axiosInstance.get(`/person/${personId}/movie_credits`)
  }

  static async getSearch(query: string, typeSearch: string) {
    return axiosInstance.get(`/search/${typeSearch}?query=${query}`)
  }

  static async postRateMovie(movieId: string, sessionId: string, value: { value: number }, config: Object) {
    return axiosInstance.post(`/movie/${movieId}/rating?session_id=${sessionId}`, value, config)
  }
}
