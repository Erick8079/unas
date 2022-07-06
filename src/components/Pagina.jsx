import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Pagina = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  const { titulo, contenido, imagen } = data;

  useEffect(() => {
    const apiPagina = async () => {
      const url = `https://immense-waters-01806.herokuapp.com/blogs/${id}`;
      const { data } = await axios(url);
      setData(data);
    };
    apiPagina();
  }, []);

  return (
    <section className="py-10">
      <div className="">
        <h1 className=" text-3xl uppercase text-center mb-[2rem] pt-[5rem]">{titulo}</h1>
        <div className="sectionbg  md:w-[400px] md:h-[400px]  w-[150px] h-[150px]  float-left  px-10"></div>
        <div className="sectionbg hidden md:inline  md:w-[250px] md:h-[250px] w-[150px] h-[150px] float-right  px-10"></div>
        <p className="whitespace-pre-wrap text-justify px-10 text-sm md:text-lg">
          {contenido}
        </p>
      </div>

      {imagen && (
        <style>{`      
          .sectionbg {   
            background-image: 
            url(${imagen.url});            
            background-size: cover;
            background-position: center;
            border-radius: 50%;
            margin: 15px;
            shape-outside: circle();
          }
        `}</style>
      )}
    </section>
  );
};

export default Pagina;
