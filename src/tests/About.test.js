import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../components/About';

describe('Testa o componente <About.js />', () => {
  it(
    'Testa se a página contém as informações sobre a Pokédex.',
    () => {
      render(<About />);
      const aboutTitle = screen.getByText('About Pokédex');
      expect(aboutTitle).toBeInTheDocument();
    },
  );
  it(
    'Testa se a página contém um heading h2 com o texto About Pokédex.',
    () => {
      render(<About />);
      const title = screen.getByRole('heading', { name: 'About Pokédex', level: 2 });
      expect(title).toBeInTheDocument();
    },
  );
  it(
    'Testa se a página contém dois parágrafos com texto sobre a Pokédex.',
    () => {
      render(<About />);
      const firstParagraphInfo = screen.getByText(
        'This application simulates a Pokédex,'
        + ' a digital encyclopedia containing all Pokémons',
      );
      const secondParagraphInfo = screen.getByText(
        'One can filter Pokémons by type,'
        + ' and see more details for each one of them',
      );
      expect(firstParagraphInfo).toBeInTheDocument();
      expect(secondParagraphInfo).toBeInTheDocument();
    },
  );
  it(
    'Testa se a página contém a correta imagem de uma Pokédex.',
    () => {
      render(<About />);
      const image = screen.getByRole('img', { name: 'Pokédex' });
      expect(image.src).toEqual('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
    },
  );
});
