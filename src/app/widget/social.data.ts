import {IGeoId} from './geo-id.interface';
import {getRandomInt} from '../get-random.function';
import {from, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export interface ISocialData extends IGeoId {
    followers: number;
    following: number;
}

const ids = [11, 12, 13, 21, 22, 23, 31, 32, 33];

export const data$: Observable<ISocialData> = from(ids).pipe(
    map((id: number): ISocialData => {
        return {geoId: id, followers: getRandomInt(10000), following: getRandomInt(100)};
    })
);
