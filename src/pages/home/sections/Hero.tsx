import type { JSX } from "react";
import Logo from "@assets/Logo+Letreiro.webp";
import { Typography } from "@componentes/typography";
import { ButtonCSS } from "@/components/ButtonCSS";

export function Hero(): JSX.Element {
    return (
        <>
            <section id="Hero" className="container mx-auto">
                <div className="w-full h-screen flex justify-end">
                    <div className="flex w-auto flex-col items-center justify-center gap-8 lg:pr-20">
                        <img src={Logo} className="w-50" />
                        <Typography
                            size="heading-md"
                            className="leading-relaxed text-lg text-center text-primary-400"
                            as="p"
                        >
                            Um espaço seguro e colaborativo criado para
                            democratizar o
                            <br />
                            suporte técnico, ajudando qualquer pessoa a
                            entender, <br />
                            cuidar e resolver problemas no próprio computador.
                        </Typography>
                        <ButtonCSS
                            onClick={() => (window.location.hash = "sobrenos")}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
