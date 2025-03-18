import ReturnLink from '@/components/Feed/ReturnLink'
import MovieDetails from '@/components/MovieDetails/MovieDetails'
import { getDatailsMovieById } from '@/services/movies.service'
import { Movie as MovieType } from '@/types'

export default async function Movie({ params: { id } }: { params: { id: number } }) {
   const movie: MovieType = await getDatailsMovieById(id)

   return (
      <div className="flex flex-col items-center lg:items-start">
         <ReturnLink />
         <main className="container flex items-center justify-center mb-10">
            <MovieDetails movie={movie} />
         </main>
      </div>
   )
}
