import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Layout from './pages/Layout';
import Inicio from './pages/Inicio';
import Servicos from './pages/Servicos';
import Sobre from './pages/Sobre';



function App() {
  
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="servicos" element={<Servicos />} />
          <Route path="sobre" element={<Sobre />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
