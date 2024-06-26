export const Civil = () => {
  return (
    <div className="grid h-full flex-grow card rounded-box place-items-center w-1/2 mt-20 mx-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="black"
        className="w-6 h-6 mb-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
        />
      </svg>{" "}
      <p className=" text-center text-2xl uppercase text-black">
        Derecho civil
      </p>{" "}
      <p className=" text-black mb-6">
        Nos especializamos en daños y perjuicios, sucesiones, contratos
        comerciales y de locación, mediaciones prejudiciales, entre otros
      </p>{" "}
      <button className=" bg-transparent hover:underline decoration-red-600 rounded-md text-black p-3">
        {" "}
        Mas informacion
      </button>
    </div>
  );
};
