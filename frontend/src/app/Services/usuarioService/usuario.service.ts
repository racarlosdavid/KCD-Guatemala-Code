import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { URL_API } from '../URL';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  URL = URL_API;

  constructor( private http: HttpClient) { }
  headers : HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  public addComment(newuser:Usuario):Observable<any>{
    return  this.http.post(`${this.URL}/kcd-guatemala/addComment`,newuser);
  }

  public getComments():Observable<any>{
    return this.http.get(`${this.URL}/kcd-guatemala/getComments`);
  }

}
