import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ISelectedActivity} from '../destinations.data';
import {Observable} from 'rxjs';
import {selectAll} from '../../store/reducers/wishlist.reducer';
import {WishlistModNum} from '../../store/actions/wishlist.action';

@Component({
  selector: 'hww-wishlist',
  templateUrl: './wishlist.component.html',
})
export class WishlistComponent implements OnInit {

    public items$: Observable<ISelectedActivity[]>;

    constructor(
    private _store: Store<any>
    ) { }

    ngOnInit() {
        this.items$ = this._store.select(selectAll);
    }

    // public removeItem(item: ISelectedActivity) {
    //     this._store.dispatch(new RemoveWishlistItem(item));
    // }

    public modNum(item: ISelectedActivity, qty) {
        this._store.dispatch(new WishlistModNum(item, qty));
    }
}
