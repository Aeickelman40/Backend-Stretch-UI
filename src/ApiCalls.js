
const url = "https://sole-searchin.herokuapp.com/api/v1/shoes";
// const devUrl = "http://localhost:3002/api/v1/shoes"

export const getAllShoes = async () => {
  const response = await fetch(url);
  const shoes = await response.json();
  return shoes;
}

export const getComments = async (shoeId) => {

  const response = await fetch(url + `/${shoeId}/comments/`);
  const comments = await response.json();
  return comments;
}

export const postComments = async (shoeId, author, main_text) => {
  const response = await fetch(
    url + `/${shoeId}/comments/`,
     {
      "method": "POST",
      "headers": {
        "content-type": "application/json"
      },
      "body": JSON.stringify({
        author: author,
        main_text:  main_text
      })
    }
  )
  const message = await response.json();
  return message;
}

export const postShoe = async (brand, model, colorway, price) => {
  const request = {
      "method": "POST",
      "headers": {
      "content-type": "application/json"
      },
      "body": JSON.stringify({
        "brand": brand,
        "model": model,
        "colorway": colorway,
        "retail_price": price
      })
  }
  const response = await fetch(url, request);
  const message = await response.json();
  return message;
}