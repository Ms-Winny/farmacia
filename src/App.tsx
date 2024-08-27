import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './paginas/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Categorias from './paginas/categorias/Categorias';
import Configuracoes from './paginas/configuracoes/configuracoes';
import Produtos from './paginas/produtos/Produtos';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/configuracoes" element={<Configuracoes />} />
            <Route path="/categorias" element={<Categorias />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;