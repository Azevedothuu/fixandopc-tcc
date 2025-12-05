import { Typography } from "../typography";

export function LearningResources() {
  return (
    <section className="w-full py-16 px-6 ">
      

      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <h2 className="text-3xl font-bold text-primary-600 text-center mb-10">
          Conteúdos Confiáveis para Aprender IMC
        </h2>

        {/* Grid dos cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card */}
          <div className="bg-[#1a1424] rounded-xl p-4 shadow-lg hover:shadow-2xl transition-all border border-[#3a2f4a]">
            <h3 className="text-xl font-semibold text-white mb-3">Todas as peças de Computador em 8 MINUTOS!</h3>
            <Typography className="text-md font-semibold text-white mb-3">DuarttHub</Typography>

            <iframe
              className="w-full h-48 rounded-lg"
              src="https://www.youtube.com/embed/pFTgWgb5wiM?si=pbFsZvFDW-IvaSkY"
              title="DuartHub"
              allowFullScreen
            ></iframe>
          </div>

          <div className="bg-[#1a1424] rounded-xl p-4 shadow-lg hover:shadow-2xl transition-all border border-[#3a2f4a]">
            <h3 className="text-xl font-semibold text-white mb-3">Como Montar um PC GAMER</h3>
            <Typography className="text-md font-semibold text-white mb-3">TecnoArt</Typography>

            <iframe
              className="w-full h-48 rounded-lg"
              src="https://www.youtube.com/embed/UURtjMluM6w?si=q0XdoaIfQxI-s2xj"
              title="TecnoArt"
              allowFullScreen
            ></iframe>
          </div>

          <div className="bg-[#1a1424] rounded-xl p-4 shadow-lg hover:shadow-2xl transition-all border border-[#3a2f4a]">
            <h3 className="text-xl font-semibold text-white mb-3">AS MELHORES E PIORES FONTES DE PC GAMER PRA USAR HOJE!</h3>
            <Typography className="text-md font-semibold text-white mb-3">TecnoArt</Typography>
            <iframe
              className="w-full h-48 rounded-lg"
              src="https://www.youtube.com/embed/6YOwj7t2N2U?si=qijJ9qXwC5bKHhQV"
              title="tecnoArt"
              allowFullScreen
            ></iframe>
          </div>

          <div className="bg-[#1a1424] rounded-xl p-4 shadow-lg hover:shadow-2xl transition-all border border-[#3a2f4a]">
            <h3 className="text-xl font-semibold text-white mb-3">NOVO CURSO DE IMC</h3>
            <Typography className="text-md font-semibold text-white mb-3">Hardware Redes Brasil</Typography>
            <iframe
              className="w-full h-48 rounded-lg"
              src="https://www.youtube.com/embed/Vfp7eYYAUT4?si=kQAucvcqRVpYq6zT"
              title="Hardware Redes Brasil"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="bg-[#1a1424] rounded-xl p-4 shadow-lg hover:shadow-2xl transition-all border border-[#3a2f4a]">
            <h3 className="text-xl font-semibold text-white mb-3">ATUALIZAR PARA O WINDOWS 11 - QUALQUER PC</h3>
            <Typography className="text-md font-semibold text-white mb-3">Frame Rate Brazil</Typography>
            <iframe
              className="w-full h-48 rounded-lg"
              src="https://www.youtube.com/embed/mmMp7bTOEd0?si=pa-Qb3hq8ty2wCJ3"
              title="Frame Rate Brazil"
              allowFullScreen
            ></iframe>
          </div>
          
          <div className="bg-[#1a1424] rounded-xl p-4 shadow-lg hover:shadow-2xl transition-all border border-[#3a2f4a]">
            <h3 className="text-xl font-semibold text-white mb-3">COMO INSTALAR O WINDOWS 11 EM QUALQUER COMPUTADOR</h3>
            <Typography className="text-md font-semibold text-white mb-3">MW Informática</Typography>
            <iframe
              className="w-full h-48 rounded-lg"
              src="https://www.youtube.com/embed/FYvbrfobW5w?si=o43icljDtYGCix7H"
              title="MW Informática"
              allowFullScreen
            >
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
