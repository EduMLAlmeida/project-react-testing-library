import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Testa o componente <App.js />', () => {
  it(
    'Testa se o topo da aplicação contém um conjunto fixo de links de navegação.',
    () => {
      renderWithRouter(<App />);
      const homeLink = screen.getByRole('link', { name: 'Home' });
      const aboutLink = screen.getByRole('link', { name: 'About' });
      const favoritePokemonsLink = screen.getByRole(
        'link', { name: 'Favorite Pokémons' },
      );
      expect(homeLink).toBeInTheDocument();
      expect(aboutLink).toBeInTheDocument();
      expect(favoritePokemonsLink).toBeInTheDocument();
    },
  );
  it(
    'Testa se a aplicação é redirecionada para a página inicial',
    () => {
      renderWithRouter(<App />);
      const homeLink = screen.getByRole('link', { name: 'Home' });
      userEvent.click(homeLink);
      const homeTitle = screen.getByText('Encountered pokémons');
      expect(homeTitle).toBeInTheDocument();
    },
  );
  it(
    'Testa se a aplicação é redirecionada para a página de About',
    () => {
      renderWithRouter(<App />);
      const aboutLink = screen.getByRole('link', { name: 'About' });
      userEvent.click(aboutLink);
      const aboutTitle = screen.getByText('About Pokédex');
      expect(aboutTitle).toBeInTheDocument();
    },
  );
  it(
    'Testa se a aplicação é redirecionada para a página de Pokémons Favoritados',
    () => {
      renderWithRouter(<App />);
      const favoritePokemonsLink = screen.getByRole(
        'link', { name: 'Favorite Pokémons' },
      );
      userEvent.click(favoritePokemonsLink);
      const favoritePokemonsTitle = screen.getByText('Favorite pokémons');
      expect(favoritePokemonsTitle).toBeInTheDocument();
    },
  );
  it(
    'Testa se a aplicação é redirecionada para a página Not Found',
    () => {
      const { history } = renderWithRouter(<App />);
      history.push('/notFound');
      const notFoundTitle = screen.getByText('Page requested not found');
      expect(notFoundTitle).toBeInTheDocument();
    },
  );
});
