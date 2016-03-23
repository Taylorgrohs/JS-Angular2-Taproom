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
  <button (click)="sellTap(tap)" class="btn-success btn-lg">Sell</button>
  </div>
  `
})
export class EditTapPintsComponent {
  public tap: Tap;
  sellTap(tap){
    tap.pints = tap.pints - 1;
  }
}
