import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IDest} from '../destinations.data';

@Component({
  selector: 'hww-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {

  @Input()
  public all: IDest[];

  @Input()
  public current: IDest;

  @Output()
  public currentChange = new EventEmitter<IDest>();

  public select(val: IDest) {
    console.log('select() destination', val);
    this.current = val;
    this.currentChange.emit(val);
  }
}
