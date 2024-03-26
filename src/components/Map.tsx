
export const Map = () => {
  return (
    <div className="text-black mt-10 md:grid md:grid-cols-2 items-center 2xl:px-52 overflow-x-hidden">
      <div className=" lg:w-1/2 text-center mx-auto p-5" >
        <h2 className="text-3xl font-semibold">Donde estamos?</h2>
        <p className="text-xl">
          Nuestro estudio esta ubicado en el microcentro de la ciudad de Mar del
          Plata, contando con oficinas especificas tanto para consultas
          regulares asi como tambien para negociaciones, reuniones y audiencias.
        </p>
      </div>
      <div className=" bg-black h-screen">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.0822321014857!2d-57.54993537820892!3d-37.99854236015914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc030578a9e9%3A0xeaeba4f2c6890e18!2sDiagonal%20Pueyrred%C3%B3n%202970%2C%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1sen!2sar!4v1711254576484!5m2!1sen!2sar"
          width="500"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className=" m-auto mt-20"
        ></iframe>
      </div>
    </div>
  );
};

