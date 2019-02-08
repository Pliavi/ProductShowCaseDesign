import { createCard } from "./components/Card";
import { createSpecs } from "./components/Description";

const $cards = document.querySelector(".cards");
$cards.innerHTML = "";

fetch("/mocks/Products.json")
  .then(data => data.json())
  .then(products => {
    const randomProduct = Math.trunc(Math.random() * 3);
    const product = products[randomProduct];
    const $card = createCard(product);
    const $specs = createSpecs(product.specs);

    $cards.insertAdjacentHTML("beforeend", $card);
    $cards.insertAdjacentElement("beforeend", $specs);
  });
