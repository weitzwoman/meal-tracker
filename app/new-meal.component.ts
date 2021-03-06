import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <div>
      <h3>New Meal Information</h3>
      <div class="well">
        <label>Enter Meal Name:</label>
        <input #newName class="form-control">
        <label>Enter Meal Details:</label>
        <input #newDetails class="form-control">
        <label>Enter Calories:</label>
        <input #newCalories class="form-control" type="number">
        <br>
        <button class="btn btn-warning" (click)="submitForm(newName.value, newDetails.value, newCalories.value); newName.value=''; newDetails.value=''; newCalories.value='';">Add Meal</button>
      </div>
    </div>
  `
})


export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();

  submitForm(name: string, details: string, calories: number) {
    var newMealToAdd: Meal = new Meal(name, details, calories);
    this.newMealSender.emit(newMealToAdd);
  }
}
