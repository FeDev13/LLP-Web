import { Typography, Avatar, Rating } from "@material-tailwind/react";
import meeting from "../assets/meeting.jpg";
import logo from "../assets/maro (2).png";
import user from "../assets/m.jpg"
import user2 from "../assets/l.jpg"

export const Nosotros = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="grid grid-cols-1 mt-6">
          <img
            src={logo}
            alt="logo maro"
            className="mx-auto w-1/2 md:w-[30%] rounded-full"
          />
          <p className=" text-black text-base font-semibold mt-10 p-8">
            Defendemos los intereses de nuestros clientes y velamos por su
            tranquilidad, sus bienes y sus negocios. La confidencialidad es un
            valor fundamental que conservamos y respetamos tanto en el
            asesoramiento como en la actuación profesional.
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
            entre otros. Los mismos cuentan con estudios probados tanto de grado
            y postgrado en las areas mencionadas ademas de probada trayectoria
            en el ambito profesional.
          </p>
        </div>
      </div>
      <div>
        <div className="px-8 text-center mt-32 ">
          <Typography variant="h2" color="black" className="mb-6 font-semibold text-xl ">
            &quot;Excelente asesoramiento, resultados inmediatos y muy buen
            trato al cliente.&quot;
          </Typography>
          <Avatar
            src={user}
            alt="image"
            className=" w-[10%] rounded-full mx-auto"
          />
          <Typography variant="h6" className="mt-4 text-black ">
            Mariela B.
          </Typography>
            <Rating value={4} readonly className="flex justify-center text-yellow-300 " />
        </div>
        <div className="px-8 text-center my-10 ">
          <Typography variant="h2" color="black" className="mb-6 font-semibold text-xl ">
            &quot;Muy buena predisposición y atención, profesionalismo y amabilidad.&quot;
          </Typography>
          <Avatar
            src={user2}
            alt="image"
            className=" w-[10%] rounded-full mx-auto"
          />
          <Typography variant="h6" className="mt-4 text-black ">
            Lopez Alfredo
          </Typography>
            <Rating value={5} readonly className="flex justify-center text-yellow-300 " />
        </div>
      </div>
    </>
  );
};
