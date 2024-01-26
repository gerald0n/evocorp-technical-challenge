import { getDatailsMovieById } from '@/services/movies.service'
import { Gender, Movie } from '@/types'
import { handleConversionOfminutesToHours } from '@/utils'
import Image from 'next/image'

export default async function Movie({ params: { id } }: { params: { id: number } }) {
   const movie: Movie = await getDatailsMovieById(id)
   const baseUrlImage = 'https://image.tmdb.org/t/p'

   return (
      <main className="container flex items-center justify-center my-10">
         <div className="w-full lg:h-size-image relative text-white bg-black blur-none flex flex-wrap lg:flex-nowrap gap-10 justify-center lg:justify-start text-center lg:text-left">
            <div
               className="w-full min-h-screen absolute blur-3xl -z-10"
               style={{
                  backgroundImage: `url(${baseUrlImage}/original${movie.backdrop_path})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'top'
               }}
            ></div>

            <Image
               src={`${baseUrlImage}/original${movie.poster_path}`}
               width={500}
               height={500}
               alt={`${movie.title} movie poster`}
               style={{
                  width: 'auto',
                  height: '500px',
                  objectFit: "contain"
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
               <div className="flex gap-3 font-medium justify-center lg:justify-normal">
                  {movie.genres.map((gender: Gender) => (
                     <span className="border py-1 px-4 rounded-full" key={gender.id}>
                        {gender.name}
                     </span>
                  ))}
               </div>
               <p className="text-2xl px-10 lg:px-0 overflow-y-scroll">{movie.overview}</p>
               <div>
                  <span className='flex items-center justify-center lg:justify-normal gap-1'>
                     <svg
                        width="16"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ipc-icon ipc-icon--star-inline text-yellow-400"
                        viewBox="0 0 28 28"
                        fill="currentColor"
                        role="presentation"
                     >
                        <path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path>
                     </svg>
                    
                     <pre className='font-sans'>
                     {`${movie.vote_average.toFixed(1)}/10`}   {`${movie.vote_count} votos`}
                     </pre>
                     
                  </span>
               </div> 
            </div>
         </div>
      </main>
   )
}

//Title
//original_title
//release_date
//genres[]
//vote_average
//vote_count
//overview
//popularity
