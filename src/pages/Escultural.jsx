import { useState, useEffect } from "react";
import axios from "axios";

import SectionEscultural from "../components/SectionEscultural";

const Escultural = () => {

    const [esculturales,setEsculturales] = useState([])

    
    useEffect(() => {
        const consultaapi = async () => {
           const url = `${import.meta.env.VITE_FRONTEND_URL}/esculturales`;
           const {data} = await axios(url)
           setEsculturales(data);
        }
        consultaapi()
    },[])

  return (
    <div className="pt-28">
        <h1 className="text-center uppercase text-4xl">Esculturales</h1>

        <div className="grid gap-4 xl:grid-cols-4 md:grid-cols-3 px-10  mt-10 mb-10">
          {esculturales.map(item => (
            <SectionEscultural key={item.id} item={item}/>
          ))}
        </div>      
    </div>
  )
}

export default Escultural
