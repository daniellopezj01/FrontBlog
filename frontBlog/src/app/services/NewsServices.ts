import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})

export class NewsServices {
    constructor(private http: HttpClient) { }
    public requestPerson(): Observable<JSON> {
        return this.http.get<JSON>(`http://localhost:3000/person/`);
    }

    public requestNews(tipo: string): Observable<JSON> {
        return this.http.get<JSON>(`http://localhost:3000/news/${tipo}`);
    }

    public requestNew(url: string): Observable<JSON> {
        return this.http.post<JSON>(`http://localhost:3000/noticia`, {"link": url});
    }
}