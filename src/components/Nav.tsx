import { Link } from "react-router-dom"
import Logo from "../assets/2.png"
export default function Nav() {

  return (
    <div className="navbar bg-black sticky top-0 h-40 flex z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-black rounded-box w-96 text-2xl">
            <button className=" mx-4"><Link to="/Nosotros"> Nosotros</Link></button>
            <button className=" mx-4"><Link to="/Areas"> Areas</Link></button>
            <button className=" mx-4"><Link to="/Honorarios"> Honorarios</Link></button>
          </ul>
        </div>

      </div>
      <div className="navbar-center hidden lg:flex">
        <div className=" flex bg-slate-400 w-96">
          <Link to="/"><img src={Logo} alt="logo" className="object-cover h-20 w-96" /></Link>

        </div>
        <ul className="menu menu-horizontal px-1 text-white uppercase text-3xl">
          <button className=" hover:underline decoration-red-600 uppercase mx-4"><Link to="/Nosotros"> Nosotros</Link></button>
          <button className=" hover:underline decoration-red-600 uppercase mx-4"><Link to="/Areas"> areas</Link></button>
          <button className=" hover:underline decoration-red-600 uppercase mx-4"><Link to="/Honorarios"> Honorarios</Link></button>

        </ul>
      </div>
      <div className="navbar-end">
      </div>
    </div>
  );
}