import Link from "next/link";

export default function ReturnLink() {

  return (
    <Link href={`/`} className='text-gray-400 border-gray-400 bg-transparent border p-3 rounded-sm my-10 hover:text-white hover:bg-custom-pink hover:border-transparent transition-all duration-200 blur-none text-center w-fit'>Volte ao menu principal</Link>
  )
}