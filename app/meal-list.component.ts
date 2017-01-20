import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <div>
      <h3>Meal List Goes Here</h3>
      <div *ngFor="let currentMeal of childMealList">
        <h5>{{currentMeal.name}}</h5>
        <ul>
          <li>Details: {{currentMeal.details}}</li>
          <li>Calories: {{currentMeal.calories}}</li>
        </ul>
      </div>
    </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();

}
