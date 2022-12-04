const newListingContainer = document.getElementById("newlisting-container");
const newListingBTN = document.getElementById("new-listing-btn");

newListingBTN.addEventListener("click", function(event){
    event.preventDefault();
    if(newListingContainer.style.display === "none"){
    newListingContainer.style.display = "block";}
    else{
        newListingContainer.style.display = "none";
    }
})