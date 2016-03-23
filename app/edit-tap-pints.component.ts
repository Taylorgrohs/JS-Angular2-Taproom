import { Component, EventEmitter } from 'angular2/core';
import { Tap } from './tap.model';

@Component({
  selector: 'edit-tap-pints',
  inputs: ['tap'],
  template: `
  <div class="container">
    <h3>Keg Options: {{ tap.pints }} pints remaining</h3>
    <div class="tap-form">
      <input [(ngModel)]="tap.name" class="col-sm-2 input-md tap-form"/>
      <input [(ngModel)]="tap.brand" class="col-sm-2 input-md tap-form"/>
      <input [(ngModel)]="tap.price" class="col-sm-2 input-md tap-form"/>
      <input [(ngModel)]="tap.alcohol" class="col-sm-2 input-md tap-form"/>
    </div>
  </div>
  <div class="container">
  <button (click)="sellTap(tap)" class="btn-warning btn-lg add-button">Sell</button>
  <button (click)="refillTap(tap)" class="btn-danger btn-lg add-button right-button">Refill</button>
  </div>
  `
})
export class EditTapPintsComponent {
  public tap: Tap;
  sellTap(tap){
    tap.pints = tap.pints - 1;
    if(tap.pints < 9){
      tap.color = "red";
    } else if (tap.pints < 20){
      tap.color = "orange";
    } else if (tap.pints < 50){
      tap.color = "green";
    } else {
      tap.color = "white";
    };
  }
  refillTap(tap) {
    tap.pints = 124;
    tap.color = "white";
  }
}
