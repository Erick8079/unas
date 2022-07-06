const Gelatina = ({ title, active, setActive }) => {
  return (
    <div className=" max-w-xl text-white py-1">
      <div className=" bg-black py-6 uppercase">
        <div className="container px-5 flex items-center justify-between">
          <p>{title}</p>
          <span
            className="cursor-pointer text-1xl hover:text-purple-300"
            onClick={() => setActive(title)}
          >
            {active === title ? "-" : "+"}
          </span>
        </div>
      </div>

      <div
        className={
          active === title
            ? "h-full opacity-[1] bg-purple-300"
            : "flex overflow-hidden transition-all ease-in-out h-0 opacity-0"
        }
      >
        <div className="p-5 text-lg text-black">
          <p>
            Uñas de aspecto transparente,
            suelen tener flores o frutas encapsuladas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gelatina;
