import { Blog } from './../models/Blog';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})

export class blogService {
    constructor(private http: HttpClient) { }
  
    public requestblog(): Observable<JSON> {
        return this.http.get<JSON>(`http://localhost:3000/blogs/`);
    }

    public insertblog(blog: Blog): Observable<JSON> {
        return this.http.post<JSON>(`http://localhost:3000/blogs`, blog);
    }

    public Updateblog(blog: Blog): Observable<JSON> {
        return this.http.put<JSON>(`http://localhost:3000/blogs`, blog);
    }
    
    public deleteblog(id_blog: number): Observable<JSON> {
        return this.http.delete<JSON>(`http://localhost:3000/blogs/`+id_blog );
    }
}