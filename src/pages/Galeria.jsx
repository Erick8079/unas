import { Link } from "react-router-dom";
import image3d from "../Uploads/img/galeria/3d.jpg";
import escultural from "../Uploads/img/galeria/escultural.png";
import gelish from "../Uploads/img/galeria/gelish.jpg";
import alzada from "../Uploads/img/galeria/alzada.png";
import acrilica from "../Uploads/img/galeria/acrilico.jpg";
import encapsulado from "../Uploads/img/galeria/encapsulado.png";
import kawaii from "../Uploads/img/galeria/kawaii.jpg";
import gelatina from "../Uploads/img/galeria/gelatina.png";

const Galeria = () => {
  return (
    <>
      <div className="pt-28  text-7xl flex flex-col items-center justify-center mb-10">
        <h1 className="text-black uppercase">Galería</h1>
      </div>

      <div className="grid gap-4 xl:grid-cols-4 md:grid-cols-3 mx-10 mb-10">
        <Link to="/aplicaciones" className="">
          <img
            src={image3d}
            alt=""
            className=" hover:rotate-12 ease-in duration-300 w-[100%] h-[200px]"
          />

          <div className="text-center p-2 bg-purple-300">
            <h3 className="uppercase">Aplicaciones en 3d</h3>
          </div>
        </Link>

        <Link to="/escultural">
          <img
            src={escultural}
            alt=""
            className=" hover:rotate-12 ease-in duration-300 w-[100%] h-[200px]"
          />
          <div className="text-center p-2 bg-purple-300">
            <h3 className="uppercase">esculturales</h3>
          </div>
        </Link>

        <Link to="/gelish">
          <img
            src={gelish}
            alt=""
            className=" hover:rotate-12 ease-in duration-300 w-[100%] h-[200px]"
          />
          <div className="text-center p-2 bg-purple-300">
            <h3 className="uppercase">gelish</h3>
          </div>
        </Link>

        <Link to="/mano-alzada">
          <img
            src={alzada}
            alt=""
            className=" hover:rotate-12 ease-in duration-300 w-[100%] h-[200px]"
          />
          <div className="text-center p-2 bg-purple-300">
            <h3 className="uppercase">mano alzada</h3>
          </div>
        </Link>

        <Link to="/acrilico">
          <img
            src={acrilica}
            alt=""
            className="hover:rotate-12 ease-in duration-300"
          />
          <div className="text-center p-2 bg-purple-300">
            <h3 className="uppercase">baño de acrílico</h3>
          </div>
        </Link>

        <Link to="/encapsulado">
          <img
            src={encapsulado}
            alt=""
            className=" hover:rotate-12 ease-in duration-300 w-[100%] h-[200px]"
          />
          <div className="text-center p-2 bg-purple-300">
            <h3 className="uppercase">encapsulado de uña natural</h3>
          </div>
        </Link>

        <Link to="/kawaii">
          <img
            src={kawaii}
            alt=""
            className=" hover:rotate-12 ease-in duration-300 w-[100%] h-[200px]"
          />
          <div className="text-center p-2 bg-purple-300">
            <h3 className="uppercase">kawaii</h3>
          </div>
        </Link>
        <Link to="/gelatina">
          <img
            src={gelatina}
            alt=""
            className=" hover:rotate-12 ease-in duration-300 w-[100%] h-[200px]"
          />
          <div className="text-center p-2 bg-purple-300">
            <h3 className="uppercase">efecto gelatina</h3>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Galeria;
