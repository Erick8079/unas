import { useState, useEffect } from "react";
import axios from "axios";

import SectionNatural from "../components/SectionNatural";

const Natural = () => {
  const [natura, setNatura] = useState([]);

  useEffect(() => {
    const consultaapi = async () => {
      const url = "https://immense-waters-01806.herokuapp.com/encapsulados";
      const { data } = await axios(url);
      setNatura(data);
    };
    consultaapi();
  }, []);

  return (
    <div className="pt-28">
      <h1 className="text-center uppercase text-4xl">Encapsulado de uña natural</h1>

      <div className="grid gap-4 xl:grid-cols-4 md:grid-cols-3 px-10  mt-10 mb-10">
        {natura.map((item) => (
          <SectionNatural key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Natural;
