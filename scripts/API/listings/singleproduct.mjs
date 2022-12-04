import { baseURL } from "../links.mjs";


export async function singleProduct(id) {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  };
  try {
    const response = await fetch(`${baseURL}/auction/listings/${id}?_seller=true&_bids=true`, options);
    const data = await response.json();
    return(data);
  } catch (error) {
    console.log(error);
  }
}