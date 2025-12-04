import { Typography } from "@/components/typography"
import type { JSX } from "react"

export function Learn(): JSX.Element {
  return (
    <section className="p-10 " id="Learn"
    
    >
      <div className="flex w-full justify-center">
        <div>
          <Typography className="text-5xl p-8 font-bold   text-primary-700">
            Aprenda IMC
          </Typography>
        </div>
      </div>

      <div>
        <div className="p-6 ">
          <Typography
          as="p"
          size="md"
          className="leading-loose text-white "
          >
            O IMC — Instalação e Manutenção de Computadores é um projeto
            desenvolvido para democratizar o conhecimento técnico, oferecendo ao
            público uma comunidade acessível e materiais em vídeo que ensinam
            procedimentos essenciais de diagnóstico, manutenção e solução de
            problemas. Nosso objetivo é promover autonomia, permitindo que
            qualquer usuário compreenda e resolva questões relacionadas ao
            próprio computador com segurança e clareza, seguindo práticas
            tradicionais e confiáveis do setor. O IMC nasce como um espaço de
            aprendizagem contínua, colaborativa e focada em transmitir
            conhecimento de forma simples, responsável e eficaz.
          </Typography>
        </div>

        {/* ====================================*/}
        {/* Materiais em destaque               */}
        {/* ====================================*/}

      </div>
    </section>
  )
}
