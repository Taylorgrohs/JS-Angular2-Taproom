import { Component, EventEmitter } from 'angular2/core';
import { Tap } from './tap.model';
import { TapListComponent } from './tap-list.component';

@Component({
  selector: 'my-app',
  directives: [TapListComponent],
  template: `
  <div class="jumbotron">
    <div class="container">
      <h1>Tap Room List</h1>
    </div>
  </div>
    <div class="container">
    <h3>List of beers on tap:</h3>
      <tap-list
      [tapList]="taps" (onTapSelect)="tapWasSelected($event)">
      </tap-list>
    </div>
  `
})

export class AppComponent {
  public taps: Tap[];
  constructor(){
    this.taps = [
      new Tap("IPA", "Deschutes", "$5", 10, 124, 0),
      new Tap("Stout", "Elysian", "$4", 8.7, 124, 1)
    ];
  }
  tapWasSelected(clickedTap: Tap): void {
    console.log('parent', clickedTap);
  }
}
