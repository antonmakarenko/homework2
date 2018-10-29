import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Dest} from '../data';

@Component({
  selector: 'hww-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {

  private _all: Dest[];
  public current: Dest|undefined;
  @Output() public currentChange = new EventEmitter<Dest>();

  /**
   * Selects first element via "all" magic setter
   */
  @Input()
  set all(collection) {
    this._all = collection;
    if (collection[0]) {
      this.select(collection[0]);
    }
  }

  get all() {
    return this._all;
  }

  public select(val: Dest) {
    console.log('select()', val);
    this.current = val;
    this.currentChange.emit(val);
  }
}
