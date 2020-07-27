import React from 'react';
import { render, waitFor } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import '../apiCalls'
import '@testing-library/jest-dom'
import { getAllShoes } from '../apiCalls';



jest.mock('../apiCalls')

describe ( 'App', () => {


  
  it('Should render the app component', () => {
    const { getByText, getByTestId } = render(<MemoryRouter><App /></MemoryRouter>)
    const heading = getByText("Sole Searchin'")
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
        "retail_price": 90,
        "year": 2020,
        "release_date": "2020-06-10T23:59:59.000Z",
        "image_url": "https://stockx-360.imgix.net/Vans-Sk8-Lo-Re-Issue-Taka-Hayashi-QR-Checkerboard-Blue.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591852554",
        "small_image_url": "https://stockx-360.imgix.net/Vans-Sk8-Lo-Re-Issue-Taka-Hayashi-QR-Checkerboard-Blue.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591852554",
        "thumb_url": "https://stockx-360.imgix.net/Vans-Sk8-Lo-Re-Issue-Taka-Hayashi-QR-Checkerboard-Blue.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591852554",
        "created_at": "2020-07-27T19:59:57.402Z",
        "updated_at": "2020-07-27T19:59:57.402Z"
      })
    
    const { getByText, getAllByRole } = render(<MemoryRouter><App /></MemoryRouter>)

    const titleName = await waitFor(() => getByText('Vans Sk8-Lo Re-Issue Taka Hayashi QR Checkerboard Blue'))
    const shoeButton = await waitFor(() => getAllByRole('button'))
    expect(titleName).toBeInTheDocument();
    expect(shoeButton).toBeInTheDocument();
  })

}) 
