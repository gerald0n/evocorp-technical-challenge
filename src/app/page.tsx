import MovieCard from '@/components/MovieCard'
import { getMovies } from '@/services/movies.service'
import { Movie, MovieResult } from '@/types'
import Link from 'next/link'

export default async function Home() {
   const { results: movies }: MovieResult = await getMovies()
   
   return (
      <div className="my-10 flex flex-col">
         <div className="container w-full flex flex-col justify-center items-center px-3 lg:items-start">
            <h1 className="text-white text-3xl mb-4 flex items-center gap-2">
               <div className="w-1 h-8 rounded-md bg-pink-700"></div>Filmes Populares
            </h1>
            <div className="lg:container lg:m-auto lg:flex lg:flex-wrap lg:gap-10 lg:items-center lg:justify-between">
               {movies.map((movie: Movie) => (
                  <Link key={movie.id} href={`/movie/${movie.id}`}>
                     <MovieCard
                        key={movie.id}
                        pathImage={movie.poster_path}
                        title={movie.title}
                        rating={movie.vote_average}
                     />
                  </Link>
               ))}
            </div>
         </div>
      </div>
   )
}
