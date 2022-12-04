export async function singleProductRender(SP, container){
    container.innerHTML = "";
    container.innerHTML = `
    <div class="card-group my-5">
    <div class="card">
    <h2 class="card-title m-3">${SP.title}</h2>
    <img src="${SP.media[SP.media.length - 1]}" class="card-img-top" alt="..."></img>

    
      <div class="card-body">
        
        <p class="card-text">${SP.description}</p>
      <div class="card-footer">
        <div class="container text-center">
            <div class="row">
                <div class="col">
                    <img src="${SP.seller.avatar}" style="width: 100%;">
                  </div>
              <div class="col img-large">
                <p>time left</p>
                    <h4>18.22-22</h4>
                    <p>Seller: </br><span>${SP.seller.name}</span></p>
              </div>
              <div class="col img-large">
                <img src="img/Gavel_0001.png" style="width: 100%;">
              </div>
              <div class="col">
                    <p>Current bid</p>
                    <h4>Currently no bids</h4>
                    <p>By: </br><span>Bidder ID</span></p>
              </div>
              <div class="col img-large">
                <img src="img/Gavel_0001.png" style="width: 100%;">
              </div>
              <div class="col" style="width: 100%;">
                <p>Your bid</p>
                <form>
                <input type="number" id="bid-amount"> </br>
                <button type="submit" class="btn btn-primary mt-3" id="bidding-btn">Bid</button>
                </form>
              </div>
            </div>
          </div>
      </div>
    </div>
    </div>
</div>
    `
}

//${SP.bids[SP.bids.length - 1].bidderName} bidder name// 
//${SP.bids[SP.bids.length - 1].amount} bidder amount//