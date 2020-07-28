import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import '../ApiCalls'
import '@testing-library/jest-dom'
import { getAllShoes } from '../ApiCalls';
import SubmitShoeForm from '../SubmitShoeForm/SubmitShoeForm';


jest.mock('../apiCalls')

describe ( 'App', () => {
 
  it('Should render the app component', () => {
    const { getByText, getByTestId } = render(<MemoryRouter><App /></MemoryRouter>)
    const heading = getByText("SOLE")
    const cheesyText = getByText("Find your sole mate")
    const shoeArea = getByTestId("shoe-area")
    expect(heading).toBeInTheDocument();
    expect(cheesyText).toBeInTheDocument();
    expect(shoeArea).toBeInTheDocument();
  })

  it('Should be able to view all shoes on load', async () => {
      getAllShoes.mockResolvedValue({
        "id": 1018,
        "brand": "Vans",
        "model": "Vans Sk8-Lo Re-Issue",
        "product": "Taka Hayashi QR Checkerboard Blue",
        "title": "Vans Sk8-Lo Re-Issue Taka Hayashi QR Checkerboard Blue",
        "colorway": "Total Eclipse",
        "demographic": "men",
        "retail_price": 200,
        "year": 2020,
        "release_date": "2020-06-10T23:59:59.000Z",
        "image_url": "https://stockx-360.imgix.net/Vans-Sk8-Lo-Re-Issue-Taka-Hayashi-QR-Checkerboard-Blue.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591852554",
        "small_image_url": "https://stockx-360.imgix.net/Vans-Sk8-Lo-Re-Issue-Taka-Hayashi-QR-Checkerboard-Blue.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591852554",
        "thumb_url": "https://stockx-360.imgix.net/Vans-Sk8-Lo-Re-Issue-Taka-Hayashi-QR-Checkerboard-Blue.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591852554",
        "created_at": "2020-07-27T19:59:57.402Z",
        "updated_at": "2020-07-27T19:59:57.402Z"
      })
    
    const { getByText } = render(<MemoryRouter><App /></MemoryRouter>)
    const titleName = await waitFor(() => getByText('Vans Sk8-Lo Re-Issue Taka Hayashi QR Checkerboard Blue'))
    expect(titleName).toBeInTheDocument();
  })

  it('Should expand a shoes info when its image is clicked', () => {
    
  });

  it('Should render add shoe form on button click', () => {
    const { getByText, getByPlaceholderText } = render(<MemoryRouter><App /></MemoryRouter>)

    const addSneakerButton = getByText('Add Sneaker')

    fireEvent.click(addSneakerButton)

    const brandInput = getByPlaceholderText('BRAND');
    const colorInput = getByPlaceholderText('COLOR');
    const priceInput = getByPlaceholderText('Price (in dollars)');
    const modelInput = getByPlaceholderText('MODEL');

    expect(brandInput).toBeInTheDocument();
    expect(modelInput).toBeInTheDocument();
    expect(colorInput).toBeInTheDocument();
    expect(priceInput).toBeInTheDocument();
  });

  it('Should return home when home from add sneaker form', () => {
    const { getByText, getByTestId, getByPlaceholderText } = render(<MemoryRouter><App /></MemoryRouter>)

    const addSneakerButton = getByText('Add Sneaker')
    fireEvent.click(addSneakerButton)
    const brandInput = getByPlaceholderText('BRAND');
    expect(brandInput).toBeInTheDocument();

    const goHome = getByText('Home')
    fireEvent.click(goHome)
    const shoeArea = getByTestId("shoe-area")
    expect(shoeArea).toBeInTheDocument();
  });

  


});
