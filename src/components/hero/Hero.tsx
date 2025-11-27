import type { JSX } from "react"
import Logo from "../../assets/Logo+Letreiro.png"
import { Typography } from "../typography"

export function Hero(): JSX.Element {
  return (
    <>
      <div className="flex justify-end pt-25 pl-8">
        
        <div className="flex">
          <img src={Logo} className="w-98" />
        </div>

        <div className="flex text-primary-300">

        <div className="flex items-center">
        <Typography 
        size="xs"
        className=" leading-relaxed pr-20"
        >
        Um espaço seguro e colaborativo criado para democratizar o <br /> 
        suporte técnico,
        ajudando qualquer pessoa a entender,    <br />
        cuidar e resolver problemas no próprio computador
        </Typography>
        </div>
        </div>
      </div>
    </>
  )
}

export default Hero
