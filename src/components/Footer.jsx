import { Link } from "react-router-dom";

import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

import { RiContactsBook2Fill } from "react-icons/ri";
import { MdAttachEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className=" text-white  bottom-0 uppercase">
      <div className="grid md:grid-cols-2 xl:grid-cols-3 text-center py-10 items-center">
        <div className="">
          <h2 className="mb-2">Contacto</h2>
          <div className="flex items-center justify-center gap-1 py-1">
            <RiContactsBook2Fill />
            <p>tel : 56 34 08 69 92</p>
          </div>
          <div className="flex items-center justify-center gap-1 py-1">
            <MdAttachEmail />
            <p>e-mail : <span className="lowercase">magdacreations0@gmail.coms</span></p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center my-10">
          <p>Síguenos en nuestras redes sociales</p>
          <div className="flex mt-5 text-white text-3xl gap-4">
            <Link to="#" className="hover:text-purple-500">
              <AiFillFacebook />
            </Link>
            <Link to="#" className="hover:text-purple-500">
              <AiFillTwitterCircle />
            </Link>
            <Link to="#" className="hover:text-purple-500">
              <AiFillInstagram />
            </Link>
            <Link to="#" className="hover:text-purple-500">
              <AiFillYoutube />
            </Link>
          </div>
        </div>

        <div>
          <h2 className="mb-2">Horarios</h2>
          <p>lunes a sábado</p>
          <p>11:00 am a 6:00 pm</p>
        </div>
      </div>

      <style>{`
        footer {
          background: linear-gradient(to right, #090009,#511c50,#000000);  
        }
      `}</style>
    </footer>
  );
};

export default Footer;
