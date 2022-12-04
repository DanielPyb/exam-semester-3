import { singleProduct } from "../functions/singleproduct.mjs";
import { singleProductRender } from "./singleproduct-render.mjs";

const paramString = window.location.search;
const searchParams = new URLSearchParams(paramString);
const currentID = (searchParams.get("id"));

const singleProductContainer = document.getElementById("single-product-container");
const singleProductInfo = await singleProduct(currentID);

await singleProductRender(singleProductInfo, singleProductContainer);

await console.log(singleProductInfo);