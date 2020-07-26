
const url = "https://sole-searchin.herokuapp.com/api/v1/shoes";

export const getAllShoes = async () => {
  const response = await fetch(url);
  const shoes = await response.json();
  return shoes;
}