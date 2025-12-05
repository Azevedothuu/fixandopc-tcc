import { type JSX, useEffect, useState } from "react"
import logo from "../../assets/Logo.png"
import { 
  AiFillHome,
  AiOutlineTeam,
  AiFillTool
} from "react-icons/ai"
import { Button } from "../Button"

export function Navbar(): JSX.Element {
  const [username, setUsername] = useState<string | null>(null)

  useEffect(() => {
    const storedUser = localStorage.getItem("username")
    const storedToken = localStorage.getItem("token")

    if (storedUser && storedToken) {
      setUsername(storedUser)
    }
  }, [])

  return (
    <header className="fixed top-0 left-0 w-full bg-neutral-primary shadow-md z-50">
      <nav className="flex items-center justify-between max-w-6xl mx-auto px-6 py-3">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <a href="/">
            <img src={logo} className="w-10 rounded-lg" />
          </a>
        </div>

        {/* Links */}
        <ul className="flex items-center gap-6 text-primary-700 font-medium">
          <li className="hover:text-primary-800 font-bold transition-colors cursor-pointer flex items-center gap-1">
            <AiFillHome />
            <a className="pt-1 text-md" href="/">
              Início
            </a>
          </li>

          <li className="hover:text-primary-800 font-bold transition-colors cursor-pointer flex items-center gap-1">
            <AiOutlineTeam />
            <a className="pt-1 text-md" href="/Community">
              Comunidade
            </a>
          </li>

          <li className="hover:text-primary-800 font-bold transition-colors cursor-pointer flex items-center gap-1">
            <AiFillTool />
            <a className="pt-1 text-md" href="/LearnIMC">
              Aprender IMC
            </a>
          </li>
        </ul>

        {/* Login ou username */}
        <div>
          {username ? (
            <p className="text-primary-700 font-semibold">
              Olá, <span className="text-primary-900">{username}</span>
            </p>
          ) : (
            <Button />
          )}
        </div>

      </nav>
    </header>
  )
}
