import meeting from "../assets/meeting.jpg"

export const Nosotros = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      {/* <div className=" bg-orange-900 w-[200%]">
        <img src={meeting} alt="meeting room" className="w-[50%]" />
      </div>
      <div className=" text-black flex flex-col">
        <h2 className=" text-center text-5xl font-semibold mt-8">
          Experiencia, celeridad y profesionalismo
        </h2>
        <p className="text-3xl text-center mt-8 font-semibold ">
          En nuestro estudio juridico el cliente encontrara profesionales con
          amplia experiencia en las areas del derecho civil, laboral, familia
          entre otros. Los mismos cuentan con estudios probados tanto de grado y
          postgrado en las areas mencionadas ademas de probada trayectoria en el
          ambito profesional.
        </p>
      </div> */}
       <div className=" bg-yellow-950 w-[200%]">
        <img src={meeting} className=" w-[50%]" alt="desk logo" />
      </div>
      <div className="  flex flex-col text-white my-auto">
        <p className=" text-3xl font-medium bg-yellow-950 p-10">
        Experiencia, celeridad y profesionalismo
        </p>
        <p className=" font-medium text-5xl bg-yellow-950 p-8">
        En nuestro estudio juridico el cliente encontrara profesionales con
          amplia experiencia en las areas del derecho civil, laboral, familia
          entre otros. Los mismos cuentan con estudios probados tanto de grado y
          postgrado en las areas mencionadas ademas de probada trayectoria en el
          ambito profesional.
        </p>
      </div>
    </div>
  );
};
