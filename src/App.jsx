import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Pagina from "./components/Pagina";

import AuthLayout from "./layout/AuthLayout";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Galeria from "./pages/Galeria";
import Home from "./pages/Home";

//sub galerias
import Aplicaciones from "./pages/Aplicaciones";
import Escultural from "./pages/Escultural";
import Gelish from "./pages/Gelish";
import ManoAlzada from "./pages/ManoAlzada";
import Acrilico from "./pages/Acrilico";
import Natural from "./pages/Natural";
import Kawaii from "./pages/Kawaii";
import Gelatina from "./pages/Gelatina";


function App() {
  return (
    
    <HashRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Home />}/>

          <Route path="about" element={<About />}/>
          <Route path="blog" element={<Blog />}/>

          <Route path="galeria" element={<Galeria />}/>
          <Route path="aplicaciones" element={<Aplicaciones />}/>
          <Route path="escultural" element={<Escultural />}/>
          <Route path="gelish" element={<Gelish />}/>
          <Route path="mano-alzada" element={<ManoAlzada />}/>
          <Route path="acrilico" element={<Acrilico />}/>
          <Route path="encapsulado" element={<Natural />}/>
          <Route path="kawaii" element={<Kawaii />}/>
          <Route path="gelatina" element={<Gelatina />}/>


          <Route path="blog/:id" element={<Pagina />}/>

          
        </Route>
      </Routes>
      
    </HashRouter>
  );
}

export default App;
