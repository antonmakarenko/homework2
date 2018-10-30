import { Injectable } from '@angular/core';
import { data$, IDest } from './destinations.data';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {

  public getData(): Observable<IDest[]> {
    console.log('getData()');
    return data$;
  }
}
