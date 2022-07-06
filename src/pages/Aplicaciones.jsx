import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import SectionAplicacion from "../components/SectionAplicacion";

const Aplicaciones = () => {
  const [aplicacion, setAplicacion] = useState([]);

  useEffect(() => {
    const aplicacion3d = async () => {
      const url = "https://immense-waters-01806.herokuapp.com/galerias";
      const { data } = await axios(url);
      setAplicacion(data);
    };
    aplicacion3d();
  }, []);

  return (
    <>
      <div className="pt-28">
        <h2 className="text-center uppercase text-4xl">Aplicacion 3d</h2>
      </div>

      <div className="grid gap-4 xl:grid-cols-4 md:grid-cols-3 px-10  mt-10 mb-10">
        {aplicacion.map(dato => (
          <SectionAplicacion key={dato.id} dato={dato} />
        ))}
      </div>
    </>
  );
};

export default Aplicaciones;
