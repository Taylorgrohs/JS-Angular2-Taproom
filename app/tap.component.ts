import { Component } from 'angular2/core';
import { Tap } from './tap.model';

@Component({
    selector: 'tap-display',
    inputs: ['tap'],
  template: `
    <ul class="first"> <li>{{ tap.name }} - {{ tap.brand }} || {{ tap.pints }} pints left.</li>
    <ul> <li>{{ tap.price }} per pint / {{ tap.alcohol }}% Alcohol</li></ul>
    </ul>
  `
})
export class TapComponent {
  public tap: Tap;
}
