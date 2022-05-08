import { Component, Input, OnInit } from '@angular/core';
import { Filme } from '../filme';

@Component({
  selector: 'app-card-filme',
  templateUrl: './card-filme.component.html',
  styleUrls: ['./card-filme.component.css']
})
export class CardFilmeComponent implements OnInit {
  @Input() filme_title!: string;
  @Input() filme_overview!: string;
  @Input() filme_poster!: string;
  @Input() filme_error!: any;

  public image_url!: string;
  constructor() {
    //
  }

  ngOnInit(): void {

  }

  ngModelChange(): void {
    console.log(this.filme_title, this.filme_overview, this.image_url);
  }

}
