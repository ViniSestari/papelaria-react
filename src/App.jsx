import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Layout from './pages/Layout';
import Inicio from './pages/Inicio';

function App() {
  
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
