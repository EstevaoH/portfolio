import { Transferencia } from './../models/transferencia.model';
import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranferenciaService {

  private listatranferencia: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listatranferencia = [];
   }

   get tranferencias(){
     return this.listatranferencia;
   }

   listarTransferencias(): Observable<Transferencia[]>{
     return this.httpClient.get<Transferencia[]>(this.url)
   }

   adicionar(tranferencia: Transferencia): Observable<Transferencia>{
    this.tratarDados(tranferencia)
    this.listatranferencia.push(tranferencia);

    return this.httpClient.post<Transferencia>(this.url, tranferencia)
   }

   private tratarDados(tranferencia: any){
    tranferencia.data = new Date();
   }
}
