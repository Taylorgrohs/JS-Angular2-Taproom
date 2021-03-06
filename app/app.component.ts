import { Component, EventEmitter } from 'angular2/core';
import { Tap } from './tap.model';
import { TapListComponent } from './tap-list.component';

@Component({
  selector: 'my-app',
  directives: [TapListComponent],
  template: `
  <div class="container">
    <div class="jumbotron">
      <div class="container">
        <h1>Tap Room List</h1>
      </div>
    </div>
  </div>
    <div class="container">
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
      new Tap("IPA", "Deschutes", "$5", "10", 9, 0),
      new Tap("Stout", "Elysian", "$4", "8.7", 124, 1),
      new Tap("Tricerahops", "Ninkasi", "$6", "10", 80, 2),
      new Tap("Apple Ale", "REDDS", "$4", "4.5", 45, 3)
    ];
  }
  tapWasSelected(clickedTap: Tap): void {
    console.log('parent', clickedTap);
  }
}
