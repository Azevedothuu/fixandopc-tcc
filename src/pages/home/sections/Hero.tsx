import type { JSX } from "react"
import Logo from "../../../assets/Logo+Letreiro.png"
import { Typography } from "../../../components/typography"
import { Button } from "../../../components"




export function Hero(): JSX.Element {
  return (
    <>
    <section id="#">

      <div className="flex justify-end pt-30 ">
        <div className="flex">
          <img src={Logo} className="w-85" />
        </div>

        <div className="flex text-primary-300">
          <div className="flex items-center">
            <Typography size="xs" className=" leading-relaxed pr-20" as="p">
              Um espaço seguro e colaborativo criado para democratizar o <br />
              suporte técnico, ajudando qualquer pessoa a entender, <br />
              cuidar e resolver problemas no próprio computador.
            </Typography>
          </div>          
        </div>    
      </div>

      <div className="flex justify-center">

        <Button
        />
      </div>
    </section>

    </>
  )
}


