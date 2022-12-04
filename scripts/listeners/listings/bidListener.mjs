import { bidCall } from "../../API/listings/bid.mjs";

const bidBTN = document.getElementById("bidding-btn2");

const paramString = window.location.search;
const searchParams = new URLSearchParams(paramString);
const currentID = (searchParams.get("id"));


bidBTN.addEventListener("click", function(event){
    const bidAmount2 = document.getElementById("bid-amount2")
    console.log(bidAmount2)
    event.preventDefault();
    bidCall(currentID, bidAmount2.value)
})