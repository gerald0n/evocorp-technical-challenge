export type RequestOptions = {
   method: string
   headers: {
      accept: string
      Authorization: string
   }
}

export type Gender = {
   id: number
   name: string
}

export type Movie = {
   id: number
   title: string
   poster_path: string
   vote_average: number
   vote_count: number
   backdrop_path: string
   original_title: string
   release_date: string
   adult: boolean
   runtime: number
   overview: string
   genres: Gender[]
}

export type MovieResult = {
   results: Movie[]
}
