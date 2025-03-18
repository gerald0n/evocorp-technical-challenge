import { Movie, MovieResult, RequestOptions } from '@/types'

const token = process.env.API_KEY
const baseURL = process.env.NEXT_PUBLIC_API_URL

const options: RequestOptions = {
   method: 'GET',
   headers: {
      accept: 'application/json',
      Authorization: `Bearer ${token}`
   }
}

// getMovies baseURL/movie/popular

export async function getMovies(): Promise<MovieResult> {
   const response = await fetch(`${baseURL}/movie/popular?language=pt-BR&page=1`, options)
   
   return response.json()
}

// getDetailsMovieById baseURL/movie/${id}?language=pt-BR

export async function getDatailsMovieById(movieId: number): Promise<Movie> {
   const response = await fetch(`${baseURL}/movie/${movieId}?language=pt-BR`, options)

   return response.json()
}

// getMovieBySearch - baseURL/search/movie?query=${query}&language=pt-BR&page=1

export async function getMovieBySearch(query: string) {
   const response = await fetch(
      `${baseURL}/search/movie?query=${query}&language=pt-BR&page=1`,
      options
   )

   return response.json()
}
