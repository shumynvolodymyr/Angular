import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../models/Post";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com/posts?userId='

  constructor(private httpClient: HttpClient) {
  }

  getPost(id:number): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.url + id)
  }
}



