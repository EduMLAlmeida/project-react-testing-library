import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

const moreDetails = 'More details';

describe('Testa o componente <Pokemon.js />', () => {
  it(
    'Testa se é renderizado um card com as informações de determinado pokémon.',
    () => {
      renderWithRouter(<App />);
      const pokemonName = screen.getByTestId('pokemon-name');
      expect(pokemonName).toBeInTheDocument();
      const pokemontype = screen.getByTestId('pokemon-type');
      expect(pokemontype).toBeInTheDocument();
      const pokemonWeight = screen.getByTestId('pokemon-weight');
      expect(pokemonWeight).toBeInTheDocument();
      const pikachu = screen.getByText('Pikachu');
      expect(pikachu).toBeInTheDocument();
      const electric = screen.getAllByText('Electric');
      expect(electric).toHaveLength(2);
      const averageWeight = screen.getByText('Average weight: 6.0 kg');
      expect(averageWeight).toBeInTheDocument();
      const image = screen.getByRole(
        'img', { name: 'Pikachu sprite' },
      );
      expect(image).toBeInTheDocument();
      expect(image.src).toEqual('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    },
  );
  it(
    'Testa se o card do Pokémon indicado na Pokédex '
    + 'contém um link de navegação para exibir detalhes deste Pokémon e '
    + 'se a URL exibida no navegador muda corretamente.',
    () => {
      // código utilizado para acessar a url no pathname dentro do location do history retirado do vídeo da aula 14.3 do course.
      const { history } = renderWithRouter(<App />);
      const details = screen.getByText(moreDetails);
      expect(details).toBeInTheDocument();
      userEvent.click(details);
      const { location: { pathname } } = history;
      expect(pathname).toBe('/pokemons/25');
    },
  );
  it(
    'Testa se ao clicar no link de navegação do Pokémon, '
    + 'é feito o redirecionamento da aplicação para a página de detalhes de Pokémon.',
    () => {
      renderWithRouter(<App />);
      const details = screen.getByText(moreDetails);
      expect(details).toBeInTheDocument();
      userEvent.click(details);
      const detailsTitle = screen.getByText('Pikachu Details');
      expect(detailsTitle).toBeInTheDocument();
    },
  );
  it(
    'Testa se existe um ícone de estrela nos Pokémons favoritados.',
    () => {
      renderWithRouter(<App />);
      const moreDetailsLink = screen.getByRole('link', { name: moreDetails });
      userEvent.click(moreDetailsLink);
      const favCheckbox = screen.getByRole('checkbox', { name: 'Pokémon favoritado?' });
      userEvent.click(favCheckbox);
      const favLink = screen.getByRole('link', { name: 'Favorite Pokémons' });
      userEvent.click(favLink);
      const image = screen.getByRole(
        'img', { name: 'Pikachu is marked as favorite' },
      );
      expect(image).toBeInTheDocument();
      expect(image.src).toEqual('http://localhost/star-icon.svg');
    },
  );
});
