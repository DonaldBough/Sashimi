'use strict';

let total = 0;

function addIngredient() {
  let ingredientList = document.getElementById("ingredientList");
  // call getIngredient correctly so we have id values for list
  let htmlString = getIngredientListElement();
  let listElement = document.createElement('div');

  listElement.innerHTML = htmlString.trim();
  ingredientList.append(listElement);
}

function changeTotal(value, unit) {

}

function getIngredientListElement(id) {
  let listElementString =  
  `
    <li>
      <div id="ingredientListElement" class="input-group mb-3">
        <input type="text" class="form-control" aria-label="Text input with segmented dropdown button">
        <select class="custom-select" id="inputGroupSelect01">
          <option value="g" selected>grams</option>
          <option value="cup">cups</option>
          <option value="tsp">tsp</option>
          <option value="TBSP">TBSP</option>
        </select>
        <div class="input-group-append">
          <button type="button" class="btn addButton">✓</button>
        </div>
      </div>
    </li>
  `;
  return listElementString;
}

function listenForAddIngredient() {
 document.getElementById("ingredientList").addEventListener("click", function(e) {
    if(e.target && e.target.nodeName == "BUTTON") {
      console.log("add");
    }
  }); 
}

listenForAddIngredient();

let ingredientListElementArray = [document.getElementById("ingredientListElement0")];