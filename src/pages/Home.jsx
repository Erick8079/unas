import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import SectionAbout from "../components/SectionAbout";
import SectionService from "../components/SectionService";
import vhome from "../Uploads/img/v-home.mp4";

const Home = () => {
  return (
    <>
      <header className="h-[100vh] w-[100%] sectionbgs flex flex-col justify-center">
        <video
          src={vhome}
          className="z-[-10] absolute object-cover w-[100%] h-[100vh]"
          autoPlay
          loop
          muted
        ></video>

        <div className="px-16">
          <h1 className="text-white text-3xl md:text-6xl text-1xl">
            Mag Creations
          </h1>
          <div className="flex mt-5 text-white text-3xl gap-4">
            <Link to="#" className="hover:text-purple-500">
              <AiFillFacebook />
            </Link>
            <Link to="#" className="hover:text-purple-500">
              <AiFillTwitterCircle />
            </Link>
            <Link to="#" className="hover:text-purple-500">
              <AiFillInstagram />
            </Link>
            <Link to="#" className="hover:text-purple-500">
              <AiFillYoutube />
            </Link>
          </div>
        </div>
      </header>

      <SectionAbout />
      <SectionService />

      <style>{`      
          .sectionbgs {
            background-image: linear-gradient(to right, rgb(0 0 0/.20), rgb(0 0 0 / .2))
          }
      `}</style>
    </>
  );
};

export default Home;
