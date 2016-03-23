import { Component, EventEmitter } from 'angular2/core';
import { Tap } from './tap.model';

@Component({
  selector: 'edit-tap-pints',
  inputs: ['tap'],
  template: `
  <div>
    <h3>Sell a Pint: {{ tap.pints }} pints remaining</h3>
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
