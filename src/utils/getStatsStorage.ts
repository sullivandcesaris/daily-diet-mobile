import { Meals } from "@storage/mealsStorage";

export function calculatePercentage(): number {
  const totalMeals = getTotalMeals();
  const healthyMeals = getHealthyMealsCount();

  let percentage = 0;
  if (totalMeals > 0) {
    percentage = (healthyMeals / totalMeals) * 100;
  }

  return parseFloat(percentage.toFixed(2));
}

export function getTotalMeals(): number {
  let total = 0;
  for (const day in Meals) {
    total += Meals[day].length;
  }
  return total;
}

export function getHealthyMealsCount(): number {
  let count = 0;
  for (const day in Meals) {
    count += Meals[day].filter((meal) => meal.healthy).length;
  }
  return count;
}

export function getUnhealthyMealsCount(): number {
  let count = 0;
  for (const day in Meals) {
    count += Meals[day].filter((meal) => !meal.healthy).length;
  }
  return count;
}

export function getBestHealthySequence(): number {
  let bestSequence = 0;
  let currentSequence = 0;

  for (const day in Meals) {
    for (const meal of Meals[day]) {
      if (meal.healthy) {
        currentSequence++;
        if (currentSequence > bestSequence) {
          bestSequence = currentSequence;
        }
      } else {
        currentSequence = 0;
      }
    }
  }

  return bestSequence;
}
