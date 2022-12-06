/*const activeListings = document.getElementById("active-listings")

export function getListings(arr, container) {
    container.innerHTML= "";
    arr.forEach(post => {
        const {media: media, title : title, description: description, id: id, endsAt: endsAt, bids: bids, seller: seller} = post;
        container.innerHTML += 
        `
        <div class="col-md-6 py-3">
        <div class="card h-100">
        <div class="card-header">
            <a href="single-product.html?id=${id}" class="link-primary"><h2 class="card-title m-3">${title}</h2></a>
        </div>
            <div class="card-body">
            <img src="${media}" class="card-img-top" alt="${description}">  
                <p class="card-text">${description}</p>
            </div>
            <div class="card-footer">
                <div class="container text-center">
                    <div class="row">
                    <div class="col">
                            <p>time left</p>
                            <h4>${endsAt}</h4>
                            <p>Seller: </br><span>${seller.name}</span></p>
                    </div>
                    <div class="col">
                        <p>Current bid</p>
                            <h4>curent bid</h4>
                            <p>By: </br><span>Bidder-ID</span></p>
                    </div>
                    <div class="col" style="width: 100%;">
                        <p>Your bid</p>
                        <form>
                            <input type="number"> </br>
                            <button type="submit" class="btn btn-primary mt-3">bid</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `
    });
}

getListings()
*/