import { singleProduct } from "../../API/listings/singleproduct.mjs";
import { singleProductRender } from "../../template/singleproduct-render.mjs";

const paramString = window.location.search;
const searchParams = new URLSearchParams(paramString);
const currentID = (searchParams.get("id"));

const singleProductContainer = document.getElementById("single-product-container");
const singleProductInfo = await singleProduct(currentID);

await singleProductRender(singleProductInfo, singleProductContainer);
