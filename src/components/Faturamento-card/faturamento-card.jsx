import React from 'react';
import '../Faturamento-card/faturamentoCard.scss';
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import StoresService from "../../services/storesService";
import { useState, useEffect } from "react";





export function FaturamentoMensal(props, {store}) {




  return (

    <div className="card-faturamento">

        <i><RiMoneyDollarCircleLine/></i>
        <div className="faturamento-mensal-loja">
          
        <h2>{props.mensal}</h2>
        <h2>{props.semanal}</h2>
        <h2>{props.diario}</h2>
        <h2 className='Valor'>{props.faturamentoMensal}
                              {props.faturamentoSemanal}
                              {props.faturamentoDiario}
        </h2>
       
        </div>

    </div>




    
    
  )
}

export default FaturamentoMensal;