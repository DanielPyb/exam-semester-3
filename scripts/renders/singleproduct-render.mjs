export async function singleProductRender(SP, container){
    console.log(SP.media)
    container.innerHTML = "";
    container.innerHTML = `
    <div class="card-group my-5">
    <div class="card">
    <h2 class="card-title m-3">${SP.title}</h2>
    <img src="${SP.media}" class="card-img-top" alt="..."></img>
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
                    <h4>${SP._count.bids}</h4>
                    <p>By: </br><span>Bidder-ID</span></p>
              </div>
              <div class="col img-large">
                <img src="img/Gavel_0001.png" style="width: 100%;">
              </div>
              <div class="col" style="width: 100%;">
                <p>Your bid</p>
                <form>
                    <input type="number" id="bid-value"> </br>
                    <button type="submit" class="btn btn-primary mt-3">bid</button>
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