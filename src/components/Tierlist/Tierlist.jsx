import React from 'react';
import '../Tierlist/tierlist.scss';
import ProductsService from "../../services/productsService";
import { useState, useEffect } from 'react';
import * as Popover from '@radix-ui/react-popover';
import PopoverDemo from '../Popover/Popover';












export function TierList() {

    const [products, setProducts] = useState([])



    //put FetchData in useEffect
    useEffect(() => {
    
      const fetchProducts = async () => {
     
        try {
            const { data: response } = await ProductsService.getProducts();
            setProducts(response);
            
            
        } catch (error) {
            console.error("Erro");
        }
        
      }
    
    
    
    
      fetchProducts();
    
      
    }, 
    []);



  products.sort(function(a, b) {
    if (a.sale> b.sale) { 
        
        return -1; 
    }else {
        return true;
    }

  } );

  

  //a function to rank the products by the amount of sales and return the bottom 5
  function bottomFive(products) {
    let bottomFive = [];
    for (let i = products.length - 1; i > products.length - 6; i--) {
        bottomFive.push(products[i]);
    }
    return bottomFive;
}

function topFive(products) {
    let topFive = [];
    for (let i = 0; i < 5; i++) {
        topFive.push(products[i]);
    }
    return topFive;
}


  return (

 //make a tierlist component in html and css react

 <div className="tierlist">

 <div className="tierlist-box">
    <div className="tierlistHeader">
        <h2>Produtos mais vendidos</h2>
        <PopoverDemo/>

    </div>
     
     
     
     <ul>
         <li>{topFive(products)[0]?.name}</li>
         <li>{topFive(products)[1]?.name}</li>
         <li>{topFive(products)[2]?.name}</li>
         <li>{topFive(products)[3]?.name}</li>
         <li>{topFive(products)[4]?.name}</li>
     </ul>
 </div>
 <div className="tierlist-box">
 <div className="tierlistHeader">
        <h2>Produtos menos vendidos</h2>
        <PopoverDemo/>

    </div>
     
     <ul>
         <li>{bottomFive(products)[0]?.name}</li>
         <li>{bottomFive(products)[1]?.name}</li>
         <li>{bottomFive(products)[2]?.name}</li>
         <li>{bottomFive(products)[3]?.name}</li>
         <li>{bottomFive(products)[4]?.name}</li>
     </ul>
 </div>

</div>

    
  )
}

export default TierList;