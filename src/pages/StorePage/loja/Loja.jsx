import React from 'react';
import {SideBar2} from '../../../components/SideBar2/sidebar2';
import './style.scss';
import {Header} from '../../../components/Header/header';
import {BalanceCard} from '../../../components/Balance-card/balanceCard';
import {FaturamentoMensal} from '../../../components/Faturamento-card/faturamento-card';
import {TierList} from '../../../components/Tierlist/Tierlist';
import StoresService from "../../../services/storesService";
import { useState, useEffect } from "react";













export function Loja() {

    const [store, setStores] = useState([])


    const fetchData = async () => {
     
      try {
          const { data: response } = await StoresService.getStores();
          setStores(response);
          
      } catch (error) {
          console.error("Erro");
      }
      
  }
  //put FetchData in useEffect
  useEffect(() => {
      fetchData();
      
  }, []);

  useEffect(() => {
    StoresService.getStores().then((response) => {
      setStores(response.data);
    });
  }, []);

  console.log(store);

  const id = store.id;
  //in h2 tag, put {store.name} that corresponds to the name of the store in the database and put {store.id} that corresponds to the id of the store in the database




    

  


    return (

        <React.Fragment>

            

            <h1>{store.name}</h1>
            <h2>{store.id}</h2>
        

            



            
        </React.Fragment>
        
        

          
            
    )
  }

  export default Loja;

