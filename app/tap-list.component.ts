import { Component, EventEmitter } from 'angular2/core';
import { TapComponent } from './tap.component';
import { Tap } from './tap.model';

@Component({
  selector: 'tap-list',
  inputs: ['tapList'],
  directives: [TapComponent],
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
}
