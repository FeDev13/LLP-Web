export const Honorarios = () => {
  return (
    <div className=" h-screen text-black">
      <h2 className="text-xl mt-8 font-semibold ">Honorarios</h2>
      <p className=" text-base mt-8 font-medium ">
        Los honorarios profesionales estan definidos por la ley 14.967 que
        regula la cantidad de honorarios segun actividad llevada adelante y
        estan expresados en la unidad arancelaria "IUS", la cual esta sujeta a
        actualizaciones periodicas. Esto lleva a que los honorarios no sean
        fijos en el tiempo y sean pasibles de ajustes que provengan de los
        organismos superiores.{" "}
      </p>
      <h2 className="mt-5 underline font-medium ">
        Honorarios por consultas segun ley 14.967
      </h2>
      <div className="flex justify-between mt-8 font-medium">
        <p className="ml-20 font-medium ">Consulta verbal</p>
        <p className="mr-20 font-medium ">1 ius</p>
      </div>
      <div className="flex justify-between mt-8">
        <p className="ml-20  font-medium ">Consulta escrita</p>
        <p className="mr-20  font-medium ">2 ius</p>
      </div>
    </div>
  );
};
