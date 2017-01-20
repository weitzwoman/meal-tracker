import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <new-meal></new-meal>
    <meal-list></meal-list>
    <edit-meal></edit-meal>
  </div>
  `
})

export class AppComponent {
  selectedMeal = null;

  masterMealList: Meal[] =[
    new Meal('Oatmeal', 'with Blueberries', 240),
    new Meal('Salad', 'Spinach and Strawberries, and Balsamic Vinegar', 400),
    new Meal('Pizza', 'three slices from Dove Vivi', 800)
  ];

  editMeal(clickedMeal) {
    this.selectedMeal = clickedMeal;
  }

  finishedEditing() {
    this.selectedMeal = null;
  }

  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }
}
