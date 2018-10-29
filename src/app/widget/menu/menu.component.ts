import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Dest} from '../data';

@Component({
  selector: 'hww-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {

  @Input()
  public all: Dest[];

  @Input()
  public current: Dest;

  @Output()
  public currentChange = new EventEmitter<Dest>();

  public select(val: Dest) {
    console.log('select()', val);
    this.current = val;
    this.currentChange.emit(val);
  }
}
