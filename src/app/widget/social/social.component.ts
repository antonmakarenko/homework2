import {Component, Input, OnInit} from '@angular/core';
import {IActivity} from '../destinations.data';
import {getRandomEl} from '../../get-random.function';

@Component({
  selector: 'hww-social',
  templateUrl: './social.component.html'
})
export class SocialComponent implements OnInit {

  private a: IActivity;
  private img: string;

  constructor() { }

  ngOnInit() {
  }

  @Input('activity')
  set activity(value: IActivity) {
    this.a = value;
    this.img = getRandomEl(value.images);
  }
}
