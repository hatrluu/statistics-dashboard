import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  private _headerLabel = new BehaviorSubject('Users');
  headerLabel = this._headerLabel.asObservable();

  getHeader(label: string){
    this._headerLabel.next(label);
  }
}
