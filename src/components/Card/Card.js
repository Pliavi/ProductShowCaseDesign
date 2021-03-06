import { createSpecs } from "./../Specs/Specs";
import { cartCounter } from "./../../store";
import "./Card.css";

export function createCard({ name, description, price, image, specs }) {
  const $card = document.createElement("div");
  const $specs = createSpecs(specs);
  const makePrice = price => price.toFixed(2).replace(".", ",");

  $card.classList.add("card");
  $card.innerHTML = `
    <div class="card-wrapper">
      <h1 class="-title">${name}</h1>
      <figure>
        <img src="./img/${image}" alt="${name}" class="-photo" />
        <figcaption class="-subtitle">${description}</figcaption>
      </figure>

      <div class="buy-area">
        <div class="prices">
          <div class="price">R$ ${makePrice(price)}</div>
          <div class="installment">
            10x de R$ ${makePrice(price / 10)}
            <div>sem juros</div>
          </div>
        </div>
        <div class="heart">
          <svg>
            <path
              d="M 23.125042,2.5433373 C 20.078685,2.5358372 17.302334,4.2893197 16.000079,7.0433138 12.454646,-0.66277813 0.95103804,1.9358713 1.0001571,10.418296 c 0.047775,8.249818 14.9999219,19.1249 14.9999219,19.1249 0,0 14.999921,-10.874943 14.999921,-19.1249 0,-4.3492192 -3.525738,-7.8749585 -7.874958,-7.8749587 z"
            />
          </svg>
        </div>
        <div class="buy">
          <button class="buy-button">Comprar</button>
        </div>
      </div>
    </div>
  `;
  $card.append($specs);

  $card.querySelector(".buy-button").addEventListener("click", () => {
    cartCounter.dispatch({ type: "INCREMENT" });
  });

  $card
    .querySelector(".heart")
    .addEventListener("click", e =>
      e.currentTarget.classList.toggle("--active")
    );

  return $card;
}
