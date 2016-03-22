import { Component, EventEmitter } from 'angular2/core';
import { Tap } from './tap.model';

@Component({
  selector: 'new-tap',
  outputs: ['onSubmitNewTap'],
  template: `
    <div class="tap-form">
      <h3>Tap a new keg</h3>
      <input placeholder="Name" class="input-md" #newName>
      <input placeholder="Brand" class="input-md" #newBrand>
      <input placeholder="Price" class="input-md" #newPrice>
      <input placeholder="Alcohol" class="input-md" #newAlcohol>
      <button (click)="addTap(newName, newBrand, newPrice, newAlcohol)" class="btn-success btn-lg add-button">Add</button>
    </div>
  `
})
export class NewTapComponent {
  public onSubmitNewTap: EventEmitter<String>;
  constructor() {
    this.onSubmitNewTap = new EventEmitter();
  }
  addTap(userName: HTMLInputElement, userBrand: HTMLInputElement, userPrice: HTMLInputElement, userAlcohol: HTMLInputElement){
    var holder = userName.value + " " + userBrand.value + " " + userPrice.value + " " + userAlcohol.value;
    this.onSubmitNewTap.emit(holder);
    userName.value = "";
    userBrand.value = "";
    userPrice.value = "";
    userAlcohol.value = "";
  }
}
