import React, { useState } from 'react';
import './cadastroForm.scss';
import moment from 'moment';

function CadastroForm() {
  const [nome, setNome] = useState('Nome completo');
  const [dataNascimento, setDataNascimento] = useState(moment().format('DD/MM/YYYY'));
  const [cidade, setCidade] = useState('Cidade');
  const [estado, setEstado] = useState('Estado');
  const [areaFormacao, setAreaFormacao] = useState('Área de formação');
  const [profissao, setProfissao] = useState('Profissão');
  const [email, setEmail] = useState('Email');
  const [senha, setSenha] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');
  const [foto, setFoto] = useState(null);
  const [users, setUsers] = useState([]);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const dataNascimentoFormatted = moment(dataNascimento, 'DD/MM/YYYY').format('YYYY-MM-DD');

    // Cria um objeto com os dados do usuário
    const newUser = {
      nome,
      dataNascimento: dataNascimentoFormatted,
      cidade,
      estado,
      areaFormacao,
      profissao,
      email,
      senha,
      confirmSenha,
      foto,
    };

    // Cria uma cópia atualizada do array de usuários com o novo usuário adicionado
    const updatedUsers = [...users, newUser];

    // Converte o array de usuários atualizado em uma string JSON
    const usersJSON = JSON.stringify(updatedUsers, null, 2);

    // Salva a string JSON no arquivo users.json usando o método PUT do fetch
    fetch('/src/db/users.json', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: usersJSON,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Usuário cadastrado com sucesso!');
        // Atualiza o estado do componente com o novo array de usuários
        setUsers(updatedUsers);
      })
      .catch((error) => {
        console.error('Erro ao cadastrar usuário:', error);
      });
  }

  const passwordInputType = isPasswordFocused ? 'password' : 'text';
  const passwordPlaceholder = isPasswordFocused ? '' : 'Senha';
  const confirmPasswordPlaceholder = isPasswordFocused ? '' : 'Confirmação de senha';


  return (

    <form id="form-cadastro" onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
      </label>
      <br />
      <label>
        <input
          type="date"
          value={dataNascimento}
          onChange={(event) => setDataNascimento(event.target.value)}
        />
      </label>
      <br />
      <label>
        <input
          type="text"
          value={cidade}
          onChange={(event) => setCidade(event.target.value)}
        />
      </label>
      <br />
      <label>
        <input
          type="text"
          value={estado}
          onChange={(event) => setEstado(event.target.value)}
        />
      </label>
      <br />
      <label>
        <input
          type="text"
          value={areaFormacao}
          onChange={(event) => setAreaFormacao(event.target.value)}
        />
      </label>
      <br />
      <label>
        <input
          type="text"
          value={profissao}
          onChange={(event) => setProfissao(event.target.value)}
        />
      </label>
      <br />
      <label>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <br />
      <label>
        <input
          type="password"
          value={senha}
          onChange={(event) => setSenha(event.target.value)}
          onFocus={(event) => event.target.placeholder = ''}
          placeholder="Senha"
        />
      </label>
      <br />
      <label>
        <input
          type="password"
          value={confirmSenha}
          onChange={(event) => setConfirmSenha(event.target.value)}
          onFocus={(event) => event.target.placeholder = ''}
          placeholder="Confirmação de senha"
        />
      </label>
      <br />
      <label id='document-label'>
        <p>foto segurando o documento</p>
        
        <input
          type="file"
          accept="image/*"
          onChange={(event) => setFoto(event.target.files[0])}
          placeholder="Foto segurando o documento"
        />
      </label>
      <br />
      <button id='cadastro-btn' type="submit">Continuar</button>
    </form>
  );

}

export default CadastroForm;
