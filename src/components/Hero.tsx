import Drawers from "./Drawer"
export const Hero = () => {
    return (
        <div>
            <h2 className=' text-6xl uppercase m-32'>una nueva forma de ejercer la abogacia</h2>
            <h3 className=" text-3xl m-20 uppercase">Nuestras areas</h3>
            <div className=" flex justify-center text-2xl z-0">
                <div className="flex flex-col md:flex-row w-[90%] ml-52 md:m-auto mb-32">
                    <div className="grid h-20 flex-grow card rounded-box place-items-center w-1/2 mt-20"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mb-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                    </svg> <p className=" text-center text-2xl uppercase">Derecho civil</p> <p className="  mb-6">Nos especializamos en daños y perjuicios, sucesiones, contratos comerciales y de locación, mediaciones prejudiciales, entre otros</p> <button className=" bg-transparent hover:underline decoration-red-600 rounded-md text-white p-3"> Mas informacion</button>
                    </div>
                    <div className="divider divider-horizontal my-48"></div>
                    <div className=" grid h-20 flex-grow card rounded-box place-items-center w-1/2 mt-20"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mb-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                        <p className=" text-center text-2xl uppercase">Amparos de salud </p><p className=" mb-6">Amplia experiencia en reclamos contra empresas de medicina prepaga y obras sociales contra falta o denegatoria de prestaciones cubiertas</p> <button className=" bg-transparent hover:underline decoration-red-600 rounded-md text-white p-3"> Mas informacion</button> </div>
                    <div className="divider divider-horizontal my-48"></div>
                    <div className=" grid h-20 flex-grow card  rounded-box place-items-center w-1/2 mt-20 mb-48"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mb-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                    </svg> <p className=" text-center text-2xl uppercase">Reclamos laborales</p>
                        <p className="  mb-6">Asesoramiento en cuanto a despidos e indemnizaciones laborales, redaccion de telegramas laborales y homologacion de acuerdos </p> <button className=" bg-transparent hover:underline decoration-red-600 rounded-md text-white p-3"> Mas informacion</button> </div>
                </div>
            </div>
            <Drawers />
        </div>

    )
}