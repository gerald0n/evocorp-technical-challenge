import { Gender } from "@/types";

export default function Genres({ genres }: { genres: Gender[]}) {
   return (
      <div className="flex gap-3 font-medium justify-center lg:justify-normal">
         {genres.map((gender: Gender) => (
            <span className="py-1 px-4 rounded-full text-black bg-white" key={gender.id}>
               {gender.name}
            </span>
         ))}
      </div>
   )
}
