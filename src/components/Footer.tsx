import { Typography } from "@material-tailwind/react";

const LINKS = [
  {
    title: "Informacion util",
    items: [
      "Mar del Plata",
      "+5492235044778",
      "estudiojuridicomaroasoc@gmail.com",
    ],
  },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <footer className="w-full text-xl flex-shrink-0">
        <div className="mx-auto w-full max-w-7xl p-10 bg-white">
          <div className="grid grid-cols-1 justify-center md:grid-cols-3 bg-white">
            <img
              src="https://camdp.org.ar/wp/wp-content/themes/appointment/images/colproba.png"
              className="bg-white rounded-3xl"
              alt="logo colegio colproba"
            />

            <div className="grid grid-cols-1 justify-center mt-8 ml-10 bg-white">
              {LINKS.map(({ title, items }) => (
                <ul key={title} className="bg-white">
                  <Typography
                    variant="large"
                    color="black"
                    className="mb-3 uppercase text-md font-semibold bg-white"
                  >
                    {title}
                  </Typography>
                  {items.map((link) => (
                    <li key={link} className="bg-white">
                      <Typography
                        as="a"
                        href="#"
                        color="black"
                        className="py-1.5 font-semibold transition-colors hover:text-blue-gray-900 bg-white"
                      >
                        {link}
                      </Typography>
                    </li>
                  ))}
                </ul>
              ))}
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
