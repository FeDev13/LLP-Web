

export const Honorarios = () => {
  return (
    <div className=" h-screen">
      <h2 className="text-5xl mt-8">Honorarios</h2>
      <p className=" text-3xl mt-8">Los honorarios profesionales estan definidos por la ley 14.967 que regulla la cantidad de honorarios segun actividad llevada adelante y
        estan expresados en la unidad arancelaria "IUS", la cual esta sujeta a actualizaciones periodicas. Esto lleva a que los honorarios no sean fijos en el tiempo y
        sean pasibles de ajustes que provengan de los organismos superiores. </p>
        <h2 className="mt-5 text-3xl underline">Honorarios por consultas segun ley 14.967</h2>
        <div className="flex justify-between mt-8">
          <p className="ml-20 text-2xl">Consulta verbal</p>
          <p className="mr-20 text-2xl">1 ius</p>
        </div>
        <div className="flex justify-between mt-8">
          <p className="ml-20 text-2xl">Consulta escrita</p>
          <p className="mr-20 text-2xl">2 ius</p>
        </div>
    </div>
  )
}
