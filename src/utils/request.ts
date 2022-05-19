import apiConfig from '../../pages/api/apiConfig'

const request = {
  fetchPopular: `${apiConfig.baseUrl}/movie/popular?${apiConfig.apikey}`,
  fetchTrending: `${apiConfig.baseUrl}/trending/all/week?${apiConfig.apikey}`,
  fetchCommingSoon: `${apiConfig.baseUrl}/movie/upcoming?${apiConfig.apikey}`,
  fetchStreamming: `${apiConfig.baseUrl}/movie/now_playing?${apiConfig.apikey}`,
  fetchCasts: (id: string) => `${apiConfig.baseUrl}/movie/${id}/casts?${apiConfig.apikey}`,
  fetchSearchMovie: `${apiConfig.baseUrl}/search/movie?${apiConfig.apikey}`,
  fetchVideoTrailler: `${apiConfig.baseUrl}/movie/453395/videos?${apiConfig.apikey}`,
  fetchMovieDetail: (id: string) => `${apiConfig.baseUrl}/movie/${id}?${apiConfig.apikey}`,
  fetchMovieDetailTrailler: (id: string) => `${apiConfig.baseUrl}/movie/${id}/videos?${apiConfig.apikey}`,
}

export default request
