import {Component, Input} from '@angular/core';
import {Dest} from '../destinations.data';

@Component({
  selector: 'hww-details',
  templateUrl: './details.component.html',
})
export class DetailsComponent {
  @Input()
  public dest: Dest;
}
