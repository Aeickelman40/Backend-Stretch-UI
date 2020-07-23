
const url = "http://localhost:3002/api/v1/shoes";

// fetch("localhost:3002/api/v1/shoes/", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

export const getAllShoes = async () => {
  
  debugger
  const response = await fetch(url);
  const shoes = await response.json();
  console.log(shoes)
  return shoes;
}