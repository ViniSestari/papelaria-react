import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Layout from './pages/Layout';
import Inicio from './pages/Inicio';
import Servicos from './pages/Servicos';
import Sobre from './pages/Sobre';
import Blog from './pages/Blog';
import Contato from './pages/Contato';
import Artigo from './pages/Artigo';


function App() {
  
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="servicos" element={<Servicos />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contato" element={<Contato />} />
          <Route path="artigo/:id" element={<Artigo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
