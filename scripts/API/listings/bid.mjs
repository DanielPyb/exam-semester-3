import { baseURL } from "../links.mjs";

export async function bidCall(id, amount){
    const bidBody = {amount: +amount}
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        },
        body: JSON.stringify(bidBody),
    }
    try{
        const response = await fetch(`${baseURL}/auction/listings/${id}/bids`, options)
        const result = await response.json()
    }
    catch (error) {
        alert(error)
    }
}