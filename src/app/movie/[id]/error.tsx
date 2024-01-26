"use client";

import ReturnLink from "@/components/Feed/ReturnLink";
import Link from "next/link";

export default function Error() {

  return (
    <div className="flex flex-col container">
      <h1 className="text-3xl text-center font-bold text-black my-16">Ocorreu um erro ao exibir este filme!</h1>
      <Link className="flex items-center py-2" href={"/"}>
        <ReturnLink />
      </Link>
    </div>
  )
}