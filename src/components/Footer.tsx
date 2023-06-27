import { Typography } from "@material-tailwind/react"; 

const LINKS = [
  
  {
    title: "Informacion util",
    items: ["Diag Pueyrredon 2970 piso 3", "Mar del Plata","+5492235044778", "estudiojuridicomaroasoc@gmail.com"],
  }
];
 
const currentYear = new Date().getFullYear();
 
export default function Footer() {
  return (
    <footer className="relative w-full mt-32 bg-black text-2xl">
      <div className="mx-auto w-full max-w-7xl p-10">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <img src="https://camdp.org.ar/wp/wp-content/themes/appointment/images/colproba.png" className=' bg-white rounded-3xl' alt="" />
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 opacity-40 font-normal"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      color="gray"
                      className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear} <a href="https://github.com/FeDev13">App web desarrollada por FeDev13</a>.
          </Typography>
          
        </div>
      </div>
    </footer>
  );
}