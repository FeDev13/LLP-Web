import image from "../assets/aiimage.jpg";
export const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className=" bg-black w-[200%]">
        <img src={image} className=" w-[50%]" alt="desk logo" />
      </div>
      <div className="  flex flex-col text-white my-auto">
        <p className=" text-3xl font-medium bg-black p-10">
          Estudio de abogados en Mar del Plata
        </p>
        <h1 className=" font-medium text-5xl bg-black">
          Estudio juridico Maro & asoc.
        </h1>
      </div>
    </div>
  );
};
