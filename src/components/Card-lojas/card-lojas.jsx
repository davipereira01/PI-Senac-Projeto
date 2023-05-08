import React from 'react';
import '../Card-lojas/card-lojas.scss';
import IconeLoja from '../../assets/icone.png';
import { Link } from 'react-router-dom';




export function CardLojas({store}) {

 
const id = store.id;

  

  return (

    <div className="card-loja">
      
      <div className="container-store-img">
        
        <img src={store.img} alt="" />
        
      </div>
      <div className="nome-loja">
        <Link to = {`/${store.id}`}>
        <h2>{store.name}</h2>
        </Link>
        
      </div>
    </div> 
    
  )
}

export default CardLojas;