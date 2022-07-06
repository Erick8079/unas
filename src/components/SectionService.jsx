import { useState } from "react";

import img from '../Uploads/img/service/bfg-service.jpg'

import Aplicacion3D from "./Acordion/Aplicacion3D";
import Esculturales from "./Acordion/Esculturales";
import Gelish from "./Acordion/Gelish";
import ManoAlzada from "./Acordion/ManoAlzada";
import Acrilico from "./Acordion/Acrilico";
import Encapsulado from "./Acordion/Encapsulado";
import Kawaii from "./Acordion/Kawaii";
import Gelatina from "./Acordion/Gelatina";

const SectionService = () => {
  const [active, setActive] = useState();

  return (
    <>
      <div className="section mt-14 flex flex-col items-center">
        <h1 className="text-center text-4xl uppercase pt-10 text-white">Nuestros servicios</h1>

        <div className="grid md:grid-cols-2 mt-10 pb-10 gap-4 px-5">
          <div className="">
            <Aplicacion3D title="Aplicación 3D" active={active} setActive={setActive}/>
            <Esculturales title="Esculturales" active={active} setActive={setActive} />
            <Gelish title="Gelish" active={active} setActive={setActive} />
            <ManoAlzada title="Mano Alzada" active={active} setActive={setActive} />
          </div>
          <div className="">
            <Acrilico title="Baño de Acrílico" active={active} setActive={setActive} />
            <Encapsulado title="Encapsulado de Uña" active={active} setActive={setActive} />
            <Kawaii title="Kawaii" active={active} setActive={setActive} />
            <Gelatina title="Efecto Gelatina" active={active} setActive={setActive} />
          </div>
          <div></div>
        </div>
      </div>

      <style>{`
        .section {            
          background-image: linear-gradient(to right, rgb(0 0 0/.20), rgb(0 0 0 / .1)),
            url(${img});  
            width: 100%;
            background-size: cover;
            background-position: center; 
            background-repeat: no-repeat;
            background-attachment: fixed;
        }      
      `}</style>
    </>
  );
};

export default SectionService;
