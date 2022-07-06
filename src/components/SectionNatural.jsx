import {Link} from 'react-router-dom'
import { useState, useEffect } from "react";
import axios from 'axios';

const SectionNatural = ({ item }) => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState({});

  const { imagen, id } = item;

  useEffect(() => {
    const consultaapi = async () => {
      const url = `${import.meta.env.VITE_FRONTEND_URL}/encapsulados/${id}`;
      const { data } = await axios(url);
      setImage(data);
    };
    consultaapi();
  }, []);

  return (
    <>
      <Link to="">
        <img
          src={imagen.url}
          alt=""
          className='h-full img hover:scale-75 ease-in duration-300 rounded-lg'
          onClick={() => {
            setOpen(true);
          }}
        />
      </Link>

      {open && (
        <div
          className="fixed top-0 left-0 w-full h-full px-4 py-16 md:py-40 bg-black bg-opacity-90 overflow-y-auto z-50"
          onClick={() => setOpen(false)}
        >
          <div className="max-w-3xl mx-auto bg-coolGray-50 rounded-lg overflow-hidden">
            <div className="relative">
              {image.imagen && <img src={image.imagen.url} alt="" />}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .img {
          box-shadow: 0px 15px 25px rgba(0,0,0,0.50)
        }
      `}</style>
    </>
  );
};

export default SectionNatural;
