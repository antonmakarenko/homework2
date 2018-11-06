import {ISelectedActivity} from '../../widget/destinations.data';
import {createEntityAdapter, EntityAdapter} from '@ngrx/entity';
import {ADD_WISHLIST_ITEM, REMOVE_WISHLIST_ITEM, WISHLIST_MOD_NUM} from '../actions/wishlist.action';
import {createFeatureSelector, createSelector} from '@ngrx/store';

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
        case WISHLIST_MOD_NUM:
            const newNum = action.payload.numPeople + action.delta;
            if (newNum <= 0) {
                return adapter.removeOne(action.payload.activity.geoId, state);
            }
            return adapter.updateOne(
                {
                    id: action.payload.activity.geoId,
                    changes: {numPeople: newNum}
                },
                state
            );
        default:
            return state;
    }
}

export const {selectAll} = adapter.getSelectors(createFeatureSelector('wishlist'));

// export const largestParty = createSelector(
//     selectAll,
//     (items: ISelectedActivity[]) => {
//         return items.reduce<number>((count: number, item: ISelectedActivity) => {
//             return item.numPeople + count;
//         }, 0);
//     }
// );
