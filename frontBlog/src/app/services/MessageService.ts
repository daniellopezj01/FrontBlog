import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessageService {
    private subject = new Subject<any>();
    private subjecturl = new Subject<any>();

    sendMessage(message: string) {
        this.subject.next({ text: message });
    }

    clearMessages() {
        this.subject.next();
    }

    sendurl(message: string) {
        this.subjecturl.next({ text: message });
    }

    geturl(): Observable<any> {
        return this.subjecturl.asObservable();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}