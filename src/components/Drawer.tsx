import { useState } from "react";
import { app } from "../credentials";
import useForm from "../Hooks/useForm";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const db = getFirestore(app);

export default function Drawers() {
  const [lista, setLista] = useState<unknown[]>([]);

  const [input, handleInputChangen, setInput] = useForm({
    nombre: "", //variables de estado
    email: "",
    consulta: "",
  });

  const notify = () => {
    if (input.nombre === "" || input.email === "" || input.consulta === "") {
      toast.error("Debe completar todos los campos del formulario");
    } else {
      toast.success("su consulta fue enviada");
    }
  };

  const addConsulta = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLista([...lista, input]);
    try {
      await addDoc(collection(db, "consultas"), {
        ...lista,
      });
    } catch (error) {
      console.log(error);
    }
    setInput({ nombre: "", email: "", consulta: "" }); //limpia los inputs
    notify;
  };

  return (
    <div className="drawer mt-48 z-20">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer"
          className=" bg-yellow-500 drawer-button text-black text-3xl rounded-lg p-3 font-bold cursor-pointer"
        >
          Consultenos
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full text-base-content text-3xl bg-yellow-500">
          <form
            className=" flex flex-col justify-between"
            action="POST"
            onSubmit={(e: any) => addConsulta(e)}
          >
            <label className=" mb-4 font-bold" htmlFor="name">
              Nombre completo
            </label>
            <input
              className=" mb-4 rounded-md outline-none"
              type="text"
              name="nombre"
              id="name"
              onChange={handleInputChangen}
              value={input.nombre}
              placeholder="Nombre y apellido"
              autoFocus
              required
            />
            <label className=" mb-4 font-bold" htmlFor="">
              Email
            </label>
            <input
              className=" mb-4 rounded-md outline-none"
              type="email"
              name="email"
              id="email"
              onChange={handleInputChangen}
              value={input.email}
              placeholder="correo electronico"
              autoFocus
              required
            />
            <label className=" mb-4 font-bold " htmlFor="consulta">
              Escriba su consulta
            </label>
            <textarea
              className=" rounded-md outline-none text-black"
              name="consulta"
              id=""
              cols={20}
              rows={7}
              placeholder="Maximo 120 caracteres"
              maxLength={120}
              onChange={handleInputChangen}
              value={input.consulta}
              required
            ></textarea>
            <button
              type="submit"
              className=" text-center m-8 w-[70%] rounded-md bg-black text-white font-bold"
              onClick={() => {
                notify();
              }}
            >
              Enviar
            </button>
            <ToastContainer />
          </form>
        </ul>
      </div>
    </div>
  );
}
