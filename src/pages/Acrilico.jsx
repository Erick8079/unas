import { useState, useEffect } from "react";
import axios from "axios";

import SectionAcrilico from "../components/SectionAcrilico";

const Acrilico = () => {
  const [acril, setAcril] = useState([]);

  useEffect(() => {
    const consultaapi = async () => {
      const url = `${import.meta.env.VITE_FRONTEND_URL}/acrilicos`;
      const { data } = await axios(url);
      console.log(data);
      setAcril(data);
    };
    consultaapi();
  }, []);
  return (
    <div className="pt-28">
      <h1 className="text-center uppercase text-4xl">Acrilico</h1>

      <div className="grid gap-4 xl:grid-cols-4 md:grid-cols-3 px-10  mt-10 mb-10">
        {acril.map((item) => (
          <SectionAcrilico key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Acrilico;
