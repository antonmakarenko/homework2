import {Component, Input, OnInit} from '@angular/core';
import {Activity} from '../destinations.data';
import {getRandomEl} from '../../get-random.function';

@Component({
  selector: 'hww-social',
  templateUrl: './social.component.html'
})
export class SocialComponent implements OnInit {

  private a: Activity;
  private img: string;

  constructor() { }

  ngOnInit() {
  }

  @Input('activity')
  set activity(value: Activity) {
    this.a = value;
    this.img = getRandomEl(value.images);
  }
}
