import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IActivity, IDest} from '../destinations.data';

@Component({
  selector: 'hww-details',
  templateUrl: './details.component.html',
})
export class DetailsComponent {

  @Input()
  public dest: IDest;

    @Input()
    public current: IActivity;

    @Output()
    public currentChange = new EventEmitter<IActivity>();

    public select(val: IActivity) {
        console.log('select() activity', val);
        this.current = val;
        this.currentChange.emit(val);
    }
}
