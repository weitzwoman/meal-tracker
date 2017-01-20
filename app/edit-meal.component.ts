import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
    <div *ngIf="childSelectedMeal">
      <h3>Edit {{childSelectedMeal.Name}}</h3>
      <div>
        <label>Edit Meal Name:</label>
        <input [(ngModel)]="childSelectedMeal.name">
        <label>Edit Meal Details:</label>
        <input [(ngModel)]="childSelectedMeal.details">
        <label>Edit Calories:</label>
        <input [(ngModel)]="childSelectedMeal.calories">
        <br><br>
        <button class="btn btn-danger" (click)="doneButtonClicked()">Edit Meal</button>
      </div>
    </div>
`
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
