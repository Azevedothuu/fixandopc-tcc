import { Navbar } from "@/components"
import { Footer } from "@/components/footer"
import { LearningResources } from "@/components/learningresources/LearningResources"

export {} from "react"

export function LearnIMC() {
  return (
    <>
      <section
        id="community"
        className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('/src/assets/background.jpg')",
        }}
      >
        {/* Navbar fixo */}
        <Navbar />

        {/* Conteúdo central */}
        <div className="flex items-center flex-col gap-7 pt-32 pb-10">
          <LearningResources />
        </div>
      </section>
      <Footer/>

    </>
  )
}
