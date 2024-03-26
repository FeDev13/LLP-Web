import { Link } from "react-router-dom";
import Logo from "../assets/maro (2).png";
import ReactWhatsapp from "react-whatsapp";

export default function Nav() {
  return (
    <>
      <div className="navbar bg-white sticky top-0 flex z-10 h-50 shadow-xl">
        <div className="navbar-start bg-white">
          <div className="dropdown bg-white">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 bg-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box w-96 text-base mr-52 text-black"
            >
              <Link to="/" className="bg-white">
                <img
                  src={Logo}
                  alt="logo"
                  className=" h-1/2 w-[50%] rounded-md mx-auto"
                />
              </Link>
              <button className=" mx-4">
                <Link to="/Nosotros" className=" bg-inherit">
                  {" "}
                  Nosotros
                </Link>
              </button>
              <button className=" mx-4 ">
                <Link to="/Areas" className=" bg-inherit">
                  {" "}
                  Areas
                </Link>
              </button>
              <button className=" mx-4">
                <Link to="/Honorarios" className=" bg-inherit">
                  {" "}
                  Honorarios
                </Link>
              </button>
              <button className=" mx-4">
                <Link to="/Ubicacion" className=" bg-inherit">
                  {" "}
                  Nuestro estudio
                </Link>
              </button>
              <button className=" text-center">
                <ReactWhatsapp
                  number="+5492235044778"
                  element="button"
                  message=""
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="WhatsApp"
                    role="img"
                    viewBox="0 0 512 512"
                    width="50px"
                    height="50px"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <rect
                        width="512"
                        height="512"
                        rx="15%"
                        fill="#25d366"
                      ></rect>
                      <path
                        fill="#25d366"
                        stroke="#ffffff"
                        stroke-width="26"
                        d="M123 393l14-65a138 138 0 1150 47z"
                      ></path>
                      <path
                        fill="#ffffff"
                        d="M308 273c-3-2-6-3-9 1l-12 16c-3 2-5 3-9 1-15-8-36-17-54-47-1-4 1-6 3-8l9-14c2-2 1-4 0-6l-12-29c-3-8-6-7-9-7h-8c-2 0-6 1-10 5-22 22-13 53 3 73 3 4 23 40 66 59 32 14 39 12 48 10 11-1 22-10 27-19 1-3 6-16 2-18"
                      ></path>
                    </g>
                  </svg>
                </ReactWhatsapp>
              </button>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex bg-white h-[20%]">
          <div className="flex w-96">
            <Link to="/" className=" bg-white">
              <img
                src={Logo}
                alt="logo"
                className="object-cover w-[60%] h-[80%] rounded-md bg-white"
              />
            </Link>
          </div>
          <ul className="menu menu-horizontal px-1 text-black bg-white uppercase text-base font-semibold">
            <button className=" hover:underline decoration-yellow-950 uppercase mx-4">
              <Link to="/Nosotros" className="bg-white">
                {" "}
                Nosotros
              </Link>
            </button>
            <button className=" hover:underline decoration-yellow-950 uppercase mx-4">
              <Link to="/Areas" className="bg-white">
                {" "}
                Areas
              </Link>
            </button>
            <button className=" hover:underline decoration-yellow-950 uppercase mx-4">
              <Link to="/Honorarios" className="bg-white">
                {" "}
                Honorarios
              </Link>
            </button>
            <button className=" hover:underline decoration-yellow-950 uppercase mx-4">
              <Link to="/Ubicacion" className="bg-white">
                {" "}
                Nuestro estudio
              </Link>
            </button>
            <ReactWhatsapp number="+5492235044778" element="button" message="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label="WhatsApp"
                role="img"
                viewBox="0 0 512 512"
                width="50px"
                height="50px"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <rect width="512" height="512" rx="15%" fill="#25d366"></rect>
                  <path
                    fill="#25d366"
                    stroke="#ffffff"
                    stroke-width="26"
                    d="M123 393l14-65a138 138 0 1150 47z"
                  ></path>
                  <path
                    fill="#ffffff"
                    d="M308 273c-3-2-6-3-9 1l-12 16c-3 2-5 3-9 1-15-8-36-17-54-47-1-4 1-6 3-8l9-14c2-2 1-4 0-6l-12-29c-3-8-6-7-9-7h-8c-2 0-6 1-10 5-22 22-13 53 3 73 3 4 23 40 66 59 32 14 39 12 48 10 11-1 22-10 27-19 1-3 6-16 2-18"
                  ></path>
                </g>
              </svg>
            </ReactWhatsapp>
          </ul>
        </div>
        <div className="navbar-end"></div>
      </div>
    </>
  );
}
