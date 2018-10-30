import {Component, Input} from '@angular/core';
import {data$, IWeatherData} from './weather.data';
import {IActivity} from '../destinations.data';

@Component({
  selector: 'hww-weather',
  templateUrl: './weather.component.html',
})
export class WeatherComponent {

    private _data: {[key: number]: IWeatherData};
    private _a: IActivity;
    public weather: IWeatherData;

    constructor() {
        this._data = {};
        data$.subscribe(v => this._data[v.geoId] = v);
    }

    @Input()
    set activity(val: IActivity) {
        this._a = val;
        this.weather = this._data[val.geoId];
    }

    get activity(): IActivity {
        return this._a;
    }
}
