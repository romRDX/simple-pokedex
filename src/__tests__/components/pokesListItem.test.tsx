import { fireEvent, render, screen } from '@testing-library/react';
import PokesListItem from '../../components/pokesListItem/pokesListItem';
import { fakePokesData } from '../../__mocked__/mockedData';

const mockSetSelectedPoke = jest.fn();
const mockHandleDeletePoke = jest.fn();

describe('Pagination', () => {
  test('Should be able to render', () => {

    render(<PokesListItem pokeData={fakePokesData[0]} isSelected={false} setSelectedPoke={mockSetSelectedPoke} />);

    const pokeName = screen.getByText(fakePokesData[0].name);
    
    expect(pokeName).toBeInTheDocument();
  });

  test('Should be able to change background color if is selected', () => {

    render(<PokesListItem pokeData={fakePokesData[0]} isSelected={true} setSelectedPoke={mockSetSelectedPoke} />);

    const pokesListItem = screen.getByTestId('pokes-list-item');
    
    expect(pokesListItem).toHaveClass('pokes-list-item--selected');
  });

  test('Should be able to set poke to be selected', () => {

    render(<PokesListItem pokeData={fakePokesData[0]} isSelected={false} setSelectedPoke={mockSetSelectedPoke} />);

    const pokesListItem = screen.getByTestId('pokes-list-item');
    
    fireEvent.click(pokesListItem);

    expect(mockSetSelectedPoke).toHaveBeenCalledTimes(1);
  });

  test('Should be able to delete poke item', () => {

    render(<PokesListItem pokeData={fakePokesData[0]} isSelected={false} setSelectedPoke={mockSetSelectedPoke} handleDeletePoke={mockHandleDeletePoke} />);

    const deleteButton = screen.getByTestId('pokes-list-item-delete-button');

    fireEvent.click(deleteButton);

    expect(mockHandleDeletePoke).toHaveBeenCalledTimes(1);
  });
});

