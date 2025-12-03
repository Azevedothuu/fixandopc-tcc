import type { JSX } from "react"
import Logo from "@assets/Logo+Letreiro.png"
import { Typography } from "@componentes/typography"
import { ButtonCSS } from "@/components/ButtonCSS"


export function Hero(): JSX.Element {


  return (
    <>
      <section id="Hero">
        <div className="w-full h-screen flex justify-end">
          <div className="items-center flex">
            <img src={Logo} className="w-88" />
          </div>

          <div className="flex flex-col justify-center gap-4 p-4 text-primary-300">
            <div className="flex w-auto ">
              <Typography size="xs" className="leading-relaxed pr-20" as="p">
                Um espaço seguro e colaborativo criado para democratizar o
                <br />
                suporte técnico, ajudando qualquer pessoa a entender, <br />
                cuidar e resolver problemas no próprio computador.
              </Typography>
            </div>

            <div className="flex justify-center ">
              <ButtonCSS
              onClick={() => window.location.hash = "sobrenos"} 
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
