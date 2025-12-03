interface CardProps {
  title: string;
  description: string;
  buttonText: string;
  image: string;
}

export const Card = ({ title, description, buttonText, image }: CardProps) => {
  return (
    <div className="relative flex w-80 flex-col rounded-xl bg-linear-to-br from-white to-gray-50 bg-clip-border text-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

      {/* IMAGEM DINÂMICA */}
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-clip-border shadow-lg group">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />

        {/* overlay / efeito */}
        <div className="absolute inset-0 " />
      </div>

      <div className="p-6">
        <h5 className="mb-2 text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h5>

        <p className="text-base font-light leading-relaxed text-gray-700">
          {description}
        </p>
      </div>

      <div className="p-6 pt-0">
        <button className="group cursor-pointer w-full inline-flex items-center justify-center px-6 py-3 font-bold text-white rounded-lg bg-linear-to-br from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 shadow-lg shadow-primary-500/30 hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-0.5">
          <span className="flex items-center gap-2">
            {buttonText}
            <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" className="w-5 h-5 transform transition-transform group-hover:translate-x-1">
              <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};
