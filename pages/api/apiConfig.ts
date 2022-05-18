interface ApiConfig {
  baseUrl: string
  apikey: string
  orinalImage(imgPath: string): string
}

const apiConfig: ApiConfig = {
  baseUrl: 'https://api.themoviedb.org/3',
  apikey: 'api_key=f342503e05811b9bde208a8cdbc7d3d0',
  orinalImage: (imgPath) => `https://image.tmdb.org/t/p/original${imgPath}`,
}

export default apiConfig
