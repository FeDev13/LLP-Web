export const Amparos = () => {
  return (
    <div className=" grid h-full flex-grow card rounded-box place-items-center w-1/2 mt-20 mx-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="black"
        className="w-6 h-6 mb-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
      <p className=" text-center text-2xl uppercase text-black">
        Amparos de salud{" "}
      </p>
      <p className="text-black mb-6">
        Amplia experiencia en reclamos contra empresas de medicina prepaga y
        obras sociales contra falta o denegatoria de prestaciones cubiertas
      </p>{" "}
      <button className=" bg-transparent hover:underline decoration-red-600 rounded-md text-black p-3">
        {" "}
        Mas informacion
      </button>{" "}
    </div>
  );
};
