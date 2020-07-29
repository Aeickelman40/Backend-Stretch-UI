import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '../ApiCalls'
import '@testing-library/jest-dom'
import { getAllShoes } from '../ApiCalls';
import ExpandedShoe from './ExpandedShoe';
// import App from '../App/App'

jest.mock('../ApiCalls')
describe('test', () => {
    it("should be true", () => {

        expect(true).toBe(true)
    })
})
describe( 'ExpandedShoe', () => {

    it('Should render the ExpandedShoe component', () => {
        const { getByText } = render(<MemoryRouter><ExpandedShoe /></MemoryRouter>)
        const model = getByText('Model:');
        const brand = getByText('Brand:');
        const color = getByText('Color:');
        const releaseDate = getByText('Release Date:');
        const demographic = getByText('Demographic:');
        const price = getByText('Price:');
        expect(brand).toBeInTheDocument();
        expect(model).toBeInTheDocument();
        expect(color).toBeInTheDocument();
        expect(releaseDate).toBeInTheDocument();
        expect(demographic).toBeInTheDocument();
        expect(price).toBeInTheDocument();
    })

    // it('Should pull unique data based on what shoe was selected', async () => {
    //     getAllShoes.mockResolvedValue({
    //         "id": 1018,
    //         "brand": "Vans",
    //         "model": "Vans Sk8-Lo Re-Issue",
    //         "product": "Taka Hayashi QR Checkerboard Blue",
    //         "title": "Vans Sk8-Lo Re-Issue Taka Hayashi QR Checkerboard Blue",
    //         "colorway": "Total Eclipse",
    //         "demographic": "men",
    //         "retail_price": 200,
    //         "year": 2020,
    //         "release_date": "2020-06-10T23:59:59.000Z",
    //         "image_url": "https://stockx-360.imgix.net/Vans-Sk8-Lo-Re-Issue-Taka-Hayashi-QR-Checkerboard-Blue.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591852554",
    //         "small_image_url": "https://stockx-360.imgix.net/Vans-Sk8-Lo-Re-Issue-Taka-Hayashi-QR-Checkerboard-Blue.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591852554",
    //         "thumb_url": "https://stockx-360.imgix.net/Vans-Sk8-Lo-Re-Issue-Taka-Hayashi-QR-Checkerboard-Blue.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591852554",
    //         "created_at": "2020-07-27T19:59:57.402Z",
    //         "updated_at": "2020-07-27T19:59:57.402Z"
    //   })

    //   const { getByText } = render(<MemoryRouter><ExpandedShoe /></MemoryRouter>)
    //   const brand = await waitFor(() => getByText('Vans'))
    //   expect(brand).toBeInTheDocument();
    // })

})