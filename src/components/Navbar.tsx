import Image from "next/image";
import play from "../../public/play.png"

export default function Navbar() {
   return (
      <nav className="w-full bg-custom-black h-16 text-white flex items-center justify-center">
         <div className="container w-full flex items-center gap-3">
          <Image src={play} width={44} height={44} alt='PlayIcon' />
          <h1 className="text-2xl font-bold">EVOFLIX</h1>
         </div>
      </nav>
   )
}
