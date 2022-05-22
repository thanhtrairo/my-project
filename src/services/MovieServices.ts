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

  static async getMovieCasts(movieId: string) {
    return axiosInstance.get(`/movie/${movieId}/casts`)
  }

  static async getMovieDetails(movieId: string) {
    return axiosInstance.get(`/movie/${movieId}`)
  }

  static async getMovieVideos(movieId: string) {
    return axiosInstance.get(`/movie/${movieId}/videos`)
  }
}
