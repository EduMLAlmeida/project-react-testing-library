import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Testa o componente <App.js />', () => {
  it(
    'Testa se a aplicação é redirecionada para a página Not Found',
    () => {
      const { history } = renderWithRouter(<App />);
      history.push('/notFound');
      const title = screen.getByRole(
        'heading', { name: 'Page requested not found Crying emoji', level: 2 },
      );
      expect(title).toBeInTheDocument();
    },
  );
  it(
    'Testa se página mostra a imagem correta.',
    () => {
      const { history } = renderWithRouter(<App />);
      history.push('/notFound');
      const image = screen.getByRole(
        'img', { name: 'Pikachu crying because the page requested was not found' },
      );
      expect(image.src).toEqual('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
    },
  );
});
