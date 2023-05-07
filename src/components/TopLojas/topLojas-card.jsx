import React from 'react';
import '../TopLojas/topLojas.scss';



export function TopLojas({store}) {

  const faturamentoNumerico = parseFloat(store.faturamento_md_mensal);
  // formate o faturamento como moeda brasileira
  const faturamentoFormatado = faturamentoNumerico.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
  

  return (

    <div className="card-Toploja">

        <div className="image-loja-container">
        <div className="image-loja">
          <img src={store.img} alt="" />
        </div>
        </div>

        <div className="informacao-loja">

        <div className="nome-loja">
          
          <h2>
            {store.name}
          </h2>
          
          </div>
        <p>Faturamento médio mensal</p>
        <h2>

          {faturamentoFormatado}
          
          

        </h2>
          
        </div>
        

    </div>




    
    
  )
}

export default TopLojas;