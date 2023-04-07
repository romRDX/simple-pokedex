import { fireEvent, render, screen } from '@testing-library/react';
import Pagination from '../../components/pagination/pagination';

const mockNextPage = jest.fn();
const mockedPreviousPage = jest.fn();

jest.mock('../../hooks/usePokeAPI', () => {
  return {
    usePokeAPI: () => ({
      pokesList: [{ name: 'fakemon', url: 'fakeUrl'}],
      nextPage: mockNextPage,
      previousPage: mockedPreviousPage,
      currentPage: 5,
    })
  };
});

describe('Pagination', () => {
  test('Should be able to render', () => {

    render(<Pagination />);

    const nextButton = screen.getByText('Next');
    const previousButton = screen.getByText('Next');
    const currentPage = screen.getByText('5');
      
    expect(nextButton).toBeInTheDocument();
    expect(previousButton).toBeInTheDocument();
    expect(currentPage).toBeInTheDocument();
  });

  test('Should be able to go to next page', () => {

    render(<Pagination />);

    const nextButton = screen.getByText('Next');

    fireEvent.click(nextButton);
    
    expect(mockNextPage).toHaveBeenCalledTimes(1);
  });

  test('Should be able to go to previous page', () => {

    render(<Pagination />);

    const previousButton = screen.getByText('Previous');

    fireEvent.click(previousButton);
    
    expect(mockedPreviousPage).toHaveBeenCalledTimes(1);
  });
});

