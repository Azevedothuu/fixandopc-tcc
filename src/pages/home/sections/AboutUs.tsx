import type { JSX } from "react"
import logo from '../../../assets/Logo.png'
import { Typography } from "../../../components/typography"

export function AboutUs () : JSX.Element {

    return (
        <>
        <section id="AboutUS">
            <div className="flex justify-center ">
            <img 
            className="w-80  rounded-4xl mb-7"
            src={logo} />
            </div>

            <div className="text-black flex  justify-center mb-5">
            <Typography
            className="text-5xl p-5 border-2 border-primary-300 shadow-2xl rounded-2xl"
            >
            Sobre Nós
            </Typography>                
            </div>

            <div className="p-4">
                <Typography
                className="text-center leading-relaxed shadow-2xl rounded-full text-xl"
                >                
                Somos uma equipe focada em aproximar as pessoas da tecnologia. Criamos este fórum para oferecer suporte técnico simples,<br/>
                confiável e gratuito, reunindo usuários leigos e profissionais em um mesmo espaço. Aqui, valorizamos a troca de conhecimento, a colaboração e a autonomia:<br/>
                queremos que cada pessoa aprenda a resolver seus próprios problemas de computador com orientação clara e segura. Nosso objetivo é democratizar o acesso à <br/> informação e construir uma comunidade que cresce junto, compartilhando experiências reais sobre hardware e software.

                </Typography>
            </div>

            <div className="flex justify-center">
                
            </div>

        </section>
        </>
    )
}

