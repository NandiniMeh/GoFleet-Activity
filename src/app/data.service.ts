import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private selectedStatusSubject = new BehaviorSubject<string>('');
  selectedStatus$ = this.selectedStatusSubject.asObservable();

  setSelectedStatus(status: string) {
    this.selectedStatusSubject.next(status);
  }
}
