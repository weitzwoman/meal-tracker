import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <div class="row">
      <div class="col-md-3">
        <new-meal (newMealSender)="addMeal($event)"></new-meal>
      </div>
      <div class="col-md-6">
        <meal-list [childMealList]="masterMealList" (clickSender)="editMeal($event)"></meal-list>
      </div>
      <div class="col-md-3">
        <edit-meal [childSelectedMeal]="selectedMeal" (doneButtonClickedSender)="finishedEditing()"></edit-meal>
      </div>
    </div>
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
