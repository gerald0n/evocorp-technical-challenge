export type RequestOptions = {
   method: string
   headers: {
      accept: string
      Authorization: string
   }
}

export type Movie = {
   id: number
   title: string
   poster_path: string
   vote_average: number
}

export type MovieResult = {
   results: Movie[]
}
