import { cartCounter } from "./../../store";
import "./Header.css";

export function createHeader() {
  const $header = document.createElement("header");

  $header.classList.add("header");
  $header.innerHTML = `
    <div class="logo">
      LOGO
      <div class="hamburguer">|||</div>
    </div>
    <div class="search">
      <div class="-bar">
        <input type="search" class="-input">
      </div>
    </div>
    <nav class="nav">
      <a href="#" class="-item">Produtos</a>
      <a href="#" class="-item">Serviços</a>
      <a href="#" class="-item">Carrinho<span class="badge" id="cart-counter">0</span></a>
    </nav>
  `;

  cartCounter.subscribe($header.querySelector("#cart-counter"));

  const $hamburguer = $header.querySelector(".hamburguer");
  const $nav = $header.querySelector(".nav");
  const $search = $header.querySelector(".search");
  const $searchInput = $search.querySelector(".-input");

  $hamburguer.addEventListener("click", () => {
    $nav.classList.toggle("--active");
  });

  $searchInput.addEventListener("focus", () => {
    $search.classList.add("--active");
    $searchInput.select();
  });

  $searchInput.addEventListener("blur", () =>
    $search.classList.remove("--active")
  );

  return $header;
}
