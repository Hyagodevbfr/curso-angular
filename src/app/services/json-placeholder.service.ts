import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonPlaceHolderInterface } from '../jsonPlaceholder';

@Injectable({
  providedIn: 'root',
})
export class JsonPlaceholderService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<JsonPlaceHolderInterface[]> {
    return this.http.get<JsonPlaceHolderInterface[]>(this.apiUrl);
  }

  criarPost(dados: JsonPlaceHolderInterface): Observable<any> {
    return this.http.post(this.apiUrl, dados);
  }
}
