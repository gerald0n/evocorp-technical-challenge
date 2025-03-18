import MovieCard from "@/components/Feed/MovieCard";
import { getMovies } from "@/services/movies.service";
import { Movie, MovieResult } from "@/types";

export default async function Home() {
  const { results: movies }: MovieResult = await getMovies();

  return (
    <div className="my-10 flex flex-col">
      <div className="container w-full flex flex-col justify-center items-center px-3 lg:items-start">
        <h1 className="text-white text-3xl mb-4 flex items-center gap-2">
          <div className="w-1 h-8 rounded-md bg-custom-pink"></div>Filmes
          Populares
        </h1>
        <div className="lg:container lg:m-auto lg:flex lg:flex-wrap lg:gap-10 lg:items-center lg:justify-between">
          {movies?.map((movie: Movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}
