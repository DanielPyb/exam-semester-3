export function carouselRender(media, id, container){
    //Carousel container - everything related to the container will be in this
    const carouselEl = document.createElement("div");
    carouselEl.setAttribute("id", "carousel-" + id);
    carouselEl.setAttribute("data-bs-ride", "true");
    carouselEl.classList.add("carousel", "slide");
    container.append(carouselEl);

    // carousel indicator container
    const carouselIndicatorsEl = document.createElement("div")
    carouselIndicatorsEl.classList.add("carousel-indicators")
    carouselEl.append(carouselIndicatorsEl)

    // inner carousel container
    const innerCarouselEl = document.createElement("div")
    innerCarouselEl.classList.add("carousel-inner")
    carouselEl.append(innerCarouselEl);

    if(media.length > 0){
        let i = 0;
        media.forEach(img => {
            const carouselLiEL = document.createElement("button");
            const carouselItem = document.createElement("div");
            const carouselImgEl = document.createElement("img") 
            
            carouselLiEL.setAttribute("type", "button")
            carouselLiEL.setAttribute("data-bs-target", "carousel-" + id)
            carouselLiEL.setAttribute("data-bs-slide-to", i)
            carouselLiEL.setAttribute("aria-label", `Slide ${i + 1}`);
            

            carouselItem.classList.add("carousel-item")

            carouselImgEl.classList.add("d-block", "w-100")
            carouselImgEl.setAttribute("src", img)

            if(i === 0){
                carouselLiEL.classList.add("active")
                carouselLiEL.setAttribute("aria-current", "true")
                carouselItem.classList.add("active")
            }

            carouselIndicatorsEl.append(carouselLiEL)
            innerCarouselEl.append(carouselItem)
            carouselItem.append(carouselImgEl)
            i++
        });
            // Previous button
            if(media.length !== 1 ){
    const carouselControlPrev = document.createElement("button")
    carouselControlPrev.classList.add("carousel-control-prev")
    carouselControlPrev.setAttribute("type", "button")
    carouselControlPrev.setAttribute("data-bs-slide", "prev")
    carouselControlPrev.setAttribute("data-bs-target", "#carousel-" + id)
    carouselEl.append(carouselControlPrev)

    const carouselControlPrevIcon = document.createElement("span")
    carouselControlPrevIcon.classList.add("carousel-control-prev-icon")
    carouselControlPrevIcon.setAttribute("aria-hidden", "true")
    carouselControlPrev.append(carouselControlPrevIcon)

    const carouselControlPrevText = document.createElement("span")
    carouselControlPrevText.classList.add("sr-only")
    carouselControlPrev.append(carouselControlPrevText)

    // Next button
    const carouselControlNext = document.createElement("button")
    carouselControlNext.classList.add("carousel-control-next")
    carouselControlNext.setAttribute("type", "button")
    carouselControlNext.setAttribute("data-bs-slide", "next")
    carouselControlNext.setAttribute("data-bs-target", "#carousel-" + id)
    carouselEl.append(carouselControlNext)

    const carouselControlNextIcon = document.createElement("span")
    carouselControlNextIcon.classList.add("carousel-control-next-icon")
    carouselControlNextIcon.setAttribute("aria-hidden", "true")
    carouselControlNext.append(carouselControlNextIcon)

    const carouselControlNextText = document.createElement("span")
    carouselControlNextText.classList.add("sr-only")
    carouselControlNext.append(carouselControlNextText)
}

    } else {
        const carouselItem = document.createElement("div");
        const carouselImgEl = document.createElement("img")
        carouselItem.classList.add("carousel-item", "active")
        carouselImgEl.classList.add("d-block", "w-100")
        carouselImgEl.setAttribute("src", "img/Gavel_0001.png")

        innerCarouselEl.append(carouselItem)
        carouselItem.append(carouselImgEl)
    }


}