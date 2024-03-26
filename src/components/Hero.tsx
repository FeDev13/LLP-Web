import image from "../assets/aiimage.jpg";
import { Link } from "react-router-dom";
export const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 my-8 overflow-x-hidden">
      <div className=" bg-black w-[200%]">
        <img src={image} className=" w-[50%]" alt="desk logo" />
      </div>
      <div className="  flex flex-col text-white my-auto">
        
        <p className=" font-medium text-5xl bg-black p-10">
           Estudio juridico Maro & asoc.
        </p>
        <button className="mx-auto p-4 rounded-md text-white font-semibold bg-yellow-950 uppercase my-9 ">
          <Link to="/Nosotros" className="bg-yellow-950">
            {" "}
            Conozcanos
          </Link>
        </button>
        <h1 className="  text-3xl font-medium bg-black p-10">
        Estudio de abogados en Mar del Plata
        </h1>
      </div>
    </div>
  );
};
