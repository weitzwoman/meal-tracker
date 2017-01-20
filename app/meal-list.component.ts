import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <div>
      <h3>Tracked Meals</h3>
      <div *ngFor="let currentMeal of childMealList">
        <h5>{{currentMeal.name}}</h5>
        <ul>
          <li>Details: {{currentMeal.details}}</li>
          <li>Calories: {{currentMeal.calories}}</li>
        </ul>
        <button class="btn btn-warning" (click)="editButtonHasBeenClicked(currentMeal)">Edit Meal</button>
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
}
