import { Person } from './../models/Person';
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

    public insertPerson(person: Person): Observable<JSON> {
        return this.http.post<JSON>(`http://localhost:3000/person`, person);
    }

    public UpdatePerson(person: Person): Observable<JSON> {
        return this.http.put<JSON>(`http://localhost:3000/person`, person);
    }
    
    public deletePerson(id_person: number): Observable<JSON> {
        return this.http.delete<JSON>(`http://localhost:3000/person/`+id_person );
    }
}