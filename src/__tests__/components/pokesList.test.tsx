import { render, screen } from '@testing-library/react';
import PokesList from '../../components/pokesList/pokesList';
import { fakePokesData } from '../../__mocked__/mockedData';

const mockSetSelectedPoke = jest.fn();
const mockHandleDeletePoke = jest.fn();

describe('Pagination', () => {
  test('Should be able to render', () => {

    render(<PokesList header={<h1>Fake Header</h1>} pokesList={fakePokesData} selectedPoke={fakePokesData[0]} setSelectedPoke={mockSetSelectedPoke} handleDeletePoke={mockHandleDeletePoke} />);

    const fakeHeader = screen.getByText('Fake Header');
    const fakemon1 = screen.getByText('fakemon1');
    const fakemon2 = screen.getByText('fakemon2');
    const fakemon3 = screen.getByText('fakemon3');
    
    expect(fakeHeader).toBeInTheDocument();
    expect(fakemon1).toBeInTheDocument();
    expect(fakemon2).toBeInTheDocument();
    expect(fakemon3).toBeInTheDocument();
  });
});

