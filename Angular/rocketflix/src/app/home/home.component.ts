import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmesService } from '../services/filmes.service';
import { Filme } from './filme';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public filmes!: Filme;
  public id!: number;
  public filme_error!: boolean;
  constructor(private filme: FilmesService) {
    // this.filmes = new Filme();
  }

  ngOnInit(): void {
    this.get_filmes();
  }
  ngModelChange(): void {
    this.get_filmes();
  }

  public get_filmes() {
    this.geraNumero();
    this.filme.get_filme(155).subscribe(res => {
      if (res) {
        this.filmes = res;
        this.filme_error = false;
      }
      console.log(this.filmes);
    }, (error) => {
      if (error) {
        this.filme_error = true;
      }
    })
  }

  public geraNumero(): number {
    const numero = Math.random() * (99999 - 0) + 0;
    this.id = Math.round(numero);
    console.log(this.id)
    return this.id;
  }

}
