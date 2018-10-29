import { Injectable } from '@angular/core';
import { data$, Dest } from './data';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {

  public getData(): Observable<Dest[]> {
    console.log('getData()');
    return data$;
  }
}
