import { getListingsArray } from "../../API/listings/getListingsArray.mjs";
import { getListings } from "../../template/renderposts.mjs";

const listingsContainer = document.getElementById("active-listings");
const postArray = await getListingsArray("created", "desc");

getListings(postArray, listingsContainer);