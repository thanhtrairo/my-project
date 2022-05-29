import apiConfig from '../../pages/api/apiConfig'

const request = {
  fetchPopular: `${apiConfig.baseUrl}/movie/popular?${apiConfig.apikey}`,
  fetchTrending: `${apiConfig.baseUrl}/trending/all/week?${apiConfig.apikey}`,
  fetchComingSoon: `${apiConfig.baseUrl}/movie/upcoming?${apiConfig.apikey}`,
  fetchTopRate: `${apiConfig.baseUrl}/movie/top_rated?${apiConfig.apikey}`,
  fetchStreaming: `${apiConfig.baseUrl}/movie/now_playing?${apiConfig.apikey}`,
  fetchCasts: (id: string | undefined | string[]) => `${apiConfig.baseUrl}/movie/${id}/casts?${apiConfig.apikey}`,
  fetchVideoTrailer: `${apiConfig.baseUrl}/movie/453395/videos?${apiConfig.apikey}`,
  fetchMovieDetail: (id: string | undefined | string[]) => `${apiConfig.baseUrl}/movie/${id}?${apiConfig.apikey}`,
  fetchMovieDetailTrailler: (id: string | undefined | string[]) =>
    `${apiConfig.baseUrl}/movie/${id}/videos?${apiConfig.apikey}`,
  fetchRateMovie: (id: string | undefined | string[]) =>
    `${apiConfig.baseUrl}/movie/${id}/rating?${apiConfig.apikey}&session_id=f30f1f4f9ffab5f0b8414f4a1f4fc7c09f03fbe9`,
  fetchSearch: (query: string, typeSearch: string) =>
    `${apiConfig.baseUrl}/search/${typeSearch}?${apiConfig.apikey}&query=${query}`,
  fetchTvPopular: `${apiConfig.baseUrl}/tv/popular?${apiConfig.apikey}`,
  fetchTvLatest: `${apiConfig.baseUrl}/tv/latest?${apiConfig.apikey}`,
  fetchTvAiringToday: `${apiConfig.baseUrl}/tv/airing_today?${apiConfig.apikey}`,
  fetchTvOnTheAir: `${apiConfig.baseUrl}/tv/on_the_air?${apiConfig.apikey}`,
  fetchTvTopRate: `${apiConfig.baseUrl}/tv/top_rated?${apiConfig.apikey}`,
  fetchPersonPopular: `${apiConfig.baseUrl}/person/popular?${apiConfig.apikey}`,
  fetchPersonDetail: (id: string | undefined | string[]) => `${apiConfig.baseUrl}/person/${id}?${apiConfig.apikey}`,
  fetchPersonDetailMovie: (id: string | undefined | string[]) =>
    `${apiConfig.baseUrl}/person/${id}/movie_credits?${apiConfig.apikey}`,
  fetchLogin: `${apiConfig.baseUrl}/authentication/token/validate_with_login?${apiConfig.apikey}`,
  fetchToken: `${apiConfig.baseUrl}/authentication/token/new?${apiConfig.apikey}`,
  fetchWatchList: (accountId: string, sessionId: string) =>
    `${apiConfig.baseUrl}/account/${accountId}/watchlist/movies?session_id=${sessionId}&${apiConfig.apikey}`,
  fetchFavoriteList: (accountId: string, sessionId: string) =>
    `${apiConfig.baseUrl}/account/${accountId}/favorite/movies?session_id=${sessionId}&${apiConfig.apikey}`,
  fetchRatingList: (accountId: string, sessionId: string) =>
    `${apiConfig.baseUrl}/account/${accountId}/rated/movies?session_id=${sessionId}&${apiConfig.apikey}`,
}

export default request
