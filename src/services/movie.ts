const BASE_URL = process.env.EXPO_PUBLIC_MOVIE_URL;
const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

export async function getPopularMovies() {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=pt-BR`
  );
  const data = await response.json();
  return data.results;
}

export async function searchMovies(query: string) {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=pt-BR&query=${query}`
  );
  const data = await response.json();
  return data.results;
}
