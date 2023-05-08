import React from 'react';
import '../../components/cadastro/cadastroForm.scss';
import CadastroForm from '../../components/cadastro/cadastroForm';
import '../CadastroPage/CadastroPage.scss';



export function CadastroPage() {

  return (

    <div className="container-cadastro">
        <h1>
            Cadastro
        </h1>
        <CadastroForm/>
    </div>
    
    
     
      

      
    )
  }