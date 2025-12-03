import { motion } from "framer-motion"
import type { JSX } from "react"
import logo from '../../../assets/Logo.png'
import { Typography } from "../../../components/typography"

export function AboutUs(): JSX.Element {
  return (
    <section className="p-10 " id="sobrenos">
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img 
          className="w-70 rounded-4xl mb-7 border-primary-300 shadow-2xl"
          src={logo}
        />
      </motion.div>

      <motion.div
        className="text-primary-700 flex justify-center mb-5"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Typography className="text-5xl p-5 ">
          Sobre Nós
        </Typography>
      </motion.div>

      <motion.div
        className="p-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          as="p"
          size="md"
          className="text-center leading-loose "
        >
          Somos uma equipe focada em aproximar as pessoas da tecnologia. Criamos este fórum para oferecer suporte técnico simples, confiável e gratuito, reunindo usuários leigos e profissionais em um mesmo espaço. Aqui, valorizamos a troca de conhecimento, a colaboração e a autonomia: queremos que cada pessoa aprenda a resolver seus próprios problemas de computador com orientação clara e segura. Nosso objetivo é democratizar o acesso à informação e construir uma comunidade que cresce junto, compartilhando experiências reais sobre hardware e software.
        </Typography>
      </motion.div>

      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <iframe
          className="rounded-4xl shadow-2xl"
          width="681"
          height="383"
          src="https://www.youtube.com/embed/-e9kEqR4XLc"
          title="Introdução"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </motion.div>

    </section>
  )
}
