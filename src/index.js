import { createCard } from "./components/Card";
import { createSpecs } from "./components/Description";

const $cards = document.querySelector(".cards");
$cards.innerHTML = "";

fetch("./mocks/Products.json")
  .then(data => data.json())
  .then(products => {
    const randomProduct = Math.trunc(Math.random() * 3);
    const product = products[randomProduct];
    const $card = createCard(product);
    const $specs = createSpecs(product.specs);

    $cards.insertAdjacentElement("beforeend", $card);
    $cards.insertAdjacentElement("beforeend", $specs);

    setTimeout(() => $specs.classList.add("--start"), 10);
    init();
  });

function init() {
  const $searchBar = document.querySelector(".search .-bar");
  const $search = document.querySelector(".search");
  $searchBar.addEventListener("focus", () => $search.classList.add("--active"));
  $searchBar.addEventListener("blur", () =>
    $search.classList.remove("--active")
  );

  let cartCounter = 10;
  const $buyButton = document.querySelector(".buy-button");
  const $cartCounter = document.getElementById("cart-counter");
  $buyButton.addEventListener("click", () => {
    $cartCounter.innerText = ++cartCounter;
  });
}
