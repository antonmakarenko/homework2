import {Component, Input} from '@angular/core';
import {Dest} from '../destinations.data';

@Component({
  selector: 'hww-hero-image',
  templateUrl: './hero-image.component.html',
})
export class HeroImageComponent {

  @Input()
  public current: Dest;
}
