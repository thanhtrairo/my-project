const API_KEY = 'api_key=f342503e05811b9bde208a8cdbc7d3d0'
const BASE_URL = 'https://api.themoviedb.org/3'

const request = {
  fetchPopular: `${BASE_URL}/movie/popular?${API_KEY}`,
  fetchTrending: `${BASE_URL}/trending/all/week?${API_KEY}`,
}

export default request
