import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <div>
      <div class="row">
        <div class="col-md-6">
          <h3>Tracked Meals</h3>
        </div>
        <div class="col-md-6">
          <select (change)="onChange($event.target.value)" class="form-control">
            <option value="allMeals" selected="selected">List All Meals Logged</option>
            <option value="higherCalories">High Calorie Meals</option>
            <option value="lowerCalories">Low Calorie Meals</option>
          </select>
        </div>
      </div>
      <div *ngFor="let currentMeal of childMealList | calories:filterByCalories" class="well">
        <h4>{{currentMeal.name}}</h4>
        <ul>
          <li>Details: {{currentMeal.details}}</li>
          <li>Calories: {{currentMeal.calories}}</li>
        </ul>
        <button class="btn btn-warning" (click)="editButtonHasBeenClicked(currentMeal)">Edit\ {{currentMeal.name}}</button>
        <br>
      </div>
    </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }

  filterByCalories: string = "allMeals";

  onChange(optionFromMenu) {
    this.filterByCalories = optionFromMenu;
  }
}
