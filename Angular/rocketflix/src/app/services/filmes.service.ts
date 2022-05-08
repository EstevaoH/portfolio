import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const API_URL = environment.API;
const API_KEY = environment.API_KEY;
// `551`
@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  constructor(private http: HttpClient) { }


  public get_filme(id: number): Observable<any> {
    return this.http.get<any>(`${API_URL}${id}${API_KEY}`);
  }


}
