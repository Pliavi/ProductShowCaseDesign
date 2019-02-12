import { createCard } from "./components/Card/Card";
import { createHeader } from "./components/Header/Header";
import "./css/main.css";

fetch("./mocks/Products.json")
  .then(data => data.json())
  .then(createProductCard);

function createProductCard(products) {
  const randomProduct = Math.trunc(Math.random() * 3);
  const product = products[randomProduct];

  const $root = document.getElementById("root");
  const $header = createHeader();
  const $card = createCard(product);

  $root.innerHTML = "";
  $root.insertAdjacentElement("afterbegin", $header);
  $root.insertAdjacentElement("beforeend", $card);
}
