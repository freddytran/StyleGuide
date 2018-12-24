import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(public http: HttpClient) {}
    apiUrl = 'assets/data/contents.json';
    apiUrl2 = 'https://swapi.co/api/films';
    apiUrl3 = 'http://192.168.178.21:3000/contents/';
  apiUrl4 = 'http://localhost:3000/contents/';

    apiCommentForContent = 'http://192.168.178.21:3000/comments/';

    getAllPost(): Observable<any> {
        return this.http.get(this.apiUrl4);
    }

    getCommentsFromPost(contentID): Observable<any> {
      return this.http.get(this.apiCommentForContent + contentID);
    }
}


