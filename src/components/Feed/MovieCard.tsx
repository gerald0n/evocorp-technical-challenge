import Image from 'next/image'
import Link from 'next/link'

export default function MovieCard({
   id,
   pathImage,
   title,
   rating,
   
}: {
   id: number
   pathImage: string
   title: string
   rating: number
}) {
   const baseUrlImage = 'https://image.tmdb.org/t/p'

   return (
      <Link href={`/movie/${id}`}
         className="my-5 flex flex-col items-center max-w-fill text-center gap-1 overflow-hidden rounded-bl-md rounded-br-md bg-custom-black text-white cursor-pointer"
         style={{
            height: '470px'
         }}
      >
         <Image
            src={`${baseUrlImage}/original${pathImage}`}
            alt={`${title} movie poster`}
            width={130}
            height={130}
            style={{
               width: 'auto',
               height: 'auto'
            }}
         />
         <div className="container text-start p-3 flex flex-col gap-2">
            <span className="flex items-center gap-1">
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
               {rating.toFixed(1)}
            </span>
            <h2 className="container overflow-wrap break-word">{title}</h2>
         </div>
      </Link>
   )
}
