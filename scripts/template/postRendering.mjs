import { bidCall } from "../API/listings/bid.mjs";
import { getListingsArray } from "../API/listings/getListingsArray.mjs";
import { isLoggedIn } from "../Validation/loginCheck.mjs";

const listingsContainer = document.getElementById("active-listings");
const postArray = await getListingsArray("created", "desc");

export function displayListing(arr, container) {
  container.innerHTML = "";
  arr.forEach((listing) => {
    const {
      media: media,
      title: title,
      description: description,
      id: id,
      endsAt: endsAt,
      bids: bids,
      seller: seller,
    } = listing;

    const columnEl = document.createElement("div");
    columnEl.className = "col-sm-12 col-md-4 py-3";
    container.append(columnEl);

    const cardEl = document.createElement("div");
    cardEl.className = "card h-100";
    columnEl.append(cardEl);

    // card header elements
    const cardHeaderEl = document.createElement("div");
    cardHeaderEl.className = "card-header";
    cardEl.append(cardHeaderEl);

    const titleLink = document.createElement("a");
    titleLink.className = "link-primary";
    titleLink.setAttribute("href", "single-product.html?id=" + id);
    cardHeaderEl.append(titleLink);

    const titleEl = document.createElement("h2");
    titleEl.innerHTML = title;
    titleLink.append(titleEl);

    // card body elements
    const cardBodyEl = document.createElement("div");
    cardBodyEl.className = "card-body";
    cardEl.append(cardBodyEl);

    const mediaContainer = document.createElement("div");
    cardBodyEl.append(mediaContainer);
    if (media.length > 0) {
      const carouselControlsEl = document.createElement("div");
      carouselControlsEl.setAttribute("id", "carouselCntrl" + "-" + id);
      carouselControlsEl.setAttribute("data-ride", "carousel");
      carouselControlsEl.className = "carousel slide";
      mediaContainer.append(carouselControlsEl);

      const carouselInner = document.createElement("div");
      carouselInner.className = "carousel-inner";
      carouselControlsEl.append(carouselInner);

      let i = 0;
      media.forEach((img) => {
        const carouselItem = document.createElement("div");
        if (i === 0) {
          carouselItem.className = "carousel-item active";
        } else {
          carouselItem.className = "carousel-item";
        }
        carouselInner.append(carouselItem);

        const carouselImage = document.createElement("img");
        carouselImage.className = "d-block w-100";
        carouselImage.setAttribute("src", img);
        carouselImage.setAttribute(
          "alt",
          "This is a photo of the item that's for sale"
        );
        carouselItem.append(carouselImage);
        i++;
      });
      if (media.length > 1) {
        const carouselControlPrev = document.createElement("a");
        carouselControlPrev.setAttribute("href", "#carouselCntrl" + "-" + id);
        carouselControlPrev.setAttribute("role", "button");
        carouselControlPrev.setAttribute("data-slide", "prev");
        carouselControlPrev.className = "carousel-control-prev"
        carouselControlsEl.append(carouselControlPrev);

        const carouselPrevIcon = document.createElement("span");
        carouselPrevIcon.className = "carousel-control-prev-icon";
        carouselPrevIcon.setAttribute("aria-hidden", "true");
        carouselControlPrev.append(carouselPrevIcon);

        const carouselPrevIconSR = document.createElement("span");
        carouselPrevIconSR.innerHTML = "Previous";
        carouselPrevIconSR.className = "sr-only";
        carouselControlPrev.append(carouselPrevIconSR);

        const carouselControlNext = document.createElement("a");
        carouselControlNext.setAttribute("href", "#carouselCntrl" + "-" + id);
        carouselControlNext.setAttribute("role", "button");
        carouselControlNext.setAttribute("data-slide", "next");
        carouselControlNext.className = "carousel-control-next"
        carouselControlsEl.append(carouselControlNext);


        const carouselNextIcon = document.createElement("span");
        carouselNextIcon.className = "carousel-control-next-icon";
        carouselNextIcon.setAttribute("aria-hidden", "true");
        carouselControlNext.append(carouselNextIcon);

        const carouselNextIconSR = document.createElement("span");
        carouselNextIconSR.innerHTML = "next";
        carouselNextIconSR.className = "sr-only";
        carouselControlNext.append(carouselNextIconSR);
      }

      /*
            media.forEach(img => {
            const imageEl = document.createElement("img");
            imageEl.setAttribute("alt", "This is a photo of the item that's for sale");
            imageEl.setAttribute("style", "width:100%")
            imageEl.setAttribute("src", img)
            mediaContainer.append(imageEl);
        })
*/
    } else {
      const imageEl = document.createElement("img");
      imageEl.setAttribute("alt", "this listing does not have a photo");
      imageEl.setAttribute("style", "width:100%");
      imageEl.setAttribute("src", "img/Gavel_0001.png");
      mediaContainer.append(imageEl);
    }
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
    const endDate = new Date(endsAt);
    timeLeftEl.innerHTML =
      endDate.getDate() +
      "-" +
      endDate.getMonth() +
      "-" +
      endDate.getFullYear();
    footerColOne.append(timeLeftEl);

    const sellerEl = document.createElement("p");
    sellerEl.innerHTML = seller.name;
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
      currentBidEl.innerHTML = bids[bids.length - 1].amount;
      footerColTwo.append(currentBidEl);

      const bidderEl = document.createElement("p");
      bidderEl.innerHTML = bids[bids.length - 1].bidderName;
      if(bids[bids.length - 1].bidderName === localStorage.getItem("username")) bidderEl.setAttribute("style", "font-weight: 700")
      footerColTwo.append(bidderEl);
    } else {
      const currentBidEl = document.createElement("h4");
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
        bidInput.setAttribute("style", "width:100%")
      bidForm.append(bidInput);

      const bidBtn = document.createElement("button");
      bidBtn.setAttribute("type", "submit");
      bidBtn.innerHTML = "Bid!";
      bidBtn.className = "btn btn-primary m-3";
      bidBtn.setAttribute("id", id);
      bidForm.append(bidBtn);
    } else {
      const notLoggedInEl = document.createElement("h4");
      notLoggedInEl.innerHTML = "Log in to bid";
      footerColThree.append(notLoggedInEl);
    }
  });
  const forms = container.querySelectorAll("forms");
  const btns = container.querySelectorAll("button");
  btns.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      event.preventDefault();
      bidCall(btn.id, btn.previousElementSibling.value)
    });
  });
}

await displayListing(postArray, listingsContainer);
