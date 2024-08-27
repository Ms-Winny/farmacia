import React from 'react';
import './Home.css'; 
import estoque from '../../assets/estoque.jpg';

function Home() {
    return (
      <div className="bg-white flex justify-center py-12">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 text-white max-w-5xl mx-auto px-4 relative">
          <div className="flex flex-col gap-6 items-start justify-center py-4 text-right text-large">
            <h2 className="text-5xl md:text-6xl font-extrabold">Bem-vindo à Gestão de Estoque!</h2>
            <p className="text-lg md:text-xl">Administre sua farmácia de forma fácil e eficiente.</p>
            <p className="text-lg md:text-xl">Controle o estoque, cadastre produtos e mais.</p>
            <div className="flex justify-start">
              <button className="button-primary">Gerenciar Estoque</button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src={estoque} alt="Imagem de estoque" className="image image-left" />
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;