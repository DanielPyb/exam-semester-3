import { getListingsArray } from "../../API/listings/getListingsArray.mjs";
import { displayListing } from "../../template/postRendering.mjs";

const listingsContainer = document.getElementById("active-listings");
const postArray = await getListingsArray("created", "desc");


displayListing(postArray, listingsContainer);