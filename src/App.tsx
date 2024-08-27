import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './paginas/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Categorias from './paginas/categorias/Categorias';
import Configuracoes from './paginas/configuracoes/Configuracoes';
import Produtos from './paginas/produtos/Produtos';
import ListaCategorias from './components/categorias/listaCategorias/ListaCategorias';
import FormularioCategorias from './components/categorias/formularioCategorias/FormularioCategorias';
import DeletarCategorias from './components/categorias/deletarCategorias/DeletarCategorias';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categoria-listar" element={<ListaCategorias />} />
            <Route path="/categoria-form" element={<FormularioCategorias />} />
            <Route path="/categoria-form/:id" element={<FormularioCategorias />} />
            <Route path="/categoria-deletar/:id" element={<DeletarCategorias />} />
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