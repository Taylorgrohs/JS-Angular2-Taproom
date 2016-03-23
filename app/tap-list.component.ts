import { Component, EventEmitter } from 'angular2/core';
import { TapComponent } from './tap.component';
import { Tap } from './tap.model';
import { NewTapComponent } from './new-tap.component';
import { EditTapPintsComponent } from './edit-tap-pints.component';
import { LowPipe } from './pint.pipe';

@Component({
  selector: 'tap-list',
  inputs: ['tapList'],
  outputs: ['onTapSelect'],
  pipes: [LowPipe],
  directives: [TapComponent, NewTapComponent, EditTapPintsComponent],
  templateUrl: 'app/tap-list.component.html'
})
export class TapListComponent {
  public tapList: Tap[];
  public onTapSelect: EventEmitter<Tap>;
  public selectedTap: Tap;
  public filterLow: string = "all";
  constructor() {
    this.onTapSelect = new EventEmitter();
  }
  tapClicked(clickedTap: Tap): void {
    console.log('child', clickedTap);
    this.selectedTap = clickedTap;
    this.onTapSelect.emit(clickedTap);
  }
  createTap(holder: any): void {
console.log(holder);
    this.tapList.push(new Tap(holder[0], holder[1], "$" + holder[2], holder[3], 124, this.tapList.length)
    );
  }
  onChange(filterOption) {
    this.filterLow = filterOption;
  }
}
