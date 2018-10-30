import { Component, OnInit } from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {IActivity, IDest} from './destinations.data';
import {DestinationsService} from './destinations.service';
import {getRandomEl} from '../get-random.function';

@Component({
  selector: 'hww-widget',
  templateUrl: './widget.component.html'
})
export class WidgetComponent implements OnInit {

    public destinations$: Observable<IDest[]>;
    private _destination: IDest;
    public activity: IActivity;
    private _sub: Subscription;

    constructor(
        private _destinations: DestinationsService
    ) { }

    ngOnInit() {
        this.destinations$ = this._destinations.getData();
        this._sub = this.destinations$.subscribe((v) => this._pickRandomDestination(v));
    }

    private _pickRandomDestination(collection: IDest[]) {
        this.destination = getRandomEl(collection);
        this._sub.unsubscribe();
    }

    set destination(value: IDest) {
        this._destination = value;
        this._pickRandomActivity();
    }

    get destination(): IDest {
        return this._destination;
    }

    private _pickRandomActivity() {
        this.activity = getRandomEl(this._destination.activities);
    }
}
