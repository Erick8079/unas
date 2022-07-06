import { useState, useEffect } from "react";
import axios from "axios";

import SectionAlzada from "../components/SectionAlzada";

const ManoAlzada = () => {
  const [mano, setMano] = useState([]);

  useEffect(() => {
    const consultaapi = async () => {
      const url = "https://immense-waters-01806.herokuapp.com/gelishes";
      const { data } = await axios(url);
      setMano(data);
    };
    consultaapi();
  }, []);

  return (
    <div className="pt-28">
      <h1 className="text-center uppercase text-4xl">Mano alzada</h1>

      <div className="grid gap-4 xl:grid-cols-4 md:grid-cols-3 px-10  mt-10 mb-10">
        {mano.map((item) => (
          <SectionAlzada key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ManoAlzada;
