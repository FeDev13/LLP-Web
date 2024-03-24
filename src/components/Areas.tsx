import { Amparos } from "./Amparos";
import { Civil } from "./Civil";
import Drawers from "./Drawer";
import { Laborales } from "./Laborales";

export const Areas = () => {
  return (
    <div className=" h-screen text-black">
      <h2 className=" text-5xl mt-3 ">
        Areas de actividad profesional
      </h2>
      <h3 className=" text-3xl m-20 uppercase font-semibold">Nuestras areas</h3>
      <div className=" flex justify-center text-2xl z-0 ">
        <div className="flex flex-col md:flex-row w-[90%]  md:m-auto mb-32">
          <Civil />
          <div className="divider divider-horizontal my-48"></div>
          <Amparos />
          <div className="divider divider-horizontal my-48"></div>
          <Laborales />
        </div>
      </div>
      <Drawers />
    </div>
  );
};
