import { getListingsArray } from "../../API/listings/getListingsArray.mjs";
import { displayListing } from "../../template/postRendering.mjs";


const searchBar = document.getElementById("search-listing");

//The container that will display the manipulated array
const listingsContainer = document.getElementById("active-listings");

// grabbing the main array that will be manipulated
const getAllListingsArray = await getListingsArray("created", "desc");

searchBar.addEventListener("keyup", newListingList);

function newListingList(e) {
  const result = getAllListingsArray.filter((listing) =>
    listing.title.toLowerCase().includes(e.target.value.toLowerCase())
  );
  displayListing(result, listingsContainer);
}