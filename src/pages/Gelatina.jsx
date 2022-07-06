import { useState, useEffect } from "react";
import axios from "axios";

import SectionGelatina from "../components/SectionGelatina";

const Gelatina = () => {
  const [gel, setGel] = useState([]);

  useEffect(() => {
    const consultaapi = async () => {
      const url = "https://immense-waters-01806.herokuapp.com/gelatinas";
      const { data } = await axios(url);
      setGel(data);
    };
    consultaapi();
  }, []);

  return (
    <div className="pt-28">
      <h1 className="text-center uppercase text-4xl">Efecto gelatina</h1>

      <div className="grid gap-4 xl:grid-cols-4 md:grid-cols-3 px-10  mt-10 mb-10">
        {gel.map((item) => (
          <SectionGelatina key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Gelatina;
