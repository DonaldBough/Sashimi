'use strict'
var totalWeightInGrams = 0;
let gramsInOneCup = 155;
let tspInCup = 48;
let tbspInCup = 16;
let gramsInOneOunce = 28.3495;
let ingredientCount = 0;

function addIngredient() {
  let ingredientList = document.getElementById("ingredientList");
  let htmlString = getIngredientListElement();
  let listElement = document.createElement('div');

  listElement.innerHTML = htmlString.trim();
  ingredientList.append(listElement);
  incrementIngredientCount();
}

function showTotalWeight() {
  let unitToShowIn = document.getElementById("unitToShowInElement").value;
  let totalWeight = getTotalWeightInGrams(unitToShowIn);
  totalWeightInGrams = totalWeight;

  totalWeight = getValueFromGramsToUnit(totalWeight, unitToShowIn);
  if (totalWeight == 0)
    document.getElementById("totalWeightElement").value = "Nothing yet..."
  else
    document.getElementById("totalWeightElement").value = parseFloat(totalWeight).toFixed(2);
}

function getTotalWeightInGrams(unitToShowIn) {
  let totalWeight =  0;
  let inputGroups = getInputGroups();

  inputGroups.forEach(function(g) {
    let weight = getWeightFromGroup(g);
    let unit = getUnitFromGroup(g);

    totalWeight += getWeightInGrams(weight, unit);
  });
  return totalWeight;
}

function getValueFromGramsToUnit(weight, unitToShowIn) {
  switch(unitToShowIn) {
    case "grams":
      return weight;
    case "ounces":
      return weight / gramsInOneOunce;
    case "cups":
      return weight /gramsInOneCup;
    case "tsp":
      return (weight / gramsInOneCup) * tspInCup;
    case "TBSP":
      return (weight / gramsInOneCup) * tbspInCup;
    default:
      return null;
  }
}

function getWeightFromGroup(group) {
  let weight = group.getElementsByClassName("form-control")[0].value;

  weight = Number(weight);
  if (isNaN(weight))
    return 0;
  return weight;
}

function getUnitFromGroup(group) {
  return group.getElementsByClassName("custom-select")[0].value;
}

function getInputGroups() {
  let e = document.querySelectorAll(".input-group");
  let start = 0;
  let endOfIngredientAddingForms = e.length - 4;
  return [].slice.call(e, start, endOfIngredientAddingForms); 
}

function getIngredientListElement() {
  let listElementString =  
  `
    <li>
      <div id="ingredientListElement" class="input-group mb-3">
        <input type="number" step="0.01" class="form-control">
        <select class="custom-select" id="inputGroupSelect01">
          <option value="grams" selected>grams</option>
          <option value="ounces">ounces</option>
          <option value="cups">cups</option>
          <option value="tsp">tsp</option>
          <option value="TBSP">TBSP</option>
        </select>
      </div>
    </li>
  `;
  return listElementString;
}

function incrementIngredientCount() {
  let ingredientCountForm = document.getElementById("ingredientCountElement");
  ingredientCountForm.textContent = (++ingredientCount) + " ingredients";
}

addIngredient();