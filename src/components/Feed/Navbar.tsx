import Image from 'next/image'
import play from '../../../public/play.png'
import Link from 'next/link'

export default function Navbar() {
   return (
      <nav className="w-full bg-custom-black h-16 text-white flex items-center justify-center">
         <div className="container flex items-center">
            <Link href={`/`} className="w-full flex items-center gap-3">
               <Image src={play} width={44} height={44} alt="PlayIcon" />
               <h1 className="text-2xl lg:block hidden font-bold">EVOFLIX</h1>
            </Link>
            <div className="container absolute text-center flex justify-center">
               <input
                  className="w-96 p-2 rounded-md text-black border-none outline-none z-10"
                  type="text"
                  placeholder="Filtrar filme"
               />
            </div>
         </div>
      </nav>
   )
}
