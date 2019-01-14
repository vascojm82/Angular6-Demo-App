import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ArticleServiceService {
    private subject = new Subject<any>();
    someVar = this.subject.asObservable();

    sendMessage(message: any) {
      console.log("message: ",message);
      this.subject.next({ any: message });
    }

    clearMessage() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        //console.log(this.subject);
        return this.subject.asObservable();
    }
}
