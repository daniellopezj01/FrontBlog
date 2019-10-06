import { Publication } from '../models/publications';
import { Person } from '../models/Person';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})

export class PublicationsService {
    constructor(private http: HttpClient) { }
    public requestpublication(): Observable<JSON> {
        return this.http.get<JSON>(`http://localhost:3000/publications/`);
    }

    public insertpublication(publication: Publication): Observable<JSON> {
        return this.http.post<JSON>(`http://localhost:3000/publications`, publication);
    }

    public Updatepublication(publication: Publication): Observable<JSON> {
        return this.http.put<JSON>(`http://localhost:3000/publications`, publication);
    }
    
    public deletepublication(id_publication: number): Observable<JSON> {
        return this.http.delete<JSON>(`http://localhost:3000/publications/`+id_publication );
    }
}