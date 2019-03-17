'use strict'

function showPortionAmount() {
  let totalCalories = document.getElementById("totalCaloriesElement").value;
  let portionWeight = document.getElementById("portionWeightElement").value;
  let portionUnit = document.getElementById("portionUnitToShowIn").value;

  let percentEaten = getPercentEaten(portionWeight, portionUnit); 
  let caloriesEaten = percentEaten * totalCalories;
  showCaloriesEaten(caloriesEaten, percentEaten);
}

function showCaloriesEaten(caloriesEaten, percentEaten) {
  let roundedCaloriesEaten = parseFloat(Math.round(caloriesEaten * 100) / 100).toFixed(2);
  let roundedPercentEaten = parseFloat(Math.round(percentEaten * 100)).toFixed(2);
  document.getElementById("portionCaloriesElement").value = roundedCaloriesEaten + " (" + roundedPercentEaten + "%)"
}

function getPercentEaten(portionWeight, portionUnit) {
  let portionInGrams = getWeightInGrams(portionWeight, portionUnit);
  return portionInGrams / totalWeightInGrams;
}