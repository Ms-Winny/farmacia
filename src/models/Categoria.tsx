import React from 'react';
import FormCategorias from './../components/categorias/formularioCategorias/FormularioCategorias';
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import './Categorias.css';

function Categoria() {
  return (
    <Popup 
      trigger={<button className='border rounded px-4 hover:bg-white hover:text-blue-700'>Nova Categoria</button>} 
      modal
    >
      <div className="popup-content">
        <FormCategorias />
      </div>
    </Popup>
  );
}

export default Categoria;