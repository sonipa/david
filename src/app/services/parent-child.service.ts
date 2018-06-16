import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ParentChildService {

  private subjects: Subject<any>[] = [];
  targetTemplateName = '';
  targetOverlayTitle = '';
  targetDetails = '';

  publish(eventName: string) {
    this.subjects[eventName] = this.subjects[eventName] || new Subject();
    this.subjects[eventName].next();
  }
  on(eventName: string): Observable<any> {
    this.subjects[eventName] = this.subjects[eventName] || new Subject();
    return this.subjects[eventName].asObservable();
  }
}
