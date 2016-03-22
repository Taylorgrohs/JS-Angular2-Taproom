import { Component, EventEmitter } from 'angular2/core';
import { TapComponent } from './tap.component';
import { Tap } from './tap.model';
import { NewTapComponent } from './new-tap.component';

@Component({
  selector: 'tap-list',
  inputs: ['tapList'],
  directives: [TapComponent, NewTapComponent],
  templateUrl: 'app/tap-list.component.html'
})
export class TapListComponent {
  public tapList: Tap[];
  public onTapSelect: EventEmitter<Tap>;
  public selectedTap: Tap;
  constructor() {
    this.onTapSelect = new EventEmitter();
  }
  tapClicked(clickedTap: Tap): void {
    console.log('child', clickedTap);
    this.selectedTap = clickedTap;
    this.onTapSelect.emit(clickedTap);
  }
  createTap(holder: string): void {
    var hold = holder.split(" ");

    this.tapList.push(new Tap(
      hold[0], hold[1], hold[2], hold[3], 124, this.tapList.length)
    );
  }
}
