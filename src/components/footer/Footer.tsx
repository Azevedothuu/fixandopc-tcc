import { type JSX } from "react"
import logo from "../../assets/Logo.png"

export function Footer(): JSX.Element {
  return (
    <footer className="w-full bg-neutral-primary text-white bg-black py-8"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo + nome */}
        <div className="flex items-center gap-3">
          <img src={logo} className="w-12 rounded-lg" />
        </div>

        {/* Links */}
        

        

        {/* Direitos autorais */}
        <p className="text-xs text-gray-300 text-center md:text-right">
          © {new Date().getFullYear()} IMC. Todos os direitos reservados.
        </p>

      </div>
    </footer>
  )
}
