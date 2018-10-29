import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Dest} from './data';
import {DestinationsService} from './destinations.service';

@Component({
  selector: 'hww-widget',
  templateUrl: './widget.component.html'
})
export class WidgetComponent implements OnInit {

  public destinations$: Observable<Dest[]>;
  public selectedItem?: Dest;

  constructor(
      private _destinations: DestinationsService
  ) { }

  ngOnInit() {
      this.destinations$ = this._destinations.getData();
  }
}
