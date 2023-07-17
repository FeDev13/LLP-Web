import Drawers from "./Drawer";
import { Amparos } from "./Amparos";
import { Laborales } from "./Laborales";
import { Civil } from "./Civil";

export const Hero = () => {
  return (
    <div>
      <h2 className=" text-6xl uppercase m-32 text-white">
        una nueva forma de ejercer la abogacia
      </h2>
      <h3 className=" text-3xl m-20 uppercase text-white">Nuestras areas</h3>
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
