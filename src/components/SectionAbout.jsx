import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const SectionAbout = () => {
  const [nosotros, setNosotros] = useState({}); 

  const { titulo, descripcion, imagen } = nosotros;

  useEffect(() => {    
    const apiNosotoros = async () => {
      const url = `${import.meta.env.VITE_FRONTEND_URL}/nosotros`;
      const { data } = await axios(url);
      setNosotros(data);
    };
    apiNosotoros();
    
  }, []);

  return (
    <>
      <section className="mt-14">        
        <div className="sectionbg items-center justify-center flex flex-col">
          <div className=" text-center text-white w-[60%] ">
            <h2 className="text-3xl mb-5">{titulo}</h2>
            <p className="text-1xl md:text-2xl mb-5">{descripcion}</p>

            <Link
              to="/about"
              className="p-2 bg-purple-500 text-white text-2xl rounded 
                       hover:bg-purple-600 ease-in duration-200"
            >
              Leer más
            </Link>
          </div>
        </div>

        {imagen && (
          <style>{`      
          .sectionbg {  
            background-image: linear-gradient(to right, rgb(0 0 0/.50), rgb(0 0 0 / .5)),
            url(${imagen.url});
            width: 100%;
            height: 100vh;
            background-size: cover;
            background-position: center; 
            background-repeat: no-repeat;
            background-attachment: fixed;
          }
        `}</style>
        )}
      </section>
    </>
  );
};

export default SectionAbout;
