'use strict';

function addIngredient() {
  let ingredientList = document.getElementById("ingredientList");
  let htmlString = getIngredientListElement();
  let div = document.createElement('div');

  div.innerHTML = htmlString.trim();
  ingredientList.append(htmlListItem);
}

function getIngredientListElement() {
  return 
  `
    <div id="ingredientListElement" class="input-group mb-3">
      <input type="text" class="form-control" aria-label="Text input with segmented dropdown button">
      <select class="custom-select" id="inputGroupSelect01">
        <option value="g" selected>grams</option>
        <option value="cup">cups</option>
        <option value="tsp">tsp</option>
        <option value="TBSP">TBSP</option>
      </select>
    </div>
  `;
}