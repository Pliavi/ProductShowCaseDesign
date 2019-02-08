export function createSpecs(specs) {
  let $specs = document.createElement("table");

  for (const specName in specs) {
    const spec = specs[specName];
    const $row = $specs.insertRow();

    $row.insertCell().innerText = specName;
    $row.insertCell().innerText = spec;
  }

  return $specs;
}
