import meeting from "../assets/meeting.jpg";
import logo from "../assets/maro (2).png"

export const Nosotros = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="grid grid-cols-1 mt-6">
        <img src={logo} alt="logo maro" className="mx-auto w-1/2 md:w-[30%] rounded-full"/>
      <p className=" text-black text-base font-semibold mt-10 p-8">
        Defendemos los intereses de nuestros clientes y velamos por su
        tranquilidad, sus bienes y sus negocios. La confidencialidad es un valor
        fundamental que conservamos y respetamos tanto en el asesoramiento como
        en la actuación profesional.
      </p>
      </div>
      
      <div className=" bg-black w-[100%]">
        <img src={meeting} alt="desk logo" className=" mx-auto " />
      </div>
      <div className="  flex flex-col text-white my-auto">
        <p className=" text-xl font-medium bg-black p-10">
          Experiencia, celeridad y profesionalismo
        </p>
        <p className=" font-medium text-base bg-black p-8 h-[200%]">
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
