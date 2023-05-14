import React, { useState } from 'react';
import axios from 'axios';

export function CommentComponent({ postId }) {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Faz a chamada POST para a rota do backend que lida com o armazenamento de comentários
    axios.post('/posts.json', {
      postId: postId,
      comment: comment
    })
    .then(response => {
      // Se a chamada for bem-sucedida, você pode atualizar o estado do componente para mostrar o novo comentário
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  };

  return (
    <div className="comment">
      <form onSubmit={handleSubmit}>
        <textarea value={comment} onChange={e => setComment(e.target.value)}></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
