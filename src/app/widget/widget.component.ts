import { Component, OnInit } from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Dest} from './data';
import {DestinationsService} from './destinations.service';
import {getRandomInt} from '../get-random-int.function';

@Component({
  selector: 'hww-widget',
  templateUrl: './widget.component.html'
})
export class WidgetComponent implements OnInit {

  public destinations$: Observable<Dest[]>;
  public selectedItem: Dest;
  private _sub: Subscription;

  constructor(
      private _destinations: DestinationsService
  ) { }

  ngOnInit() {
      this.destinations$ = this._destinations.getData();
      this._sub = this.destinations$.subscribe((v) => this._pickRandom(v));
  }

  private _pickRandom(collection: Dest[]) {
      const l = collection.length;
      if (l) {
          this.selectedItem = collection[getRandomInt(l)];
      }
      this._sub.unsubscribe();
  }
}
