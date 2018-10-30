import {Component, Input} from '@angular/core';
import {IActivity} from '../destinations.data';
import {getRandomEl} from '../../get-random.function';
import {SocialFeedService} from './social-feed.service';
import {ISocialData} from '../social.data';

@Component({
  selector: 'hww-social',
  templateUrl: './social.component.html'
})
export class SocialComponent {

  private a: IActivity;
  private img: string;

  constructor(
      private _socialFeed: SocialFeedService
  ) { }

  @Input('activity')
  set activity(value: IActivity) {
      this.a = value;
      this.img = getRandomEl(value.images);
  }

  public getInfo(): ISocialData {
      return this._socialFeed.getInfo(this.a.geoId);
  }
}
