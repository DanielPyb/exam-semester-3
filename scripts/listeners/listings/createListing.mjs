import { createListing } from "../../API/listings/createlistingfunction.mjs";

const listingBTN = document.getElementById("listing-btn");

listingBTN.addEventListener("click", function(event){
    event.preventDefault();
    createListing();
})