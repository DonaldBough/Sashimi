'use strict'

function getWeightInGrams(weight, unit) {
  switch(unit) {
    case "grams":
      return weight;
    case "ounces":
      return weight * gramsInOneOunce;
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