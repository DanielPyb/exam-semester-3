import { bidCall } from "../API/listings/bid.mjs";
import { getListingsArray } from "../API/listings/getListingsArray.mjs";
import { isLoggedIn } from "../Validation/loginCheck.mjs";
import { carouselRender } from "./renderCarousel.mjs";

export async function SingleProductRenderer(SP, container) {
  container.innerHTML = "";
  const {
    media: media,
    title: title,
    description: description,
    id: id,
    endsAt: endsAt,
    bids: bids,
    seller: seller,
  } = SP;

  const columnEl = document.createElement("div");
  columnEl.classList.add("card-group", "my-5");
  container.append(columnEl);

  const cardEl = document.createElement("div");
  cardEl.className = "card h-100";
  columnEl.append(cardEl);

  const cardHeaderEl = document.createElement("div");
  cardHeaderEl.className = "card-header";
  cardEl.append(cardHeaderEl);

  const titleEl = document.createElement("h2");
  titleEl.innerHTML = title;
  cardHeaderEl.append(titleEl);

  // card body elements
  const cardBodyEl = document.createElement("div");
  cardBodyEl.className = "card-body";
  cardEl.append(cardBodyEl);

  const mediaContainer = document.createElement("div");
  cardBodyEl.append(mediaContainer);

  carouselRender(media, id, mediaContainer);

  const descriptionEl = document.createElement("p");
  descriptionEl.className = "card-text";
  descriptionEl.innerHTML = description;
  cardBodyEl.append(descriptionEl);

  // card footer elements
  const cardFooterEl = document.createElement("div");
  cardFooterEl.className = "card-footer";
  cardEl.append(cardFooterEl);

  const cardFooterContainerEl = document.createElement("div");
  cardFooterContainerEl.className = "container text-center";
  cardFooterEl.append(cardFooterContainerEl);

  const footerRowEl = document.createElement("div");
  footerRowEl.className = "row";
  cardFooterContainerEl.append(footerRowEl);
  // seller info
  const footerColOne = document.createElement("div");
  footerColOne.className = "col-lg-4";
  footerRowEl.append(footerColOne);

  const timeLeftAnnounce = document.createElement("p");
  timeLeftAnnounce.innerHTML = "Bidding ends";
  footerColOne.append(timeLeftAnnounce);

  const timeLeftEl = document.createElement("h4");
  //issue where it believes that november is december
  const endDate = new Date(endsAt);
  timeLeftEl.innerHTML = endDate.toLocaleDateString();
  timeLeftEl.classList.add("tabular-font");
  footerColOne.append(timeLeftEl);

  const sellerEl = document.createElement("p");
  sellerEl.innerHTML = seller.name;
  if (seller.name === localStorage.getItem("username"))
    sellerEl.setAttribute("style", "font-weight: 700");
  footerColOne.append(sellerEl);

  // bidder info

  const footerColTwo = document.createElement("div");
  footerColTwo.className = "col-lg-4";
  footerRowEl.append(footerColTwo);

  const currentBidAnnounce = document.createElement("p");
  currentBidAnnounce.innerHTML = "Current Bid";
  footerColTwo.append(currentBidAnnounce);

  if (bids.length > 0) {
    const currentBidEl = document.createElement("h4");
    currentBidEl.classList.add("tabular-font");
    currentBidEl.innerHTML = bids[bids.length - 1].amount;
    footerColTwo.append(currentBidEl);

    const bidderEl = document.createElement("p");
    bidderEl.innerHTML = bids[bids.length - 1].bidderName;
    if (bids[bids.length - 1].bidderName === localStorage.getItem("username"))
      bidderEl.setAttribute("style", "font-weight: 700");
    footerColTwo.append(bidderEl);
  } else {
    const currentBidEl = document.createElement("h4");
    currentBidEl.classList.add("tabular-font");
    currentBidEl.innerHTML = 0;
    footerColTwo.append(currentBidEl);

    const bidderEl = document.createElement("p");
    bidderEl.innerHTML = "no current bids";
    footerColTwo.append(bidderEl);
  }

  const footerColThree = document.createElement("div");
  footerColThree.className = "col-lg-4";
  footerRowEl.append(footerColThree);

  const yourBidAnnounce = document.createElement("p");
  yourBidAnnounce.innerHTML = "Your bid";
  footerColThree.append(yourBidAnnounce);

  if (isLoggedIn()) {
    const bidForm = document.createElement("form");
    footerColThree.append(bidForm);

    const bidInput = document.createElement("input");
    bidInput.setAttribute("type", "number");
    bidInput.setAttribute("style", "width:100%");
    bidForm.append(bidInput);

    const bidBtn = document.createElement("button");
    bidBtn.setAttribute("type", "submit");
    bidBtn.innerHTML = "Bid!";
    bidBtn.className = "btn btn-purple-full m-3 bid-btn";
    bidBtn.setAttribute("id", id);
    bidForm.append(bidBtn);
  } else {
    const notLoggedInEl = document.createElement("h4");
    notLoggedInEl.innerHTML = "Log in to bid";
    footerColThree.append(notLoggedInEl);
  }
  const forms = container.querySelectorAll("forms");
  const btns = container.querySelectorAll(".bid-btn");
  btns.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      event.preventDefault();
      bidCall(btn.id, btn.previousElementSibling.value);
    });
  });
}
