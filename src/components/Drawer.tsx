export default function Drawers() {


  return (
    <div className="drawer mt-48">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="btn bg-transparent drawer-button text-white text-2xl">Consultenos</label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-red-600 text-base-content text-3xl">
          {/* Sidebar content here */}
          <form className=" flex flex-col justify-between" action="POST">
            <label className=" mb-4" htmlFor="name">Nombre completo</label>
            <input className=" mb-4 rounded-md outline-none" type="text" name="name" id="name" placeholder="Nombre y apellido"autoFocus required/>
            <label className=" mb-4" htmlFor="">Email</label>
            <input className=" mb-4 rounded-md outline-none" type="email" name="email" id="email" placeholder="correo electronico" autoFocus required/>
            <label className=" mb-4" htmlFor="consulta">Escriba su consulta</label>
            <textarea className=" rounded-md outline-none" name="" id="" cols={20} rows={7} placeholder="Maximo 120 caracteres" maxLength={120}></textarea>
            <button type="submit" className=" text-center m-8 w-[70%] rounded-r-md bg-white text-black">Enviar</button>
          </form>

        </ul>
      </div>
    </div>
  );
}