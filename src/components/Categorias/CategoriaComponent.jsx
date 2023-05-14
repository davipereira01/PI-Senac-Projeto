import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Categorias/categoria.scss';

const categorias = [
  { nome: 'Tecnologia', imagem: '../src/assets/tecnologia.png' },
  { nome: 'Vida noturna', imagem: '../src/assets/vida noturna.png' },
  { nome: 'Cultura', imagem: '../src/assets/cultura.png' },
  { nome: 'Natureza', imagem: '../src/assets/natureza.png' },
  { nome: 'Esportes', imagem: '../src/assets/esportes.png' },
  { nome: 'Hobies', imagem: '../src/assets/rpg.png' },
];

function CategoriasComponent() {
  const navigate = useNavigate();

  const handleClickCategoria = (nome) => {
    navigate(`/${nome}`);
  };

  return (
    <div className="categorias">
      <h2>Explore por categoria</h2>
      <div className="categorias-lista">
        {categorias.map((categoria) => (
          <div className="categoria" key={categoria.nome}>
            <p>{categoria.nome}</p>
            <img
              src={categoria.imagem}
              alt={categoria.nome}
              onClick={() => handleClickCategoria(categoria.nome)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriasComponent;
