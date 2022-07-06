import { useState, useEffect } from "react";
import axios from "axios";

import SectionKawaii from "../components/SectionKawaii";

const Kawaii = () => {
  const [kawai, setKawai] = useState([]);

  useEffect(() => {
    const consultaapi = async () => {
      const url = "https://immense-waters-01806.herokuapp.com/kawaiis";
      const { data } = await axios(url);
      setKawai(data);
    };
    consultaapi();
  }, []);

  return (
    <div className="pt-28">
      <h1 className="text-center uppercase text-4xl">Kawaii</h1>

      <div className="grid gap-4 xl:grid-cols-4 md:grid-cols-3 px-10  mt-10 mb-10">
        {kawai.map((item) => (
          <SectionKawaii key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Kawaii;
