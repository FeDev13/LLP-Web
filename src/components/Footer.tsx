import { Typography } from "@material-tailwind/react";



const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <footer className="w-full text-xl flex-shrink-0">
        <div className="mx-auto w-full p-10 bg-white">
          <div className="grid grid-cols-1 justify-center md:grid-cols-3 bg-white">
            <img
              src="https://camdp.org.ar/wp/wp-content/themes/appointment/images/colproba.png"
              className="bg-white rounded-3xl"
              alt="logo colegio colproba"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white">
              <div className="flex items-center bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="black"
                  className="w-6 h-6 bg-inherit"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                <span className="bg-inherit text-black">Mar del Plata</span>
              </div>

              <div className="flex items-center bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="black"
                  className="w-6 h-6 bg-inherit"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                <span className="bg-white text-black">+5492235044778</span>
              </div>

              <div className="flex items-center bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="black"
                  className="w-6 h-6 bg-inherit"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
                  />
                </svg>
                <span className="text-black bg-white">
                  estudiojuridicomaroasoc@gmail.com
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
            <Typography
              variant="small"
              className="mb-4 text-center font-normal text-black md:mb-0 bg-inherit"
            >
              &copy; {currentYear}{" "}
              <a href="https://github.com/FeDev13" className="bg-inherit">
                Maro & Asoc.
              </a>
              .
            </Typography>
          </div>
        </div>
      </footer>
    </div>
  );
}
