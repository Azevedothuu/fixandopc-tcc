import { type JSX } from "react";
import logo from "../../assets/Logo.png";

export function Footer(): JSX.Element {
    return (
        <footer className="w-full bg-white py-4 border-t-2 border-primary-100">
            <div className=" mx-auto container flex flex-col md:flex-row justify-between items-center gap-6">
                {/* Logo + nome */}
                <div className="flex items-center gap-3">
                    <img src={logo} className="w-12 rounded-lg" />
                    <span className="text-lg font-semibold tracking-wide">
                        IMC
                    </span>
                </div>

                {/* Links */}

                {/* Direitos autorais */}
                <p className="text-xs text-gray-600 text-center md:text-right">
                    © {new Date().getFullYear()} IMC. Todos os direitos
                    reservados.
                </p>
            </div>
        </footer>
    );
}
