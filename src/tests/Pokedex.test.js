import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './renderWithRouter';

const lengthOne = 1;
const lengthTwo = 2;
const lengthSeven = 7;

describe('Testa o componente <Pokedex.js />', () => {
  it(
    'Testa se página contém um heading h2 com o texto Encountered pokémons.',
    () => {
      renderWithRouter(<App />);
      const title = screen.getByRole(
        'heading', { name: 'Encountered pokémons', level: 2 },
      );
      expect(title).toBeInTheDocument();
    },
  );
  it(
    'Testa se a Pokédex contém um botão para resetar o filtro e '
    + 'Testa se é exibido o próximo Pokémon da lista'
    + ' quando o botão Próximo pokémon é clicado.',
    () => {
      renderWithRouter(<App />);
      const pikachu = screen.getByText('Pikachu');
      expect(pikachu).toBeInTheDocument();
      const nextButton = screen.getByRole('button', { name: 'Próximo pokémon' });
      expect(nextButton).toBeInTheDocument();
      userEvent.click(nextButton);
      const charmander = screen.getByText('Charmander');
      expect(charmander).toBeInTheDocument();
      const fireButton = screen.getByRole('button', { name: 'Fire' });
      expect(fireButton).toBeInTheDocument();
      userEvent.click(fireButton);
      const charmander2 = screen.getByText('Charmander');
      expect(charmander2).toBeInTheDocument();
      const allButton = screen.getByRole('button', { name: 'All' });
      expect(allButton).toBeInTheDocument();
      userEvent.click(allButton);
      const pikachu2 = screen.getByText('Pikachu');
      expect(pikachu2).toBeInTheDocument();
      expect(nextButton).toBeInTheDocument();
      userEvent.click(nextButton);
      const charmander3 = screen.getByText('Charmander');
      expect(charmander3).toBeInTheDocument();
      userEvent.click(nextButton);
      const caterpie = screen.getByText('Caterpie');
      expect(caterpie).toBeInTheDocument();
      userEvent.click(nextButton);
      const ekans = screen.getByText('Ekans');
      expect(ekans).toBeInTheDocument();
      userEvent.click(nextButton);
      const alakazam = screen.getByText('Alakazam');
      expect(alakazam).toBeInTheDocument();
      userEvent.click(nextButton);
      const mew = screen.getByText('Mew');
      expect(mew).toBeInTheDocument();
      userEvent.click(nextButton);
      const rapidash = screen.getByText('Rapidash');
      expect(rapidash).toBeInTheDocument();
      userEvent.click(nextButton);
      const snorlax = screen.getByText('Snorlax');
      expect(snorlax).toBeInTheDocument();
      userEvent.click(nextButton);
      const dragonair = screen.getByText('Dragonair');
      expect(dragonair).toBeInTheDocument();
      userEvent.click(nextButton);
      const pikachu3 = screen.getByText('Pikachu');
      expect(pikachu3).toBeInTheDocument();
      userEvent.click(nextButton);
    },
  );
  it(
    'Testa se é mostrado apenas um Pokémon por vez.',
    () => {
      renderWithRouter(<App />);
      const moreDetails = screen.getAllByText('More details');
      expect(moreDetails).toHaveLength(lengthOne);
    },
  );
  it(
    'Testa se a Pokédex tem os botões de filtro.',
    () => {
      renderWithRouter(<App />);

      const allFilterButtons = screen.getAllByTestId('pokemon-type-button');
      expect(allFilterButtons).toHaveLength(lengthSeven);

      const nextButton = screen.getByRole('button', { name: 'Próximo pokémon' });
      const allButton = screen.getByRole('button', { name: 'All' });
      expect(allButton).toBeInTheDocument();

      const electricButton = screen.getByRole('button', { name: 'Electric' });
      expect(electricButton).toBeInTheDocument();
      userEvent.click(electricButton);
      expect(allButton).toBeInTheDocument();
      const electric = screen.getAllByText('Electric');
      expect(electric).toHaveLength(lengthTwo);
      const pikachu = screen.getByText('Pikachu');
      expect(pikachu).toBeInTheDocument();

      const fireButton = screen.getByRole('button', { name: 'Fire' });
      expect(fireButton).toBeInTheDocument();
      userEvent.click(fireButton);
      expect(allButton).toBeInTheDocument();
      const fire = screen.getAllByText('Fire');
      expect(fire).toHaveLength(lengthTwo);
      const charmander = screen.getByText('Charmander');
      expect(charmander).toBeInTheDocument();
      userEvent.click(nextButton);
      const rapidash = screen.getByText('Rapidash');
      expect(rapidash).toBeInTheDocument();
      userEvent.click(nextButton);
      const charmander2 = screen.getByText('Charmander');
      expect(charmander2).toBeInTheDocument();

      const bugButton = screen.getByRole('button', { name: 'Bug' });
      expect(bugButton).toBeInTheDocument();
      userEvent.click(bugButton);
      expect(allButton).toBeInTheDocument();
      const bug = screen.getAllByText('Bug');
      expect(bug).toHaveLength(lengthTwo);
      const caterpie = screen.getByText('Caterpie');
      expect(caterpie).toBeInTheDocument();

      const poisonButton = screen.getByRole('button', { name: 'Poison' });
      expect(poisonButton).toBeInTheDocument();
      userEvent.click(poisonButton);
      expect(allButton).toBeInTheDocument();
      const poison = screen.getAllByText('Poison');
      expect(poison).toHaveLength(lengthTwo);
      const ekans = screen.getByText('Ekans');
      expect(ekans).toBeInTheDocument();

      const psychicButton = screen.getByRole('button', { name: 'Psychic' });
      expect(psychicButton).toBeInTheDocument();
      userEvent.click(psychicButton);
      expect(allButton).toBeInTheDocument();
      const psychic = screen.getAllByText('Psychic');
      expect(psychic).toHaveLength(lengthTwo);
      const alakazam = screen.getByText('Alakazam');
      expect(alakazam).toBeInTheDocument();
      userEvent.click(nextButton);
      const mew = screen.getByText('Mew');
      expect(mew).toBeInTheDocument();
      userEvent.click(nextButton);
      const alakazam2 = screen.getByText('Alakazam');
      expect(alakazam2).toBeInTheDocument();

      const normalButton = screen.getByRole('button', { name: 'Normal' });
      expect(normalButton).toBeInTheDocument();
      userEvent.click(normalButton);
      expect(allButton).toBeInTheDocument();
      const normal = screen.getAllByText('Normal');
      expect(normal).toHaveLength(lengthTwo);
      const snorlax = screen.getByText('Snorlax');
      expect(snorlax).toBeInTheDocument();

      const dragonButton = screen.getByRole('button', { name: 'Dragon' });
      expect(dragonButton).toBeInTheDocument();
      userEvent.click(dragonButton);
      expect(allButton).toBeInTheDocument();
      const dragon = screen.getAllByText('Dragon');
      expect(dragon).toHaveLength(lengthTwo);
      const dragonair = screen.getByText('Dragonair');
      expect(dragonair).toBeInTheDocument();
    },
  );
});
