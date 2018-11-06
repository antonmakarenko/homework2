import {IActivity, ISelectedActivity} from '../../widget/destinations.data';

export const ADD_WISHLIST_ITEM = 'ADD_WISHLIST_ITEM';
export const REMOVE_WISHLIST_ITEM = 'REMOVE_WISHLIST_ITEM';
export const WISHLIST_MOD_NUM = 'WISHLIST_MOD_NUM';

export class AddWishlistItem {
    public type = ADD_WISHLIST_ITEM;

    public constructor(public payload: IActivity) {}
}

export class RemoveWishlistItem {
    public type = REMOVE_WISHLIST_ITEM;

    public constructor(public payload: ISelectedActivity) {}
}

export class WishlistModNum {
    public type = WISHLIST_MOD_NUM;

    public constructor(public payload: ISelectedActivity, public delta: number) {}
}
