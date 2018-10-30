import {IGeoId} from '../geo-id.interface';
import {from, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {getRandomEl, getRandomInt} from '../../get-random.function';

const allConditions = ['cloud', 'sun', 'rain', 'snow'];

export interface IWeatherData extends IGeoId {
    conditions: string;
    temp: number;
    humidity: number;
}

const ids = [11, 12, 13, 21, 22, 23, 31, 32, 33];

export const data$: Observable<IWeatherData> = from(ids).pipe(
    map((id: number): IWeatherData => {
        const temp = getRandomInt(30) - getRandomInt(45);
        let cond = getRandomEl(allConditions);
        let humidity = getRandomInt(101);
        if (temp >= 0) {
            if (cond === 'snow') {
                cond = 'rain';
                humidity = 85 + getRandomInt(15);
            }
        } else {
            if (cond === 'rain') {
                cond = 'snow';
                humidity = 50 + getRandomInt(40);
            }
        }
        return {geoId: id, conditions: cond, temp: temp, humidity: humidity};
    })
);
