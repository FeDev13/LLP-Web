import { Link } from "react-router-dom";
import Logo from "../assets/2.png";
import ReactWhatsapp from "react-whatsapp";

export default function Nav() {
  return (
    <>
      <div className="navbar bg-black sticky top-0 flex z-10 h-20">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
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
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-black rounded-box w-96 text-2xl mr-52"
            >
              <Link to="/">
                <img src={Logo} alt="logo" className="object-cover h-20 w-96" />
              </Link>
              <button className=" mx-4 text-white">
                <Link to="/Nosotros"> Nosotros</Link>
              </button>
              <button className=" mx-4 text-white">
                <Link to="/Areas"> Areas</Link>
              </button>
              <button className=" mx-4 text-white">
                <Link to="/Honorarios"> Honorarios</Link>
              </button>
              <button className=" mr-4">
                <ReactWhatsapp
                  number="+5492235044778"
                  element="button"
                  message=""
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-whatsapp ml-4"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="white"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
                    <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path>
                  </svg>
                </ReactWhatsapp>
              </button>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className=" flex bg-slate-400 w-96">
            <Link to="/">
              <img src={Logo} alt="logo" className="object-cover h-20 w-96" />
            </Link>
          </div>
          <ul className="menu menu-horizontal px-1 text-white uppercase text-3xl">
            <button className=" hover:underline decoration-red-600 uppercase mx-4">
              <Link to="/Nosotros"> Nosotros</Link>
            </button>
            <button className=" hover:underline decoration-red-600 uppercase mx-4">
              <Link to="/Areas"> areas</Link>
            </button>
            <button className=" hover:underline decoration-red-600 uppercase mx-4">
              <Link to="/Honorarios"> Honorarios</Link>
            </button>
            <ReactWhatsapp number="+5492235044778" element="button" message="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-whatsapp ml-4"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="white"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path>
              </svg>
            </ReactWhatsapp>
          </ul>
        </div>
        <div className="navbar-end"></div>
      </div>
    </>
  );
}
