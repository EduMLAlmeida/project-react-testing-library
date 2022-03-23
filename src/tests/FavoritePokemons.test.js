import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Testa o componente <FavoritePokemons.js />', () => {
  it(
    'Testa se é exibido na tela a mensagem No favorite pokemon found,'
    + ' se a pessoa não tiver pokémons favoritos.',
    () => {
      renderWithRouter(<App />);
      const favLink = screen.getByRole('link', { name: 'Favorite Pokémons' });
      userEvent.click(favLink);
      const noFavFound = screen.getByText('No favorite pokemon found');
      expect(noFavFound).toBeInTheDocument();
    },
  );
  it(
    'Testa se é exibido todos os cards de pokémons favoritados.',
    () => {
      renderWithRouter(<App />);
      const moreDetailsLink = screen.getByRole('link', { name: 'More details' });
      userEvent.click(moreDetailsLink);
      const favCheckbox = screen.getByRole('checkbox', { name: 'Pokémon favoritado?' });
      userEvent.click(favCheckbox);
      const homeLink = screen.getByRole('link', { name: 'Home' });
      userEvent.click(homeLink);
      const bugButton = screen.getByRole('button', { name: 'Bug' });
      userEvent.click(bugButton);
      const moreDetailsLink2 = screen.getByRole('link', { name: 'More details' });
      userEvent.click(moreDetailsLink2);
      const favCheckbox2 = screen.getByRole('checkbox', { name: 'Pokémon favoritado?' });
      userEvent.click(favCheckbox2);
      const favLink = screen.getByRole('link', { name: 'Favorite Pokémons' });
      userEvent.click(favLink);
      const pikachu = screen.getByText('Pikachu');
      expect(pikachu).toBeInTheDocument();
      const caterpie = screen.getByText('Caterpie');
      expect(caterpie).toBeInTheDocument();
    },
  );
});
