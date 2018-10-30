import { Injectable } from '@angular/core';
import { ISocialData, data$ } from '../social.data';

@Injectable({
  providedIn: 'root'
})
export class SocialFeedService {

    private _cache: {[key: number]: ISocialData};

    public getInfo(id: number): ISocialData {
        if (!this._cache) {
            this._cache = {};
            data$.subscribe(v => this._cache[v.geoId] = v);
        }
        return this._cache[id];
    }
}
