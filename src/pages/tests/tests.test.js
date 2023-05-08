import React from 'react';
import { render } from '@testing-library/react';
import PostsComponent from './PostsComponent';

test('renders posts correctly', async () => {
  const { getByText, getAllByAltText } = render(<PostsComponent />);
  
  // Verifica se o componente está sendo renderizado
  const postsContainer = getByText('Posts');
  expect(postsContainer).toBeInTheDocument();

  // Verifica se as informações dos posts estão sendo exibidas corretamente
  const userNames = await getAllByAltText('User profile');
  expect(userNames).toHaveLength(10);

  const postContents = await getAllByText(/Lorem ipsum dolor sit amet/i);
  expect(postContents).toHaveLength(10);

  const postImages = await getAllByAltText('');
  expect(postImages).toHaveLength(10);
});
