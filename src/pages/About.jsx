import { useState, useEffect } from "react";
import axios from "axios";
import img from "../Uploads/img/service/logo2.jpg";

const About = () => {
  const [datos, setDatos] = useState({});

  const { titulo, contenido, imagen } = datos;

  useEffect(() => {
    const apiAbout = async () => {
      const url = "https://immense-waters-01806.herokuapp.com/nosotros";
      const { data } = await axios(url);
      setDatos(data);
    };
    apiAbout();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center pt-[18rem] sectionbg">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl text-white text-center">{titulo}</h1>
        </div>
      </div>
      <div className="sectionbg-2 md:w-[400px] md:h-[400px]  w-[150px] h-[150px]  float-left  rounded-full"></div>

<div className="py-10 px-10 text-justify ">
  <p className="whitespace-pre-wrap text-sm md:text-lg">{contenido}</p>
</div>


      {imagen && (<style>{`
        .sectionbg 
        {
          background-image: linear-gradient(to right, rgb(0 0 0/.40), rgb(0 0 0 / .4)),
          url(${imagen.url});
          width: 100%;
          height: 100vh;
          background-size: cover;
          background-position: center; 
          background-repeat: no-repeat;
          background-attachment: fixed;
        }

        .sectionbg-2 {   
          background-image: 
          url(${img});           
          margin: 20px;
          shape-outside: circle();            
          background-size: cover;
          background-position: center center;
          shape-outside: circle();
        }
      `}</style>)}
    </>
  );
};

export default About;
