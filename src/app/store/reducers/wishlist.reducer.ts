import {ISelectedActivity} from '../../widget/destinations.data';
import {createEntityAdapter, EntityAdapter} from '@ngrx/entity';
import {ADD_WISHLIST_ITEM, REMOVE_WISHLIST_ITEM} from '../actions/wishlist.action';
import {createFeatureSelector} from '@ngrx/store';

export const adapter: EntityAdapter<ISelectedActivity> = createEntityAdapter<ISelectedActivity>({
    selectId: (payload: ISelectedActivity) => payload.activity.geoId,
});

export const initialState = adapter.getInitialState({});

export function wishlistReducer(state = initialState, action: any) { // TODO figure out type
    switch (action.type) {
        case ADD_WISHLIST_ITEM:
            const entity: ISelectedActivity = state.entities[action.payload.geoId];
            return adapter.upsertOne(
                {
                    activity: action.payload,
                    numPeople: entity ? entity.numPeople + 1 : 2
                },
                state
            );
        case REMOVE_WISHLIST_ITEM:
            return adapter.removeOne(action.payload.activity.geoId, state);
        default:
            return state;
    }
}

export const {selectAll} = adapter.getSelectors(createFeatureSelector('wishlistItems')); // TODO what is this for?
