import { Component, OnInit } from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Activity, Dest} from './destinations.data';
import {DestinationsService} from './destinations.service';
import {getRandomEl} from '../get-random.function';

@Component({
  selector: 'hww-widget',
  templateUrl: './widget.component.html'
})
export class WidgetComponent implements OnInit {

    public destinations$: Observable<Dest[]>;
    private _destination: Dest;
    public activity: Activity;
    private _sub: Subscription;

    constructor(
        private _destinations: DestinationsService
    ) { }

    ngOnInit() {
        this.destinations$ = this._destinations.getData();
        this._sub = this.destinations$.subscribe((v) => this._pickRandomDestination(v));
    }

    private _pickRandomDestination(collection: Dest[]) {
        this.destination = getRandomEl(collection);
        this._sub.unsubscribe();
    }

    set destination(value: Dest) {
        this._destination = value;
        this._pickRandomActivity();
    }

    get destination(): Dest {
        return this._destination;
    }

    private _pickRandomActivity() {
        this.activity = getRandomEl(this._destination.activities);
    }
}
