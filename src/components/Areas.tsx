import { Amparos } from "./Amparos";
import { Civil } from "./Civil";
import Drawers from "./Drawer";
import { Laborales } from "./Laborales";

export const Areas = () => {
  return (
    <div className="  text-black">
      <h2 className=" text-2xl mt-3 ">
        Areas de actividad profesional
      </h2>
      <h3 className=" text-xl m-20 uppercase font-semibold">Nuestras areas</h3>
      <div className=" flex justify-center text-base z-0 ">
        <div className="flex flex-col md:flex-row w-[90%]  md:m-auto">
          <Civil />
          <Amparos />
          <Laborales />
        </div>
      </div>
      <Drawers />
    </div>
  );
};
