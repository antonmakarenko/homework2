import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Activity, Dest} from '../destinations.data';

@Component({
  selector: 'hww-details',
  templateUrl: './details.component.html',
})
export class DetailsComponent {

  @Input()
  public dest: Dest;

    @Input()
    public current: Activity;

    @Output()
    public currentChange = new EventEmitter<Activity>();

    public select(val: Activity) {
        console.log('select() activity', val);
        this.current = val;
        this.currentChange.emit(val);
    }
}
