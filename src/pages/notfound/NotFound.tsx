import { type JSX } from "react"
import { Link } from "react-router-dom"

export function NotFound(): JSX.Element {
  return (
    <div className="w-full h-screen  flex flex-col justify-center items-center bg-primary-900 text-white px-6">
      
      <h1 className="text-9xl font-bold tracking-widest">404</h1>

      <p className="mt-4 text-lg text-gray-300 max-w-md text-center shadow-2xl rounded-b-4xl">
        Ops… parece que você tentou abrir algo que não existe.  
        Nada de novo, né? A internet sempre aprontando.
      </p>

      <Link
        to="/"
        className="mt-8 px-6 py-3  bg-primary-800 text-white-900 font-semibold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
      >
        Voltar ao início
      </Link>

    </div>
  )
}
