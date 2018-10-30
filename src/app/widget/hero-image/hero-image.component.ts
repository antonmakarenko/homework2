import {Component, Input} from '@angular/core';
import {IDest} from '../destinations.data';

@Component({
  selector: 'hww-hero-image',
  templateUrl: './hero-image.component.html',
})
export class HeroImageComponent {

  @Input()
  public current: IDest;
}
