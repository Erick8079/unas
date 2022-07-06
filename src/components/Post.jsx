import { Link } from "react-router-dom";

const Post = ({ item }) => {
  const { titulo, resumen, imagen, id } = item;

  return (
    <div className="mt-10">
      <div className=" bg-purple-300 rounded">
        <div className="min-h-full text-center flex flex-col items-center">
          <img src={imagen.url} alt="" className="w-[90%] mt-5" />
          <h1 className="text-2xl mt-5">{titulo}</h1>
          <p className="px-5 mb-5">{resumen}</p>
          <Link
            to={id}
            className="p-2 bg-[#511c50] text-white rounded-md mb-5 hover:bg-[#773376] ease-in duration-300"
          >
            Leer Más
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
