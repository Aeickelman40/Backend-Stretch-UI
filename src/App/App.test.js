import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import '../ApiCalls'
import '@testing-library/jest-dom'
import { getAllShoes, getComments } from '../ApiCalls';

jest.mock('../ApiCalls')

describe ( 'App', () => {
  let mockGetAllShoes;
  let mockGetComments;
  beforeEach(() => {
    mockGetAllShoes = [
      {
        "id": 1018,
        "brand": "Vans",
        "model": "Vans Sk8-Lo Re-Issue",
        "product": "Taka Hayashi QR Checkerboard Blue",
        "title": "Jordan 13 Retro White Lucky Green",
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
      }
    ]
    mockGetComments = [
      {
        author: "andy was here",
        created_at: "2020-07-28T19:53:52.757Z",
        id: 37,
        main_text: "andy",
        shoe_id: 1018,
        updated_at: "2020-07-28T19:53:52.757Z"
      }
    ]
  })
  
  it('Should render the app component', () => {
    const { getByText, getByTestId } = render(<MemoryRouter><App /></MemoryRouter>)
    const heading = getByText("SOLE")
    const cheesyText = getByText("find your sole mate")
    const shoeArea = getByTestId("shoe-area")
    expect(heading).toBeInTheDocument();
    expect(cheesyText).toBeInTheDocument();
    expect(shoeArea).toBeInTheDocument();
  })

  it('Should be able to view all shoes on load', async () => {
    getAllShoes.mockResolvedValue(mockGetAllShoes);
    getComments.mockResolvedValue(mockGetComments);
    
    const { getByText, getByRole, getByAltText } = render(<MemoryRouter><App /></MemoryRouter>)
    await waitFor(() => {
      const titleName = getByText("Jordan 13 Retro White Lucky Green", {exact: false})
      const image = getByRole("img", {exact: false});
      const price = getByText("Cost: 200", {exact: false});
      expect(titleName).toBeInTheDocument();
      expect(image).toBeInTheDocument();
      expect(price).toBeInTheDocument();
    })
  })

  it('Should expand a shoes info when its image is clicked', async () => {
    getAllShoes.mockResolvedValue(mockGetAllShoes);
    getComments.mockResolvedValue(mockGetComments);

    const { getByText, getByRole, getByAltText, getAllByRole, getByPlaceholderText } = render(<MemoryRouter><App /></MemoryRouter>)
    await waitFor(() => {
      const shoeImage = getByAltText("Jordan 13 Retro White Lucky Green")
      fireEvent.click(shoeImage);
      // console.log(shoeImage)
      
    })
    const model = getByText("Model: ", {exact: false});
    const nameInput = getByPlaceholderText("Name", {exact: false});
    const commentSection = getByText("Comments", {exact: false})

    expect(model).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(commentSection).toBeInTheDocument();
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

  it("should render comment section when expanded shoe is clicked", async () => {
    getAllShoes.mockResolvedValue(mockGetAllShoes);
    getComments.mockResolvedValue(mockGetComments);

    const { getByAltText, getByPlaceholderText } = render(<MemoryRouter><App /></MemoryRouter>)
    await waitFor(() => {
      const shoeImage = getByAltText("Jordan 13 Retro White Lucky Green")
      fireEvent.click(shoeImage);
      // console.log(shoeImage)
    })
    const nameInput = getByPlaceholderText("Name", {exact: false});
    const commentInput = getByPlaceholderText("Comment", {exact: false});
    expect(nameInput).toBeInTheDocument();
    expect(commentInput).toBeInTheDocument();
  });

  it("should change values of comment inputs", async () => {
    getAllShoes.mockResolvedValue(mockGetAllShoes);
    getComments.mockResolvedValue(mockGetComments);

    const { getByAltText, getByPlaceholderText } = render(<MemoryRouter><App /></MemoryRouter>)
    await waitFor(() => {
      const shoeImage = getByAltText("Jordan 13 Retro White Lucky Green")
      fireEvent.click(shoeImage);
    })
    const nameInput = getByPlaceholderText("Name", {exact: false});
    const commentInput = getByPlaceholderText("Comment", {exact: false});

    fireEvent.change(nameInput, {target: {value: "Test Name"}})
    fireEvent.change(commentInput, {target: {value: "Test Comment"}})

    expect(nameInput.value).toBe("Test Name")
    expect(commentInput.value).toBe("Test Comment")   
  })
});
