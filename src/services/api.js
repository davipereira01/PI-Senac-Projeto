import axios from 'axios';

const BASE_URL = 'http://localhost:5173/src/db';
const withBaseUrl = (path) => `${BASE_URL}${path}`

export const cadastrarUsuario = async (usuario) => {
  try {
    // Faz a requisição POST para adicionar o usuário
    await axios.post(withBaseUrl('/users.json'), usuario);
    console.log('Usuário cadastrado com sucesso!');
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
  }
}

export default cadastrarUsuario;
