import { baseURL } from "../links.mjs";


export async function getListingsArray(sort, sortOrder){
    const options = {
      method: "GET",
      headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }
  }
  try{
    const response = await fetch(`${baseURL}/auction/listings?sort=${sort}&sortOrder=${sortOrder}&_seller=true&_bids=true&_active=true`, options)
    const data = await response.json();
    return data;
    }catch(error){
      alert(error)
    }
}