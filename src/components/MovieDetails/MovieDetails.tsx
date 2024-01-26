import Image from 'next/image'
import BackgroundImage from './BackgroundImage'
import { handleConversionOfminutesToHours } from '@/utils'
import Genres from './Genres'
import Rating from './Rating'
import { Movie } from '@/types'

export default function MovieDetails({ movie }: { movie: Movie }) {
   const baseUrlImage = 'https://image.tmdb.org/t/p'

   return (
      <div className="w-full lg:h-size-image relative text-white bg-black blur-none flex flex-wrap lg:flex-nowrap gap-10 justify-center lg:justify-start text-center lg:text-left">
         <BackgroundImage baseUrl={baseUrlImage} pathImage={movie.backdrop_path} />

         <Image
            src={`${baseUrlImage}/original${movie.poster_path}`}
            width={500}
            height={500}
            alt={`${movie.title} movie poster`}
            style={{
               width: 'auto',
               height: '500px',
               objectFit: 'contain'
            }}
         />

         <div className="flex flex-col justify-between gap-5">
            <div className="flex flex-col gap-1">
               <h1 className="text-3xl">{movie.title}</h1>
               <p className="text-sm text-gray-300">Titulo original: {movie.original_title}</p>
               <p className="text-sm text-gray-300">
                  {`${movie.release_date.split('-')[0]} • 
               ${handleConversionOfminutesToHours(movie.runtime)}`}
                  <br />
               </p>
            </div>
            <Genres genres={movie.genres} />
            <p className="text-2xl px-10 lg:px-0 overflow-y-scroll">{movie.overview}</p>
            <Rating voteAverage={movie.vote_average} voteCount={movie.vote_count} />
         </div>
      </div>
   )
}
