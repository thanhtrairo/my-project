import apiConfig from '../../pages/api/apiConfig'

const request = {
  fetchPopular: `${apiConfig.baseUrl}/movie/popular?${apiConfig.apikey}`,
  fetchTrending: `${apiConfig.baseUrl}/trending/all/week?${apiConfig.apikey}`,
  fetchCommingSoon: `${apiConfig.baseUrl}/movie/upcoming?${apiConfig.apikey}`,
  fetchStreamming: `${apiConfig.baseUrl}/movie/now_playing?${apiConfig.apikey}`,
  fetchCasts: (id: string | undefined | string[]) => `${apiConfig.baseUrl}/movie/${id}/casts?${apiConfig.apikey}`,
  fetchSearchMovie: `${apiConfig.baseUrl}/search/movie?${apiConfig.apikey}`,
  fetchVideoTrailler: `${apiConfig.baseUrl}/movie/453395/videos?${apiConfig.apikey}`,
  fetchMovieDetail: (id: string | undefined | string[]) => `${apiConfig.baseUrl}/movie/${id}?${apiConfig.apikey}`,
  fetchMovieDetailTrailler: (id: string | undefined | string[]) =>
    `${apiConfig.baseUrl}/movie/${id}/videos?${apiConfig.apikey}`,
  fetchRateMovie: (id: string | undefined | string[]) =>
    `${apiConfig.baseUrl}/movie/${id}/rating?${apiConfig.apikey}&session_id=f30f1f4f9ffab5f0b8414f4a1f4fc7c09f03fbe9`,
}

export default request
