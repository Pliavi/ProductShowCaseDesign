import "./Specs.css";

export function createSpecs(specs) {
  let $specs = document.createElement("div");
  let $table = document.createElement("table");
  $specs.classList.add("specs");

  for (const specName in specs) {
    const spec = specs[specName];
    const $row = $table.insertRow();

    $row.insertCell().innerText = specName;
    $row.insertCell().innerText = spec;
  }

  $specs.appendChild($table);

  return $specs;
}
