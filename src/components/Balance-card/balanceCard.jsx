import React from 'react';
import '../Balance-card/balance-card.scss';
import RocketCat from '../../assets/rocket-cat.svg';
import FaturamentoMensal from '../Faturamento-card/faturamento-card';

export function BalanceCard(props) {



  return (

<div className="balance-card" >
    <div className="container-box" id='Values-box'>
    <h1>Balanço total</h1>
    <div className="value-container">
        <h2>{props.faturamentoMensal}</h2>
    </div>
    <div className="percent-card">
        <h2>+10%</h2>
    </div>

    </div>
    <div className="container-box" >
    <img src={RocketCat} alt="" />
  

    </div>
    
    
    

</div>

    
    
  )
}

export default BalanceCard;