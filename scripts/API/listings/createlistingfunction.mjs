import { baseURL } from "../links.mjs";

export async function createListing() {
    const title = document.getElementById("title-listing");
    const desciption = document.getElementById("listing-description")
    const date = document.getElementById("listing-date")
    const media = document.getElementById("title-photo")

    const isosDate = new Date(date.value).toISOString();
    
    const newListing = {
      title: title.value,
      description: desciption.value,
        tags: ["no tags"],
      media: [media.value],
      endsAt: isosDate
    }
  ;
  console.log(newListing);
    const options = {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`
      },
      body: JSON.stringify(newListing)
    }
    try{
      const response = await fetch(`${baseURL}/auction/listings`, options)
      const result = await response.json();
    } catch(error){
      console.log(error)
    }
}