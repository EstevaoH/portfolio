import { Transferencia } from './../models/transferencia.model';
import { Component, Input, OnInit } from '@angular/core';
import { TranferenciaService } from '../services/tranferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  transferencias: any[] = [];

  constructor(private st: TranferenciaService) {

    this.transferencias = []
  }

  ngOnInit(): void {
    this.st.listarTransferencias().subscribe((res: Transferencia[]) =>{
      console.table(res);
      this.transferencias = res;
    })
  }

}
