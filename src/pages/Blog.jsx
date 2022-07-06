import { useState, useEffect } from "react";
import axios from "axios";

import Post from "../components/Post";
import img from "../Uploads/img/4.jpg";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    
    const url = "https://immense-waters-01806.herokuapp.com/blogs";

    const apiBlog = async () => {
      const { data } = await axios(url);
      setPosts(data);
    };
    apiBlog();
  }, []);

  return (
    <section className="">
      <div className="section text-white text-8xl uppercase flex flex-col items-center justify-center">
        <h1>Blog</h1>
      </div>

      <div className="grid gap-4 xl:grid-cols-3 md:grid-cols-2 mx-10 mb-10">
        {posts.map((item) => (
          <Post key={item.id} item={item} />
        ))}
      </div>

      <style>{`
        .section {            
          background-image: linear-gradient(to right, rgb(0 0 0/.20), rgb(0 0 0 / .2)),
            url(${img});  
            width: 100%;
            height: 100vh;
            background-size: cover;
            background-position: center; 
            background-repeat: no-repeat;
            background-attachment: fixed;
        }      
      `}</style>
    </section>
  );
};

export default Blog;
