const postsURL = "https://api.noroff.dev/api/v1/auction/listings"
const listingsContainer = document.getElementById("active-listings");

export async function getAll(){
    const options = {
      method: "GET",
      headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }
  }
  try{
    const response = await fetch(postsURL, options)
    const data = await response.json();
    return data;
    }catch(error){
      console.log(error)
    }
}
function getListings(arr, container) {
    container.innerHTML= "";
    arr.forEach(post => {
        const {media: media, title : title, description: description, id: id, endsAt: endsAt} = post;
        container.innerHTML += 
        `
        <div class="col-md-6 py-3">
        <div class="card">
            <a href="single-product.html?id=${id}" class="link-primary"><h2 class="card-title m-3">${title}</h2></a>
           <img src="${media}" class="card-img-top" alt="${description}">
            <div class="card-body">
                
                <p class="card-text">${description}</p>
            <div class="card-footer">
                <div class="container text-center">
                    <div class="row">
                    <div class="col">
                            <p>time left</p>
                            <h4>${endsAt}</h4>
                            <p>Seller: </br><span>Seller-ID</span></p>
                    </div>
                    <div class="col">
                        <p>Current bid</p>
                            <h4>18.22-22</h4>
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
    </div>
        `
    });
}

const postArray = await getAll();

getListings(postArray, listingsContainer);