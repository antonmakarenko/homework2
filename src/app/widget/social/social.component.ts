import {Component, Input} from '@angular/core';
import {IActivity} from '../destinations.data';
import {getRandomEl} from '../../get-random.function';
import {SocialFeedService} from './social-feed.service';
import {ISocialData} from '../social.data';
import {Store} from '@ngrx/store';
import {AddWishlistItem} from '../../store/actions/wishlist.action';

@Component({
  selector: 'hww-social',
  templateUrl: './social.component.html'
})
export class SocialComponent {

  public a: IActivity;
  public img: string;

  constructor(
      private _socialFeed: SocialFeedService,
      private _store: Store<any>
  ) { }

  @Input('activity')
  set activity(value: IActivity) {
      this.a = value;
      this.img = getRandomEl(value.images);
  }

  public getInfo(): ISocialData {
      return this._socialFeed.getInfo(this.a.geoId);
  }

  public signUp(a: IActivity) {
      this._store.dispatch(new AddWishlistItem(a));
  }
}
