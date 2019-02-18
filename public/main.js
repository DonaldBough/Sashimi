'use strict'

let gramsInOneCup = 155;
let tspInCup = 48;
let tbspInCup = 16;

function addIngredient() {
  let ingredientList = document.getElementById("ingredientList");
  let htmlString = getIngredientListElement();
  let listElement = document.createElement('div');

  listElement.innerHTML = htmlString.trim();
  ingredientList.append(listElement);
}

function showTotalWeight() {
  let unitToShowIn = document.getElementById("unitToShowInElement").value;
  let totalWeight = getTotalWeight(unitToShowIn);

  totalWeight = getConvertedValue(totalWeight, "grams", unitToShowIn);
  if (totalWeight == 0)
    document.getElementById("totalWeightElement").value = "Nothing yet..."
  else
    document.getElementById("totalWeightElement").value = totalWeight;
}

function getTotalWeight(unitToShowIn) {
  let totalWeight =  0;
  let inputGroups = getInputGroups();

  inputGroups.forEach(function(g) {
    let weight = getWeightFromGroup(g);
    let unit = getUnitFromGroup(g);

    totalWeight += getWeightInGrams(weight, unit);
  });
  return totalWeight;
}

function getWeightInGrams(weight, unit) {
  switch(unit) {
    case "grams":
      return weight;
    case "cups":
      return weight * gramsInOneCup;
    case "tsp":
      return (weight /tspInCup) * gramsInOneCup;
    case "TBSP":
      return (weight /tbspInCup) * gramsInOneCup;
    default:
      return null;
  }
}

function getConvertedValue(weight, unit, unitToShowIn) {
  switch(unitToShowIn) {
    case "grams":
      return weight;
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
  let endOfInputForms = e.length -1;
  return [].slice.call(e, start, endOfInputForms); 
}

function getIngredientListElement() {
  let listElementString =  
  `
    <li>
      <div id="ingredientListElement" class="input-group mb-3">
        <input type="text" class="form-control" aria-label="Text input with segmented dropdown button">
        <select class="custom-select" id="inputGroupSelect01">
          <option value="grams" selected>grams</option>
          <option value="cups">cups</option>
          <option value="tsp">tsp</option>
          <option value="TBSP">TBSP</option>
        </select>
      </div>
    </li>
  `;
  return listElementString;
}