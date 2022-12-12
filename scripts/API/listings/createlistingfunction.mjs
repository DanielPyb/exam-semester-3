import { errorTextDisplayToggle } from "../../Validation/errorMessages/errorDisplay.mjs";
import { validateDeadline, validateTitle, validateURL } from "../../Validation/validate.mjs";
import { baseURL } from "../links.mjs";


export async function createListing() {
    const title = document.getElementById("title-listing");
    const desciption = document.getElementById("listing-description")
    const date = document.getElementById("listing-date")
    const media = document.getElementById("title-photo")

    let LISTING_REQUEST = false;
  //Listing Errors
  const titleListingError = document.getElementById(
    "title-error"
  );
  if (validateTitle(title) === true)
    errorTextDisplayToggle(titleListingError, true);
  else {
    errorTextDisplayToggle(titleListingError, false);
  }
  const deadlineListingError = document.getElementById(
    "date-register-error"
  );
  if (validateDeadline(date) === true)
    errorTextDisplayToggle(deadlineListingError, true);
  else {
    errorTextDisplayToggle(deadlineListingError, false);
  }
  const photoError = document.getElementById(
    "photo-error"
  );
  if (validateURL(media.value) === true){
    errorTextDisplayToggle(photoError, true);
    LISTING_REQUEST = true;
  }else {
    errorTextDisplayToggle(photoError, false);
  }
  if(LISTING_REQUEST){
    const isosDate = new Date(date.value).toISOString();
    const newListing = {
      title: title.value,
      description: desciption.value,
        tags: ["no tags"],
      media: [media.value],
      endsAt: isosDate
    }
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
}