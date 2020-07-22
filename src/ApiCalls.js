import { getHeapCodeStatistics } from "v8";

const url = "http//localhost:3002/api/v1/shoes";

export const getAllShoes = async () => {
  const response = await fetch(url);
  const shoes = await response.json();
  return shoes;
}